<template>
  <div class="tabs-container-1">
    <!-- Tabs Navigation -->
    <div class="tabs-nav-1">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        :class="['tab-item', { active: activeTab === tab.name }]"
        @click="activeTab = tab.name"
      >
        <span v-html="tab.icon"></span>
        {{ tab.name }}
      </div>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <div v-if="activeTab === 'Overview'">
        <div class="description">
          <h2>Course description</h2>
          <p class="text">
            <span
              >Front-End Development Mastery: HTML, CSS, JavaScript, Vue.js,
              React.js</span
            >
            Embark on a comprehensive journey into the world of front-end
            development with our immersive course. From the fundamentals of HTML
            and CSS to the dynamic capabilities of JavaScript, Vue.js, and
            React.js, this program is designed to equip you with the skills
            needed to create visually stunning and interactive user interfaces.
            Whether you're a beginner or a seasoned developer looking to expand
            your toolkit, our hands-on approach and real-world projects will
            empower you to craft engaging and responsive web applications. Join
            us and transform your passion for web development into a mastery of
            front-end technologies.
          </p>
        </div>
        <div class="learn">
          <h2>What Will I Learn?</h2>
          <p class="text">
            <span>HTML (Hypertext Markup Language):</span>Create structured and
            semantic web pages. Master the use of tags, attributes, and forms.
          </p>
          <p class="text">
            <span>CSS (Cascading Style Sheets):</span>Style web pages for a
            visually appealing layout. Understand responsive design principles.
          </p>
          <p class="text">
            <span>JavaScript:</span>Develop interactive and dynamic web pages.
            Implement JavaScript functions, loops, and events.
          </p>
          <p class="text">
            <span>Vue.js:</span> Build single-page applications with Vue.js.
            Manage state, components, and routing.
          </p>
          <p class="text">
            <span>React.js:</span> Create efficient and scalable user interfaces
            with React.js. Understand React components, props, and state.
          </p>
          <p class="text">
            <span>Project Work:</span>Apply your skills to real-world projects.
            Collaborate with peers and receive personalized feedback.
          </p>
        </div>
        <div class="learn">
          <h2>What will i learn?</h2>
          <p class="learn-dot">
            <span>🔵</span>This comprehensive Front-End Development course is
            your gateway to mastering the essential technologies that power the
            visual aspects of websites and web applications. Whether you aspire
            to become a front-end developer, enhance your coding skills, or
            bring your creative visions to life on the web, this course provides
            the knowledge and practical experience you need to succeed. Enroll
            now and embark on an exciting journey toward becoming a proficient
            front-end developer.
          </p>
        </div>
        <div class="learn">
          <h2>Requirements</h2>
          <p>
            <span>🔵</span>
            No prior experience is required, making this course suitable for
            beginners and intermediate learners. All you need is a passion for
            web development and a basic understanding of how websites function.
            Access to a computer with a modern web browser and a code editor is
            recommended for hands-on exercises.
          </p>
        </div>
      </div>

      <div v-if="activeTab === 'Curriculum'">
        <div class="curriculum-list">
          <div
            class="week-section"
            v-for="(week, index) in curriculum"
            :key="index"
          >
            <div class="week-header-1" @click="toggleWeek(index)">
              <span class="arrow">{{ activeWeek === index ? "▾" : "▸" }}</span>
              <span class="week-title">{{ week.title }}</span>
              <span class="lesson-count"
                >{{ week.lessons.length }} Lessons</span
              >
              <span class="lesson-duration">00:00:00 Hours</span>
            </div>
            <div v-if="activeWeek === index" class="week-lessons">
              <div
                v-for="(lesson, lIndex) in week.lessons"
                :key="lIndex"
                class="lesson-item"
              >
                <span class="dot">🔵</span>
                <span>{{ lesson }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'Instructor'" class="instructor-card">
        <div>
          <img class="instructor-photo" src="../../assets/download.png" />
        </div>
        <div class="instructor-content">
          <h2>Tech Admin</h2>
          <p>
            An academy that is focused on equipping youths with the knowledge
            and skills needed in the tech space.
          </p>
          <div class="socials">
            <a href="#">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'Reviews'" class="reviews">
        <p>No reviews yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("Curriculum");

const tabs = [
  { name: "Overview", icon: "🔖" },
  { name: "Curriculum", icon: "📚" },
  { name: "Instructor", icon: "👨‍🏫" },
  { name: "Reviews", icon: "💬" },
];

const activeWeek = ref(null);

const curriculum = [
  {
    title: "Week 1–2",
    lessons: ["Introduction to Web Development and HTML"],
  },
  {
    title: "Weeks 3–4",
    lessons: ["Styling with CSS"],
  },
  {
    title: "Week 5–6",
    lessons: ["Bootstrap Framework"],
  },
  {
    title: "Week 7–8",
    lessons: ["Javascript Fundamentals"],
  },
  {
    title: "Week 9–10",
    lessons: ["Advanced Javascript"],
  },
  {
    title: "Week 11–12",
    lessons: ["Javascript Frontend Framework (React.js)", "Vue.js"],
  },
  {
    title: "Final Project",
    lessons: ["Tast Manager Application", "Movie Catalog"],
  },
];

const toggleWeek = (index) => {
  activeWeek.value = activeWeek.value === index ? null : index;
};
</script>

<style scoped>
.tabs-container-1 {
  background: white;
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  margin: 2rem auto;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.tabs-nav-1 {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  background: #fafafa;
  padding: 1rem;
  gap: 2.5rem;
}

.tab-item {
  cursor: pointer;
  padding: 0.5rem;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
}

.tab-item.active {
  border-color: #7b4ee4;
  color: #7b4ee4;
}

.tab-content {
  padding: 1.5rem;
}

.description {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.description h2 {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
}

.learn h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.learn p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  opacity: 0.8;
  line-height: 1.4;
}

.text {
  line-height: 1.4;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: black !important;
}

.text span {
  font-weight: 700;
}

.curriculum-list {
  display: flex;
  flex-direction: column;
}

.week-section {
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
}

.week-header-1 {
  display: flex;
  align-items: center !important;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
}

.arrow {
  margin-right: 0.5rem;
  font-size: 1.5rem;
}

.week-title {
  flex: 1;
  margin-left: 0.5rem;
  font-size: 1.25rem;
}

.lesson-count,
.lesson-duration {
  font-size: 1.1rem;
  color: #888;
  margin-left: 1rem;
}

.week-lessons {
  padding: 0.5rem 1.5rem;
  margin-top: 0.5rem;
}

.lesson-item {
  padding: 0.3rem 0;
  color: #444;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lesson-item .dot {
  font-size: 0.7rem;
}

.lesson-item p{
  font-size: 1.2rem;
}

.week-title {
  font-weight: bold;
}

.lesson-title {
  margin-top: 0.5rem;
  color: #333;
}

.lesson-meta {
  font-size: 0.875rem;
  color: #888;
}

.instructor-card {
  text-align: start;
  margin-block: 1rem;
  display: flex;
  gap: 1.5rem;
}

.instructor-content {
  display: flex;
  flex-direction: column;
}

.instructor-content h2 {
  font-size: 1.4rem;
}

.instructor-content p {
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 1.8rem;
}

.instructor-photo {
  border-radius: 10px;
  width: 150px;
  height: 150px;
}

.socials a {
  background: #fff;
  border: 1px solid #ccc;
  color: black;
  margin: 0 0.5rem;
  padding: 0.9rem;
  cursor: pointer;
  border-radius: 6px;
}

.reviews p {
  margin-block: 3rem;
  text-align: center;
  font-size: 1.8rem;
  opacity: 0.6;
}

.learn-dot {
  display: flex;
  gap: 0.3rem;
}
</style>
