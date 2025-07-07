<template>
  <div>
    <div class="contact-wrapper">
      <div class="contact-card contact-width">
        <h2 class="contact-title">Get In Touch</h2>
        <p class="contact-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          accumsan eros, sit amet auctor nunc. Nullam ac purus.
        </p>
        <div class="contact-info contact-border">
          <div class="contact-border">
            <span class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <div>
              <span class="contact-label">Address</span>
              <span class="contact-value">London Eye, London, UK</span>
            </div>
          </div>
          <div class="contact-border">
            <span class="contact-icon">
              <i class="fas fa-phone-alt"></i>
            </span>
            <div>
              <span class="contact-label">Phone Number</span>
              <span class="contact-value">+123-456-7890</span>
            </div>
          </div>
          <div class="contact-border">
            <span class="contact-icon">
              <i class="fas fa-envelope"></i>
            </span>
            <div>
              <span class="contact-label">E-Mail</span>
              <span class="contact-value">mailto@sultx.com</span>
            </div>
          </div>
        </div>
        <!-- <hr class="divider" /> -->
        <div class="social-section">
          <span class="follow-label">Follow Us:</span>
          <div class="social-icons">
            <span class="icon-circle social">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <span class="icon-circle social">
              <i class="fab fa-facebook-f"></i>
            </span>
            <span class="icon-circle social">
              <i class="fab fa-instagram"></i>
            </span>
            <span class="icon-circle social">
              <i class="fas fa-camera"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script logic needed
</script>

<style>
.contact-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.contact-width {
  max-width: 450px;
  width: 100%;
}

.contact-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact-title {
  color: var(--royal-purple);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-desc {
  color: #9c9cae;
  font-size: 1rem;
  margin-bottom: 2rem;
}

.contact-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin-bottom: 1.5rem;
}

.contact-border {
  display: flex;
  width: 100%;
  gap: 1.2rem;
  align-items: center;
}

.contact-icon {
  background-color: var(--royal-purple);
  color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.contact-label {
  font-weight: 600;
  color: var(--royal-purple);
  display: block;
  font-size: 1rem;
  line-height: 1;
}

.contact-value {
  color: #7b7b93;
  font-size: 0.98rem;
  display: block;
}


.social-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
}

.follow-label {
  color: var(--royal-purple);
  font-weight: 600;
  font-size: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.icon-circle.social {
  background: var(--royal-purple);
  cursor: pointer;
  width: 36px;
  height: 36px;
}

.icon-circle.social i{
    color: #fff;
    font-size: .9rem;
}

@media (max-width: 600px) {
  .contact-card {
    padding: 1.2rem 0.5rem;
    max-width: 98vw;
  }
  .contact-title {
    font-size: 1.3rem;
  }
  .contact-desc {
    font-size: 0.95rem;
  }
}
</style>
