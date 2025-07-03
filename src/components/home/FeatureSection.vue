<template>
  <section class="section">
    <div class="container">
      <div class="text-center mb-5">
        <h1 class="section-title">Why Choose Our Platform</h1>
        <h2 class="section-subtitle">
          Experience the difference with our comprehensive tutoring solutions
        </h2>
      </div>

      <div class="row g-4">
        <div
          class="col-md-4 col-12"
          v-for="(feature, index) in features"
          :key="index"
        >
          <!-- <FeatureCard :feature="feature" /> -->
          <FeatureCard :feature="feature" :index="index" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FeatureCard from ".././ui/BaseCard04.vue";
export default {
  name: "FeaturesSection",
  components: {
    FeatureCard,
  },
  data() {
    return {
      features: [
        {
          id: 1,
          icon: "bi bi-person-check text-purple",
          title: "Expert Tutors",
          description:
            "Get guidance from qualified, experienced educators in every subject.",
          bg: "#f0e6ff",
          iconColor: "var(--gradient-soft)",
          src: new URL("../../assets/Rectangle-384.png", import.meta.url).href,
        },
        {
          id: 2,
          icon: "bi bi-calendar-check text-purple",
          title: "Flexible Scheduling",
          description:
            "Learn at your pace with customizable schedules tailored to your needs.",
          bg: "#f0e6ff",
          iconColor: "var(--gradient-soft)",
          src: new URL("../../assets/Rectangle-382.png", import.meta.url).href,
        },
        {
          id: 3,
          icon: "bi bi-credit-card-fill  text-purple",
          title: "seamless payment",
          description: "Enjoy secure and hassle-free online payment options.",
          bg: "#f0e6ff",
          iconColor: "var(--gradient-soft)",
          src: new URL("../../assets/Rectangle-386.png", import.meta.url).href,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
