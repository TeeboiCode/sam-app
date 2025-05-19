<template>
  <nav class="navbar navbar-light bg-white border-bottom py-1">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <router-link class="navbar-brand d-lg-none d-sm-flex" to="/">
        <img src="/src/assets/Frame 1 1.png" alt="Logo" style="width: 150px" />
      </router-link>

      <!-- Hamburger (mobile) -->
      <button class="d-lg-none navbar-toggler border-0 shadow-none" type="button" @click="toggleMobileMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Desktop nav -->
      <div class="d-none d-lg-flex w-100 justify-content-between align-items-center">
        <ul class="navbar-nav d-flex flex-row gap-3 align-items-center mb-0">
          <router-link class="navbar-brand" to="/">
        <img src="/src/assets/Frame 1 1.png" alt="Logo" style="width: 150px" />
      </router-link>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <!-- Programs Dropdown (Desktop) -->
          <li class="nav-item dropdown position-relative"
              @mouseenter="isProgramsOpen = true"
              @mouseleave="isProgramsOpen = false">
            <a href="#" class="nav-link dropdown-toggle" @click.prevent>Programs</a>
            <ul class="dropdown-menu show" v-show="isProgramsOpen">
              <li class="dropdown-submenu" @mouseenter="openSubmenu = 'waec'" @mouseleave="openSubmenu = null">
                <a href="#" class="dropdown-item">WAEC</a>
                <ul class="dropdown-menu nested" v-show="openSubmenu === 'waec'">
                  <li><router-link class="dropdown-item" to="#">WAEC Registration</router-link></li>
                  <li><router-link class="dropdown-item" to="#">WAEC Tutorial</router-link></li>
                  <li><router-link class="dropdown-item" to="#">WAEC Mock</router-link></li>
                </ul>
              </li>
              <li class="dropdown-submenu" @mouseenter="openSubmenu = 'neco'" @mouseleave="openSubmenu = null">
                <a href="#" class="dropdown-item">NECO</a>
                <ul class="dropdown-menu nested" v-show="openSubmenu === 'neco'">
                  <li><router-link class="dropdown-item" to="#">NECO Registration</router-link></li>
                  <li><router-link class="dropdown-item" to="#">NECO Tutorial</router-link></li>
                  <li><router-link class="dropdown-item" to="#">NECO Mock</router-link></li>
                </ul>
              </li>
              <li class="dropdown-submenu" @mouseenter="openSubmenu = 'jamb'" @mouseleave="openSubmenu = null">
                <a href="#" class="dropdown-item">JAMB</a>
                <ul class="dropdown-menu nested" v-show="openSubmenu === 'jamb'">
                  <li><router-link class="dropdown-item" to="#">JAMB Registration</router-link></li>
                  <li><router-link class="dropdown-item" to="#">JAMB Tutorial</router-link></li>
                  <li><router-link class="dropdown-item" to="#">JAMB CBT</router-link></li>
                </ul>
              </li>
              <li><router-link class="dropdown-item" to="#">All Courses</router-link></li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
          </li>
        </ul>

        <!-- Desktop Buttons -->
        <div class="d-flex gap-2">
          <router-link class="btn btn-primary" to="/register">Sign Up</router-link>
          <router-link class="btn btn-outline-secondary" to="/login">Login</router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobile-nav">
        <button class="close-btn" @click="toggleMobileMenu">&times;</button>
        <ul class="navbar-nav">
          <li><router-link class="nav-link" to="/" @click="toggleMobileMenu">Home</router-link></li>
          <li><router-link class="nav-link" to="/about" @click="toggleMobileMenu">About Us</router-link></li>
          <li><router-link class="nav-link" to="/contact" @click="toggleMobileMenu">Contact Us</router-link></li>
          <li>
            <a href="#" class="nav-link" @click.prevent="isProgramsOpenMobile = !isProgramsOpenMobile">Programs</a>
            <ul v-show="isProgramsOpenMobile" class="dropdown-menu static">
              <li>
                <a href="#" class="dropdown-item" @click.prevent="openSubmenuMobile = openSubmenuMobile === 'waec' ? null : 'waec'">WAEC</a>
                <ul v-show="openSubmenuMobile === 'waec'" class="dropdown-menu static ps-3">
                  <li><router-link class="dropdown-item" to="#" @click="toggleMobileMenu">WAEC Registration</router-link></li>
                  <li><router-link class="dropdown-item" to="#" @click="toggleMobileMenu">WAEC Tutorial</router-link></li>
                  <li><router-link class="dropdown-item" to="#" @click="toggleMobileMenu">WAEC Mock</router-link></li>
                </ul>
              </li>
              <li>
                <a href="#" class="dropdown-item" @click.prevent="openSubmenuMobile = openSubmenuMobile === 'neco' ? null : 'neco'">NECO</a>
                <ul v-show="openSubmenuMobile === 'neco'" class="dropdown-menu static ps-3">
                  <li><router-link class="dropdown-item" to="#" @click="toggleMobileMenu">NECO Registration</router-link></li>
                  <li><router-link class="dropdown-item" to="#" @click="toggleMobileMenu">NECO Tutorial</router-link></li>
                  <li><router-link class="dropdown-item" to="#" @click="toggleMobileMenu">NECO Mock</router-link></li>
                </ul>
              </li>
              <li>
                <a href="#" class="dropdown-item" @click.prevent="openSubmenuMobile = openSubmenuMobile === 'jamb' ? null : 'jamb'">JAMB</a>
                <ul v-show="openSubmenuMobile === 'jamb'" class="dropdown-menu static ps-3">
                  <li><router-link class="dropdown-item" to="#" @click="toggleMobileMenu">JAMB Registration</router-link></li>
                  <li><router-link class="dropdown-item" to="#" @click="toggleMobileMenu">JAMB Tutorial</router-link></li>
                  <li><router-link class="dropdown-item" to="#" @click="toggleMobileMenu">JAMB CBT</router-link></li>
                </ul>
              </li>
              <li><router-link class="dropdown-item" to="#" @click="toggleMobileMenu">All Courses</router-link></li>
            </ul>
          </li>
        </ul>
        <div class="d-flex gap-2 mt-3">
          <router-link class="btn btn-primary" to="/register" @click="toggleMobileMenu">Sign Up</router-link>
          <router-link class="btn btn-outline-secondary" to="/login" @click="toggleMobileMenu">Login</router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const isProgramsOpen = ref(false)
const openSubmenu = ref(null)
const isProgramsOpenMobile = ref(false)
const openSubmenuMobile = ref(null)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  isProgramsOpenMobile.value = false
  openSubmenuMobile.value = null
}
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
</style>
