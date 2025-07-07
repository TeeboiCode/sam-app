<template>
  <section class="task">
    <div class="content-1">
      <div class="texting">
        <h1 >Frontend Development</h1>
        <p >
          This comprehensive Front-End Development course is your gateway to
          mastering the essential technologies that power the visual aspects of
          websites and web applications.
        </p>
      </div>
      <div class="raw">
        <div>
          <p class="texting">
            <span><i class="bi bi-translate"></i></span>English
          </p>
        </div>
        <div>
          <p class="texting">
            <span><i class="bi bi-calendar3"></i></span>Last updated Tue,
            13-Feb-2024
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>

.task {
  background-image: url(@/assets/frontendbg.png);
  height: 60vh;
  object-fit: cover;
  width: 100%;
  display: block;
}

.content-1{
  width: 100%;
  max-width: 790px;
  margin: 0rem 0rem 0rem 4.5rem;
}

.texting > h1{
  padding-top: 5rem;
  font-size: 2.5rem;
}

.texting p{
  font-size: 1.3rem;
  line-height: 1.4;
  margin-block: 1.5rem;
  color: white !important;
}

.raw {
  display: flex ;
  flex-direction: row ;
  gap: 1.3rem;
}

.raw > * p {
  font-size: 1.2rem;
  color: white;
  display: flex;
  gap: 0.4rem;
}

.texting{
  color: white !important;
}
</style>
