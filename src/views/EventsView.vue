
<template>
  <main class="px-4 w-full h-full md:w-1/2 ">
    <h1 className="apptitle text-3xl font-bold text-center	text-black mb-4">
      Was geht {{tStore.tenant ? tStore.tenant!.city : ''}}?
    </h1>
    <div v-if="!eStore.isLoading" class="flex flex-row justify-center mb-5">
      <TenantDropDown v-if="!tStore.tenant" class="w-2/5 mr-4"/>
      <Datepicker v-bind:enableTimePicker="false" placeholder="Datum" class="w-2/5" v-model="eStore.selectedDay" :autoApply="true" @update:model-value="setSelectedDay"/>
    </div>
    <div v-else class="center">
      Loading
    </div>
    <EventList/>
  </main>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import router from '@/router';
import {eventStore} from '@/stores/eventStore';
import EventList from '@/components/EventList.vue';
import TenantDropDown from '@/components/TenantDropDown.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { tenantStore } from '@/stores/tenantStore';
export default defineComponent({
  name: 'EventsView',
  components: {
    EventList,
    TenantDropDown,
    Datepicker
},
  setup() {
    const eStore = eventStore();
    const tStore = tenantStore();
    return { eStore, tStore };
  },
  data() {
    return {
      customerIdEnvVariable: import.meta.env.VITE_CUSTOMER_ID
    };
  },
  mounted() {
    const city = this.$route.query.city;
    const dateString = this.$route.query.date;
    if (city) {
      this.eStore.setSelectedTenant(city.toString());
    }
    if (dateString) {
      this.eStore.setSelectedDay(dateString.toString());
    }
    this.eStore.getEvents();
  },
  methods: {
    setSelectedDay(value: Date) {
      if (value) {
        this.eStore.setSelectedDay(value.toISOString());
      } else {
        this.eStore.setSelectedDay('');
      }
      this.eStore.getEvents();
    },
  }
});
</script>

<style>
main {
  min-width: 50%;
}
body {
    min-height: 100vh;
    color: var(--color-text);
    transition: color 0.5s, background-color 0.5s;
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}
.dp__pointer, .vs__dropdown-toggle {
  height: 2.5rem;
}


</style>