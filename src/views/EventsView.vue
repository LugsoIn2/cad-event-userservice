
<template>
  <main>
    <EventList/>
  </main>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import router from '@/router';
import {eventStore} from '@/stores/eventStore';
import EventList from '@/components/EventList.vue';

export default defineComponent({
  name: 'EventsView',
  components: {
    EventList
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
    this.store.getEventsForCity('Konstanz');
  },
  methods: {
   
  },
});
</script>
