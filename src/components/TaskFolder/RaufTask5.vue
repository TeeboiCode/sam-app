<template>
  <aside class="filter-sidebar">
    <h2 class="filter-title">Filter</h2>

    <!-- Search -->
    <div class="search-box">
      <input type="text" placeholder="Search..." />
      <button><span>🔍</span></button>
    </div>

    <!-- Categories -->
    <div class="section">
      <h3>Categories</h3>
      <ul>
        <li v-for="(category, index) in visibleCategories" :key="index">
          {{ category.name }} <span class="count">{{ category.count }}</span>
        </li>
      </ul>
      <button v-if="!showAll" class="show-more" @click="showAll = true">Show more +</button>
    </div>

    <!-- Price -->
    <div class="section">
      <h3>Price</h3>
      <label><input type="radio" name="price" /> Paid</label>
      <label><input type="radio" name="price" /> Discount</label>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'

const showAll = ref(false)

const categories = [
  { name: 'Data & Security', count: 4 },
  { name: 'Cybersecurity', count: 1 },
  { name: 'Data Analysis', count: 2 },
  { name: 'Cloud Computing', count: 1 },
  { name: 'Networking', count: 0 },
  { name: 'Engineering', count: 3 },
  { name: 'Frontend Development', count: 1 },
  { name: 'Software Engineering', count: 0 }
]

const visibleCategories = computed(() =>
  showAll.value ? categories : categories.slice(0, 5)
)
</script>

<style scoped>
.filter-sidebar {
  width: 250px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  font-family: sans-serif;
  color: #333;
}

.filter-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}

.search-box {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

.search-box input {
  flex: 1;
  border: none;
  padding: 8px 10px;
  outline: none;
}

.search-box button {
  background: none;
  border: none;
  padding: 0 12px;
  cursor: pointer;
  font-size: 18px;
}

.section {
  margin-bottom: 24px;
}

.section h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
}

.section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.section ul li {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  transition: color 0.2s;
}

.section ul li:hover {
  color: #6b21a8;
}

.count {
  font-weight: bold;
  color: #999;
}

.show-more {
  background: none;
  border: none;
  color: #6b21a8;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 0;
  margin-top: 4px;
}

.section label {
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;
}

.section input[type='radio'] {
  margin-right: 6px;
}
</style>
