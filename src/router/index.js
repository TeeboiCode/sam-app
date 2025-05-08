import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import TaskAnnouncementBanner from "@/components/TaskFolder/TaskAnnouncementBanner.vue";
import TaskTopNav from "@/components/TaskFolder/TaskTopNav.vue";
import TaskMainNav from "../components/TaskFolder/TaskMainNav.vue";
import TaskHeroSection from "../components/TaskFolder/TaskHeroSection.vue";
import TaskFooter from "../components/TaskFolder/TaskFooter.vue";
import TaskLogin from "../components/TaskFolder/TaskLogin.vue";
import TaskRegister from "../components/TaskFolder/TaskRegister.vue";
import TaskAdditionalInfoForm from "../components/TaskFolder/TaskAdditionalInfoForm.vue";
import TaskProfilePhotoUpload from "../components/TaskFolder/TaskProfilePhotoUpload.vue";
import TaskPersonalDetailsForm from "../components/TaskFolder/TaskPersonalDetailsForm.vue";
import TaskPaymentForm from "../components/TaskFolder/TaskPaymentForm.vue";
import TaskStepIndicator from "../components/TaskFolder/TaskStepIndicator.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  {
    path: "/taskannouncementbanner",
    name: "TaskAnnouncementBanner",
    component: TaskAnnouncementBanner,
  },
  {
    path: "/tasktopnav",
    name: "TaskTopNav",
    component: TaskTopNav,
  },
  {
    path: "/taskmainnav",
    name: "TaskMainNav",
    component: TaskMainNav,
  },
  {
    path: "/taskHeroSection",
    name: "TaskHeroSection",
    component: TaskHeroSection,
  },
  {
    path: "/taskLogin",
    name: "TaskLogin",
    component: TaskLogin,
  },
  {
    path: "/taskFooter",
    name: "TaskFooter",
    component: TaskFooter,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
