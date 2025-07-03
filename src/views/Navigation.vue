<template>
  <nav>
    <TopNavVue v-if="!isSticky" />
    <MainNavVue
      style="transition: var(--transition-normal)"
      :class="[isSticky ? 'sticky' : '', isScrollingDown ? 'hidden' : '']"
    />
    <AnnouncementBanner v-if="!isSticky" />
  </nav>
</template>

<script setup>
import TopNavVue from "../components/navigation/TopNav.vue";
import MainNavVue from "../components/navigation/MainNav.vue";
import AnnouncementBanner from "../components/navigation/AnnouncementBanner.vue";

import { ref, onMounted, onUnmounted } from "vue";

const isSticky = ref(false);
const isScrollingDown = ref(false);

let lastScrollTop = 0;
let scrollTimeout;

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  isSticky.value = scrollTop > 80;
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    isScrollingDown.value = true;
  } else {
    // Scrolling up
    isScrollingDown.value = false;
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    isScrollingDown.value = false;
  }, 200);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.sticky.hidden {
  transform: translateY(-100%);
}
</style>
