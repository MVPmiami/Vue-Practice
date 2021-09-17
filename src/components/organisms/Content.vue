<template>
  <main :class="$style.main">
    <TaskList />
    <input :class="$style.input" placeholder="Add a new task" />
  </main>
</template>

<script>
import TaskList from "@/components/organisms/TaskList.vue";

export default {
  name: "Content",
  components: {
    TaskList,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/index.scss";

.main {
  width: 30rem;
  display: flex;
  flex-direction: column;
  z-index: 10;
  background-color: $color100;
  padding: 1.875rem;
  position: relative;
  z-index: 10;
  .input {
    @include flexProps(center, row);
    @include fontText($color300);
    background-color: $colorInput;
    box-sizing: border-box;
    width: 100%;
    padding: 0.625rem 0;
    text-align: center;
    border: 0.156rem dashed $color300;
    border-radius: 0.625rem;
    &:focus {
      border: 0.156rem solid $color300;
      outline: none;
      color: $color500;
    }
  }
  @media (max-width: 600px) {
    .main {
      width: 15rem;
    }
  }
}
</style>
