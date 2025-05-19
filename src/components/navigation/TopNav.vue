<template>
  <div class="top-nav py-2">
    <div class="container">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <!-- Left Section -->
        <div class="d-flex flex-column flex-sm-row gap-2 gap-lg-4 align-items-center text-center text-sm-start">
          <!-- Phone Contact -->
          <div class="d-flex align-items-center">
            <i class="bi bi-telephone text-purple me-2"></i>
            <span class="text-muted">
              +234 708 893 2240, +234 816 230 0241
            </span>
          </div>

          <!-- Address -->
          <div class="d-flex align-items-center text-capitalize">
            <i class="bi bi-geo-alt text-purple me-2"></i>
            <span class="text-muted">
              <span class="d-none d-lg-inline">
                2, Awoyelu Street, Jogbo off Ibadan Garage,
              </span>
              Ijebu-Ode, Ogun State, Nigeria
            </span>
          </div>
        </div>

        <!-- Right Section: Social Icons -->
        <div class="d-flex gap-3 justify-content-center">
          <a href="#" class="text-muted hover-purple" aria-label="Twitter">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="#" class="text-muted hover-purple" aria-label="Instagram">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" class="text-muted hover-purple" aria-label="LinkedIn">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="#" class="text-muted hover-purple" aria-label="Facebook">
            <i class="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style scoped>
.top-nav {
  background: #fff;
  font-size: 0.875rem;
  border-bottom: 1px solid rgb(237, 240, 247);
}

.hover-purple {
  transition: var(--transition-normal);
}

.hover-purple:hover {
  color: var(--royal-purple) !important;
}
</style>
