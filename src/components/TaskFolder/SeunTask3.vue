<template>
  <div class="container d-flex justify-content-center align-items-center my-5" style="width: 100%;">
    <div class="card col col-sm-6 col-lg-4 col-md-4">
    <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Blog cover" />
    <div class="card-body">
      <div class="text-muted mb-2 d-flex align-items-center">
        <i class="bi bi-calendar3 me-2 text-danger"></i> 01-09-2023
      </div>
      <h5 class="card-title text-truncate text-start">Unlocking the Po...</h5>
      <p class="card-text text-muted small text-start">
        Rewriting SkillsFor some writers, it isn't getting the original words on paper that's the challenge, but rewri...
      </p>
      <a href="#" class="btn btn-danger btn-sm d-flex align-items-start w-50 justify-content-center p-2">
        Read More <i class="bi bi-arrow-right ms-2"></i>
      </a>
    </div>
  </div>
  </div>
</template>

<script setup>
// No additional logic needed
</script>

<style scoped>

.card-title {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card {
  padding: 0;
  border: none;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);

}
.card-img-top {
  border-bottom: 1px solid #eee;
}

</style>
