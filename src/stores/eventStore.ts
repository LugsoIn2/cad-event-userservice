import { defineStore } from 'pinia'
import type {WasGehtEvent} from '@/models/event';
import router from '@/router';

export const eventStore = defineStore({
  id: 'eventStore',
  state: () =>
  ({
    events: null as WasGehtEvent[] | null,
    availableTenants: null as String[] | null,
  }),
  actions: {
    async getEvents(city: String) {
      const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/events?city=${city}`);
      this.events = await res.json();
    },
    async getAvailableTenants() {
      // TODO: get tenants from event service or from environment variable?
      this.availableTenants = ['Konstanz', 'Tübingen'];
    },
    setSelectedTenant(city: String) {
      console.log(city);
      router.replace({ name: "events", query: {city: city.trim()} });
      this.getEvents(city);
    }
  }
});