<template>
  <section>
    <div class="transition__block">
      <div class="transition__image img-1">
        <img
          class="transition__image-img"
          src="../images/icon-transition/icon-transition1.png"
          alt=""
        />
      </div>
      <div class="transition__image img-2">
        <img
          class="transition__image-img"
          src="../images/icon-transition/icon-transition2.png"
          alt=""
        />
      </div>
      <div class="transition__image img-3">
        <img
          class="transition__image-img"
          src="../images/icon-transition/icon-transition3.png"
          alt=""
        />
      </div>
      <div class="transition__image img-4">
        <img
          class="transition__image-img"
          src="../images/icon-transition/icon-transition4.png"
          alt=""
        />
      </div>
      <div class="transition__image img-5">
        <img
          class="transition__image-img"
          src="../images/icon-transition/icon-transition5.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.transition__block {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-1 {
}
.img-2 {
}
.img-3 {
}
.img-4 {
}
.img-5 {
}
.transition__image-img {
  display: block;
  width: 70px;
  transform: rotate(-20deg);
}
.transition__image {
  padding: 0 5%;
}

@media (max-width: 510px) {
  .transition__block {
    margin: 0 auto;
  }
  .transition__image {
    padding: 0 10%;
  }
  .img-1 {
    display: none;
  }
  .img-3 {
    display: none;
  }
}
</style>
