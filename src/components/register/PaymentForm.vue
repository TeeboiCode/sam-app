<template>
  <div class="fade-in">
    <h4 class="text-center mb-4">MoniCredit Payment</h4>
    <!-- Card Payment Option -->
    <div class="col-12">
      <div
        class="payment-option card h-100 p-3"
        @click="emit('click-payment', true)"
      >
        <div class="card-body p-0 text-center">
          <div class="payment-icon mb-3">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/cute-clipart/64/bank-cards.png"
              alt="bank-cards"
            />
          </div>
          <h5 class="card-title">Card Payment</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.payment-option {
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  border-radius: 12px;
  overflow: hidden;
}

.payment-option:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.payment-option.selected {
  border-color: var(--primary-color);
  background-color: rgba(var(--primary-color-rgb), 0.05);
}

.payment-icon {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-icon img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}
</style>
