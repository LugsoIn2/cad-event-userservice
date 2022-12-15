
<template>
  <main class="px-4 w-full md:w-1/2 ">
    <h1 className="text-3xl font-bold text-center	text-black mb-4">
      Was geht?
    </h1>
    <TenantDropDown/>
    <EventList/>
  </main>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import router from '@/router';
import {eventStore} from '@/stores/eventStore';
import EventList from '@/components/EventList.vue';
import TenantDropDown from '@/components/TenantDropDown.vue';

export default defineComponent({
  name: 'EventsView',
  components: {
    EventList,
    TenantDropDown
},
  setup() {
    const store = eventStore();
    return { store };
  },
  data() {
    return {
      
    };
  },
  mounted() {
    const title = import.meta.env.VITE_API_ENDPOINT;
    const city = this.$route.query.city;
    if (city) {
      this.store.getEvents(city.toString());

    }
  },
  methods: {
   
  },
});
</script>

<style>
main {
  min-width: 50%;
}
body {
    background-color: white;
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
    justify-content: center;
}

</style>