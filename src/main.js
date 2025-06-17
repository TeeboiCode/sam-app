import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/custom.css";
import VueApexCharts from "vue3-apexcharts";
import { setupAxiosInterceptors } from "./utils/axiosSetup";

setupAxiosInterceptors(router);

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.component("apexchart", VueApexCharts);
app.mount("#app");

