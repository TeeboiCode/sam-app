<template>
  <div
    style="
      width: 100%;
      min-width: 100%;
      margin: 0;
      padding: 0;
      border: 1px solid black;
    "
  >
    <linkeVue />
    <NavigationVue />

    <router-view />
  </div>
</template>

<script setup>
import linkeVue from "./components/linksfiles.vue/linke.vue";
import NavigationVue from "./views/Navigation.vue";
</script>

<style scoped></style>
