<template>
  <div class="container py-4 bg-light bg-gradient">
    <div
      class="card shadow-lg rounded-4 overflow-hidden mx-auto flex-column flex-md-row d-flex"
      style="max-width: 600px"
    >
      <!-- Image Section -->
      <div
        class="position-relative flex-shrink-0 w-100 w-md-auto"
        style="max-width: 100%; flex: 0 0 180px"
      >
        <img
          :src="course.image"
          alt="Course Image"
          class="w-100 h-100"
          style="object-fit: cover; display: block"
        />
        <div
          class="position-absolute bottom-0 start-0 m-2 px-2 py-1 bg-dark text-white rounded small fw-semibold"
        >
          ₦{{ course.price }}
        </div>
      </div>

      <!-- Card Body -->
      <div class="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 class="card-title fw-bold mb-2">{{ course.title }}</h5>

          <div class="text-muted small mb-2">
            <span class="me-3"
              ><i class="fas fa-book me-1"></i>{{ course.lessons }} lesson</span
            >
            <span
              ><i class="fas fa-user me-1"></i
              >{{ course.students }} Student</span
            >
          </div>

          <p class="card-text text-secondary small mb-3">
            {{ course.description }}
          </p>
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <img
              src="/src/assets/graduate.png"
              alt="Admin"
              class="rounded-circle me-2"
              style="width: 28px; height: 28px"
            />
            <small class="text-muted">{{ course.admin }}</small>
          </div>
          <button class="btn btn-link text-primary fw-semibold p-0">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  data() {
    return {
      course: {
        image: "/src/assets/graduate.png",
        title: "Digital Skills",
        lessons: 35,
        students: 1,
        price: 50000,
        description:
          "Office suites typically offer a range of features, including: Document Creation and Editing: The ability to create, edit, and format documents, spread...",
        admin: "TTA Admin",
      },
    };
  },
};
</script>
<style scoped>
.object-fit-cover {
  object-fit: cover;
}
</style>
