<template>
  <div
    class="pt-4 d-flex gap-3 container-fluid justify-content-center align-items-center bg-light border-1 border-bottom"
  >
    <router-link class="btn btn-warning" to="/" role="button">Home</router-link>

    <router-link class="btn btn-success" to="/notice" role="button"
      >notice</router-link
    >

    <router-link class="btn btn-primary" to="/rauf" role="button"
      >Rauf Task</router-link
    >
    <router-link class="btn btn-secondary" to="/layo" role="button"
      >Layo Task</router-link
    >
    <router-link class="btn btn-danger" to="/seun" role="button"
      >Seun Task</router-link
    >
    <router-link class="btn btn-dark" to="/kcee" role="button"
      >Kcee Task</router-link
    >


    <!-- <router-link
      class="btn btn-success"
      to="/taskAdditionalInfoForm"
      role="button"
      >Additional-Info</router-link
    >
    <router-link
      class="btn btn-success"
      to="/taskProfilePhotoUpload"
      role="button"
      >Profile
    </router-link>
    <router-link
      class="btn btn-success"
      to="/taskPersonalDetailsForm"
      role="button"
      >Personal-Details</router-link
    ><router-link class="btn btn-success" to="/taskPaymentForm" role="button"
      >Payment Form</router-link
    ><router-link class="btn btn-success" to="/taskStepIndicator" role="button"
      >Step Indicator</router-link
    > -->
  </div>
</template>

<script setup></script>

<style scoped>
.links {
  border: 1px solid black;
}
</style>
