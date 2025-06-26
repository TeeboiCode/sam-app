<template>
  <div class="cart-wrapper">
    <div class="cart-main">
      <div class="cart-content">
        <!-- Course List -->
        <div class="core">
          <div class="cart-header">
            <h3>8 Courses in Cart</h3>
            <div class="cart-options">
              <button class="currency-btn">
                INR <i class="fas fa-angle-down"></i>
              </button>
            </div>
          </div>
          <div class="course-list">
            <div
              class="course-item"
              v-for="(course, index) in courses"
              :key="index"
            >
              <img :src="course.image" alt="course image" />
              <div class="details">
                <p class="title">{{ course.title }}</p>
                <small>{{ course.instructor }}</small>
              </div>
              <div class="actions">
                <a href="#" class="remove">Remove</a>
                <a href="#" class="wishlist">Remove to Wishlist</a>
              </div>
              <div class="pricing">
                <p class="price">{{ course.price }}₹</p>
                <del class="original">{{ course.original }}₹</del>
              </div>
            </div>
          </div>
        </div>
        <!-- Summary Panel -->
        <div class="summary">
          <h4>Total:</h4>
          <div class="summary-item">
            <span>Total price</span>
            <strong>17300.95₹</strong>
          </div>
          <div class="summary-item">
            <span>Offer Discount</span>
            <strong>7438.92₹</strong>
          </div>
          <div class="summary-item">
            <span>Coupon Discount</span>
            <a href="#" class="apply-coupon">ApplyCoupon</a>
          </div>
          <div class="summary-item">
            <span>Discount Percent</span>
            <span>43% off</span>
          </div>
          <hr />
          <div class="summary-item total">
            <span>Total:</span>
            <strong>9862.03₹</strong>
          </div>

          <div class="coupon-field">
            <input type="text" placeholder="Enter Coupon" />
            <button>Apply</button>
          </div>

          <button class="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "@/assets/jamb image.jpg";
import img2 from "@/assets/neco logo.png";

const courses = [
  {
    title: "Full Stack Web Development Bootcamp with MERN Stac...",
    instructor: "instructor",
    image: img1,
    price: "2076.01",
    original: "4670.90",
  },
  {
    title: "Coding",
    instructor: "Admin",
    image: img2,
    price: "2077.00",
    original: "2596.00",
  },
  {
    title: "Social Digital Marketing Course beginner",
    instructor: "Admin",
    image: img2,
    price: "2595.01",
    original: "6230.00",
  },
  {
    title: "Top Essential Cooking Skills",
    instructor: "Gary",
    image: img2,
    price: "519.00",
    original: "1037.00",
  },
  {
    title: "Professional Certificate in Sales Psychology & Neg...",
    instructor: "Admin",
    image: img2,
    price: "865.01",
    original: "1566.00",
  },
  {
    title: "Learn Microsoft Excel Beginner",
    instructor: "Gary",
    image: img1,
    price: "345.99",
    original: "1037.00",
  },
];
</script>

<style scoped>
.cart-wrapper {
  padding: 2rem;
  background: #fff;
}

.cart-main {
  max-width: 1100px;
  margin: auto;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.4rem;
}

.cart-header h3 {
  font-size: 18px;
  font-weight: 600;
}

.cart-options {
  display: flex;
  gap: 0.5rem;
}

.toggle-btn,
.currency-btn {
  background-color: #ff7350;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.cart-content {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

/* Left side: Course List */
.course-list {
  flex: 2;
  background: #f3f8ff;
  padding: 1rem;
  border-radius: 8px;
}

.course-item {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
}

.course-item:last-child {
  border-bottom: none;
}

.course-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
}

.details {
  flex: 2;
  min-width: 150px;
}

.details .title {
  font-size: 15px;
  font-weight: 600;
  color: #222;
}

.actions {
  flex: 1;
  min-width: 120px;
  display: flex;
  flex-direction: column;
}

.actions a {
  font-size: 13px;
  text-decoration: none;
  margin-bottom: 4px;
}

.remove {
  color: red;
}

.wishlist {
  color: #ff7350;
}

.pricing {
  flex: 1;
  min-width: 100px;
  text-align: right;
}

.pricing .price {
  font-weight: bold;
  font-size: 14px;
}

.pricing .original {
  color: #999;
  font-size: 13px;
}

/* Right side: Summary */
.summary {
  flex: 1;
  background: #f3f8ff;
  height: fit-content;
  padding: 1.3rem;
  border-radius: 8px;
  min-width: 250px;
}

.summary h4 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 1rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 10px;
}

.apply-coupon {
  color: #ff7350;
  font-weight: bold;
}

.total strong {
  font-size: 16px;
}

hr {
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 1rem 0;
}

.coupon-field {
  display: flex;
  margin-top: 1rem;
}

.coupon-field input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.coupon-field button {
  background: #ff7350;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.checkout-btn {
  width: 100%;
  margin-top: 1rem;
  background-color: #ff7350;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cart-content {
    flex-direction: column;
  }

  .summary {
    width: 100%;
  }

  .pricing {
    text-align: left;
    margin-top: 0.5rem;
  }
}
</style>
