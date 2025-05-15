<template>
  <section class="hero-section">
    <div class="container">
      <div class="row justify-content-center px-lg-5">
        <div class="col-xl-6 p-0 text-start">
          <div class="d-flex justify-content-center animate__animated animate__fadeInLeft animate__slow">
            <img
              src="../../assets/styles/images/best e-learning.png"
              alt="text logo best e-learning"
              class="img-fluid hero-text-logo"
            />
          </div>
          <h1
            class="display-4 fw-bold mb-4 text-xl-start text-center text-capitalize whitespace-nowrap"
          >
            master your exams <br />
            with expert tutoring
          </h1>
          <p class="lead mb-5 text-xl-start text-center">
            Affordable and accessible tutoring for JAMB, WAEC, and more
          </p>
          <div
            class="d-flex gap-3 justify-content-center justify-content-xl-start"
          >
            <router-link to="/register" class="btn btn-primary btn-lg hero-btn ">
              <i class="bi bi-arrow-right me-2"></i>
              Enroll Now
            </router-link>
            <router-link
              to="/programs"
              class="btn btn-outline-light btn-lg hero-btn"
              style="
                border: 3px solid var(--royal-purple);
                color: var(--royal-purple);
              "
            >
              Explore Programs
            </router-link>
          </div>

          <div class="hero-stats-container text-center">
            <div class="row">
              <div class="col-sm-4 col-12 py-5 py-sm-4 mx-0 p-0 hero-stat">
                <span
                  class="fig rounded-count"
                  ref="studentCount"
                  data-target="500"
                  >0</span
                >
                <!-- <br /> -->
                <span class="title">Students</span>
              </div>
              <div class="col-sm-4 col-12 py-5 py-sm-4 mx-0 p-0 hero-stat">
                <span
                  class="fig rounded-count"
                  ref="tutorCount"
                  data-target="10"
                  >0</span
                >
                <!-- <br /> -->
                <span class="title">Tutors</span>
              </div>
              <div
                class="col-sm-4 col-12 py-5 py-sm-3 mx-0 p-0 border-0 hero-stat"
              >
                <span
                  class="fig rounded-count"
                  ref="successRate"
                  data-target="95"
                  >0</span
                >
                <!-- <br /> -->
                <span class="title">Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-xl-6 col-12 d-flex justify-content-center animate__animated animate__fadeInRight animate__slow"
        >
          <img
            src="../../assets/styles/images//hero-img.webp"
            alt="Hero Image"
            class="img-fluid hero-img-container"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      countersAnimated: false,
      observer: null,
    };
  },
  mounted() {
    // Create intersection observer to trigger counter animation when visible
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.countersAnimated) {
            this.animateCounters();
            this.countersAnimated = true;
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Start observing the stats container
    const statsContainer = document.querySelector(".hero-stats-container");
    if (statsContainer) {
      this.observer.observe(statsContainer);
    }
  },
  beforeUnmount() {
    // Clean up observer
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    animateCounters() {
      const countElements = [
        { ref: this.$refs.studentCount, suffix: "+" },
        { ref: this.$refs.tutorCount, suffix: "+" },
        { ref: this.$refs.successRate, suffix: "%" },
      ];

      countElements.forEach((elem) => {
        if (elem.ref) {
          const target = parseInt(elem.ref.getAttribute("data-target"), 10);
          const duration = 2000; // Animation duration in milliseconds
          const frameDuration = 1000 / 60; // 60fps
          const totalFrames = Math.round(duration / frameDuration);
          const suffix = elem.suffix;

          let frame = 0;
          const counter = setInterval(() => {
            frame++;
            // Use easeOutQuad for smoother animation near the end
            const progress = frame / totalFrames;
            const easeProgress = 1 - Math.pow(1 - progress, 2);
            const currentCount = Math.floor(easeProgress * target);

            if (frame === totalFrames) {
              elem.ref.textContent = target + suffix;
              clearInterval(counter);
            } else {
              elem.ref.textContent = currentCount + suffix;
            }
          }, frameDuration);
        }
      });
    },
  },
};
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 50px 16px;
  /* background: url("../../assets/images/hero-bg.gif") no-repeat center center;
  background-size: cover; */
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.6);
  z-index: 1;
}

.hero-section .container {
  position: relative;
  z-index: 2;
}

.hero-section .hero-text-logo {
  width: 92%;
  height: auto;
  margin-bottom: 10px;
}

.hero-section h1 {
  animation: fadeInDown-c0a1d4d8 1s ease-out;
  color: #262626;
  font-size: 1.7rem;
  line-height: 1.4;
}

.hero-section p {
  /* text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); */
  animation: fadeInUp 1s ease-out 0.3s;
  animation-fill-mode: both;
  color: #262626;
}

.hero-section .btn {
  animation: fadeInUp 1s ease-out 0.6s;
  animation-fill-mode: both;
  transition: all 0.3s ease;
}

.hero-section .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.hero-section .hero-stats {
  font-family: "Roboto Serif", serif;
  color: #262626;
  font-weight: 600;
  font-size: 48px;
  /* display: flex;
  justify-content: space-around;
  line-height: 40px; */
}

.hero-stats-container {
  animation: fadeInUp 1s ease-out 0.9s;
  animation-fill-mode: both;
  border: 1px solid var(--royal-purple);
  font-family: "Roboto Serif", serif;
  color: #262626;
  font-weight: 600;
  background: var(--light-purple);
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius-xl);
  margin-top: 1.5rem;
  display: flex !important;
  text-align: center !important;
  flex-direction: row !important;
  justify-content: center !important;
  align-items: center !important;
}

.hero-stats-container .row {
  display: flex !important;
  flex-direction: row !important;
  width: 100% !important;
  margin: 0 !important;
  gap: 0.5rem !important;
}

.hero-stats-container .col-sm-4 {
  flex: 1 !important;
  min-width: 0 !important;
  padding: 0.5rem !important;
  text-align: center !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative;
}

.hero-stats-container .fig {
  font-size: 32px;
  font-weight: 600;
  color: var(--royal-purple);
  margin-bottom: 0.25rem !important;
  /* display: block; */
  display: flex;
  flex-direction: column;
  text-align: center !important;
}

.hero-stats-container .title {
  font-size: 26px !important;
  color: #262626;
  font-weight: 500;
  display: block;
  margin: 0 !important;
  text-align: center !important;
}

.rounded-count {
  border-radius: 50%;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 50px;
  height: 50px;
  text-align: center !important;
  margin-bottom: 0.25rem !important;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 400px) {
  .hero-btn {
    font-size: 10px !important;
    padding: 10px !important;
  }
  .hero-img-container{
    display: none !important;
  }

  .hero-section .hero-text-logo {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    object-fit: contain;
  }

  .hero-stats-container .title {
    font-size: 11px !important; /* slightly smaller text */
    margin-top: 2px !important;
  }
}

@media (max-width: 768px) {
  .hero-img-container {
    display: none !important;
  }

  .hero-stats-container .col-sm-4:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background-color: #666;
  }

  .hero-img-container{
    display: none !important;
  }

}

@media (min-width: 576px) {
  .hero-stats-container {
    padding: var(--spacing-md);
    border-radius: var(--border-radius-xl);
    margin-top: 3.5rem;
    line-height: 40px;
  }

  .hero-stats-container .hero-stat {
    border-right: 1px solid gray;
    border-bottom: none;
    padding-right: 1rem;
    padding-left: 1rem;
    line-height: 0px;
  }

}

@media (min-width: 768px) {
  .hero-section {
    padding: 80px 0;
  }

  .hero-btn {
    font-size: 20px !important;
    padding: 13px !important;
  }

  .hero-section .title {
    font-size: 20px !important;
    margin: 0 !important;
    text-align: center !important;
  }

  .hero-section h1 {
    font-size: 3.2em;
  }
}

@media (min-width: 1200px) {
  .hero-img-container {
    scale: 1.4 !important;
    margin-top: 29px !important;
    width: 100% !important;
    height: auto !important;
    max-width: 550px;
    object-fit: contain;
    margin-left: 7rem !important;
  }

  .hero-section h1 {
    font-size: 3.5em;
    line-height: 67px;
  }

  .rounded-count {
    width: 80px;
    height: 80px;
    line-height: 80px;
  }
}

@media (max-width: 576px) {
  .hero-stats-container {
    padding: 0.25rem 0.5rem !important; 
    margin-top: 1rem !important; 
  }

  .hero-btn {
    font-size: 16px !important;
    padding: 10px !important;
  }

  .hero-stats-container .col-sm-4 {
    padding: 0.25rem 0.25rem !important; 
  }

  .hero-stats-container .fig {
    font-size: 22px; /* slightly smaller */
    margin-bottom: 0rem !important;
  }

  .hero-stats-container .title {
    font-size: 11px !important; 
    margin-top: 2px !important;
  }

  .rounded-count {
    width: 40px;
    height: 40px;
    margin-bottom: 0.15rem !important; 
  }

  .hero-stat {
    gap: 0.2rem !important; /* tighter vertical spacing between elements */
  }
}

</style>
