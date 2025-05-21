<template>
  <div>
    <HeroSectionVue />
    <LogoSectionVue/>
    <FeatureSectionVue/>
    <ProgramsSectionVue/>
    <TestimonySectionVue/>
    <FooterSectionVue />
  </div>
</template>

<script>
import HeroSectionVue from "../components/home/HeroSection.vue";
import LogoSectionVue from "../components/home/Logo.vue";
import FeatureSectionVue from "../components/home/FeatureSection.vue";
import ProgramsSectionVue from "../components/home/ProgramsSection.vue";
import TestimonySectionVue from "../components/home/TestimonySection.vue"
import FooterSectionVue from "../components/footer/Footer.vue";
export default {
  name: "Home",
  components: {
    HeroSectionVue,
    LogoSectionVue,
    FeatureSectionVue,
    ProgramsSectionVue,
    TestimonySectionVue,
    FooterSectionVue,
  },
};
</script>

<style scoped></style>
