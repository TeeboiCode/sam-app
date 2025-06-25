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
  border-top: 2px solid #ff3e3e;
  padding-top: 10px;
  font-family: Arial, sans-serif;
  max-width: 350px;
  width: 100%;
}
.heading {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
}
.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.post-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.post-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
}
.post-info {
  flex-grow: 1;
}
.post-title {
  margin: 0;
  font-size: 14px;
  line-height: 1.2;
  color: #333;
}
.post-date {
  font-size: 12px;
  color: #999;
}
</style>
