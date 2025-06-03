<template>
  <div class="chart-container">
    <Line :data="data" :options="options" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler
)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Orders',
      data: [21, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      pointBackgroundColor: '#3b82f6',
      pointRadius: 5,
      tension: 0.4,
      fill: true
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Total Orders in 2025',
      font: {
        size: 18
      }
    },
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Orders'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Months'
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin: auto;
  padding: 1rem;
}
</style>
