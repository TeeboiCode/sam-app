<template>
  <nav>
    <TopNavVue />
    <MainNavVue />
    <AnnouncementBanner />
  </nav>
</template>

<script>
import TopNavVue from "../components/navigation/TopNav.vue";
import MainNavVue from "../components/navigation/MainNav.vue";
import AnnouncementBanner from "../components/navigation/AnnouncementBanner.vue";
export default {
  name: "Navigation",
  components: {
    TopNavVue,
    MainNavVue,
    AnnouncementBanner,
  },
};
</script>

<style scoped></style>
