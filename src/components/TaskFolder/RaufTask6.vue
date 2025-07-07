<template>
  <div class="card-wrapper">
    <div class="course-card">
      <div class="card-img">
        <img :src="course.image" alt="Course Image" />
        <div class="price-overlay">₦{{ course.price }}</div>
      </div>

      <div class="card-body">
        <h5 class="course-title">{{ course.title }}</h5>

        <div class="course-meta">
          <span><i class="fas fa-book"></i> {{ course.lessons }} lesson</span>
          <span><i class="fas fa-user"></i> {{ course.students }} Student</span>
        </div>

        <p class="course-description">
          {{ course.description }}
        </p>

        <div class="card-footer">
          <div class="admin-info">
            <img src="/src/assets/graduate.png" alt="Admin" />
            <span>{{ course.admin }}</span>
          </div>
          <button class="learn-more">
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
        image: "/src/assets/graduate.png", // Replace with your actual image
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
.card-wrapper {
  display: flex;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(to right, #ece2ff, #f5f4ff); /* Matches your gradient */
}

.course-card {
  width: 100%;
  max-width: 600px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.card-img {
  position: relative;
  flex: 0 0 180px;
  overflow: hidden;
}
.card-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.price-overlay {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #000;
  color: #fff;
  padding: 5px 10px;
  font-weight: 600;
  border-radius: 5px;
  font-size: 0.9rem;
}

.card-body {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.course-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #000;
}

.course-meta {
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 10px;
}
.course-meta span {
  margin-right: 15px;
}

.course-description {
  font-size: 0.87rem;
  color: #444;
  margin-bottom: 16px;
  line-height: 1.4;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.admin-info {
  display: flex;
  align-items: center;
}
.admin-info img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 8px;
}
.learn-more {
  background: none;
  border: none;
  color: #5a48f4;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>
