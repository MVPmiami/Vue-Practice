<template>
  <header>
    <h1 :class="$style.header">to do list</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" module>
.header {
  @include fontHeader($color800);
  @include flexProps(center, row);
  margin: 0;
  background-color: $color300;
  padding: 0.75rem 0 0.68rem 0;
  position: relative;
  z-index: 10;
}
</style>
