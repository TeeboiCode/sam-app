<template>
  <div class="container-wrapper">
    <div class="card p-4">
      <!-- Top Image Section -->
      <div class="image-section">
        <img src="@/assets/instructor.png" alt="Course" class="bg-image" />
        <!-- <div class="badge">OFF <span>29%</span></div>
        <div class="icons">
          <i class="fa-regular fa-bell"></i>
          <i class="fa-solid fa-signal"></i>
          <i class="fa-regular fa-heart"></i>
        </div> -->
        <div class="price">
          <div class="current">₦9680.01</div>
          <div class="old">₦39600.06</div>
        </div>
      </div>
      <!-- Bottom Details Section -->
      <div class="details">
        <img src="@/assets/instructor.png" alt="Profile" class="profile-img" />
        <h2>Testing</h2>
        <p class="desc">
          Social Media Marketing Agency: Digital Marketing + Business In this
          Social Media course...
        </p>
        <a href="#" class="read-more">Read More →</a>
        <div class="icon-book">
          <img src="@/assets/marketingopenbook.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container-wrapper {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 20px 0;
}
.card {
  max-width: 350px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", sans-serif;
  background-color: #fff;
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}
.image-section {
  position: relative;
  height: 200px;
  /* overflow: hidden; */
}
.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--royal-purple);
  color: white;
  font-weight: bold;
  padding: 7px 8px;
  border-radius: 4px;
  font-size: 12px;
}
.badge span {
  margin-left: 4px;
  width: 100px;
  background-color: #ffff;
  padding: 1px 4px;
  color: var(--royal-purple);
  border-radius: 4px;
}
.icons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icons i {
  background: #fff;
  color: var(--royal-purple);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  box-shadow: 0 2px 8px rgba(229, 57, 53, 0.08);
  margin: 0 2px;
  transition: box-shadow 0.2s, background 0.2s;
  cursor: pointer;
}

.icons i:nth-child(2) {
  font-size: 10px;
}
.icons i:hover {
  background: var(--royal-purple);
  color: #ffff;
  box-shadow: 0 4px 12px rgba(229, 57, 53, 0.18);
}
.price {
  position: absolute;
  bottom: -10%;
  right: 10px;
  background: var(--royal-purple);
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  text-align: right;
  font-weight: bold;
  font-size: 15px;
}
.price .old {
  font-size: 12px;
  text-decoration: line-through;
  color: #ffecec;
}
.details {
  padding: 30px 13px 18px;
  position: relative;
}
.profile-img {
  position: absolute;
  top: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
}
h2 {
  margin: 0;
  font-size: 20px;
  color: #111;
}
.desc {
  font-size: 14px;
  color: #666;
  margin: 8px 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.read-more {
  color: var(--royal-purple);
  font-size: 14px;
  text-decoration: none;
  font-weight: 600;
}
.icon-book img {
  cursor: pointer;
  position: absolute;
  bottom: -10px;
  right: 16px;
  color: var(--royal-purple);
  border-radius: 50%;
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.08);
  opacity: 0.3;
}
@media (max-width: 400px) {
  .card {
    max-width: 100%;
  }
}
</style>
