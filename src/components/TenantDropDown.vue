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

  <vSelect id="mySelect" placeholder="Wähle deine Stadt aus" v-model="selectedTenant" :options="store.availableTenants" @option:selected="setTenant" class="mb-4"/>

</template>

<style>
#mySelect .v-select .dropdown-toggle {
   border: none;
}
#mySelect .vs__dropdown-toggle {
  background-color: white;
}

#mySelect input {
  color: black;
}
#mySelect .vs__dropdown-option {
  color: black;
}
#mySelect .vs__dropdown-option--highlight {
  color: white;
}
</style>
