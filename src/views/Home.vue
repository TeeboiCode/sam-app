<template>
  <div>
    <HeroSectionVue />
    <FooterSectionVue />
  </div>
</template>

<script>
import HeroSectionVue from "../components/home/HeroSection.vue";
import FooterSectionVue from "../components/footer/Footer.vue";
export default {
  name: "Home",
  components: {
    HeroSectionVue,
    FooterSectionVue,
  },
};
</script>

<style scoped></style>
