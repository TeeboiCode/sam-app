<template>
  <div class="calendar-container">
    <div class="header">
      <button @click="prevMonth">‹</button>
      <h2>{{ monthNames[currentMonth] }} {{ currentYear }}</h2>
      <button @click="nextMonth">›</button>
    </div>

    <div class="weekdays">
      <div v-for="day in weekdays" :key="day" class="weekday">{{ day }}</div>
    </div>

    <div class="days">
      <div
        v-for="(day, index) in days"
        :key="index"
        :class="['day', { today: isToday(day), empty: !day }]"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const today = new Date();
const currentMonth = ref(today.getMonth());
const currentYear = ref(today.getFullYear());

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDaysInMonth(year, month) {
  const date = new Date(year, month, 1);
  const days = [];

  const firstDay = date.getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    days.push(null); // empty cells
  }

  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  return days;
}

const days = computed(() =>
  getDaysInMonth(currentYear.value, currentMonth.value)
);

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value += 1;
  } else {
    currentMonth.value += 1;
  }
}

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value -= 1;
  } else {
    currentMonth.value -= 1;
  }
}

function isToday(day) {
  return (
    day &&
    day === today.getDate() &&
    currentMonth.value === today.getMonth() &&
    currentYear.value === today.getFullYear()
  );
}
</script>

<style scoped>
.calendar-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 10px #ccc;
  border-radius: 8px;
  background: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h2 {
  margin: 0;
}

.header button {
  font-size: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
}

.weekdays,
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-top: 10px;
}

.weekday {
  font-weight: bold;
  padding: 5px 0;
}

.day {
  padding: 10px;
  border-radius: 50%;
  margin: 2px;
  transition: background 0.3s;
}

.day:hover {
  background: #f0f0f0;
  color: #800080;
}

.today {
  background: #800080;
  color: white;
  font-weight: bold;
}

.empty {
  visibility: hidden;
}
</style>
