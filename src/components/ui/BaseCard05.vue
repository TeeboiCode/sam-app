<template>
  <div class="program-card">
    <div class="program-image">
      <div
        class="placeholder-image"
        :style="{
          background: `linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)), url('${card.imageClass}') center/cover no-repeat`,
        }"
      ></div>
    </div>
    <div class="program-content">
      <div
        class="program-tags-rating my-2 d-flex justify-content-between align-items-center gap-2"
      >
        <span class="tag t-r">
          <i class="fa-solid fa-circle"></i>
          {{ card.tag }}
        </span>
        <div class="tutor-rating t-r">
          <i class="bi bi-star-fill"></i>
          <span>{{ card.rating }}</span>
        </div>
      </div>
      <h3 class="program-title">{{ card.title }}</h3>

      <div
        class="program-stats d-flex justify-content-between align-items-center mb-2"
      >
        <div class="stat-item">
          <i class="bi bi-book"></i>
          <span>{{ card.subjects }}</span>
        </div>
        <div class="stat-item">
          <i class="bi bi-calendar-week"></i>
          <span>{{ card.duration }}</span>
        </div>
      </div>

      <div class="program-footer-container">
        <div
          class="program-footer d-flex justify-content-between align-items-center pt-3 border-top"
        >
          <div class="program-brand">
            <img src="@/assets/Logo-full.png" alt="Logo" class="program-logo" />
            <span>by Samcy</span>
          </div>
          <div class="program-btn-container">
            <button class="btn btn-primary enroll-btn">Enrol Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.program-card {
  background-color: var(--background-white);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  padding: var(--spacing-sm);
}

.program-card:hover {
  box-shadow: var(--shadow-lg);
}

.program-content {
  flex: 1;
  padding: var(--spacing-xs) 0;
  display: flex;
  flex-direction: column;
  position: relative;
}

.program-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
  text-align: start;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
}

.stat-item i {
  color: var(--royal-purple);
  font-size: 1.2rem;
}

.program-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.program-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.program-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  /* border-radius: 12px; */
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: var(--transition-normal);
}

.program-card:hover .placeholder-image {
  transform: scale(1.05);
}

.enroll-btn {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.t-r {
  padding: 1px 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.tag {
  color: var(--royal-purple);
  background: var(--soft-purple);
}

.tag .fa-circle {
  font: 0.5rem;
  color: var(--accent-teal);
}

.tutor-rating {
  background: var(--gradient-primary);
  border: none;
  color: var(--soft-purple);
}

.tutor-rating .bi-star-fill {
  color: var(--accent-yellow);
}

@media (max-width: 768px) {
  .program-card {
    flex-direction: column-reverse;
    height: auto;
  }

  .program-image {
    width: 100%;
    height: 200px;
  }
}
</style>
