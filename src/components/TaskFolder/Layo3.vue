<template>
  <div class="cart-wrapper">
    <div class="cart-main">
      <h3>Your Items</h3>
      <div class="cart-content">
        <!-- Course Items -->
        <div class="item-list">
          <div class="course-item" v-for="(course, index) in courses" :key="index">
            <img :src="course.image" alt="course image" />
            <div class="details">
              <p class="title">{{ course.title }}</p>
              <small>By {{ course.instructor }}</small>
            </div>
            <div class="pricing">
              <p class="price">{{ course.price }} ₦</p>
              <del class="original">{{ course.original }} ₦</del>
            </div>
          </div>
        </div>

        <!-- Payment Section -->
        <div class="payment-section">
          <p class="discount">43% Off</p>

          <label class="payment-option">
            <input type="radio" name="payment" checked />
            <img src="@/assets/jamb logo.png" alt="Paystack" />
          </label>

          <label class="payment-option">
            <input type="radio" name="payment" />
            <img src="@/assets/jamb logo.png" alt="Rave" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "@/assets/graduate.png";

const courses = [
  {
    title: "Full Stack Web Development Bootcamp...",
    instructor: "user",
    image: img1,
    price: "38557.33",
    original: "86753.38",
  },
  {
    title: "Coding",
    instructor: "user",
    image: img1,
    price: "38575.71",
    original: "48215.00",
  },
  {
    title: "Social Digital Marketing Course beg...",
    instructor: "user",
    image: img1,
    price: "48196.61",
    original: "67475.00",
  },
  {
    title: "Top Essential Cooking Skills",
    instructor: "user",
    image: img1,
    price: "38575.71",
    original: "48215.00",
  },
];
</script>

<style scoped>
.cart-wrapper {
  padding: 1.5rem;
  background: #f9f9f9;
}

.cart-main {
  max-width: 1100px;
  margin: auto;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
}

.cart-main h3 {
  font-size: 18px;
  margin-bottom: 1rem;
  font-weight: 600;
}

.cart-content {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.item-list {
  flex: 2;
  border-right: 1px solid #ddd;
  padding-right: 1rem;
}

.course-item {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.course-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
}

.details {
  flex: 1;
}

.title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
}

.pricing {
  text-align: right;
}

.price {
  font-weight: 600;
  color: #333;
}

.original {
  font-size: 12px;
  color: #999;
}

.payment-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.discount {
  font-weight: 600;
  margin-bottom: 1rem;
}

.payment-option {
  display: flex;
  align-items: center;
  background: #eff6ff;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  gap: 10px;
  border: 1px solid transparent;
  transition: border 0.3s ease;
}

.payment-option input[type="radio"] {
  accent-color: #4f46e5;
  margin-right: 10px;
}

.payment-option img {
  height: 24px;
}

.payment-option:hover {
  border-color: #4f46e5;
}

@media (max-width: 768px) {
  .cart-content {
    flex-direction: column;
  }

  .item-list {
    border-right: none;
    padding-right: 0;
  }

  .payment-section {
    margin-top: 2rem;
  }
}
</style>
