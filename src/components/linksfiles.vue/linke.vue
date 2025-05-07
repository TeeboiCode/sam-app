<template>
  <div
    class="pt-4 d-flex gap-3 justify-content-center align-items-center bg-light border-1 border-bottom"
  >
    <router-link class="btn btn-warning" to="/" role="button">Home</router-link>
    <router-link
      class="btn btn-primary"
      to="/taskannouncementbanner"
      role="button"
      >Announcement</router-link
    >
    <router-link class="btn btn-primary" to="/tasktopnav" role="button"
      >Top Nav</router-link
    >
    <router-link class="btn btn-primary" to="/taskmainnav" role="button"
      >Main Nav</router-link
    >
    <router-link class="btn btn-danger" to="/taskHeroSection" role="button"
      >Hero Section</router-link
    >
    <router-link class="btn btn-info" to="/taskFooter" role="button"
      >Footer Section</router-link
    >
    <router-link class="btn btn-secondary" to="/taskLogin" role="button"
      >Login Section</router-link
    >
    <router-link class="btn btn-success" to="/taskRegister" role="button"
      >Register-Section</router-link
    >
  </div>
</template>

<script setup></script>

<style scoped></style>
