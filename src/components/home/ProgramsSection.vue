<template>
  <section class="program-section section">
    <div class="container">
      <!-- Header Div - with program title and explore button -->
      <div class="program-header">
        <div class="program-header-left">
          <h1 class="section-title text-center">Our Programs</h1>
          <h2 class="section-subtitle text-center">
            Explore our educational programs
          </h2>
          <p class="section-description text-center mb-5">
            Comprehensive learning pathways designed to help students excel
          </p>
        </div>
      </div>

      <!-- Cards Container Div -->

      <div class="program-cards justify-content-center align-items-center">
        <!-- Program Card 1 -->

        <div class="row g-4">
          <div class="col-12" v-if="programStore.loading == true">
            <p>Loading...</p>
          </div>

          <div class="col-12" v-if="programStore.error == true">
            <p>{{ programStore.error }}</p>
          </div>
          <div
            class="col-12 col-md-4"
            v-for="program in randomPrograms"
            :key="program.id"
            v-else
          >
            <BaseCard05 :card="program"></BaseCard05>
          </div>

          <!-- <hr class="style-six mt-5" /> -->

          <div class="text-center mt-3">
            <router-link to="/" class="btn btn-primary"
              >Explore More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useProgramsStore } from "@/stores/programStore";
import BaseCard05 from "@/components/ui/BaseCard05.vue";

const programStore = useProgramsStore();
const allPrograms = ref([]);
const randomPrograms = ref([]);

onMounted(async () => {
  await programStore.fetchPrograms();

  allPrograms.value = programStore.programs;
  randomPrograms.value = allPrograms.value
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
});
</script>

<style scoped>
/* Responsive Styles */
@media (max-width: 992px) {
  .program-header {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .program-header-right {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
}
</style>
