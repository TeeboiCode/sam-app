<template>
  <div>
    <HeroSectionVue />
    <LogoSectionVue/>
    <FeatureSectionVue/>
    <HomeAbout/>
    <ProgramsSectionVue/>
    <TestimonySectionVue/>
    <UpcomingEvents/>
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
import HomeAbout from "../components/home/HomeAbout.vue";
import UpcomingEvents from "../components/home/UpcomingEvents.vue"
export default {
  name: "Home",
  components: {
    HeroSectionVue,
    LogoSectionVue,
    FeatureSectionVue,
    ProgramsSectionVue,
    TestimonySectionVue,
    FooterSectionVue,
    HomeAbout,
    UpcomingEvents
  },
};
</script>

<style scoped></style>
