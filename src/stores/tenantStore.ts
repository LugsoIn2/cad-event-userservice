import { defineStore } from 'pinia'
import router from '@/router';
import type { Tenant } from '@/models/tenant';

export const tenantStore = defineStore({
  id: 'tenantStore',
  state: () =>
  ({
    tenant: null as Tenant | null,
    availableTenants: ['Konstanz']
  }),
  actions: {
    async getTenant() {
      let endpoint = `${import.meta.env.VITE_ADMIN_API_ENDPOINT}/api/tenant`;
      endpoint += "?" + new URLSearchParams({
        'customer_nr': import.meta.env.VITE_CUSTOMER_ID
    }).toString();
      const res = await fetch(endpoint);
      this.tenant = await res.json();
      document.body.classList.add('theme_' + this.tenant?.theme_type);
    },
    async getAvailableTenants() {
      let endpoint = `${import.meta.env.VITE_ADMIN_API_ENDPOINT}/api/freetenants`;
      const res = await fetch(endpoint);
      let list = await res.json();
      this.availableTenants = list;
    },
  }
});