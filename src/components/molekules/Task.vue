<template>
  <div :class="$style.task">
    <div :class="$style.leftSide">
      <input
        type="checkbox"
        :class="$style.checkbox"
        :id="id"
        name="task"
        :checked="isChecked"
      />
      <label :for="id">{{ title }}</label>
    </div>
    <button :class="$style.deleteBtn"></button>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    title: {
      type: String,
      default: "",
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" module>
.task {
  @include flexProps(space-between, row);
  @include fontText($color800);
  margin-bottom: 1.875rem;
  background-color: $color200;
  border-radius: 0.625rem;
  width: 100%;
  padding: 0.688rem 0;
  position: relative;
  .deleteBtn {
    @include imgProps("~@/assets/img/Vector.png");
    width: 1.5rem;
    height: 1.5rem;
    background-color: $color200;
    opacity: 0.5;
    border: none;
    outline: none;
    margin: 0 0.813rem;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
  .checkbox {
    margin: 0 1.438rem;
    position: absolute;
    z-index: -1;
    opacity: 0;
    width: 1.5rem;
    height: 1.5rem;
    & + label {
      display: inline-flex;
      align-items: center;
      user-select: none;
      cursor: pointer;
    }
    & + label::before {
      margin: 0 1.25rem;
      content: "";
      display: inline-block;
      width: 1.25rem;
      height: 1.25rem;
      border: 0.094rem solid $color400;
      border-radius: 0.313rem;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 85% 65%;
    }
    &:checked + label::before {
      border-color: $color400;
      background-color: $color400;
      background-image: url("~@/assets/img/check.png");
    }
  }
}
</style>
