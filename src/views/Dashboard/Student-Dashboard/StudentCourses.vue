<template>
  <div class="student-courses-container">
    <BaseHeroSection :pageTitle="pageTitle" class="fade-in" />
    <div class="container section">
      <div class="section-title">
        {{ pageTitle }}
      </div>

      <!-- cards -->
      <div class="row g-4" v-if="!isWishlist">
        <div class="col-md-4" v-for="course in allCourses" :key="course.id">
          <BaseCard03 :course="course" />
        </div>
      </div>

      <div class="row g-4" v-else>
        <div
          class="col-md-4"
          v-for="course in wishlistCourses"
          :key="course.id"
        >
          <BaseCard03 :course="course" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WAECTutorialImg from "@/assets/styles/images/WAEC-Tutorial-Img.jpg";
import JAMBTutorialImg from "@/assets/styles/images/JAMB-Tutorial-Img.webp";
import NECOTutorialImg from "@/assets/styles/images/NECO-Tutorial-Img.jpg";
import SATTutorialImg from "@/assets/styles/images/SAT-Tutorial-Img.jpg";

import BaseHeroSection from "@/components/ui/BaseHeroSection.vue";
import BaseCard03 from "@/components/ui/BaseCard03.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isWishlist = computed(() => route.path.includes("wishlist"));

const pageTitle = computed(() => {
  return isWishlist.value ? "Wishlist" : "My Courses";
});

const allCourses = [
  {
    id: 1,
    title: "WAEC Tutorial",
    description: "A comprehensive guide to passing the WAEC exam.",
    image: WAECTutorialImg,
    tag: "WAEC",
    alt: "WAEC Tutorial Image",
  },
  {
    id: 2,
    title: "JAMB Tutorial",
    description:
      "Everything you need to know for the JAMB exam. From study tips to practice questions.",
    image: JAMBTutorialImg,
    tag: "JAMB",
    alt: "JAMB Tutorial Image",
  },
  // Add more course objects as needed
];

const wishlistCourses = [
  {
    id: 1,
    title: "NECO Tutorial",
    description: "A comprehensive guide to passing the NECO exam.",
    image: NECOTutorialImg,
    tag: "NECO",
    alt: "NECO Tutorial Image",
  },
  {
    id: 2,
    title: "SAT Tutorial",
    description:
      "Everything you need to know for the SAT exam. From study tips to practice questions.",
    image: SATTutorialImg,
    tag: "SAT",
    alt: "SAT Tutorial Image",
  },
  // Add more course objects as needed
];
</script>

<style scoped>
.section-title {
  color: var(--accent-orange);
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  font-size: 20px;
}
</style>
