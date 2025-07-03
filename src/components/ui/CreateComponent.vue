<template>
  <div class="container">
    <img src="/src/assets/download (1).jpg" alt="Class Image" />
    <div class="img-content">
      <h2>Unlock the Potential...</h2>
      <p><i class="fa-solid fa-calendar-days"></i> 01-09-2023</p>

      <p>
        Rewriting Skills: For some writers, it isn't getting the original words
        on paper that's the challenge...
      </p>
      <button>Read More</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 2rem auto;
  background: var(--background-white);

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
}

.container img {
  width: 100%;
  height: auto;
  object-fit: cover;

  margin-bottom: 1rem;
}

.img-content {
  text-align: left;
  width: 100%;
}
.img-content button {
  background-color: orange;
}
.img-content h2 {
  color: var(--royal-purple);
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
}

.img-content p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.5;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .container {
    padding: 1.5rem 1rem;
  }

  .img-content h2 {
    font-size: 1.3rem;
  }

  .img-content p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.2rem 0.8rem;
  }

  .img-content h2 {
    font-size: 1.1rem;
  }

  .img-content p {
    font-size: 0.9rem;
  }
}
</style>
