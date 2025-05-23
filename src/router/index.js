import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import TaskRegister from "../components/TaskFolder/TaskRegister.vue";
import TaskAdditionalInfoForm from "../components/TaskFolder/TaskAdditionalInfoForm.vue";
import TaskProfilePhotoUpload from "../components/TaskFolder/TaskProfilePhotoUpload.vue";
import TaskPersonalDetailsForm from "../components/TaskFolder/TaskPersonalDetailsForm.vue";
import TaskPaymentForm from "../components/TaskFolder/TaskPaymentForm.vue";
import TaskStepIndicator from "../components/TaskFolder/TaskStepIndicator.vue";
import notice from "../views/notice.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import RaufTask from '../components/TaskFolder/RaufTask.vue'

import TaskLogo from "../components/TaskFolder/TaskLogo.vue";
import Card from "../components/TaskFolder/TaskCard.vue"
import Card2 from "../components/TaskFolder/TaskCard2.vue";
import TaskUpComing from "../components/TaskFolder/TaskUpComing.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
     },
  {
    path: "/logo",
    name: "TaskLogo",
    component: TaskLogo,
  },

  {
    path: "/taskRegister",
    name: "TaskRegister",
    component: TaskRegister,
  },
  {
    path: "/taskAdditionalInfoForm",
    name: "TaskAdditionalInfoForm",
    component: TaskAdditionalInfoForm,
  },
  {
    path: "/taskProfilePhotoUpload",
    name: "TaskProfilePhotoUpload",
    component: TaskProfilePhotoUpload,
  },
  {
    path: "/taskPersonalDetailsForm",
    name: "TaskPersonalDetailsForm",
    component: TaskPersonalDetailsForm,
  },
  {
    path: "/taskPaymentForm",
    name: "TaskPaymentForm",
    component: TaskPaymentForm,
  },
  {
    path: "/taskStepIndicator",
    name: "TaskStepIndicator",
    component: TaskStepIndicator,
  },
  {
    path: "/notice",
    name: "notice",
    component: notice,
  },
  {
    path: "/card",
    name: "Card",
    component: Card
  },
  {
     path: "/card2",
    name: "Card2",
    component: Card2
  },
  {
    path: "/taskUpComing",
    name: "TaskUpComing",
    component: TaskUpComing
  },
   {
     path: "/RaufTask",
    name: "RaufTask",
    component: RaufTask
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
