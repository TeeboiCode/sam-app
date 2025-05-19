<template>
  <div class="fade-in">
    <h2 class="text-center mb-4">AdditionalInfo Form</h2>

    <div class="mb-4">
      <select
        class="form-control"
        id="maritalStatus"
        v-model="localFormData.maritalStatus"
        @blur="
          () => {
            touched.maritalStatus = true;
            validateField('maritalStatus');
          }
        "
        :class="{ 'is-invalid': touched.maritalStatus && errors.maritalStatus }"
        required
      >
        <option value="" disabled>Select Marital Status</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
        <option value="Widowed">Widowed</option>
      </select>
      <div
        class="invalid-feedback"
        v-if="touched.maritalStatus && errors.maritalStatus"
      >
        {{ errors.maritalStatus }}
      </div>
    </div>

    <div class="mb-4">
      <input
        type="date"
        class="form-control"
        id="dob"
        v-model="localFormData.dob"
        @blur="
          () => {
            touched.dob = true;
            validateField('dob');
          }
        "
        :class="{ 'is-invalid': touched.dob && errors.dob }"
        required
      />
      <div class="invalid-feedback" v-if="touched.dob && errors.dob">
        {{ errors.dob }}
      </div>
    </div>

    <div class="mb-4">
      <input
        type="text"
        class="form-control"
        id="state"
        v-model="localFormData.state"
        @blur="
          () => {
            touched.state = true;
            validateField('state');
          }
        "
        :class="{ 'is-invalid': touched.state && errors.state }"
        placeholder="State"
        required
      />
      <div class="invalid-feedback" v-if="touched.state && errors.state">
        {{ errors.state }}
      </div>
    </div>

    <div class="mb-4">
      <input
        type="text"
        class="form-control"
        id="localGovt"
        v-model="localFormData.localGovt"
        @blur="
          () => {
            touched.localGovt = true;
            validateField('localGovt');
          }
        "
        :class="{ 'is-invalid': touched.localGovt && errors.localGovt }"
        placeholder="Local Government"
        required
      />
      <div
        class="invalid-feedback"
        v-if="touched.localGovt && errors.localGovt"
      >
        {{ errors.localGovt }}
      </div>
    </div>

    <div class="mb-4">
      <textarea
        class="form-control"
        id="address"
        v-model="localFormData.address"
        @blur="
          () => {
            touched.address = true;
            validateField('address');
          }
        "
        :class="{ 'is-invalid': touched.address && errors.address }"
        placeholder="Address"
        required
      ></textarea>
      <div class="invalid-feedback" v-if="touched.address && errors.address">
        {{ errors.address }}
      </div>
    </div>

    <div class="mb-4">
      <input
        type="text"
        class="form-control"
        id="nationality"
        v-model="localFormData.nationality"
        @blur="
          () => {
            touched.nationality = true;
            validateField('nationality');
          }
        "
        :class="{ 'is-invalid': touched.nationality && errors.nationality }"
        placeholder="Nationality"
        required
      />
      <div
        class="invalid-feedback"
        v-if="touched.nationality && errors.nationality"
      >
        {{ errors.nationality }}
      </div>
    </div>

    <div class="mb-4">
      <input
        type="text"
        class="form-control"
        id="nin"
        v-model="localFormData.nin"
        @blur="
          () => {
            touched.nin = true;
            validateField('nin');
          }
        "
        :class="{ 'is-invalid': touched.nin && errors.nin }"
        placeholder="National ID Number (NIN)"
        required
      />
      <div class="invalid-feedback" v-if="touched.nin && errors.nin">
        {{ errors.nin }}
      </div>
    </div>

    <div class="mb-4">
      <select
        class="form-control"
        id="department"
        v-model="localFormData.department"
        @blur="
          () => {
            touched.department = true;
            validateField('department');
          }
        "
        :class="{ 'is-invalid': touched.department && errors.department }"
        required
      >
        <option disabled selected>Select Department</option>
        <option value="Science">Science</option>
        <option value="Commercial">Commercial</option>
        <option value="Art">Art</option>
      </select>
      <div
        class="invalid-feedback"
        v-if="touched.department && errors.department"
      >
        {{ errors.department }}
      </div>
    </div>

    <div class="mb-4">
      <select
        class="form-control"
        id="gender"
        v-model="localFormData.gender"
        @blur="
          () => {
            touched.gender = true;
            validateField('gender');
          }
        "
        :class="{ 'is-invalid': touched.gender && errors.gender }"
        required
      >
        <option disabled selected>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div class="invalid-feedback" v-if="touched.gender && errors.gender">
        {{ errors.gender }}
      </div>
    </div>

    <div class="mb-4 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="privacyPolicy"
        v-model="localFormData.privacyPolicy"
        @blur="
          () => {
            touched.privacyPolicy = true;
            validateField('privacyPolicy');
          }
        "
        :class="{ 'is-invalid': touched.privacyPolicy && errors.privacyPolicy }"
        required
      />
      <label class="form-check-label" for="privacyPolicy">
        I agree to the privacy policy and terms of service
      </label>
      <div
        class="invalid-feedback"
        v-if="touched.privacyPolicy && errors.privacyPolicy"
      >
        {{ errors.privacyPolicy }}
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
  maritalStatus: "",
  dob: "",
  state: "",
  localGovt: "",
  address: "",
  nationality: "",
  nin: "",
  department: "",
  gender: "",
  privacyPolicy: "",
});

const touched = ref({
  maritalStatus: false,
  dob: false,
  state: false,
  localGovt: false,
  address: false,
  nationality: false,
  nin: false,
  department: false,
  gender: false,
  privacyPolicy: false,
});

const validateField = (field) => {
  switch (field) {
    case "maritalStatus":
      errors.value.maritalStatus = !localFormData.value.maritalStatus
        ? "Marital status is required"
        : "";
      break;
    case "dob":
      errors.value.dob = !localFormData.value.dob
        ? "Date of birth is required"
        : "";
      break;
    case "state":
      errors.value.state = !localFormData.value.state
        ? "State is required"
        : "";
      break;
    case "localGovt":
      errors.value.localGovt = !localFormData.value.localGovt
        ? "Local government is required"
        : "";
      break;
    case "address":
      errors.value.address = !localFormData.value.address
        ? "Address is required"
        : "";
      break;
    case "nationality":
      errors.value.nationality = !localFormData.value.nationality
        ? "Nationality is required"
        : "";
      break;
    case "nin":
      errors.value.nin = !localFormData.value.nin ? "NIN is required" : "";
      break;
    case "department":
      errors.value.department = !localFormData.value.department
        ? "Department is required"
        : "";
      break;
    case "gender":
      errors.value.gender = !localFormData.value.gender
        ? "Gender is required"
        : "";
      break;
    case "privacyPolicy":
      errors.value.privacyPolicy = !localFormData.value.privacyPolicy
        ? "You must agree to the privacy policy"
        : "";
      break;
  }
};

const validateAllFields = () => {
  validateField("maritalStatus");
  validateField("dob");
  validateField("state");
  validateField("localGovt");
  validateField("address");
  validateField("nationality");
  validateField("nin");
  validateField("department");
  validateField("gender");
  validateField("privacyPolicy");
  const isValid = Object.values(errors.value).every((error) => !error);
  emit("validation", isValid);
};

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

onMounted(() => {
  validateAllFields();
});

watch(
  () => props.modelValue,
  (newVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(localFormData.value)) {
      localFormData.value = { ...newVal };
    }
  },
  { deep: true }
);
</script>

<style scoped>
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
</style>
