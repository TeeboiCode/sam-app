<template>
  <div class="container-wrapper">
    <div class="card-wrapper">
      <div class="card-content">
        <h2>instructor mediacity</h2>
        <p>instructor</p>
        <div class="card-details">
          <p>12 Courses</p>
          <p>1 Follower</p>
          <p>0 Following</p>
        </div>
      </div>
    </div>
  <div>
    <h3>Kcee Tasks</h3>
  </div>
</template>

<script setup></script>

<style scoped>
.container-wrapper {
  width: 90%;
  margin: 0 auto;
}
.card-wrapper {
  position: relative;
  height: 300px;
  width: 450px;
  background-image: url("@/assets/instructor.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  filter: brightness(1.5);
  overflow: hidden;
}

.card-content {
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
  background-color: hsl(0, 0%, 0%, 0.5);
  padding: 15px 15px 0;
  transition: 0.5s ease;
  transform: translateY(20px);
  opacity: 0;
}

.card-wrapper:hover .card-content {
  transform: translateY(0);
  opacity: 1;
}

.card-content h2 {
  font-size: 1.5rem;
  margin: 0.2rem 0;
}

.card-content p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #ccc;
}

.card-details {
  display: flex;
  justify-content: space-between;
  width: fit-content;
  gap: 15px;
}

.card-details p {
  font-size: 0.9rem;
  border-right: 1.5px solid white;
  height: 35px;
  padding: 0 10px 0 0;
}

.card-details p:last-child {
  border-right: none;
}

@media (max-width: 600px) {
  .card-wrapper {
    width: 100%;
    min-width: 0;
    height: 280px;
  }
  .container-wrapper {
    width: 100%;
    padding: 0 5px;
  }
  .card-content {
    padding: 10px 8px 0;
    font-size: 0.95rem;
  }
  .card-content h2 {
    font-size: 1.3rem;
  }
  .card-content p {
    font-size: 1.1rem;
  }
  .card-details {
    gap: 8px;
  }
  .card-details p {
    font-size: 0.9rem;
    height: 28px;
    padding: 0 6px 0 0;
  }
}

@media (max-width: 400px) {
  .card-wrapper {
    height: 250px;
  }
  .card-content {
    height: 50%;
    padding: 10px 10px 0;
  }
  .card-content h2 {
    font-size: 1.3rem;
  }

  .card-content p {
    font-size: 1rem;
  }
  .card-details {
    gap: 8px;
  }
  .card-details p {
    font-size: 0.9rem;
    height: 28px;
    padding: 0 6px 0 0;
  }
}
</style>

<style lang="scss" scoped></style>
