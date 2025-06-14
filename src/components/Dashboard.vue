<template>
  <div>
    <h3>Student Dashboard</h3>
    <p>Logged in as: {{ userStore.users }}</p>
  </div>
</template>

<script setup>
import { useUsersStore } from "../stores/users";

const userStore = useUsersStore();

console.log(userStore.users);
</script>

<style lang="scss" scoped></style>
