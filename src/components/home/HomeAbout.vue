<template>
  <section class="section position-relative gradient-bg-white">
    <div class="container">
      <!-- Bottom Layout: Content on right, image on left -->
      <div class="promo-layout bottom-layout">
        <div class="row m-0 align-items-center">
          <div class="col-12 col-md-6 mb-4 mb-lg-0 p-0">
            <div class="promo-images">
              <img
                src="../../assets/Rectangle-412.webp"
                alt="Exam preparation"
                class="promo-image main-image"
              />
              <img
                src="../../assets/Rectangle-413.webp"
                alt="Study materials"
                class="promo-image overlay-image"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="">
              <h1 class="section-title text-center text-md-start">About Us</h1>
              <h2 class="section-subtitle text-center text-md-start">
                Tailored Tutorials for Exam Success
              </h2>
              <p class="section-description">
                At <span><strong>SAMCY Educational Consult</strong></span
                >, we offer tailored, high-quality tutorials to help students
                excel academically, build confidence, and prepare for exams like
                JAMB, WAEC, and NECO.
              </p>
              <div class="mt-4">
                <router-link to="/register" class="btn btn-primary btn-lg">
                  Enroll Today
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.promo-layout {
  position: relative;
  overflow: hidden;
}

.promo-images {
  position: relative;
  height: 400px;
}

.promo-image {
  position: absolute;
  border-radius: 10%;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  border-radius: 16px !important;
  overflow: hidden;
}

.main-image {
  width: 65%;
  height: 80%;
  object-fit: cover;
  z-index: 0;
  scale: 1;
}

.overlay-image {
  width: 40%;
  height: 50%;
  object-fit: cover;
  z-index: 1;
}

/* Top layout image positioning */
.top-layout .main-image {
  top: 0;
  right: 0;
}

.top-layout .overlay-image {
  bottom: 30px;
  left: 60px;
}

/* Bottom layout image positioning */
.bottom-layout .main-image {
  top: 0;
  left: 0;
  /* border: 1px solid; */
}

.bottom-layout .overlay-image {
  bottom: 30px;
  right: 60px;
}

/* Hover effects */
.promo-image:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.btn-primary {
  background: var(--gradient-primary);
  border: none;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  transition: var(--transition-normal);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .promo-images {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .promo-images {
    /* height: 250px; */
    margin-top: var(--spacing-md);
  }
}

.overeffect {
  position: absolute;
  width: 100px;
  right: 16px;
  top: -20%;
}

.overeffect-1 {
  position: absolute;
  width: 100px;
  left: -23%;
  top: 29%;
}

.overeffect img,
.overeffect-1 img {
  width: 400px;
}
</style>
