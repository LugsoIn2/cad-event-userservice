<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { tenantStore } from '@/stores/tenantStore';
const tStore = tenantStore();
</script>

<template>
  <div class="h-full pt-4 pb-4 flex justify-center items-start"
    :class="[tStore.tenant?.theme_type === '2' ? 'theme3' : tStore.tenant?.theme_type === '1' ? 'theme2' : 'theme1']">
    <RouterView />
  </div>
</template>

<style>

.theme_0 {
  background-color: white;
}
.theme_0 .card {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    color: black;
}



.theme_1 {
  background-color: #21252a;
}
.theme_1 .card {
    background-color: #21252a;
    border-color: white;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
}
.theme_1 .cardtitle {
    color: white;
}
.theme_1  .apptitle {
  color: white;
}
.theme_1 .dp__input_readonly {
  background-color: #21252a;
  color: white;
}



.theme_2 {
  background-color: #86A3B8;
}
.theme_2 .card {
    border-color: black;
    border-width: 3px;
    color: black;
    background-color: #E8D2A6;
}
.theme_2 .apptitle {
  color: #39342b;
}
.theme_2 .dp__input_readonly {
  background-color: #E8D2A6;
  border-color: black;
  color: black;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 1; /* Firefox */
}

</style>
