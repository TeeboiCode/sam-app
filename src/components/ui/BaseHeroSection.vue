<template>
  <div>
    <div class="Wishlist">
      <div class="overlay-bg"></div>
      <div class="text-center">
        <h2>{{ pageTitle }}</h2>
      </div>
      <div class="list">
        <ol>
          <li class="list-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="list-item active">
            {{ pageTitle }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.Wishlist {
  background-image: url(src/assets/graduate.png);
  height: 40vh;
  position: relative;
  background-size: cover;
  /* margin-bottom: 4rem; */
}

.overlay-bg {
  position: absolute;
  inset: 0;
  background-color: rgba(123, 14, 117, 0.6);
}

.text-center {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text-center > h2 {
  font-size: 70px;
  margin-bottom: 25px;
  line-height: 1;
  color: #fff;
  letter-spacing: 1px;
}

.list {
  position: relative;
  left: 0;
  text-align: center;
  top: 94%;
  z-index: 1;
  display: inline-block;
  justify-self: center;
  display: flex;
}

ol {
  border-radius: 30px;
  background: #ffc107;
  padding: 15px 35px;
  position: relative;
  margin-bottom: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.list-item a,
.list-item.active {
  font-size: 19px;
  color: var(--text-primary);
  font-weight: 500;
  text-decoration: none;
}

.list-item + .list-item::before {
  display: inline-block;
  padding-right: 15px;
  padding-left: 10px;
  color: var(--text-primary);
  content: "|";
}

.list-item + .list-item::before {
  display: flex;
  float: left;
  flex-direction: row;
}

@media (max-width: 991px) {
  .Wishlist {
    background-position: center;
    align-items: center;
    height: 45vh;
  }
}

@media (max-width: 768px) {
  .list {
    top: 93%;
  }
}

@media (max-width: 480px) {
  .Wishlist {
    height: 40vh;
  }

  .text-center > h2 {
    font-size: 2rem;
  }

  .list {
    top: 90%;
  }

  .list-item a {
    font-size: 1rem;
  }
}
</style>
