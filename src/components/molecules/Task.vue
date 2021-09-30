<template>
  <div :class="$style.task">
    <div :class="$style.leftSide">
      <input
        type="checkbox"
        :class="$style.checkbox"
        :id="id"
        name="task"
        :checked="isChecked"
        @click="check"
      />
      <label :for="id"
        ><p :class="$style.textTask">{{ title }}</p></label
      >
    </div>
    <button :class="$style.deleteBtn" @click="removeTask"></button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

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
      type: String,
      default: "",
    },
  },
  computed: mapGetters(["leftTasks"]),

  methods: {
    ...mapMutations(["deleteTask", "checkTask"]),
    removeTask() {
      this.deleteTask(this.id);
    },
    check() {
      this.checkTask(this.id);
      this.leftTasks;
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
  .textTask {
    max-width: 23rem;
    margin: 0;
    word-break: break-all;
  }
  .deleteBtn {
    @include imgProps("~@/assets/img/Vector.png");
    min-width: 1.5rem;
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
      min-width: 1.25rem;
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
