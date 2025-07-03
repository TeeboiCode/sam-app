import { createRouter, createWebHistory } from "vue-router";

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
      import("@/views/Dashboard/Student-Dashboard/StudentProfile.vue"),
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
