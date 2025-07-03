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
import SeunTask2 from "../components/TaskFolder/SeunTask2.vue";
import SeunTask3 from "../components/TaskFolder/SeunTask3.vue";
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
  { path: "/", name: "Home", component: () => import("@/views/Home.vue") },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/forget-password",
    name: "ForgetPassword",
    component: () => import("@/views/ForgetPassword.vue"),
  },

  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("@/views/ResetPassword.vue"),
  },
  {
    path: "/taskAdditionalInfoForm",
    name: "TaskAdditionalInfoForm",
    component: () =>
      import("@/components/TaskFolder/TaskAdditionalInfoForm.vue"),
  },
  {
    path: "/taskProfilePhotoUpload",
    name: "TaskProfilePhotoUpload",
    component: () =>
      import("@/components/TaskFolder/TaskProfilePhotoUpload.vue"),
  },
  {
    path: "/taskPersonalDetailsForm",
    name: "TaskPersonalDetailsForm",
    component: () =>
      import("@/components/TaskFolder/TaskPersonalDetailsForm.vue"),
  },
  {
    path: "/taskPaymentForm",
    name: "TaskPaymentForm",
    component: () => import("@/components/TaskFolder/TaskPaymentForm.vue"),
  },
  {
    path: "/taskStepIndicator",
    name: "TaskStepIndicator",
    component: () => import("@/components/TaskFolder/TaskStepIndicator.vue"),
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("@/views/notice.vue"),
  },
  {
    path: "/rauf",
    name: "RaufTask",
    component: () => import("@/components/TaskFolder/RaufTask.vue"),
  },
  {
    path: "/rauf2",
    name: "RaufTask2",
    component: () => import("@/components/TaskFolder/RaufTask2.vue"),
  },
  {
    path: "/rauf3",
    name: "RaufTask3",
    component: () => import("@/components/TaskFolder/RaufTask3.vue"),
  },
  {
    path: "/seun",
    name: "SeunTask",
    component: () => import("@/components/TaskFolder/SeunTask.vue"),
  },
  {
    path: "/seun2",
    name: "SeunTask2",
    component: SeunTask2,
  },
  {
    path: "/seun3",
    name: "SeunTask3",
    component: SeunTask3,
  },
  {
    path: "/kcee",
    name: "KceeTask",
    component: () => import("@/components/TaskFolder/KceeTask.vue"),
  },
  {
    path: "/kcee2",
    name: "KceeTask2",
    component: () => import("@/components/TaskFolder/KceeTask2.vue"),
  },
  {
    path: "/kcee3",
    name: "KceeTask3",
    component: () => import("@/components/TaskFolder/KceeTask3.vue"),
  },
  {
    path: "/seyi",
    name: "SeyiTask",
    component: () => import("@/components/TaskFolder/SeyiTask.vue"),
  },
  {
    path: "/Layo1",
    name: "Layo1",
    component: () => import("@/components/TaskFolder/Layo1.vue"),
  },
  {
    path: "/Layo2",
    name: "Layo2",
    component: () => import("@/components/TaskFolder/Layo2.vue"),
  },
  {
    path: "/Layo3",
    name: "Layo3",
    component: () => import("@/components/TaskFolder/Layo3.vue"),
  },
  {
    path: "/student/profile",
    name: "StudentProfile",
    component: () =>
      import("../views/Dashboard/Student-Dashboard/StudentProfileView.vue"),
  },
  {
    path: "/checkComponent",
    name: "CheckComponent",
    component: () => import("@/components/ui/CheckComponent.vue"),
  },
  {
    path: "/createComponent",
    name: "CreateComponent",
    component: () => import("@/components/ui/CreateComponent.vue"),
  },
  {
    path: "/gotomycourses",
    name: "StudentCourses",
    component: () =>
      import("@/views/Dashboard/Student-Dashboard/StudentCourses.vue"),
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: () =>
      import("@/views/Dashboard/Student-Dashboard/StudentCourses.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
