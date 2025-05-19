<template>
  <div
    class="register-container d-flex justify-content-center align-items-center overflow-hidden"
  >
    <div class="container">
      <div
        class="row justify-content-center align-items-center min-vh-100 py-5"
      >
        <div class="col-md-8 col-lg-6">
          <div class="register-card bg-white rounded-4 shadow">
            <div class="text-center mb-4">
              <div class="icon-circle mb-3">
                <i class="bi bi-person-plus text-purple"></i>
              </div>
              <h2 class="text-purple mb-2">Create Account</h2>
              <p class="text-muted">
                Join our community of learners and educators
              </p>
            </div>

            <form @submit.prevent="handleSubmit">
              <!-- Step Indicators start -->
              <div class="step-indicators mb-5">
                <div class="d-flex justify-content-between">
                  <div class="step" :class="{ active: currentStep >= 1 }">
                    <div class="step-circle">
                      <i class="bi bi-person"></i>
                    </div>
                    <div class="step-label">Account</div>
                  </div>
                  <div class="step" :class="{ active: currentStep >= 2 }">
                    <div class="step-circle">
                      <i class="bi bi-person-fill-add"></i>
                    </div>
                    <div class="step-label">Payment</div>
                  </div>
                  <div class="step" :class="{ active: currentStep >= 3 }">
                    <div class="step-circle">
                      <i class="bi bi-credit-card"></i>
                    </div>
                    <div class="step-label">Complete</div>
                  </div>
                </div>
              </div>
              <!-- Step Indicators end -->

              <!-- Step 1: Personal Details -->
              <div v-if="currentStep === 1">
                <PersonalDetailsForm
                  v-model="formData"
                  @validation="(valid) => (isStep1Valid = valid)"
                />
                <div class="button-group">
                  <button
                    class="w-100 btn btn-primary"
                    type="button"
                    @click="nextStep"
                    :disabled="!isStep1Valid"
                  >
                    Continue
                  </button>
                </div>
              </div>
              <!-- Step 1: Personal Details -->

              <!-- Step 2: Additional Information -->
              <div v-if="currentStep === 2">
                <AdditionalInfoForm
                  v-model="formData"
                  @validation="(valid) => (isStep2Valid = valid)"
                />
                <div
                  class="button-group d-flex justify-content-between align-items-center"
                >
                  <button
                    type="button"
                    @click="prevStep"
                    class="btn btn-primary"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    @click="nextStep"
                    :disabled="!isStep2Valid"
                    class="btn btn-primary"
                  >
                    Continue
                  </button>
                </div>
              </div>
              <!-- Step 2: Additional Information end -->

              <!-- Step 3: Payment -->
              <div class="step" v-if="currentStep === 3">
                <PaymentForm
                  v-model="formData"
                  @click-payment="(valid) => (isPaymentComplete = valid)"
                />
                <div
                  class="button-group mt-4 d-flex justify-content-between align-items-center"
                >
                  <button
                    type="button "
                    class="btn btn-primary"
                    @click="prevStep"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="!isPaymentComplete"
                  >
                    Complete Registration
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PersonalDetailsForm from "../components/register/PersonalDetailsForm.vue";
import AdditionalInfoForm from "../components/register/AdditionalInfoForm.vue";
import PaymentForm from "../components/register/PaymentForm.vue";
import { ref, watch } from "vue";

const currentStep = ref(1);
const isStep1Valid = ref(false);
const isStep2Valid = ref(false);
const isPaymentComplete = ref(false);

const formData = ref({
  // Step 1: Personal Details
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  // Step 2: Additional Information
  maritalStatus: "",
  dob: "",
  state: "",
  localGovt: "",
  address: "",
  nationality: "",
  nin: "",
  department: "",
  gender: "",
  privacyPolicy: false,
  // // Step 3: Payment
});

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++;
  }
};

function handleSubmit() {
  nextStep();
  console.log("Submitted form data:", formData.value);
}

watch(
  formData,
  (newVal) => {
    console.log("Updated formData:", newVal);
  },
  { deep: true }
);

// <AdditionalInfoForm
//                   v-model="formData"
//                   @validation="(valid) => (isStep2Valid = valid)"
//                 />
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background-color: #f5f5f5;
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
    margin: var(--spacing-md);
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
