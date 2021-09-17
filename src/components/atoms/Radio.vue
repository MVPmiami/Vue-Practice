<template>
  <label :class="$style.radioBtn">
    <input type="radio" name="radio" :checked="isChecked" />
    <span :class="$style.fake">{{ title }}</span>
  </label>
</template>

<script>
export default {
  name: "Radio",
  props: {
    title: {
      type: String,
      default: "",
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/index.scss";
.radioBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 0.063rem solid $color800-42op;
    border-radius: 0.625rem;
    padding: 0.062rem 0.312rem;
  }

  input {
    display: none;
    &:checked + .fake {
      border: 0.063rem solid $color800-42op;
      border-radius: 0.625rem;
      padding: 0.062rem 0.312rem;
    }
  }
  .fake {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0.125rem 0.375rem;
    text-align: center;
  }
}
</style>
