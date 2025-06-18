<template>
  <div>
    <div
      class="profile-links p-3"
      style="
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
          rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
      "
    >
      <!-- Profile links -->
      <div
        class="p-links d-flex align-items-center border-bottom"
        :style="profileItem.class"
        v-for="profileItem in profileItems"
        :key="profileItem.id"
        @click="router.push(profileItem.router)"
      >
        <div class="dropdown-item px-4 py-3">
          <i>{{ profileItem.icon }}</i> {{ profileItem.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const profileItems = [
  {
    id: 1,
    label: "My Courses",
    icon: "📘",
    router: "/my-courses",
  },
  {
    id: 2,
    label: "Wishlist",
    icon: "💖",
    router: "/wishlist",
  },
  {
    id: 3,
    label: "Purchased History",
    icon: "🛒",
    router: "/purchased-history",
  },
  {
    id: 5,
    label: "Become An Instructor",
    icon: "📣",
    router: "/instructor",
  },
  {
    id: 6,
    label: "Flash Deals",
    icon: "⚡",
    router: "/flash-deals",
  },
  {
    id: 7,
    label: "Watchlist",
    icon: "📺",
    router: "/watchlist",
  },
  {
    id: 8,
    label: "Certificate Center",
    icon: "🎓",
    router: "/certificate-center",
    class: "border-0",
  },
];
</script>

<style scoped>
.p-links {
  color: var(--deep-purple);
  cursor: pointer;
}

.p-links:hover {
  color: var(--deep-purple);
}
</style>
