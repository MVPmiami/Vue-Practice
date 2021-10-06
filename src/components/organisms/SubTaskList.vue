<template>
  <div :class="$style.taskLlist" v-if="isShow">
    <SubTask
      v-for="subTask in subTasks"
      :key="subTask.id"
      :title="subTask.title"
      :isChecked="subTask.isChecked"
      :id="subTask.id"
      :idTask="idTask"
    />
    <div :class="$style.newSubTaskInput">
      <div :class="$style.addBtn"></div>
      <form @submit.prevent="addSTask">
        <input
          :class="$style.input"
          placeholder="Add a new task"
          v-model="subTaskText"
        />
      </form>
    </div>
  </div>
</template>

<script>
import SubTask from "@/components/molecules/SubTask.vue";
import { mapMutations } from "vuex";

export default {
  name: "TaskList",
  components: {
    SubTask,
  },
  props: {
    subTasks: {
      type: Array,
      default: new Array(),
    },
    idTask: {
      type: String,
      default: "",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      subTaskText: "",
    };
  },

  methods: {
    ...mapMutations(["addSubTask"]),
    addSTask() {
      this.addSubTask({ title: this.subTaskText, id: this.idTask });
      this.subTaskText = "";
    },
  },
};
</script>

<style lang="scss" module>
.taskLlist {
  @include flexProps(space-around, column);
  position: relative;
  width: 100%;
  z-index: 10;
  .addBtn {
    width: 1.525rem;
    height: 1.525rem;
    background-image: url("./../../assets/img/addBtn.png");
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 1.2rem;
  }
  .newSubTaskInput {
    @include flexProps(space-between, row);
    background-color: $colorInput;
    border-radius: 0 0 0.625rem 0.625rem;
    width: 100%;
    border-top: 0.125rem solid $color200;
  }
  form {
    width: 26rem;
  }
  .input {
    @include flexProps(center, row);
    @include fontText($color300);
    background-color: $colorInput;
    padding: 0.625rem 0;
    text-align: left;
    box-sizing: border-box;
    border-radius: 0 0 0.625rem 0.625rem;
    border: none;
    outline: none;
    width: 100%;
    &:focus {
      outline: none;
      color: $color500;
    }
  }
  @media (max-width: 600px) {
    & {
      .addBtn {
        width: 3.6rem;
        height: 1.625rem;
        background-size: cover;
        margin: 0 0.5rem 0 1.2rem;
      }
    }
  }
}
</style>
