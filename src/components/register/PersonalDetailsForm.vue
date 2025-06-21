<template>
  <div class="PersonalDetailsForm-container">
    <div class="fade-in">
      <h4 class="text-center mb-4">Personal Details</h4>

      <!-- No <form> wrapper here -->

      <!-- Form fields -->
      <div class="mb-4">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-person"></i>
          </span>
          <input
            type="text"
            class="form-control"
            id="firstName"
            v-model="localFormData.firstName"
            @blur="
              () => {
                touched.firstName = true;
                validateField('firstName');
              }
            "
            :class="{ 'is-invalid': touched.firstName && errors.firstName }"
            required
            placeholder="Enter your first name"
          />
          <div
            class="invalid-feedback"
            v-if="touched.firstName && errors.firstName"
          >
            {{ errors.firstName }}
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-person"></i>
          </span>
          <input
            type="text"
            class="form-control"
            id="lastName"
            v-model="localFormData.lastName"
            @blur="
              () => {
                touched.lastName = true;
                validateField('lastName');
              }
            "
            :class="{ 'is-invalid': touched.lastName && errors.lastName }"
            required
            placeholder="Enter your last name"
          />
          <div
            class="invalid-feedback"
            v-if="touched.lastName && errors.lastName"
          >
            {{ errors.lastName }}
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-envelope"></i>
          </span>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="localFormData.email"
            @blur="
              () => {
                touched.email = true;
                validateField('email');
              }
            "
            :class="{ 'is-invalid': touched.email && errors.email }"
            required
            placeholder="Enter your email"
          />
          <div class="invalid-feedback" v-if="touched.email && errors.email">
            {{ errors.email }}
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-telephone"></i>
          </span>
          <input
            type="tel"
            class="form-control"
            id="phone"
            v-model="localFormData.phone"
            @blur="
              () => {
                touched.phone = true;
                validateField('phone');
              }
            "
            :class="{ 'is-invalid': touched.phone && errors.phone }"
            required
            placeholder="Enter your phone number"
          />
          <div class="invalid-feedback" v-if="touched.phone && errors.phone">
            {{ errors.phone }}
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-lock"></i>
          </span>
          <input
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            id="password"
            v-model="localFormData.password"
            @blur="
              () => {
                touched.password = true;
                validateField('password');
              }
            "
            :class="{ 'is-invalid': touched.password && errors.password }"
            required
            placeholder="Create a password"
          />
          <span
            class="input-group-text password-toggle"
            @click="togglePasswordVisibility"
          >
            <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
          </span>
          <div
            class="invalid-feedback"
            v-if="touched.password && errors.password"
          >
            {{ errors.password }}
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-lock"></i>
          </span>
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            class="form-control"
            id="confirmPassword"
            v-model="localFormData.confirmPassword"
            @blur="
              () => {
                touched.confirmPassword = true;
                validateField('confirmPassword');
              }
            "
            :class="{
              'is-invalid': touched.confirmPassword && errors.confirmPassword,
            }"
            required
            placeholder="Confirm your password"
          />
          <span
            class="input-group-text password-toggle"
            @click="toggleConfirmPasswordVisibility"
          >
            <i
              :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
            ></i>
          </span>
          <div
            class="invalid-feedback"
            v-if="touched.confirmPassword && errors.confirmPassword"
          >
            {{ errors.confirmPassword }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "validation"]);

const localFormData = ref({ ...props.modelValue });

const errors = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

// Track if a field has been touched
const touched = ref({
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  password: false,
  confirmPassword: false,
});

// Validate individual field and emit validation status
const validateField = (field) => {
  switch (field) {
    case "firstName":
      if (!localFormData.value.firstName) {
        errors.value.firstName = "First name is required";
      } else if (!/^[a-zA-Z]+$/.test(localFormData.value.firstName)) {
        errors.value.firstName = "First name should contain only letters";
      } else {
        errors.value.firstName = "";
      }
      break;
    case "lastName":
      if (!localFormData.value.lastName) {
        errors.value.lastName = "Last name is required";
      } else if (!/^[a-zA-Z]+$/.test(localFormData.value.lastName)) {
        errors.value.lastName = "Last name should contain only letters";
      } else {
        errors.value.lastName = "";
      }
      break;
    case "email":
      if (!localFormData.value.email) {
        errors.value.email = "Email is required";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localFormData.value.email)
      ) {
        errors.value.email = "Please enter a valid email address";
      } else {
        errors.value.email = "";
      }
      break;
    case "phone":
      if (!localFormData.value.phone) {
        errors.value.phone = "Phone number is required";
      } else if (!/^0\d{9,14}$/.test(localFormData.value.phone)) {
        errors.value.phone =
          "Please enter a valid phone number starting with 0";
      } else {
        errors.value.phone = "";
      }
      break;
    case "password":
      if (!localFormData.value.password) {
        errors.value.password = "Password is required";
      } else if (localFormData.value.password.length < 6) {
        errors.value.password = "Password must be at least 6 characters";
      } else {
        errors.value.password = "";
      }
      break;
    case "confirmPassword":
      if (!localFormData.value.confirmPassword) {
        errors.value.confirmPassword = "Please confirm your password";
      } else if (
        localFormData.value.confirmPassword !== localFormData.value.password
      ) {
        errors.value.confirmPassword = "Passwords do not match";
      } else {
        errors.value.confirmPassword = "";
      }
      break;
  }
};

// Validate all fields and emit overall validity
const validateAllFields = () => {
  validateField("firstName");
  validateField("lastName");
  validateField("email");
  validateField("phone");
  validateField("password");
  validateField("confirmPassword");

  // Check if all fields are valid

  const isValid = Object.values(errors.value).every((error) => !error);
  emit("validation", isValid);
};

// Call validateAllFields whenever any field changes
watch(
  localFormData,
  (newVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(props.modelValue)) {
      emit("update:modelValue", { ...newVal });
    }
    validateAllFields();
  },
  { deep: true }
);

// Call validateAllFields on mount
onMounted(() => {
  validateAllFields();
});

// Watch for changes in props.modelValue to update localFormData
watch(
  () => props.modelValue,
  (newVal) => {
    // Only update if the values are different
    if (JSON.stringify(newVal) !== JSON.stringify(localFormData.value)) {
      localFormData.value = { ...newVal };
    }
  },
  { deep: true }
);

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};
</script>

<style scoped>
/* Animation for step transitions */
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

/* Password Toggle Styles */
.password-toggle {
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--royal-purple, #6b46c1);
}


.password-toggle i {
  font-size: 0.9rem;
}
</style>
