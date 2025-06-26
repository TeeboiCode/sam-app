<template>
  <div class="card">
    <h3 class="title">Users Distribution</h3>
    <apexchart
      type="radialBar"
      height="400"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

// ✅ Register the component
const apexchart = VueApexCharts;

const series = ref([2, 6, 39]);

const chartOptions = ref({
  chart: {
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      hollow: {
        margin: 10,
        size: "30%",
      },
      track: {
        background: "#f2f2f2",
        strokeWidth: "100%",
      },
      dataLabels: {
        show: false,
      },
    },
  },
  colors: ["#4e7fff", "#2ecc71", "#f7b731"],
  labels: ["Admin", "Instructor", "User"],
  legend: {
    show: true,
    position: "left",
    formatter: function (seriesName, opts) {
      return seriesName + ": " + series.value[opts.seriesIndex];
    },
    markers: {
      width: 10,
      height: 10,
      radius: 12,
    },
  },
});
</script>

<style scoped>
.card {
  background: #f9f9fc;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.title {
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>
