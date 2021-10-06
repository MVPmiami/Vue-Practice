<template>
  <div :class="$style.subTask">
    <div :class="$style.leftSide">
      <input
        type="checkbox"
        :class="$style.checkbox"
        :id="id"
        name="subTask"
        :checked="isChecked"
				@click="check"
      />
      <label :for="id"
        ><p :class="$style.textTask">{{ title }}</p></label
      >
    </div>
    <button :class="$style.deleteBtn" @click="deleteTask"></button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "SubTask",
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
		idTask: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapMutations(["deleteSubTask","checkSubTask"]),
    deleteTask() {
      this.deleteSubTask({id: this.id, mainId: this.idTask});
    },
		check(){
			this.checkSubTask({id: this.id, mainId: this.idTask});
		}
  },
};
</script>

<style lang="scss" module>
.subTask {
  @include flexProps(space-between, row);
  @include fontText($color800);
  border-top: 0.125rem solid $color200;
  background-color: $colorInput;
  width: 100%;
  padding: 0.688rem 0;
  position: relative;
  .textTask {
    max-width: 23rem;
    margin: 0;
    word-break: break-all;
  }
  .leftSide {
    display: flex;
  }
  .deleteBtn {
    @include imgProps("~@/assets/img/Vector.png");
    min-width: 1.5rem;
    height: 1.5rem;
    background-color: $color200;
    opacity: 0.3;
    border: none;
    outline: none;
    margin: 0 0.813rem;
    &:hover {
      opacity: 0.4;
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
      border: 0.094rem solid $color300;
      border-radius: 0.313rem;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 85% 65%;
    }
    &:checked + label::before {
      border-color: $color300;
      background-color: $color300;
      background-image: url("~@/assets/img/check.png");
    }
  }
}
</style>