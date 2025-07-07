<template>
  <div class="card h-100 rounded-0 shadow-sm">
    <img :src="course.image" class="card-img-top rounded-0" :alt="course.alt" />
    <div class="price-container position-relative">
      <div
        class="price fw-bold text-white position-absolute rounded"
        style="
          top: -19px;
          right: 15px;
          background: var(--royal-purple);
          padding: var(--spacing-xs) var(--spacing-sm);
        "
      >
        {{ course.price }}
      </div>
    </div>
    <div class="card-body px-0">
      <h5 class="card-title">{{ course.title }}</h5>
      <p class="card-text" style="color: var(--text-muted)">
        {{ course.description }}
      </p>

      <router-link to="#" class="link-container"
        >Read More
        <span
          ><img
            width="20"
            height="20"
            src="https://img.icons8.com/sf-black-filled/20/7b0e75/double-right.png"
            alt="double-right" /></span
      ></router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
