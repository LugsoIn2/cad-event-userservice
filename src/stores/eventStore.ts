import { defineStore } from 'pinia'
import type {Event} from '@/models/event';

export const eventStore = defineStore({
  id: 'eventStore',
  state: () =>
  ({
    events: null as Event[] | null,
  }),
  actions: {
    async getEventsForCity(city: String) {
      console.log(import.meta.env.VITE_API_ENDPOINT);
      const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/events?city=${city}`);
      const events = await res.json();
      this.events = events;
    },
  }
});