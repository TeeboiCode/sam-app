<template>
  <div class="student-courses-container">
    <BaseHeroSection :pageTitle="pageTitle" class="fade-in" />
    <div class="container section">
      <div class="section-title">
        {{ pageTitle }}
      </div>

      <!-- cards -->
      <div class="row g-4">
        <div class="col-md-4" v-for="program in allPrograms" :key="program.id">
          <BaseCard05 :card="program" />
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
import BaseCard05 from "@/components/ui/BaseCard05.vue";
import { onMounted, ref } from "vue";
import { useProgramsStore } from "@/stores/programStore";

const programStore = useProgramsStore();
const allPrograms = ref([]);

onMounted(async () => {
  await programStore.fetchPrograms();
  allPrograms.value = programStore.programs;
});

const pageTitle = "All Programs";
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
