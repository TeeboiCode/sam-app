import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/custom.css";
import VueApexCharts from "vue3-apexcharts";
import { setupAxiosInterceptors } from "./utils/axiosSetup";

// Import VCalendar & CSS
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

const app = createApp(App);

// Setup Axios interceptors
setupAxiosInterceptors(router);

// Register all plugins and components once
app.use(VCalendar, {});
app.use(router);
app.use(createPinia());
app.component('apexchart', VueApexCharts);

// Mount the app
app.mount("#app");
