import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/custom.css";

createApp(App).use(router).mount("#app");
