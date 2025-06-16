<template>
  <div class="register-card bg-white rounded-4 shadow">
    <div class="text-start mb-4">
      <h3 class="text-purple mb-4">Forget Password</h3>
      <p class="text-muted">
        Enter the email address you used to create the account. We’ll email you
        instructions to reset your password.
      </p>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-envelope"></i>
          </span>
          <input
            type="email"
            class="form-control"
            placeholder="Enter your email"
            v-model="formData.email"
          />
        </div>
      </div>

      <div class="button-group">
        <button class="w-100 btn btn-primary" type="submit">
          Send Reset Email
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
const emit = defineEmits(["sendResetEmail"]);

const formData = ref({
  email: "",
});

function isValidEmail(emailValue) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(emailValue);
}

const handleSubmit = () => {
  if (formData.value.email === "") {
    return Swal.fire({
      icon: "warning",
      title: "Email is required.",
      showConfirmButton: true,
      timer: 1500,
    });
  } else if (!isValidEmail(formData.value.email)) {
    return Swal.fire({
      icon: "warning",
      title: "Please enter a valid email address.",
      showConfirmButton: true,
      timer: 1500,
    });
  } else {
    emit("sendResetEmail", formData.value.email);
  }
};
</script>

<style scoped></style>
