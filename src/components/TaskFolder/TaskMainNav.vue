<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
    <div class="container">
      <!-- Logo -->
      <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
        <img
          src="/src/assets/Frame 1 1.png"
          alt="Logo"
          class="img-fluid"
          style="width: 150px"
        />
      </router-link>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav links -->
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <!-- Programs Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="programsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Programs
            </a>
            <ul class="dropdown-menu" aria-labelledby="programsDropdown">
              <!-- WAEC submenu -->
              <li class="dropdown-submenu">
                <a class="dropdown-item dropdown-toggle" href="#">WAEC</a>
                <ul class="dropdown-menu">
                  <li><router-link class="dropdown-item" to="#">WAEC Registration</router-link></li>
                  <li><router-link class="dropdown-item" to="#">WAEC Tutorial</router-link></li>
                  <li><router-link class="dropdown-item" to="#">WAEC Mock</router-link></li>
                </ul>
              </li>

              <!-- NECO submenu -->
              <li class="dropdown-submenu">
                <a class="dropdown-item dropdown-toggle" href="#">NECO</a>
                <ul class="dropdown-menu">
                  <li><router-link class="dropdown-item" to="#">NECO Registration</router-link></li>
                  <li><router-link class="dropdown-item" to="#">NECO Tutorial</router-link></li>
                  <li><router-link class="dropdown-item" to="#">NECO Mock</router-link></li>
                </ul>
              </li>

              <!-- JAMB submenu -->
              <li class="dropdown-submenu">
                <a class="dropdown-item dropdown-toggle" href="#">JAMB</a>
                <ul class="dropdown-menu">
                  <li><router-link class="dropdown-item" to="#">JAMB Registration</router-link></li>
                  <li><router-link class="dropdown-item" to="#">JAMB Tutorial</router-link></li>
                  <li><router-link class="dropdown-item" to="#">JAMB CBT</router-link></li>
                </ul>
              </li>

              <li>
                <router-link class="dropdown-item" to="#">All Courses</router-link>
              </li>
            </ul>
          </li>

          <!-- Other pages -->
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
          </li>
        </ul>

        <!-- Auth buttons -->
        <div class="d-flex gap-2">
          <router-link class="btn btn-primary" to="/register">Sign Up</router-link>
          <router-link class="btn btn-outline-secondary" to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Dropdown submenu support */
/* Show nested dropdown below parent instead of beside */
.dropdown-submenu {
  position: relative;
}

.dropdown-submenu > .dropdown-menu {
  position: absolute;
  top: 100%; /* places below parent item */
  left: 0;   /* aligns directly under parent item */
  margin-top: 0; 
  display: none;
  z-index: 1000;
}

.dropdown-submenu:hover > .dropdown-menu {
  display: block;
}

.dropdown-toggle {
  cursor: pointer;
}

</style>
