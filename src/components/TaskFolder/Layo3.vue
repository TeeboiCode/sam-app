<template>
  <div class="card-1">
    <div class="thumbnail">
      <img src="../../assets/download.png" alt="Course Image" />
    </div>

    <div class="card-body-1">
      <div class="price">
        <h2>₦200,000</h2>
        <a href="#"><i class="bi bi-repeat"></i></a>
      </div>

      <ul class="details">
        <li>
          <div class="levy">
            <i class="fas fa-book"></i>
            <p>Lectures</p>
          </div>
          <strong>8</strong>
        </li>
        <li>
          <div class="levy">
            <i class="fas fa-chart-line"></i>
            <span>Skill level</span>
          </div>
          <strong>Intermediate</strong>
        </li>
        <li>
          <div class="levy">
            <i class="fas fa-flag"></i>
            <span>Expiry period</span>
          </div>
          <strong>6 Months</strong>
        </li>
      </ul>

      <button class="enroll-btn-1">Enrol Now</button>
    </div>
  </div>
</template>

<script setup>
// No logic needed for now
</script>

<style scoped>
.card-1 {
  width: 100%;
  max-width: 350px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  font-family: "Segoe UI", sans-serif;
  margin: auto;
}

.thumbnail {
  position: relative;
  background: #f5f5f5;
}

.thumbnail img {
  width: 100%;
  display: block;
}

.card-body-1 {
  padding: 1rem;
}

.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 1rem;
}

.price a {
  font-size: 1.3rem;
  rotate: 270deg;
  color: black;
}

.price h2 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.details {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
}

.details li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0;
  color: #444;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
}

.levy {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.details i {
  color: #e63946;
  margin-right: 8px;
}

.enroll-btn-1 {
  width: 100%;
  font-size: 1.1rem;
  padding: 0.9rem;
  border: 1px solid #7b2cbf;
  color: #7b2cbf;
  font-weight: 600;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 0.8rem;
}

.enroll-btn-1:hover {
  background: #7b2cbf;
  color: white;
}
</style>
