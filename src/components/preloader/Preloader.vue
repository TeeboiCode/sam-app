<template>
  <div class="preloader">
    <div class="preloader-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.preloader-container {
  --uib-size: 40px;
  /* --uib-color: var(--royal-purple); */
  --uib-color: #fff;
  --uib-speed: 0.9s;
  --uib-center: calc(var(--uib-size) / 2 - var(--uib-size) / 5 / 2);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
  animation: rotate calc(var(--uib-speed) * 3) linear infinite;
}

.dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.dot::before {
  content: "";
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  animation: oscillate var(--uib-speed) ease-in-out infinite alternate;
  transition: background-color 0.3s ease;
}

.dot:nth-child(1)::before {
  transform: translateX(var(--uib-center));
}

.dot:nth-child(2) {
  transform: rotate(45deg);
}

.dot:nth-child(2)::before {
  transform: translateX(var(--uib-center));
  animation-delay: calc(var(--uib-speed) * -0.125);
}

.dot:nth-child(3) {
  transform: rotate(90deg);
}

.dot:nth-child(3)::before {
  transform: translateX(var(--uib-center));
  animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot:nth-child(4) {
  transform: rotate(135deg);
}

.dot:nth-child(4)::before {
  transform: translateX(var(--uib-center));
  animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot:nth-child(5) {
  transform: rotate(180deg);
}

.dot:nth-child(5)::before {
  transform: translateX(var(--uib-center));
  animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot:nth-child(6) {
  transform: rotate(225deg);
}

.dot:nth-child(6)::before {
  transform: translateX(var(--uib-center));
  animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot:nth-child(7) {
  transform: rotate(270deg);
}

.dot:nth-child(7)::before {
  transform: translateX(var(--uib-center));
  animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot:nth-child(8) {
  transform: rotate(315deg);
}

.dot:nth-child(8)::before {
  transform: translateX(var(--uib-center));
  animation-delay: calc(var(--uib-speed) * -0.875);
}

@keyframes oscillate {
  0% {
    transform: translateX(var(--uib-center)) scale(0);
    opacity: 0.25;
  }

  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
