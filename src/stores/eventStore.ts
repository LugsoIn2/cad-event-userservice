import { defineStore } from 'pinia'
import type {WasGehtEvent} from '@/models/event';
import router from '@/router';

export const eventStore = defineStore({
  id: 'eventStore',
  state: () =>
  ({
    isLoading: false,
    events: null as WasGehtEvent[] | null,
    selectedTenant: null as string | null,
    selectedDay: null as string | null
  }),
  actions: {
    async getEvents() {
      this.isLoading = true;
      let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/events`;
      endpoint += "?" + new URLSearchParams({
        'city': this.selectedTenant ? this.selectedTenant!.toString() : "",
        'date': this.selectedDay ? this.selectedDay.toString() : ""
    }).toString();
      const res = await fetch(endpoint);
      this.events = await res.json();
      this.isLoading = false;
    },
    setSelectedTenant(city: string) {
      this.selectedTenant  = city;
      this.setQueryParameter();
    },
    setSelectedDay(date: string) {
      this.selectedDay = date.substring(0,10);
      this.setQueryParameter();
    },
    setQueryParameter() {
      router.replace({ name: "events", query: {city: this.selectedTenant, date: this.selectedDay} });
    }
  }
});