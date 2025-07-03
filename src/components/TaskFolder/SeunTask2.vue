<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card shadow-lg p-4 p-md-5 mx-auto w-100" style="background: #212529; max-width: 400px; border-radius: 18px;">
      <h2 class="mb-4 text-white fw-bold">Make A Contact</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <input
            v-model="form.firstName"
            type="text"
            class="form-control rounded-3"
            :class="{ 'is-invalid': errors.firstName }"
            placeholder="First Name"
          />
        </div>
        <div class="mb-3">
          <input
            v-model="form.email"
            type="email"
            class="form-control rounded-3"
            :class="{ 'is-invalid': errors.email }"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <input
            v-model="form.phone"
            type="tel"
            class="form-control rounded-3"
            :class="{ 'is-invalid': errors.phone }"
            placeholder="Phone No."
          />
        </div>
        <div class="mb-3">
          <textarea
            v-model="form.comments"
            class="form-control rounded-3"
            :class="{ 'is-invalid': errors.comments }"
            placeholder="Write comments"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-warning w-50 fw-bold d-flex align-items-center gap-2 p-2">
          Submit Now
          <span class="ms-1">&#8594;</span>
        </button>
        <div v-if="success" class="alert alert-success mt-3 text-center py-2">
          Thank you! Your message has been sent.
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  firstName: '',
  email: '',
  phone: '',
  comments: ''
})
const errors = reactive({
  firstName: false,
  email: false,
  phone: false,
  comments: false
})
const success = ref(false)

function handleSubmit() {
  errors.firstName = !form.firstName
  errors.email = !form.email || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)
  errors.phone = !form.phone
  errors.comments = !form.comments

  if (!errors.firstName && !errors.email && !errors.phone && !errors.comments) {
    success.value = true
    setTimeout(() => {
      form.firstName = ''
      form.email = ''
      form.phone = ''
      form.comments = ''
      success.value = false
    }, 3000)
  }
}
</script>

<style scoped>
/* Remove unused .contact-card and related custom styles. Bootstrap handles responsiveness. */
</style> 