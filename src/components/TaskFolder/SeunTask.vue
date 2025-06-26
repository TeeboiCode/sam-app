<template>
  <div class="faq-container">
    <div class="faq-header">
      <h1>Get every single answer here.</h1>
      <p>
        A business or organization established to provide a particular service, typically one that involves organizing transactions.
      </p>
    </div>
    
    <div class="accordion">
      <div 
        v-for="(item, index) in accordionItems" 
        :key="index"
        class="accordion__item"
        :class="{ 'accordion__item--active': activeIndex === index }"
      >
        <button
          class="accordion__button"
          @click="toggleAccordion(index)"
          :aria-expanded="activeIndex === index"
        >
          <span class="accordion__title">{{ item.title }}</span>
          <ChevronDown class="accordion__icon" />
        </button>
        
        <Transition
          name="accordion"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <div v-show="activeIndex === index" class="accordion__content">
            <div class="accordion__content-inner">
              {{ item.content }}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
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
          <button class="btn btn-primary me-2"><i class="bi bi-plus me-1"></i> Add User</button>
          <button class="btn btn-danger me-2"><i class="bi bi-trash me-1"></i> Delete Selected</button>
          <button class="btn btn-success"><i class="bi bi-upload me-1"></i> Import</button>
        </div>
      </div>

      <!-- Table Controls (Show entries and Search) -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center">
          Show
          <select class="form-select form-select-sm mx-2" style="width: auto;">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          entries
        </div>
        <div class="d-flex align-items-center">
          Search:
          <input type="text" class="form-control form-control-sm ms-2">
        </div>
      </div>

      <!-- User Table -->
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr class="text-start">
              <th><input type="checkbox"></th>
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
              <td><input type="checkbox"></td>
              <td>{{ user.id }}</td>
              <td>
                <img :src="user.profilePicture" alt="Profile Picture" class="rounded-circle" style="width: 50px; height: 50px; object-fit: cover;">
              </td>
              <td class="text-start">
                <div><strong>Name:</strong> {{ user.name }}</div>
                <div><strong>Email:</strong> {{ user.email }}</div>
                <div><strong>Mobile:</strong> {{ user.mobile }}</div>
              </td>
              <td class="text-start">{{ user.role }}</td>
              <td class="text-start">
                <i class="bi bi-key"></i> <!-- Key icon placeholder -->
              </td>
              <td>
                <!-- Status Toggle Placeholder -->
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" :checked="user.isActive">
                </div>
              </td>
              <td>
                <!-- Action Menu Placeholder -->
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
          <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronDown } from 'lucide-vue-next';

const activeIndex = ref(null);

const accordionItems = ref([
  {
    title: 'Downloading Courses',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
  {
    title: 'Lifetime Access',
    content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.'
  },
  {
    title: 'Account/Profile',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
  },
  {
    title: 'Course Taking',
    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.'
  },
  {
    title: 'Troubleshooting',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  }
]);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

// Transition hooks for smooth accordion animation
const beforeEnter = (el) => {
  el.style.height = '0';
  el.style.overflow = 'hidden';
};

const enter = (el) => {
  el.offsetHeight; // Force reflow
  el.style.height = el.scrollHeight + 'px';
};

const afterEnter = (el) => {
  el.style.height = '';
  el.style.overflow = '';
};

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.overflow = 'hidden';
  el.offsetHeight; // Force reflow
};

const leave = (el) => {
  el.style.height = '0';
};

const afterLeave = (el) => {
  el.style.height = '';
  el.style.overflow = '';
};
</script>

<style scoped>
@import '@/assets/styles/custom.css';

.faq-container {
  max-width: 48rem;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.faq-header {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-container h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.faq-container p {
  color: var(--text-secondary);
  font-size: 1.125rem;
  line-height: 1.5;
  max-width: 42rem;
  margin: 0 auto;
}

/* Accordion Styles */
.accordion {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.accordion__item {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.accordion__item--active {
  border-color: var(--royal-purple);
}

.accordion__button {
  width: 100%;
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
}

.accordion__item--active .accordion__button {
  background-color: var(--light-lavender);
}

.accordion__button:focus {
  outline: 2px solid var(--royal-purple);
  outline-offset: 2px;
}

.accordion__title {
  font-weight: 500;
  color: var(--text-primary);
}

.accordion__icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  margin-left: 1rem;
}

.accordion__item--active .accordion__icon {
  transform: rotate(180deg);
}

.accordion__content {
  padding: 0;
  color: var(--text-secondary);
  line-height: 1.5;
  overflow: hidden;
  transition: height 0.3s ease-out;
}

.accordion__content-inner {
  padding: 0.5rem 1.5rem 1.5rem;
  margin-top: 0.5rem;
}

/* Transition classes */
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease-out;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;

const users = ref([
  {
    id: 1,
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
    name: 'Admin Mediacity',
    email: 'admin@mediacity.co.in',
    mobile: '+917777777777',
    role: 'admin',
    isActive: true,
  },
  {
    id: 2,
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
    name: 'user mediacity',
    email: 'user@mediacitygmail.com',
    mobile: '9876543219',
    role: 'user',
    isActive: false,
  },
  {
    id: 2,
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
    name: 'instructor mediacity',
    email: 'instructor@mediacitygmail.com',
    mobile: '9876543219',
    role: 'instructor',
    isActive: true,
  }
]);

// You will need to add logic for filtering, searching, pagination, and selection here
</script>

<style scoped>
.user-management-container {
  padding: 20px;
}
</style>
