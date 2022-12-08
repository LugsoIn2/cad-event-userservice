<script lang="ts">
import { defineComponent } from 'vue';
import { eventStore } from '@/stores/eventStore';

export default defineComponent({
  name: 'EventsList',
  components: {
  },
  setup() {
    const store = eventStore();
    return { store };
  },
});
</script>

<template>
  <div v-for="event in store.events">
    {{ event.eventTitle }}
  </div>
</template>

<style scoped>

</style>
