<template>
  <div class="cards-logo" ref="cardLogo">
    <div class="logo-slide">
      <div class="logo-group" v-for="n in 5" :key="n">
        <img
          v-for="(logo, index) in logos"
          :key="`${n}-${index}`"
          :src="logo.src"
          :alt="logo.alt"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const logos = [
  {
    src: new URL('../../assets/waec logo.png', import.meta.url).href,
    alt: 'WAEC Logo',
  },
  {
    src: new URL('../../assets/neco logo.png', import.meta.url).href,
    alt: 'NECO Logo',
  },
  {
    src: new URL('../../assets/jamb logo.png', import.meta.url).href,
    alt: 'JAMB Logo',
  },
  {
    src: new URL('../../assets/sat logo.png', import.meta.url).href,
    alt: 'SAT Logo',
  },
]

const cardLogo = ref(null)
</script>

<style scoped>
.cards-logo {
  overflow: hidden;
  background: var(--soft-purple); /* Make sure this variable exists or use a fallback color */
  width: 100%;
  position: relative;
  padding: 2em 0;
}

.logo-slide {
  display: flex;
  width: max-content;
  animation: scroll-left 40s linear infinite;
}

.logo-group {
  display: flex;
}

.cards-logo img {
  height: 70px;
  width: auto;
  opacity: 0.3;
  margin: 0 3.125em;
  filter: grayscale(100%);
  transition: filter 0.3s ease, opacity 0.3s ease;
}

.cards-logo img:hover {
  filter: grayscale(0%);
  opacity: 1;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .cards-logo img {
    height: 50px;
    margin: 0 2em;
  }
}
</style>
