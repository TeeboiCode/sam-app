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
            <a href="#" class="nav-link dropdown-toggle" @click.prevent
              >Programs</a
            >
            <ul class="dropdown-menu show" v-show="isProgramsOpen">
              <li
                class="dropdown-submenu"
                @mouseenter="openSubmenu = 'waec'"
                @mouseleave="openSubmenu = null"
              >
                <a href="#" class="dropdown-item">WAEC</a>
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
                <a href="#" class="dropdown-item">NECO</a>
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
                <a href="#" class="dropdown-item">JAMB</a>
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

        <!-- Auth Buttons -->
        <div class="d-flex gap-2" v-if="!isLoggedIn">
          <router-link class="btn btn-primary" to="/register"
            >Sign Up</router-link
          >
          <router-link class="btn btn-outline-secondary" to="/login"
            >Login</router-link
          >
        </div>

        <div
          class="d-flex gap-5 align-items-center justify-content-center"
          v-else
        >
          <ul class="user-icons d-flex gap-3 m-0">
            <li class="nav-item dropdown position-relative">
              <div
                class="dropdown-toggle position-relative"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-bell"></i>
                <span
                  class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                  style="left: 30px"
                >
                  99+
                </span>
              </div>

              <div
                class="dropdown-menu dropdown-menu-end p-0"
                style="
                  width: 320px;
                  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                  top: 55px !important;
                  overflow: hidden;
                  border-radius: 0 !important;
                "
              >
                <div
                  class="border-bottom px-3 py-2 fw-bold overflow-hidden"
                  style="background-color: #eee"
                >
                  Notifications
                </div>

                <div
                  class="notifications-list"
                  style="max-height: 260px; overflow-y: auto"
                >
                  <!-- Notification Item -->
                  <div
                    class="d-flex align-items-center px-3 py-2 border-bottom"
                    v-for="notification in notifications"
                    :key="notification.id"
                  >
                    <img
                      :src="notification.image"
                      class="me-2 rounded"
                      width="40"
                      height="40"
                      :alt="notification.alt"
                    />
                    <div class="flex-grow-1">
                      <div
                        class="fw-bold text-truncate"
                        style="max-width: 200px"
                      >
                        {{ notification.title }}
                      </div>
                      <div class="text-muted small">
                        {{ notification.message }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center py-2 bg-light fw-semibold border-top">
                  <a
                    href="#"
                    onclick="clearNotifications()"
                    class="text-decoration-none text-dark"
                    >Clear All</a
                  >
                </div>
              </div>
            </li>

            <li
              class="wishlist-icon position-relative"
              @click="router.push('/wishlist')"
            >
              <i class="bi bi-suit-heart"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                99+
                <!-- <span class="visually-hidden">unread messages</span> -->
              </span>
            </li>

            <li class="cart-icon position-relative">
              <i class="bi bi-cart3"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                99+
                <!-- <span class="visually-hidden">unread messages</span> -->
              </span>
            </li>
          </ul>

          <div class="d-flex gap-2 position-relative">
            <div
              class="dropdown-toggle position-relative"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="dropdown-header">
                <div class="user-img">
                  <img
                    src="https://cdn.whu.edu/fileadmin/_processed_/8/1/csm_AdobeStock_215844325_ba2ab1eb3c.jpg"
                    alt="User"
                  />
                </div>
                <div class="user-info">
                  <div class="name fs-6 fw-semibold">
                    {{ user.firstName }} {{ user.lastName }}
                    <span
                      ><img
                        style="width: 15px; height: 15px"
                        src="https://img.icons8.com/material-rounded/24/chevron-down.png"
                        alt="chevron-down"
                    /></span>
                  </div>

                  <!-- <div class="email">user@mediacity.co.in</div> -->
                </div>
              </div>
            </div>

            <div
              class="dropdown-menu dropdown-menu-end p-0"
              style="
                width: 320px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                  rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                top: 55px !important;
                right: 0 !important;
                left: auto !important;
                overflow: hidden;
                border-radius: 0 !important;
              "
            >
              <div
                class="border-bottom p-3 fw-bold overflow-hidden"
                style="background-color: #e2dee2"
              >
                <!-- Profile Header -->
                <div class="dropdown-header">
                  <img
                    src="https://cdn.whu.edu/fileadmin/_processed_/8/1/csm_AdobeStock_215844325_ba2ab1eb3c.jpg"
                    alt="User"
                    style="width: 50px; height: 50px; border-radius: 50%"
                  />
                  <div class="user-info">
                    <div class="name fs-4">
                      {{ user.firstName }} {{ user.lastName }}
                    </div>
                    <div class="email">{{ user.email }}</div>
                  </div>
                </div>
              </div>

              <div
                class="notifications-list"
                style="max-height: 260px; overflow-y: auto"
              >
                <!-- Profile links -->
                <div
                  class="p-links d-flex align-items-center border-bottom"
                  v-for="profileItem in profileItems"
                  :key="profileItem.id"
                  @click="router.push(profileItem.router)"
                >
                  <div class="dropdown-item px-4 py-3">
                    <i>{{ profileItem.icon }}</i> {{ profileItem.label }}
                  </div>
                </div>
              </div>

              <div class="text-center py-2 bg-light fw-semibold border-top">
                <div
                  @click="userStore.logoutUser(router)"
                  class="text-decoration-none text-dark"
                  style="cursor: pointer"
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobile-nav">
        <button class="close-btn" @click="toggleMobileMenu">&times;</button>
        <ul class="navbar-nav">
          <li>
            <router-link class="nav-link" to="/" @click="toggleMobileMenu"
              >Home</router-link
            >
          </li>
          <li>
            <router-link class="nav-link" to="/about" @click="toggleMobileMenu"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link"
              to="/contact"
              @click="toggleMobileMenu"
              >Contact Us</router-link
            >
          </li>
          <li>
            <a
              href="#"
              class="nav-link"
              @click.prevent="isProgramsOpenMobile = !isProgramsOpenMobile"
              >Programs</a
            >
            <ul v-show="isProgramsOpenMobile" class="dropdown-menu static">
              <li>
                <a
                  href="#"
                  class="dropdown-item"
                  @click.prevent="
                    openSubmenuMobile =
                      openSubmenuMobile === 'waec' ? null : 'waec'
                  "
                  >WAEC</a
                >
                <ul
                  v-show="openSubmenuMobile === 'waec'"
                  class="dropdown-menu static ps-3"
                >
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="#"
                      @click="toggleMobileMenu"
                      >WAEC Registration</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="#"
                      @click="toggleMobileMenu"
                      >WAEC Tutorial</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="#"
                      @click="toggleMobileMenu"
                      >WAEC Mock</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  class="dropdown-item"
                  @click.prevent="
                    openSubmenuMobile =
                      openSubmenuMobile === 'neco' ? null : 'neco'
                  "
                  >NECO</a
                >
                <ul
                  v-show="openSubmenuMobile === 'neco'"
                  class="dropdown-menu static ps-3"
                >
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="#"
                      @click="toggleMobileMenu"
                      >NECO Registration</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="#"
                      @click="toggleMobileMenu"
                      >NECO Tutorial</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="#"
                      @click="toggleMobileMenu"
                      >NECO Mock</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  class="dropdown-item"
                  @click.prevent="
                    openSubmenuMobile =
                      openSubmenuMobile === 'jamb' ? null : 'jamb'
                  "
                  >JAMB</a
                >
                <ul
                  v-show="openSubmenuMobile === 'jamb'"
                  class="dropdown-menu static ps-3"
                >
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="#"
                      @click="toggleMobileMenu"
                      >JAMB Registration</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="#"
                      @click="toggleMobileMenu"
                      >JAMB Tutorial</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      to="#"
                      @click="toggleMobileMenu"
                      >JAMB CBT</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="#"
                  @click="toggleMobileMenu"
                  >All Courses</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-flex gap-2 mt-3" v-if="!isLoggedIn">
          <router-link
            class="btn btn-primary"
            to="/register"
            @click="toggleMobileMenu"
            >Sign Up</router-link
          >
          <router-link
            class="btn btn-outline-secondary"
            to="/login"
            @click="toggleMobileMenu"
            >Login</router-link
          >
        </div>

        <div class="d-flex gap-2 mt-3" v-else>
          <router-link
            class="btn btn-primary"
            to="/logout"
            @click="userStore.logoutUser()"
            >Logout</router-link
          >
        </div>
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
