<template>
  <div class="admin-cards-container">
    <div class="container">
      <div class="row">
        <div
          v-for="card in cardData"
          :key="card.label"
          class="col-12 col-sm-6 col-lg-3 mb-4"
        >
          <div class="card">
            <div class="card-content-wrapper">
              <div class="card-text-content">
                <div class="card-number">{{ card.number }}</div>
                <div class="card-label">{{ card.label }}</div>
              </div>
              <div v-if="card.iconClass" class="card-icon">
                <i :class="card.iconClass"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cardData = [
  {
    number: 39,
    label: "Users",
    iconClass: "bi bi-people text-success",
  },
  {
    number: 6,
    label: "Instructors",
    iconClass: "bi bi-person-badge text-primary",
  },
  {
    number: 52,
    label: "Courses",
    iconClass: "bi bi-book text-danger",
  },
  {
    number: 11,
    label: "Categories",
    iconClass: "bi bi-tags text-warning",
  },
];
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap to the next line */
  gap: 20px; /* Adjust the gap as needed */
  justify-content: center; /* Center the cards */
  margin-top: 2rem; /* Add some space from the top */
}

.card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  transition: transform 0.2s ease-in-out;
  width: 100%; /* Full width for responsiveness */
  max-width: 300px; /* Limit the maximum width */
  display: flex;
  flex-direction: column; /* Stack content vertically */
  padding: 0.5rem 1rem; /* Add padding for better spacing */
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-content-wrapper {
  display: flex;
  justify-content: space-between; /* Distribute space between text and icon */
  align-items: center; /* Vertically align items */
  flex-grow: 1; /* Allow content to take available space */
  gap: 5rem; /* Add gap between items */
}

.card-text-content {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.card-number {
  font-size: 1.2rem; /* Large font size for the number */
  font-weight: 700;
  color: #333;
  line-height: 1;
  margin-bottom: 0.2rem;
}

.card-label {
  font-size: 0.9rem;
  color: #666;
}

.card-icon {
  font-size: 3rem; /* Adjust size for the icon */
  color: #007bff; /* Example color, adjust as needed */
  /* Add margin-left if needed for spacing */
}

.card-icon i {
  /* Adjust Bootstrap icon size if needed, or rely on parent font-size */
  font-size: inherit; /* Inherit size from card-icon div */
}
</style>
