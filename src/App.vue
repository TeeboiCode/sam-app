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
    <!-- <linkeVue /> -->
    <NavigationVue />

    <router-view />

    <FooterVue />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import FooterVue from "./components/footer/Footer.vue";
import NavigationVue from "./views/Navigation.vue";

onMounted(async () => {
  // Disable browser scroll restore on reload
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // Wait for DOM to be fully loaded
  await nextTick();

  // Then scroll to top
  window.scrollTo({ top: 0, behavior: "auto" });
});
</script>

<style scoped></style>
