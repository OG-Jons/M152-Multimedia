<template>
  <Menubar :model="items">
    <template #start>
      <img
        alt="logo"
        src="https://avatars.githubusercontent.com/u/56066318"
        height="40"
        class="mr-2"
      />
    </template>
  </Menubar>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    to: "/",
  },
  {
    label: "Animations",
    icon: "pi pi-fw pi-play",
    items: [
      {
        label: "Scrolling",
        icon: "pi pi-fw pi-sort-alt",
        to: "/scroll",
      },
    ],
  },
  {
    label: "Video",
    icon: "pi pi-fw pi-video",
    to: "/video",
  },
]);
</script>
