/* eslint-disable */


<template>
  <div>
    <h1>Home Page</h1>

    <VisitCounter ref="visitCounter" />
    <VisitForm @visit-added="updateVisitCount" />

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../assets/1.png" class="d-block w-100" alt="01">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../assets/2.png" class="d-block w-100" alt="02">
    </div>
    <div class="carousel-item">
      <img src="../assets/3.jpg" class="d-block w-100" alt="03">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
</template>

<script>
import VisitCounter from './VisitCounter';
import VisitForm from './VisitForm';

export default {
  name: 'HomePage',
  components: {
    VisitCounter,
    VisitForm
  },
  methods: {
    updateVisitCount() {
      this.$refs.visitCounter.updateVisitCount();
    }
  }
}
</script>
