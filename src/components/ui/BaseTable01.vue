<template>
  <section class="user-management-container">
    <div class="container-fluid">
      <!-- Category Tabs -->
      <div class="d-flex mb-4">
        <button class="btn btn-outline-primary active me-2">All Users</button>
        <button class="btn btn-outline-primary me-2">Students</button>
        <button class="btn btn-outline-primary me-2">Instructors</button>
        <button class="btn btn-outline-primary">Admins</button>
      </div>

      <!-- Header and Action Buttons -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2>All Users</h2>
        <div>
          <button class="btn btn-primary me-2">
            <i class="bi bi-plus me-1"></i> Add User
          </button>
          <button class="btn btn-danger me-2">
            <i class="bi bi-trash me-1"></i> Delete Selected
          </button>
          <button class="btn btn-success">
            <i class="bi bi-upload me-1"></i> Import
          </button>
        </div>
      </div>

      <!-- Table Controls (Show entries and Search) -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center">
          Show
          <select class="form-select form-select-sm mx-2" style="width: auto">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          entries
        </div>
        <div class="d-flex align-items-center">
          Search:
          <input type="text" class="form-control form-control-sm ms-2" />
        </div>
      </div>

      <!-- User Table -->
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr class="text-start">
              <th><input type="checkbox" /></th>
              <th>#</th>
              <th>Profile Picture</th>
              <th>Users Details</th>
              <th>Role</th>
              <th>Login As User</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td><input type="checkbox" /></td>
              <td>{{ user.id }}</td>
              <td>
                <img
                  :src="user.profilePicture"
                  alt="Profile Picture"
                  class="rounded-circle"
                  style="width: 50px; height: 50px; object-fit: cover"
                />
              </td>
              <td class="text-start">
                <div><strong>Name:</strong> {{ user.name }}</div>
                <div><strong>Email:</strong> {{ user.email }}</div>
                <div><strong>Mobile:</strong> {{ user.mobile }}</div>
              </td>
              <td class="text-start">{{ user.role }}</td>
              <td class="text-start">
                <i class="bi bi-key"></i>
                <!-- Key icon placeholder -->
              </td>
              <td>
                <!-- Status Toggle Placeholder -->
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    :checked="user.isActive"
                  />
                </div>
              </td>
              <td>
                <!-- Action Menu Placeholder -->
                <div class="dropdown">
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-three-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                    <li><a class="dropdown-item" href="#">View</a></li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination Placeholder -->
      <nav>
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const users = ref([
  {
    id: 1,
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    name: "Admin Mediacity",
    email: "admin@mediacity.co.in",
    mobile: "+917777777777",
    role: "admin",
    isActive: true,
  },
  {
    id: 2,
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    name: "user mediacity",
    email: "user@mediacitygmail.com",
    mobile: "9876543219",
    role: "user",
    isActive: false,
  },
  {
    id: 2,
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    name: "instructor mediacity",
    email: "instructor@mediacitygmail.com",
    mobile: "9876543219",
    role: "instructor",
    isActive: true,
  },
]);

// You will need to add logic for filtering, searching, pagination, and selection here
</script>

<style scoped>
.user-management-container {
  padding: 20px;
}
</style>
