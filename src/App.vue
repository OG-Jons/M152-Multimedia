<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | M152` : `M152`
    }}</template>
  </metainfo>
  <Menu />
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import Menu from "./components/Menu.vue";
import { useMeta } from "vue-meta";

useMeta({
  title: "Home",
  htmlAttrs: { lang: "en", amp: true },
});
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style>
body {
  background-color: var(--surface-a);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}
</style>
