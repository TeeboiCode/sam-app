<template>
  <div class="login-container justify-content-center py-5">
    <div class="login-card">
      <!-- Left Panel (Visual Branding Area) - Hidden on mobile -->
      <div class="login-image-panel">
        <!-- <div class="pattern-overlay"></div> -->
      </div>

      <!-- Right Panel (Login Form Section) -->
      <div class="login-form-panel">
        <div class="form-container">
          <div class="text-center mb-4">
            <div class="logo-image mb-3">
              <img src="@/assets/brand-logo.png" alt="" />
            </div>
            <h2 class="text-purple mb-2">Welcome Back</h2>
            <p class="text-muted">Sign in to continue your learning journey</p>
          </div>

          <form @submit.prevent="handleSubmit" class="fade-in">
            <div class="mb-4">
              <div class="input-group">
                <span class="input-group-text">
                  <i class="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required
                  placeholder="Email address"
                />
              </div>
            </div>

            <div class="mb-4">
              <div class="input-group">
                <span class="input-group-text">
                  <i class="fas fa-user-tag"></i>
                </span>
                <select class="form-select" v-model="role" required>
                  <option value="" disabled selected>Select your role</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                  <option value="tutor">Tutor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div class="mb-4">
              <div class="input-group">
                <span class="input-group-text">
                  <i class="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  required
                  placeholder="Password"
                />
              </div>
              <div
                class="d-flex justify-content-end align-items-center mb-2 forget-password"
              >
                <a href="#" class="text-purple small">Forgot password?</a>
              </div>
            </div>

            <div class="mb-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="remember" />
                <label class="form-check-label" for="remember">
                  Remember me
                </label>
              </div>
            </div>

            <div class="d-grid mb-4">
              <button
                type="submit"
                class="btn btn-primary btn-lg"
                :disabled="loading"
              >
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                {{ loading ? "Signing in..." : "Sign In" }}
              </button>
            </div>

            <div class="text-center">
              <p class="mb-0">
                Don't have an account?
                <router-link to="/signup" class="text-purple"
                  >Sign Up</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const role = ref('');
const loading = ref(false);

async function handleSubmit() {
  loading.value = true;
  try {
    // TODO: Implement login logic
    console.log("Login attempt with:", {
      email: email.value,
      password: password.value,
      role: role.value,
    });
  } catch (error) {
    console.error("Login error:", error);
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-md);
  background-color: var(--soft-purple);
}

.login-card {
  width: 90%;
  max-width: 1000px;
  min-height: 600px;
  display: flex;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  background-color: var(--background-white);
  margin-top: 2rem;
}

.login-image-panel {
  flex: 3;
  background-image: url("../../src/assets/qqq-min-o.png");
  background-size: cover;
  background-position: center;
  position: relative;
}

.login-form-panel {
  flex: 3;
  padding: var(--spacing-lg);
  overflow-y: auto;
  background-color: var(--background-white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 100%;
  max-width: 500px;
  padding: var(--spacing-sm);
}

.logo-image {
  width: 200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.logo-image img {
  width: 100%;
}

.form-select {
  font-size: 0.7rem;
}

.form-select option {
  font-size: 0.8rem;
}

.text-purple {
  font-size: 1.6rem;
}

.form-control::placeholder {
  color: var(--text-muted);
  opacity: 0.7;
}

.form-control {
  border: 2px solid var(--light-purple);
  padding: 0.75rem 1rem;
}

.form-control:focus {
  border-color: var(--royal-purple);
  box-shadow: 0 0 0 3px var(--soft-purple);
}

.input-group-text {
  background: var(--light-purple);
  border: none;
}

.input-group-text i {
  color: var(--royal-purple);
}

.forget-password {
  margin-bottom: 1.2rem;
}

.text-purple.small {
  font-size: 0.9rem;
}

.form-control:focus::placeholder {
  opacity: 0.5;
}

.btn {
  font-size: 1rem;
  padding: 1rem;
}

.text-center p {
  font-size: 0.95rem;
}

.text-center p a {
  font-size: 1rem;
}

.form-check-label {
  font-size: 0.9rem;
  margin-left: -0.3rem;
}

.form-check-input {
  width: 0.9rem;
  height: 0.9rem;
}

.form-check-input:checked {
  background-color: var(--royal-purple);
  border-color: var(--royal-purple);
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive styles */
@media (max-width: 991px) {
  .login-card {
    width: 95%;
  }

  .login-image-panel {
    flex: 3;
    background-image: url("../../src/assets/qqq-min-o.png");
    background-size: cover;
    background-position: center;
    position: relative;
    display: none;
  }

  .login-form-panel {
    flex: 3;
    padding: var(--spacing-lg);
    overflow-y: auto;
    background-color: var(--background-white);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    width: 100%;
    max-width: 500px;
    padding: var(--spacing-sm);
  }

  .logo-image {
    width: 230px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .logo-image img {
    width: 100%;
  }

  .form-select {
    font-size: 0.8rem;
  }

  .form-select option {
    font-size: 0.9rem;
  }

  .form-control::placeholder {
    color: var(--text-muted);
    opacity: 0.7;
  }

  .form-control {
    border: 2px solid var(--light-purple);
    padding: 0.75rem 1rem;
  }

  .form-control:focus {
    border-color: var(--royal-purple);
    box-shadow: 0 0 0 3px var(--soft-purple);
  }

  .input-group-text {
    background: var(--light-purple);
    border: none;
  }

  .input-group-text i {
    color: var(--royal-purple);
  }

  .forget-password {
    margin-bottom: 1.2rem;
  }

  .text-purple.small {
    font-size: 0.95rem;
  }

  .form-control:focus::placeholder {
    opacity: 0.5;
  }

  .form-check-label {
    font-size: 1rem;
    margin-left: -0.3rem;
  }

  .form-check-input {
    width: 0.9rem;
    height: 0.9rem;
  }

  .form-check-input:checked {
    background-color: var(--royal-purple);
    border-color: var(--royal-purple);
  }

  .btn {
    font-size: 1.1rem;
    padding: 1rem;
  }

  .text-center p {
    font-size: 1rem;
  }

  .text-center p a {
    font-size: 1.1rem;
  }

  .mb-4 {
    margin-bottom: 1.5rem;
  }

  .fade-in {
    animation: fadeIn 0.4s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* Responsive styles for mobile devices */
@media (max-width: 768px) {
  .login-card {
    width: 100%;
    flex-direction: column;
  }

  .login-form-panel {
    padding: var(--spacing-md);
  }

  .form-control,
  .form-select {
    font-size: 1.1rem;
    padding: 0.8rem;
  }

  .btn {
    font-size: 1.1rem;
    padding: 0.8rem 1.5rem;
  }

  .input-group-text {
    font-size: 1.1rem;
    padding: 0.8rem;
  }
}
</style>
