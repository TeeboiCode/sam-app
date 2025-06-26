<template>
  <div class="faq-container">
    <div class="faq-header">
      <h1>Get every single answer here.</h1>
      <p>
        A business or organization established to provide a particular service,
        typically one that involves organizing transactions.
      </p>
    </div>

    <div class="accordion">
      <div
        v-for="(item, index) in accordionItems"
        :key="index"
        class="accordion__item"
        :class="{ 'accordion__item--active': activeIndex === index }"
      >
        <button
          class="accordion__button"
          @click="toggleAccordion(index)"
          :aria-expanded="activeIndex === index"
        >
          <span class="accordion__title">{{ item.title }}</span>
          <ChevronDown class="accordion__icon" />
        </button>

        <Transition
          name="accordion"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <div v-show="activeIndex === index" class="accordion__content">
            <div class="accordion__content-inner">
              {{ item.content }}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDown } from "lucide-vue-next";

const activeIndex = ref(null);

const accordionItems = ref([
  {
    title: "Downloading Courses",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Lifetime Access",
    content:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
  },
  {
    title: "Account/Profile",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    title: "Course Taking",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    title: "Troubleshooting",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
]);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

// Transition hooks for smooth accordion animation
const beforeEnter = (el) => {
  el.style.height = "0";
  el.style.overflow = "hidden";
};

const enter = (el) => {
  el.offsetHeight; // Force reflow
  el.style.height = el.scrollHeight + "px";
};

const afterEnter = (el) => {
  el.style.height = "";
  el.style.overflow = "";
};

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
  el.style.overflow = "hidden";
  el.offsetHeight; // Force reflow
};

const leave = (el) => {
  el.style.height = "0";
};

const afterLeave = (el) => {
  el.style.height = "";
  el.style.overflow = "";
};
</script>

<style scoped>
@import "@/assets/styles/custom.css";

.faq-container {
  max-width: 48rem;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.faq-header {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-container h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.faq-container p {
  color: var(--text-secondary);
  font-size: 1.125rem;
  line-height: 1.5;
  max-width: 42rem;
  margin: 0 auto;
}

/* Accordion Styles */
.accordion {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.accordion__item {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.accordion__item--active {
  border-color: var(--royal-purple);
}

.accordion__button {
  width: 100%;
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
}

.accordion__item--active .accordion__button {
  background-color: var(--light-lavender);
}

.accordion__button:focus {
  outline: 2px solid var(--royal-purple);
  outline-offset: 2px;
}

.accordion__title {
  font-weight: 500;
  color: var(--text-primary);
}

.accordion__icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  margin-left: 1rem;
}

.accordion__item--active .accordion__icon {
  transform: rotate(180deg);
}

.accordion__content {
  padding: 0;
  color: var(--text-secondary);
  line-height: 1.5;
  overflow: hidden;
  transition: height 0.3s ease-out;
}

.accordion__content-inner {
  padding: 0.5rem 1.5rem 1.5rem;
  margin-top: 0.5rem;
}

/* Transition classes */
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease-out;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
}
</style>
