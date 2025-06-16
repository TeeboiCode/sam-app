<template>
  <div class="register">
    <div
      class="register-container d-flex justify-content-center align-items-center overflow-hidden"
    >
      <div class="container">
        <div
          class="row justify-content-center align-items-center min-vh-100 py-5"
        >
          <div class="col-md-8 col-lg-6">
            <forgetPwFormVue
              @sendResetEmail="handleResetEmail"
              v-if="currentStep === 1"
            />

            <forgetPwMessageCardVue v-if="currentStep === 2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import forgetPwFormVue from "@/components/forgetPassword/forgetPwForm.vue";
import forgetPwMessageCardVue from "@/components/forgetPassword/ForgetPwMessageCard.vue";
import { ref } from "vue";
import { useUsersStore } from "../stores/users";

const usersStore = useUsersStore();
const currentStep = ref(1);

const handleNextStep = () => {
  currentStep.value++;
};

async function handleResetEmail(email) {
  if (email) {
    const result = await usersStore.forgetPassword(email);

    if (result) {
      handleNextStep();
    }
  }
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background-color: var(--soft-purple);
}

.register-card {
  padding: 2rem;
  width: 100%;
  max-width: 600px;
}

.step-indicators {
  position: relative;
  padding: 0 40px;
}

.step-indicators::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 60px;
  right: 60px;
  height: 2px;
  background: var(--gradient-soft);
  z-index: 1;
}

.step {
  position: relative;
  z-index: 2;
  text-align: center;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--light-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
  transition: var(--transition-normal);
}

.step.active .step-circle {
  background: var(--gradient-primary);
  color: white;
}

.step-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  transition: var(--transition-normal);
}

.step.active .step-label {
  color: var(--royal-purple);
  font-weight: 500;
}

@media (max-width: 768px) {
  .register-card {
    padding: var(--spacing-lg);
    /* margin: var(--spacing-md); */
  }

  .register::before {
    display: none;
  }

  .role-options {
    grid-template-columns: 1fr;
  }

  .step-indicators {
    padding: 0 20px;
  }

  .step-indicators::before {
    left: 40px;
    right: 40px;
  }
}
</style>
