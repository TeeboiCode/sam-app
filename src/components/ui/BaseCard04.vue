<template>
  <div
    class="base-card04 rounded-0"
    :class="{ 'fade-in-up': true }"
    :style="{ animationDelay: `${index * 0.2}s` }"
  >
    <div class="d-flex align-items-center gap-3">
      <div class="icon-circle mb-4" :style="{ background: feature.bg }">
        <i :class="[feature.icon, feature.iconColor]"></i>
      </div>
      <h3 class="base-card-title">{{ feature.title }}</h3>
    </div>
    <div class="image rounded-0 overflow-hidden">
      <img :src="feature.src" class="w-100" alt="" />
    </div>
    <p class="base-card-description mt-2">{{ feature.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.base-card04 {
  background: var(--background-white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  height: 100%;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);
}

.base-card04:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.base-card04 .icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  transition: var(--transition-normal);
}

.base-card04:hover .icon-circle {
  transform: scale(1.1);
  background: var(--soft-purple);
}

.base-card04 .icon-circle i {
  font-size: 2rem;
  color: var(--royal-purple);
  transition: var(--transition-normal);
}

.base-card04:hover .icon-circle i {
  color: white;
}

.image img {
  scale: 1.325 !important;
}

@media (max-width: 768px) {
  .base-card04 {
    margin-bottom: var(--spacing-md);
  }
}
</style>
