<template>
  <nav class="navbar navbar-light bg-white sticky-top border-bottom py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Logo (Mobile) -->
      <router-link class="navbar-brand d-lg-none d-sm-flex" to="/">
        <img src="/src/assets/Frame 1 1.png" alt="Logo" style="width: 150px" />
      </router-link>

      <!-- Hamburger (Mobile) -->
      <button
        class="d-lg-none navbar-toggler border-0 shadow-none"
        type="button"
        @click="toggleMobileMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Desktop Navigation -->
      <div
        class="d-none d-lg-flex w-100 justify-content-between align-items-center"
      >
        <!-- Logo (Desktop) -->
        <router-link class="navbar-brand" to="/">
          <img
            src="/src/assets/Frame 1 1.png"
            alt="Logo"
            style="width: 150px"
          />
        </router-link>

        <!-- Nav Items -->
        <ul class="navbar-nav d-flex flex-row gap-3 align-items-center mb-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <!-- Programs Dropdown (Desktop) -->
          <li
            class="nav-item dropdown position-relative"
            @mouseenter="isProgramsOpen = true"
            @mouseleave="isProgramsOpen = false"
          >
            <router-link
              class="nav-link dropdown-toggle d-flex align-items-center gap-1"
              to="/programs"
              >Programs
              <i
                :class="
                  isProgramsOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
                "
              ></i
            ></router-link>
            <ul class="dropdown-menu show" v-show="isProgramsOpen">
              <li
                class="dropdown-submenu"
                @mouseenter="openSubmenu = 'waec'"
                @mouseleave="openSubmenu = null"
              >
                <a
                  href="#"
                  class="dropdown-item d-flex align-items-center justify-content-between"
                >
                  WAEC
                  <i
                    :class="
                      openSubmenu === 'waec'
                        ? 'fas fa-chevron-right'
                        : 'fas fa-chevron-down'
                    "
                  ></i>
                </a>
                <ul
                  class="dropdown-menu nested"
                  v-show="openSubmenu === 'waec'"
                >
                  <li>
                    <router-link class="dropdown-item" to="/checkComponent"
                      >WAEC Registration</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/createComponent"
                      >WAEC Tutorial</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="#"
                      >WAEC Mock</router-link
                    >
                  </li>
                </ul>
              </li>
              <li
                class="dropdown-submenu"
                @mouseenter="openSubmenu = 'neco'"
                @mouseleave="openSubmenu = null"
              >
                <a
                  href="#"
                  class="dropdown-item d-flex align-items-center justify-content-between"
                >
                  NECO
                  <i
                    :class="
                      openSubmenu === 'neco'
                        ? 'fas fa-chevron-right'
                        : 'fas fa-chevron-down'
                    "
                  ></i>
                </a>
                <ul
                  class="dropdown-menu nested"
                  v-show="openSubmenu === 'neco'"
                >
                  <li>
                    <router-link class="dropdown-item" to="#"
                      >NECO Registration</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="#"
                      >NECO Tutorial</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="#"
                      >NECO Mock</router-link
                    >
                  </li>
                </ul>
              </li>
              <li
                class="dropdown-submenu"
                @mouseenter="openSubmenu = 'jamb'"
                @mouseleave="openSubmenu = null"
              >
                <a
                  href="#"
                  class="dropdown-item d-flex align-items-center justify-content-between"
                >
                  JAMB
                  <i
                    :class="
                      openSubmenu === 'jamb'
                        ? 'fas fa-chevron-right'
                        : 'fas fa-chevron-down'
                    "
                  ></i>
                </a>
                <ul
                  class="dropdown-menu nested"
                  v-show="openSubmenu === 'jamb'"
                >
                  <li>
                    <router-link class="dropdown-item" to="#"
                      >JAMB Registration</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="#"
                      >JAMB Tutorial</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="#"
                      >JAMB CBT</router-link
                    >
                  </li>
                </ul>
              </li>

              <li>
                <router-link class="dropdown-item" to="/programs"
                  >All Program</router-link
                >
              </li>

              <li>
                <router-link class="dropdown-item" to="#"
                  >All Courses</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
          </li>
        </ul>

        <!-- Action buttons -->
        <div class="d-flex gap-3">
          <router-link class="btn btn-primary">Login</router-link>
          <router-link class="btn btn-primary">Register</router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobile-nav d-lg-none">
        <button class="close-btn" @click="toggleMobileMenu">×</button>
        <ul class="navbar-nav d-flex flex-column gap-3 mt-4">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click="toggleMobileMenu"
              >Home</router-link
            >
          </li>

          <!-- Programs (Mobile) -->
          <li class="nav-item">
            <div
              class="nav-link d-flex justify-content-between align-items-center"
              @click="isProgramsOpenMobile = !isProgramsOpenMobile"
            >
              Programs
              <i
                :class="
                  isProgramsOpenMobile
                    ? 'fas fa-chevron-up'
                    : 'fas fa-chevron-down'
                "
              ></i>
            </div>

            <ul v-show="isProgramsOpenMobile" class="ps-3 mt-2">
              <!-- WAEC -->
              <li>
                <div
                  class="nav-link d-flex justify-content-between"
                  @click="
                    openSubmenuMobile =
                      openSubmenuMobile === 'waec' ? null : 'waec'
                  "
                >
                  WAEC
                  <i
                    :class="
                      openSubmenuMobile === 'waec'
                        ? 'fas fa-chevron-up'
                        : 'fas fa-chevron-down'
                    "
                  ></i>
                </div>
                <ul v-show="openSubmenuMobile === 'waec'" class="ps-3">
                  <li>
                    <router-link
                      class="nav-link"
                      to="/checkComponent"
                      @click="toggleMobileMenu"
                      >WAEC Registration</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="nav-link"
                      to="/createComponent"
                      @click="toggleMobileMenu"
                      >WAEC Tutorial</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="nav-link"
                      to="#"
                      @click="toggleMobileMenu"
                      >WAEC Mock</router-link
                    >
                  </li>
                </ul>
              </li>

              <!-- NECO -->
              <li>
                <div
                  class="nav-link d-flex justify-content-between"
                  @click="
                    openSubmenuMobile =
                      openSubmenuMobile === 'neco' ? null : 'neco'
                  "
                >
                  NECO
                  <i
                    :class="
                      openSubmenuMobile === 'neco'
                        ? 'fas fa-chevron-up'
                        : 'fas fa-chevron-down'
                    "
                  ></i>
                </div>
                <ul v-show="openSubmenuMobile === 'neco'" class="ps-3">
                  <li>
                    <router-link
                      class="nav-link"
                      to="#"
                      @click="toggleMobileMenu"
                      >NECO Registration</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="nav-link"
                      to="#"
                      @click="toggleMobileMenu"
                      >NECO Tutorial</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="nav-link"
                      to="#"
                      @click="toggleMobileMenu"
                      >NECO Mock</router-link
                    >
                  </li>
                </ul>
              </li>

              <!-- JAMB -->
              <li>
                <div
                  class="nav-link d-flex justify-content-between"
                  @click="
                    openSubmenuMobile =
                      openSubmenuMobile === 'jamb' ? null : 'jamb'
                  "
                >
                  JAMB
                  <i
                    :class="
                      openSubmenuMobile === 'jamb'
                        ? 'fas fa-chevron-up'
                        : 'fas fa-chevron-down'
                    "
                  ></i>
                </div>
                <ul v-show="openSubmenuMobile === 'jamb'" class="ps-3">
                  <li>
                    <router-link
                      class="nav-link"
                      to="#"
                      @click="toggleMobileMenu"
                      >JAMB Registration</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="nav-link"
                      to="#"
                      @click="toggleMobileMenu"
                      >JAMB Tutorial</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="nav-link"
                      to="#"
                      @click="toggleMobileMenu"
                      >JAMB CBT</router-link
                    >
                  </li>
                </ul>
              </li>

              <!-- All Courses -->
              <li>
                <router-link class="nav-link" to="#" @click="toggleMobileMenu"
                  >All Courses</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about" @click="toggleMobileMenu"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/contact"
              @click="toggleMobileMenu"
              >Contact Us</router-link
            >
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { computed, ref } from "vue";
import { useUsersStore } from "@/stores/users";
import { useRouter } from "vue-router";
const notifications = [
  {
    id: 1,
    title: "In Artificial Intelligence",
    message: "You are Enrolled",
    image: "https://via.placeholder.com/40x40?text=AI",
    alt: "AI",
  },
  {
    id: 2,
    title: "In Indian Veg Course",
    message: "You are Enrolled",
    image: "https://via.placeholder.com/40x40?text=Veg",
    alt: "Veg",
  },
  {
    id: 3,
    title: "In Learn Microsoft Excel",
    message: "You are Enrolled",
    image: "https://via.placeholder.com/40x40?text=Excel",
    alt: "Excel",
  },
  {
    id: 4,
    title: "JavaScript for Beginners",
    message: "You are Enrolled",
    image: "https://via.placeholder.com/40x40?text=JS",
    alt: "JS",
  },
  {
    id: 5,
    title: "HTML & CSS Fundamentals",
    message: "You are Enrolled",
    image: "https://via.placeholder.com/40x40?text=HTML",
    alt: "HTML",
  },
  {
    id: 6,
    title: "Vue.js Masterclass",
    message: "You are Enrolled",
    image: "https://via.placeholder.com/40x40?text=Vue",
    alt: "Vue",
  },
];

const profileItems = [
  {
    id: 1,
    label: "My Courses",
    icon: "📘",
    router: "/gotomycourses",
  },
  {
    id: 2,
    label: "Wishlist",
    icon: "💖",
    router: "/wishlist",
  },
  {
    id: 3,
    label: "Purchased History",
    icon: "🛒",
    router: "/purchased-history",
  },
  {
    id: 4,
    label: "Profile",
    icon: "👤",
    router: "/student/profile",
  },
  // {
  //   id: 5,
  //   label: "Become An Instructor",
  //   icon: "📣",
  //   router: "/instructor",
  // },
  // {
  //   id: 6,
  //   label: "Flash Deals",
  //   icon: "⚡",
  //   router: "/flash-deals",
  // },
  // {
  //   id: 7,
  //   label: "Watchlist",
  //   icon: "📺",
  //   router: "/watchlist",
  // },
  // {
  //   id: 8,
  //   label: "Certificate Center",
  //   icon: "🎓",
  //   router: "/certificate-center",
  // },
];

const userStore = useUsersStore();
const router = useRouter();
const isLoggedIn = computed(() => !!userStore.getUser);

const user = computed(() => userStore.getUser).value;

const isMobileMenuOpen = ref(false);
const isProgramsOpen = ref(false);
const openSubmenu = ref(null);
const isProgramsOpenMobile = ref(false);
const openSubmenuMobile = ref(null);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  isProgramsOpenMobile.value = false;
  openSubmenuMobile.value = null;
};
</script>

<style scoped>
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background: white;
  padding: 2rem;
  z-index: 9999;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}
.navbar-toggler {
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  background: none !important;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.dropdown-menu {
  display: block;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  z-index: 1000;
  background: white;
  border: none;
  padding: 0.5rem 0;
}
.dropdown-menu.show {
  visibility: visible;
  opacity: 1;
}
.dropdown-submenu {
  position: relative;
}
.dropdown-submenu .nested {
  position: absolute;
  left: 100%;
  top: 0;
  margin-left: 0.1rem;
  min-width: 180px;
  background: white;
  border: none;
  z-index: 1001;
  visibility: visible;
  opacity: 1;
  animation: slidein 0.5s 1 linear;
}
@keyframes slidein {
  from {
    transform: translateX(-40px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
/* Static dropdowns for mobile */
.dropdown-menu.static {
  position: static;
  visibility: visible;
  opacity: 1;
  border: none;
  padding-left: 1rem;
}
.dropdown-menu.static ul {
  margin-top: 0.5rem;
}

.user-icons li {
  list-style: none;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-icons li i {
  font-size: 1rem;
  color: var(--text-muted);
  transition: all var(--transition-normal);
}

.user-icons li i:hover {
  color: var(--deep-purple);
}

.dropdown-toggle::after {
  display: none !important;
}

#notification {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
  border-radius: 0 !important;
}

#notification li {
  padding: 0 !important;
}

.dropdown-menu.notification .dropdown-item {
  padding: 0 !important;
}

li.dropdown-notification-header {
  text-align: start !important  ;
}

.notifications-list::-webkit-scrollbar {
  width: 2px;
}
.notifications-list::-webkit-scrollbar-track {
  background: transparent;
}
.notifications-list::-webkit-scrollbar-thumb {
  border-radius: 2px;
}

.dropdown-header {
  display: flex;
  align-items: center;
  padding: 0 !important;
  justify-content: space-around;
}

.dropdown-header img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.dropdown-header .user-info {
  display: flex;
  flex-direction: column;
}

.dropdown-header .user-info .name {
  font-weight: 300;
}

.dropdown-header .user-info .email {
  font-size: 0.9em;
  color: #666;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.p-links {
  color: var(--deep-purple);
}

.p-links:hover {
  color: var(--deep-purple);
}

.user-img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid var(--deep-purple);
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
