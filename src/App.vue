<template>
  <div id="app">
    <div class="container">
      <Header />
      <Content />
      <Footer />
      <div class="img-list"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
#app {
  @include flexProps(center, row);
  width: 100%;
  height: 100%;
  background: $colorBckg;
}
.container {
  position: relative;
  box-shadow: 0 0.5rem 2.18rem 0.31rem $color-shadow;
}
.img-list {
  @include imgProps("~@/assets/img/list.png");
  width: 32rem;
  height: 32rem;
  position: absolute;
  top: -2.12rem;
  right: -14.93rem;
  z-index: 0;
}
@media (max-width: 600px) {
  .container {
    width: 18.75rem;
  }
}
</style>
