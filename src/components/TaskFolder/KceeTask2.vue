<template>
  <div class="form-container">
    <div class="form-card">
      <h2 class="form-title">Send a Message</h2>
      <form @submit.prevent="handleSubmit" class="form-body">
        <input
          type="text"
          v-model="form.name"
          placeholder="Name"
          class="form-input"
        />
        <input
          type="email"
          v-model="form.email"
          placeholder="E-mail address"
          class="form-input"
        />
        <textarea
          v-model="form.message"
          placeholder="Message"
          class="form-input"
          rows="4"
        ></textarea>
        <p class="form-note">
          By submitting, you agree to the processing of your personal data by Tuba as described in the Privacy Statement.
        </p>
        <button type="submit" class="form-button">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form Submitted:', form)

}
</script>

<style scoped>
.form-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
}

.form-card {
  background-color: white;
  padding: 30px 25px;
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--royal-purple);
              
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-input {
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  background-color: transparent;
  color: #000;
}

.form-input:focus {
  border-color: var(--royal-purple);
}

.form-note {
  font-size: 11px;
  color: #888;
  margin-top: -5px;
}

.form-button {
  position: relative;
  background-color: var(--royal-purple);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 25px;
  font-size: 15px;
  cursor: pointer;
  margin-top: 5px;
  overflow: hidden; 
  z-index: 1;
}

.form-button::before{
  content: '';
  position: absolute;
  width: 10px; 
  height: 10px; 
  border-radius: 50%; 
  background-color: hsl(0, 0%, 100%, 0.3); 
  transform: translate(-50%, -50%) scale(0);
  top: 50%;
  left: 50%; 
  opacity: 0;
  transition:  transform .85s ease-in-out, opacity .8s ease-in-out 0.2s ;
  z-index: 0;
}

.form-button:hover:before{
  transform: translate(-50%, -50%) scale(40); 
  opacity: 1; 
}


</style>


