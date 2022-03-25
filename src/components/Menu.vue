<template>
  <Menubar :model="items">
    <template #start>
      <img alt="logo" src="https://avatars.githubusercontent.com/u/56066318" height="40" class="mr-2">
    </template>
  </Menubar>
</template>

<script setup>

import {ref} from "vue";

const items = ref([
  {
    label: "Scrolling",
    icon:'pi pi-spin pi-map',
    to: "/scroll"
  }
]);
</script>
