import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/custom.css";
import VueApexCharts from "vue3-apexcharts";
import { setupAxiosInterceptors } from "./utils/axiosSetup";
import VueApexCharts from 'vue3-apexcharts'

setupAxiosInterceptors(router);

// Only create the app ONCE
const app = createApp(App);

// Register plugins
app.use(router);
app.use(createPinia());
app.component('apexchart', VueApexCharts);

// Mount to DOM
app.mount("#app");

