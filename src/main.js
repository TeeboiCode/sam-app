import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/custom.css";
import { setupAxiosInterceptors } from "./utils/axiosSetup";

setupAxiosInterceptors(router);

createApp(App).use(router).use(createPinia()).mount("#app");
