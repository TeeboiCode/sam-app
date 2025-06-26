<template>
  <div class="recent-posts">
    <h5 class="heading">Recent Posts</h5>
    <ul class="post-list">
      <li v-for="(post, index) in posts" :key="index" class="post-item">
        <img :src="post.image" alt="Post thumbnail" class="post-image" />
        <div class="post-info">
          <p class="post-title">{{ post.title }}</p>
          <span class="post-date">{{ post.date }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import necoLogo from '/src/assets/neco logo.png';

const posts = [
  {
    title: "Blogging Courses, Training, Classes & Tutorials Online",
    date: "04-02-2023",
    image: necoLogo
  },
  {
    title: "Seas accumsan nulla nec lacus ultricies placerat.",
    date: "04-02-2023",
    image: necoLogo
  },
  {
    title: "Blogging for Your Business",
    date: "04-02-2023",
    image: necoLogo
  },
  {
    title: "Blogging of world guide",
    date: "20-06-2023",
    image: necoLogo
  },
  {
    title: "Card Payment Security",
    date: "01-09-2023",
    image: necoLogo
  },
  {
    title: "World of Endless Possibilities",
    date: "01-09-2023",
    image: necoLogo
  }
];
</script>

<style scoped>
.recent-posts {
  padding-top: 10px;
  font-family: Arial, sans-serif;
  max-width: 350px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
}

.heading {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
  padding-bottom: 6px;
  position: relative;
}

.heading::after {
  content: '';
  display: block;
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, #ff3e3e 20%, #ccc 20%);
  position: absolute;
  bottom: 0;
  left: 0;
  top: 120%;
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 20px;
}

.post-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 10px;
}

.post-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
}

.post-info {
  flex-grow: 1;
}

.post-title {
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  color: #333;
  font-weight: 500;
}

.post-date {
  font-size: 12px;
  color: #777;
  margin-top: 4px;
}
</style>
