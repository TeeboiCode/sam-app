<template>
  <div class="map-bg">
    <div class="map-container">
       <div class="map-embed-wrapper">
        <iframe
          class="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126848.0193950296!2d3.833333!3d6.816667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sIjebu%20Ode%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
          allowfullscreen=""
          loading="eager"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="custom-pin"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
.map-bg {
  min-height: 70vh;  
  display: flex;
  justify-content: center;
  padding: 3rem 0; 

}

.map-container {
  height: 350px;
  width: 80%; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-embed-wrapper {
  position: relative;
  width:100%;
  height: 100%;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

.map-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.custom-pin {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 22px;
  height: 22px;
  background: var(--royal-purple);
  border-radius: 50% 50% 50% 0;
  transform: translate(-50%, -100%) rotate(-45deg);
  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.18);
  z-index: 2;
}
.custom-pin::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 70%;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}


@media (max-width: 700px) {
  .map-container {
    max-width: 98vw;
    min-height: 260px;
  }
  .info-card {
    min-width: 160px;
    padding: 0.7rem 0.7rem 0.7rem 0.8rem;
    font-size: 0.95rem;
  }
}
@media (max-width: 480px) {
  .map-container {
    min-height: 180px;
  }
  .info-card {
    top: 8px;
    left: 8px;
    min-width: 120px;
    padding: 0.5rem 0.5rem 0.5rem 0.6rem;
    font-size: 0.89rem;
  }
}
</style>
