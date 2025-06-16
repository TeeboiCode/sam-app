<template>
  <nav class="navbar navbar-light bg-white border-bottom py-3">
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
                    <router-link class="dropdown-item" to="#"
                      >WAEC Registration</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="#"
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
          class="d-flex gap-4 align-items-center justify-content-center"
          v-else
        >
          <ul class="user-icons d-flex gap-3 m-0">
            <!-- <li class="nav-item position-relative">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-bell"></i>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >
                  99+
                </span>
              </a>
              <ul class="dropdown-menu p-0 pt-2" id="notification">
                <li
                  class="dropdown-notification-header justify-content-start border-bottom"
                >
                  <h6 class="dropdown-header">Notifications</h6>
                </li>
                <li>
                  <a class="dropdown-item border-bottom py-2" href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a class="dropdown-item border-bottom py-2" href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a class="dropdown-item border-bottom py-2" href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <div class="notification-item">
                    <img
                      src="https://via.placeholder.com/40x40?text=AI"
                      class="notification-image"
                    />
                    <div class="notification-text">
                      <div class="notification-title">
                        In Artificial Intelligence
                      </div>
                      <div class="notification-subtitle">You are Enrolled</div>
                    </div>
                    <div class="notification-time">Just now</div>
                  </div>
                </li>

                <li class="dropdown-notification-footer bg-body-secondary">
                  <p
                    class="dropdown-item m-0 text-center fw-bold text-secondary"
                  >
                    Mark all as read
                  </p>
                </li>
              </ul>
            </li> -->

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
                style="width: 320px"
              >
                <div class="border-bottom px-3 py-2 fw-bold">Notifications</div>

                <div
                  class="notifications-list"
                  style="max-height: 260px; overflow-y: auto"
                >
                  <!-- Notification Item -->
                  <div
                    class="d-flex align-items-center px-3 py-2 border-bottom"
                  >
                    <img
                      src="https://via.placeholder.com/40x40?text=AI"
                      class="me-2 rounded"
                      width="40"
                      height="40"
                      alt="AI"
                    />
                    <div class="flex-grow-1">
                      <div
                        class="fw-bold text-truncate"
                        style="max-width: 200px"
                      >
                        In Artificial Intelligence
                      </div>
                      <div class="text-muted small">You are Enrolled</div>
                    </div>
                    <small class="text-muted ms-2">Just now</small>
                  </div>

                  <div
                    class="d-flex align-items-center px-3 py-2 border-bottom"
                  >
                    <img
                      src="https://via.placeholder.com/40x40?text=Veg"
                      class="me-2 rounded"
                      width="40"
                      height="40"
                      alt="Veg"
                    />
                    <div class="flex-grow-1">
                      <div class="fw-bold text-truncate">
                        In Indian Veg Course
                      </div>
                      <div class="text-muted small">You are Enrolled</div>
                    </div>
                    <small class="text-muted ms-2">2 min ago</small>
                  </div>

                  <div
                    class="d-flex align-items-center px-3 py-2 border-bottom"
                  >
                    <img
                      src="https://via.placeholder.com/40x40?text=Excel"
                      class="me-2 rounded"
                      width="40"
                      height="40"
                      alt="Excel"
                    />
                    <div class="flex-grow-1">
                      <div class="fw-bold text-truncate">
                        In Learn Microsoft Excel
                      </div>
                      <div class="text-muted small">You are Enrolled</div>
                    </div>
                    <small class="text-muted ms-2">5 min ago</small>
                  </div>

                  <div
                    class="d-flex align-items-center px-3 py-2 border-bottom"
                  >
                    <img
                      src="https://via.placeholder.com/40x40?text=JS"
                      class="me-2 rounded"
                      width="40"
                      height="40"
                      alt="JS"
                    />
                    <div class="flex-grow-1">
                      <div class="fw-bold text-truncate">
                        JavaScript for Beginners
                      </div>
                      <div class="text-muted small">You are Enrolled</div>
                    </div>
                    <small class="text-muted ms-2">10 min ago</small>
                  </div>

                  <div
                    class="d-flex align-items-center px-3 py-2 border-bottom"
                  >
                    <img
                      src="https://via.placeholder.com/40x40?text=HTML"
                      class="me-2 rounded"
                      width="40"
                      height="40"
                      alt="HTML"
                    />
                    <div class="flex-grow-1">
                      <div class="fw-bold text-truncate">
                        HTML & CSS Fundamentals
                      </div>
                      <div class="text-muted small">You are Enrolled</div>
                    </div>
                    <small class="text-muted ms-2">30 min ago</small>
                  </div>

                  <div
                    class="d-flex align-items-center px-3 py-2 border-bottom"
                  >
                    <img
                      src="https://via.placeholder.com/40x40?text=Vue"
                      class="me-2 rounded"
                      width="40"
                      height="40"
                      alt="Vue"
                    />
                    <div class="flex-grow-1">
                      <div class="fw-bold text-truncate">
                        Vue.js Masterclass
                      </div>
                      <div class="text-muted small">You are Enrolled</div>
                    </div>
                    <small class="text-muted ms-2">1 hr ago</small>
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

            <li class="wishlist-icon position-relative">
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
          <button class="btn btn-primary" @click="userStore.logoutUser(router)">
            Logout
          </button>
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

const userStore = useUsersStore();
const router = useRouter();
const isLoggedIn = computed(() => !!userStore.getUser);

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
</style>
