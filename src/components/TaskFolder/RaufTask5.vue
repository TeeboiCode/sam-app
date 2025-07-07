<template>
  <aside class="bg-white p-3 rounded shadow-sm" style="width: 250px;">
    <h2 class="h5 fw-bold mb-3">Filter</h2>

    <!-- Search -->
    <div class="input-group mb-4">
      <input type="text" class="form-control" placeholder="Search..." />
      <button class="btn btn-outline-secondary" type="button">
        <span>🔍</span>
      </button>
    </div>

    <!-- Categories -->
    <div class="mb-4">
      <h3 class="h6 fw-semibold mb-2">Categories</h3>
      <ul class="list-unstyled mb-2">
        <li
          v-for="(category, index) in visibleCategories"
          :key="index"
          class="d-flex justify-content-between py-1 text-muted"
          style="cursor: pointer;"
        >
          <span>{{ category.name }}</span>
          <span class="fw-bold text-secondary">{{ category.count }}</span>
        </li>
      </ul>
      <button
        v-if="!showAll"
        class="btn btn-link p-0 text-decoration-none text-primary"
        @click="showAll = true"
      >
        Show more +
      </button>
    </div>

    <!-- Price -->
    <div>
      <h3 class="h6 fw-semibold mb-2">Price</h3>
      <div class="form-check mb-2">
        <input class="form-check-input" type="radio" name="price" id="paid" />
        <label class="form-check-label" for="paid">Paid</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="price" id="discount" />
        <label class="form-check-label" for="discount">Discount</label>
      </div>
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
