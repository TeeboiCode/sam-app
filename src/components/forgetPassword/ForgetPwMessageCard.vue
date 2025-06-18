<template>
  <div class="register-card bg-white rounded-4 shadow">
    <div
      class="d-flex flex-row justify-content-center gap-3 "
      style="width: fit-content"
    >
      <div class="card-icon">
        <div class="icon-circle">
          <i class="bi bi-envelope-check-fill"></i>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title mb-4">Email Sent</h3>
        <p class="card-text">
          We have sent you an email at
          <span class="email-text" id="emailDisplay">
            my-emailid@gmail.com
          </span>
          Check your inbox and follow the instructions to reset your password.
        </p>

        <div class="email-actions">
          <div class="mb-3 fw-bolder small">
            Didn’t receive the email?
            <a href="#" onclick="resendEmail()">
              <i class="bi bi-arrow-repeat ms-2"></i> Resend Email
            </a>
          </div>
          <div class="fw-bolder small">
            Wrong email address?
            <a href="#" onclick="changeEmail()">
              <i class="bi bi-pencil-square"></i> Change Email Address
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.email-text {
  font-weight: 600;
  color: #111827;
  /* display: block; */
  margin-top: 5px;
  white-space: nowrap;
  /* word-break: break-word; */
}

.register-card {
  width: fit-content;
  padding: 2rem !important;
}
</style>
