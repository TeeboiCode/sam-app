import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import TaskAdditionalInfoForm from "../components/TaskFolder/TaskAdditionalInfoForm.vue";
import TaskProfilePhotoUpload from "../components/TaskFolder/TaskProfilePhotoUpload.vue";
import TaskPersonalDetailsForm from "../components/TaskFolder/TaskPersonalDetailsForm.vue";
import TaskPaymentForm from "../components/TaskFolder/TaskPaymentForm.vue";
import TaskStepIndicator from "../components/TaskFolder/TaskStepIndicator.vue";
import notice from "../views/notice.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import RaufTask from "../components/TaskFolder/RaufTask.vue";
import RaufTask2 from "../components/TaskFolder/RaufTask2.vue";
import RaufTask3 from "../components/TaskFolder/RaufTask3.vue";

import SeunTask from "../components/TaskFolder/SeunTask.vue";
import KceeTask from "../components/TaskFolder/KceeTask.vue";
import KceeTask2 from "../components/TaskFolder/KceeTask2.vue";
import KceeTask3 from "../components/TaskFolder/KceeTask3.vue";
import SeyiTask from "../components/TaskFolder/SeyiTask.vue";
import Rauf2 from "../components/TaskFolder/Rauf2.vue";
import Layo1 from "../components/TaskFolder/Layo1.vue";
import Layo2 from "../components/TaskFolder/Layo2.vue";
import Layo3 from "../components/TaskFolder/Layo3.vue";

// Admin Dashboard
// import AdminDashboard from "../views/AdminDashboard.vue";
// import StudentDashboard from "../views/StudentDashboard.vue";
// import ParentDashboard from "../views/ParentDashboard.vue";
// import TutorDashboard from "../views/TutorDashboard.vue";

import StudentProfile from "../views/Dashboard/StudentProfile.vue";

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
    path: "/forget-password",
    name: "ForgetPassword",
    component: ForgetPassword,
  },

  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("@/views/ResetPassword.vue"),
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
    path: "/rauf",
    name: "RaufTask",
    component: RaufTask,
  },
  {
    path: "/rauf2",
    name: "RaufTask2",
    component: RaufTask2,
  },
  {
    path: "/rauf3",
    name: "RaufTask3",
    component: RaufTask3,
  },
  {
    path: "/seun",
    name: "SeunTask",
    component: SeunTask,
  },
  {
    path: "/kcee",
    name: "KceeTask",
    component: KceeTask,
  },
  {
    path: "/kcee2",
    name: "KceeTask2",
    component: KceeTask2,
  },
  {
    path: "/kcee3",
    name: "KceeTask3",
    component: KceeTask3,
  },
  {
    path: "/seyi",
    name: "SeyiTask",
    component: SeyiTask,
  },
  {
    path: "/Layo1",
    name: "Layo1",
    component: Layo1,
  },
  {
    path: "/Layo2",
    name: "Layo2",
    component: Layo2,
  },
  {
    path: "/Layo3",
    name: "Layo3",
    component: Layo3,
  },

  // Admin Dashboard
  // {
  //   path: "/adminDashboard",
  //   name: "AdminDashboard",
  //   component: AdminDashboard,
  // },
  {
    path: "/student/profile",
    name: "StudentProfile",
    component: StudentProfile,
  },
  // {
  //   path: "/parentDashboard",
  //   name: "ParentDashboard",
  //   component: ParentDashboard,
  // },
  // {
  //   path: "/tutorDashboard",
  //   name: "TutorDashboard",
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
