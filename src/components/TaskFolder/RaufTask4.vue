<template>
  <div class="wrapper">
    <div class="toggle-switch">
      <button
        class="toggle-btn"
        :class="{ active: mode === 'grid' }"
        @click="mode = 'grid'"
      >
        <span class="icon">🔲</span>
        Grid
      </button>

      <button
        class="toggle-btn"
        :class="{ active: mode === 'list' }"
        @click="mode = 'list'"
      >
        <span class="icon">📋</span>
        List
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const mode = ref('grid')
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #ffff;
}

.toggle-switch {
  display: flex;
  background: #f4e9ff;
  padding: 4px;
  border-radius: 9px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.toggle-btn {
  border: none;
  outline: none;
  padding: 8px 16px;
  margin: 0;
  border-radius: 9px;
  background: transparent;
  color: #666;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.toggle-btn.active {
  color: black;
  background: white;
}

.toggle-btn:hover:not(.active) {
  color: #7e22ce;
}
</style>
