<script lang="ts">
import { defineComponent } from 'vue';
import { eventStore } from '@/stores/eventStore';
// @ts-ignore
import vSelect from "vue-select";

export default defineComponent({
  name: 'TenantDropDown',
  components: {
    vSelect
  },
  data () {
    return {
      "selectedTenant": this.$route.query.city
    };
  },
  async beforeCreate()  {
    await this.store.getAvailableTenants();
  },
  setup() {
    const store = eventStore();
    return { store };
  },
  methods: {
    setTenant(value: String) {
      this.store.setSelectedTenant(value);
    }
  }
});
</script>

<template>

  <vSelect v-model="selectedTenant" :options="store.availableTenants" @option:selected="setTenant" class="mb-4"/>

</template>

<style scoped>

</style>
