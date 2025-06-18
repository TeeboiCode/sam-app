<template>
  <div class="team-boxed">
    <div class="col-12 item">
      <div class="box">
        <div class="image">
          <img class="profile-img" src="../../assets/promo-image-4.jpg" />
        </div>
        <h3 class="name">{{ user.firstName }} {{ user.lastName }}</h3>
        <p class="title">
          {{ user.role }}
        </p>

        <p class="title">
          {{ user.id }}
        </p>

        <p class="subtitle">
          {{ user.email }}
        </p>

        <div class="social">
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-twitter-x"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useUsersStore } from "../../stores/users";

const userStore = useUsersStore();

const user = computed(() => userStore.users);

console.log(user.value);
const props = defineProps(["profile"]);
</script>

<style scoped>
.team-boxed .item {
  text-align: center;
}

.team-boxed .item .box {
  text-align: center;
  padding: 30px;
  background-color: #fff;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.team-boxed .item .name {
  font-weight: 400;
  margin-top: 28px;
  margin-bottom: 8px;
  color: inherit;
  text-transform: capitalize;
}

.team-boxed .item .title {
  text-transform: uppercase;
  font-weight: 400;
  color: #c4c1c1;
  letter-spacing: 2px;
  font-size: 13px;
}

.team-boxed .item .subtitle {
  text-transform: lowercase;
  font-weight: bold;
  color: #c4c1c1;
  letter-spacing: 2px;
  font-size: 13px;
  word-break: break-all;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  overflow: hidden;
}

.team-boxed .item .description {
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.team-boxed .social {
  font-size: 18px;
  color: #a2a8ae;
}

.team-boxed .social a {
  color: inherit;
  margin: 0 10px;
  display: inline-block;
  opacity: 0.7;
}

.team-boxed .social a:hover {
  opacity: 1;
}

.team-boxed .image {
  height: 120px;
  width: 120px;
  margin: 0 auto 15px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-boxed .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
