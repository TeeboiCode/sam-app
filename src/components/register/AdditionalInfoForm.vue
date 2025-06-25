<template>
  <div class="fade-in">
    <h2 class="text-center mb-4">AdditionalInfo Form</h2>
    
    <div class="mb-4">
      <v-select
        v-model="localFormData.maritalStatus"
        :options="maritalStatusOptions"
        :reduce="val => val.value"
        label="label"
        placeholder="Select Marital Status"
        :searchable="false"
        :class="{ 'is-invalid': touched.maritalStatus && errors.maritalStatus }"
        @blur="
          () => {
            touched.maritalStatus = true;
            validateField('maritalStatus');
          }
        "
        @input="validateField('maritalStatus')"
        :clearable="false"
      >
        <template #no-options>
          <div class="text-muted">No options available</div>
        </template>
      </v-select>
      <div
        class="invalid-feedback d-block"
        v-if="touched.maritalStatus && errors.maritalStatus"
      >
        {{ errors.maritalStatus }}
      </div>
    </div>

    <div class="mb-4">
      <div class="date-input-container">
        <input
          type="text"
          class="form-control"
          id="dob"
          v-model="displayDate"
          @focus="showCalendar = true"
          @input="handleDateInput"
          @blur="
            () => {
              touched.dob = true;
              validateField('dob');
            }
          "
          :class="{ 'is-invalid': touched.dob && errors.dob }"
          placeholder="Select Date of Birth or type (MM/DD/YYYY)"
          required
        />
        <div class="calendar-icon" @click="showCalendar = true">
          <i class="fas fa-calendar-alt"></i>
        </div>

        <!-- Custom Calendar Dropdown -->
        <div v-if="showCalendar" class="calendar-dropdown">
          <!-- Year Picker View -->
          <div v-if="showYearPicker" class="year-picker-view">
            <div class="calendar-header">
              <button @click="showYearPicker = false" class="calendar-nav-btn">
                <i class="fas fa-chevron-left"></i>
              </button>
              <span class="calendar-title">Select Year</span>
              <div style="width: 40px"></div>
            </div>

            <div class="year-list">
              <div
                v-for="year in availableYears"
                :key="year"
                @click.stop="selectYear(year)"
                :class="[
                  'year-item',
                  { selected: year === currentDate.getFullYear() },
                ]"
              >
                {{ year }}
              </div>
            </div>
          </div>

          <!-- Month Picker View -->
          <div v-else-if="showMonthPicker" class="month-picker-view">
            <div class="calendar-header">
              <button @click="showMonthPicker = false" class="calendar-nav-btn">
                <i class="fas fa-chevron-left"></i>
              </button>
              <span class="calendar-title">Select Month</span>
              <div style="width: 40px"></div>
            </div>

            <div class="month-list">
              <div
                v-for="month in availableMonths"
                :key="month.value"
                @click.stop="selectMonth(month.value)"
                :class="[
                  'month-item',
                  { selected: month.value === currentDate.getMonth() },
                ]"
              >
                {{ month.label }}
              </div>
            </div>
          </div>

          <!-- Regular Calendar View -->
          <div v-else>
            <div class="calendar-header">
              <button @click="previousMonth" class="calendar-nav-btn">
                <i class="fas fa-chevron-left"></i>
              </button>
              <span class="calendar-title">
                <span
                  @click.stop="showMonthPicker = true"
                  class="month-clickable"
                  >{{ currentMonthName }}</span
                >
                <span
                  @click.stop="showYearPicker = true"
                  class="year-clickable"
                  >{{ currentYear }}</span
                >
              </span>
              <button @click="nextMonth" class="calendar-nav-btn">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>

            <div class="calendar-weekdays">
              <div v-for="day in weekDays" :key="day" class="weekday">
                {{ day }}
              </div>
            </div>

            <div class="calendar-days">
              <div
                v-for="day in calendarDays"
                :key="day.date"
                @click="selectDate(day.date)"
                :class="[
                  'calendar-day',
                  { 'other-month': !day.currentMonth },
                  { selected: isSelectedDate(day.date) },
                  { today: isToday(day.date) },
                ]"
              >
                {{ day.dayNumber }}
              </div>
            </div>

            <div class="calendar-footer">
              <button
                @click="selectToday"
                class="btn btn-sm btn-outline-primary"
              >
                Today
              </button>
              <button
                @click="clearDate"
                class="btn btn-sm btn-outline-secondary"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
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
        @input="validateField('state')"
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
        @input="validateField('localGovt')"
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
        @input="validateField('address')"
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
        @input="validateField('nationality')"
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
        @input="validateField('nin')"
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
        @input="validateField('department')"
        :class="{ 'is-invalid': touched.department && errors.department }"
        required
      >
        <option value="" disabled selected>Select your department</option>
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
        @input="validateField('gender')"
        :class="{ 'is-invalid': touched.gender && errors.gender }"
        required
      >
        <option value="" disabled selected>Select your gender</option>
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
        @input="validateField('privacyPolicy')"
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
import { ref, watch, onMounted, computed } from "vue";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

// Marital status options
const maritalStatusOptions = [
  { label: 'Single', value: 'Single' },
  { label: 'Married', value: 'Married' },
  { label: 'Divorced', value: 'Divorced' },
  { label: 'Widowed', value: 'Widowed' }
];

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

// Calendar functionality
const showCalendar = ref(false);
const showYearPicker = ref(false);
const showMonthPicker = ref(false);
const currentDate = ref(new Date());
const selectedDate = ref(null);

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const availableYears = computed(() => {
  const currentYear = new Date().getFullYear();
  const years = [];
  // Generate years from current year down to 1900
  for (let year = currentYear; year >= 1900; year--) {
    years.push(year);
  }
  return years;
});

const availableMonths = computed(() => {
  const months = [
    { value: 0, label: "January" },
    { value: 1, label: "February" },
    { value: 2, label: "March" },
    { value: 3, label: "April" },
    { value: 4, label: "May" },
    { value: 5, label: "June" },
    { value: 6, label: "July" },
    { value: 7, label: "August" },
    { value: 8, label: "September" },
    { value: 9, label: "October" },
    { value: 10, label: "November" },
    { value: 11, label: "December" },
  ];
  return months;
});

const displayDate = computed({
  get() {
    if (!localFormData.value.dob) return "";

    // Parse the ISO date string and create a local date
    const [year, month, day] = localFormData.value.dob.split("-").map(Number);
    const localDate = new Date(year, month - 1, day);

    if (isNaN(localDate.getTime())) return "";

    return localDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  },
  set(value) {
    // Handle manual input
    if (value) {
      handleManualDateInput(value);
    }
  },
});

const currentMonthName = computed(() => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[currentDate.value.getMonth()];
});

const currentYear = computed(() => {
  return currentDate.value.getFullYear();
});

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days = [];
  const currentDateObj = new Date();

  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    days.push({
      date: date.toISOString().split("T")[0],
      dayNumber: date.getDate(),
      currentMonth: date.getMonth() === month,
      isToday: date.toDateString() === currentDateObj.toDateString(),
    });
  }

  return days;
});

const selectDate = (dateString) => {
  // Parse the date string and create a date in local timezone
  const [year, month, day] = dateString.split("-").map(Number);
  const localDate = new Date(year, month - 1, day);
  const formattedDate = localDate.toISOString().split("T")[0];

  localFormData.value.dob = formattedDate;
  selectedDate.value = formattedDate;
  showCalendar.value = false;
  showYearPicker.value = false;
  showMonthPicker.value = false;
  validateField("dob");
};

const selectYear = (year) => {
  // Get the current day and month from the currentDate
  const currentDay = currentDate.value.getDate();
  const currentMonth = currentDate.value.getMonth();

  // Create new date with selected year, maintaining day and month
  const newDate = new Date(year, currentMonth, currentDay);

  // If the day doesn't exist in the new year (e.g., Feb 29 in non-leap year), use the last day of the month
  if (newDate.getMonth() !== currentMonth) {
    newDate.setDate(0); // Last day of the previous month
  }

  currentDate.value = newDate;
  showYearPicker.value = false; // Only close year picker, keep calendar open

  // If there was a previously selected date, update it with the new year
  if (selectedDate.value) {
    const selectedDateObj = new Date(selectedDate.value);
    const updatedSelectedDate = new Date(
      year,
      selectedDateObj.getMonth(),
      selectedDateObj.getDate()
    );

    // Check if the date is valid in the new year
    if (
      updatedSelectedDate.getMonth() === selectedDateObj.getMonth() &&
      updatedSelectedDate.getDate() === selectedDateObj.getDate()
    ) {
      // Update the selected date without triggering full validation
      const newDateString = updatedSelectedDate.toISOString().split("T")[0];
      selectedDate.value = newDateString;

      // Temporarily disable the watch to prevent calendar closing
      const originalDob = localFormData.value.dob;
      localFormData.value.dob = newDateString;

      // Only validate the DOB field, not all fields
      errors.value.dob = !localFormData.value.dob
        ? "Date of birth is required"
        : "";
    }
  }
};

const selectMonth = (month) => {
  currentDate.value = new Date(currentDate.value.getFullYear(), month, 1);
  showMonthPicker.value = false;
  validateField("dob");
};

const isSelectedDate = (dateString) => {
  return selectedDate.value === dateString;
};

const isToday = (dateString) => {
  const today = new Date().toISOString().split("T")[0];
  return dateString === today;
};

const previousMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  );
};

const nextMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  );
};

const selectToday = () => {
  const today = new Date().toISOString().split("T")[0];
  selectDate(today);
};

const clearDate = () => {
  localFormData.value.dob = "";
  selectedDate.value = null;
  showCalendar.value = false;
  showYearPicker.value = false;
  showMonthPicker.value = false;
  validateField("dob");
};

// Close calendar when clicking outside
const closeCalendar = (event) => {
  if (!event.target.closest(".date-input-container")) {
    showCalendar.value = false;
    showYearPicker.value = false;
    showMonthPicker.value = false;
  }
};

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

  // Debug logging
  console.log("Form Data:", localFormData.value);
  console.log("Errors:", errors.value);
  console.log("Is Valid:", isValid);

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
  document.addEventListener("click", closeCalendar);
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

const handleManualDateInput = (inputValue) => {
  // Try different date formats
  const formats = [
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/, // MM/DD/YYYY
    /^(\d{1,2})-(\d{1,2})-(\d{4})$/, // MM-DD-YYYY
    /^(\d{4})-(\d{1,2})-(\d{1,2})$/, // YYYY-MM-DD
  ];

  for (const format of formats) {
    const match = inputValue.match(format);
    if (match) {
      let month, day, year;

      if (format.source.includes("YYYY")) {
        // YYYY-MM-DD format
        [year, month, day] = match.slice(1).map(Number);
      } else {
        // MM/DD/YYYY or MM-DD-YYYY format
        [month, day, year] = match.slice(1).map(Number);
      }

      // Validate date
      if (
        month >= 1 &&
        month <= 12 &&
        day >= 1 &&
        day <= 31 &&
        year >= 1900 &&
        year <= 2100
      ) { 
        const date = new Date(year, month - 1, day);

        // Check if the date is valid (handles leap years, etc.)
        if (
          date.getFullYear() === year &&
          date.getMonth() === month - 1 &&
          date.getDate() === day
        ) {
          const formattedDate = date.toISOString().split("T")[0];
          localFormData.value.dob = formattedDate;
          selectedDate.value = formattedDate;
          currentDate.value = new Date(date);
          showCalendar.value = false;
          showYearPicker.value = false;
          showMonthPicker.value = false;
          validateField("dob");
          return;
        }
      }
    }
  }

  // If no valid format found, just update the display value
  // but don't update the actual date
};

const handleDateInput = (event) => {
  const inputValue = event.target.value;

  // If input is empty, clear the date
  if (!inputValue.trim()) {
    localFormData.value.dob = "";
    selectedDate.value = null;
    validateField("dob");
    return;
  }

  // Try to parse the input
  handleManualDateInput(inputValue);
};
</script>

<style scoped>
/* Form validation styles */
.is-Invalid .vs__dropdown-toggle,
.is-Invalid.vs__dropdown-toggle {
  border-color: #dc3545 !important; 
}

.is-Invalid .vs__dropdown-toggle:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

/* For regular form controls */
.is-invalid:not(.vs__dropdown-toggle) {
  border-color: #dc3545 !important;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.is-invalid:not(.vs__dropdown-toggle):focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.invalid-feedback {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

/* vue-select styles to match Bootstrap form controls */

:deep(.vs__dropdown-toggle) {
  padding: 0.375rem 1rem;
  margin: 0;
  border: 2px solid var(--light-purple);
  border-radius: 0.5rem;
  min-height: 38px;
  background-color: #fff;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}


:deep(.vs__selected) {
  margin: 0;
  padding: 0.375rem 0 !important;
  color: var(--text-primary);
  font-size: 1rem;
}

:deep(.vs__dropdown-menu) {
  border: 1px solid #ced4da;
  border-top: none;
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-top: 0;
  width: 100%;
}

:deep(.vs__dropdown-option) {
  padding: 0.5rem 1rem;
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.5;
}

:deep(.vs__dropdown-option--highlight) {
  background: var(--royal-purple);
  color: #fff;
}

:deep(.vs__clear),
:deep(.vs__open-indicator) {
  fill: var(--royal-purple);
  width: 13px;
  height: 13px;
  padding: 2px;
  box-sizing: content-box;
}

:deep(.vs--open .vs__dropdown-toggle) {
  border-color: var(--light-purple);
  box-shadow: 0 0 0 0.2rem rgba(107, 70, 193, 0.25);
}



:deep(.vs--single .vs__selected) {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.375rem 0.75rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

:deep(.vs--single.vs--open .vs__selected) {
  opacity: 0.4;
}

:deep(.vs__search) {
  padding: 0.3rem 0;
}

/* Focus state */
:deep(.vs__dropdown-toggle:focus) {
  border: 2px solid var(--royal-purple);
  box-shadow: 0 0 0 0.2rem rgba(107, 70, 193, 0.25);
}

/* Error state */
:deep(.is-invalid .vs__dropdown-toggle) {
  border-color: #dc3545;
}

:deep(.is-invalid .vs__dropdown-toggle:focus) {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

/* Disabled state */
:deep(.vs--disabled .vs__dropdown-toggle) {
  background-color: #e9ecef;
  cursor: not-allowed;
}

:deep(.vs--disabled .vs__clear),
:deep(.vs--disabled .vs__open-indicator) {
  display: none;
}


/* Make sure the select has the same height as other form controls */
:deep(.v-select) {
  width: 100%;
}

:deep(.vs__selected-options) {
  padding: 0;
  flex: 1 1 auto;
}

:deep(.vs__actions) {
  padding: 4px 6px 0 8px;
  display: flex;
  align-items: center;
  min-width: 24px;
}

:deep(.vs__search::placeholder) {
  color: #6c757d;
  opacity: 1;
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

/* Date Input Container */
.date-input-container {
  position: relative;
}

.calendar-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--royal-purple, #6b46c1);
  cursor: pointer;
}

/* Calendar Dropdown */
.calendar-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin-top: 4px;
  padding: 12px;
  min-width: 200px;
}

/* Year Picker View */
.year-picker-view {
  min-height: 300px;
}

.year-list {
  max-height: 220px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-top: 12px;
}

.year-item {
  text-align: center;
  padding: 8px 4px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.875rem;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.year-item:hover {
  background-color: var(--soft-purple, #f3f4f6);
  border-color: var(--light-purple, #e5e7eb);
}

.year-item.selected {
  background-color: var(--royal-purple, #6b46c1);
  color: white;
  font-weight: 600;
}

/* Month Picker View */
.month-picker-view {
  min-height: 300px;
}

.month-list {
  max-height: 220px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-top: 12px;
}

.month-item {
  text-align: center;
  padding: 8px 4px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.875rem;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.month-item:hover {
  background-color: var(--soft-purple, #f3f4f6);
  border-color: var(--light-purple, #e5e7eb);
}

.month-item.selected {
  background-color: var(--royal-purple, #6b46c1);
  color: white;
  font-weight: 600;
}

/* Calendar Header */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.calendar-nav-btn {
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  border-radius: 4px;
  color: var(--royal-purple, #6b46c1);
  transition: background-color 0.2s;
}

.calendar-nav-btn:hover {
  background-color: var(--soft-purple, #f3f4f6);
}

.calendar-title {
  font-weight: 600;
  font-size: 1rem;
  color: var(--royal-purple, #6b46c1);
  cursor: pointer;
  transition: color 0.2s;
}

.month-clickable,
.year-clickable {
  cursor: pointer;
  transition: color 0.2s;
  padding: 2px 4px;
  border-radius: 3px;
}

.month-clickable:hover,
.year-clickable:hover {
  background-color: var(--soft-purple, #f3f4f6);
  text-decoration: underline;
}

/* Calendar Weekdays */
.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 6px;
}

.weekday {
  text-align: center;
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--text-muted, #6b7280);
  padding: 6px 2px;
}

/* Calendar Days */
.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 12px;
}

.calendar-day {
  text-align: center;
  padding: 6px 2px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.8rem;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.calendar-day:hover {
  background-color: var(--soft-purple, #f3f4f6);
  border-color: var(--light-purple, #e5e7eb);
}

.calendar-day.other-month {
  color: #d1d5db;
}

.calendar-day.selected {
  background-color: var(--royal-purple, #6b46c1);
  color: white;
  font-weight: 600;
}

.calendar-day.today {
  border-color: var(--royal-purple, #6b46c1);
  font-weight: 600;
}

.calendar-day.today:not(.selected) {
  background-color: var(--soft-purple, #f3f4f6);
  color: var(--royal-purple, #6b46c1);
}

/* Calendar Footer */
.calendar-footer {
  display: flex;
  justify-content: space-between;
  gap: 6px;
  padding-top: 8px;
  border-top: 1px solid #e5e7eb;
}

.calendar-footer .btn {
  flex: 1;
  font-size: 0.8rem;
  padding: 4px 8px;
}

.calendar-footer .btn-outline-primary {
  color: var(--royal-purple, #6b46c1);
  border-color: var(--royal-purple, #6b46c1);
}

.calendar-footer .btn-outline-primary:hover {
  background-color: var(--royal-purple, #6b46c1);
  border-color: var(--royal-purple, #6b46c1);
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .calendar-dropdown {
    min-width: 260px;
    padding: 12px;
  }

  .calendar-title {
    font-size: 1rem;
  }

  .calendar-day {
    padding: 10px 4px;
    font-size: 0.9rem;
  }

  .weekday {
    font-size: 0.8rem;
    padding: 6px 2px;
  }
}
</style>
