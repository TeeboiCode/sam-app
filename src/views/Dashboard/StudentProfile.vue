<template>
  <div class="student-profile my-5">
    <div class="container py-3">
      <div class="row">
        <div class="col-lg-3 col-md-5">
          <div class="profile-sidebar">
            <ProfileCardVue />
            <ProfileLink class="d-none d-md-block" />
          </div>
        </div>
        <div class="col-lg-9 col-md-7">
          <ProfileFrom />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileCardVue from "../../components/dashboardComponent/ProfileCard.vue";
import ProfileFrom from "../../components/dashboardComponent/ProfileForm.vue";
import ProfileLink from "../../components/dashboardComponent/ProfileLinks.vue";
</script>

<style lang="scss" scoped></style>
