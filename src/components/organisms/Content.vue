<template>
  <main :class="$style.main">
    <TaskList />
    <div v-bind:class="[allTasks.length ? $style.hide : $style.zeroTasks]">
      There are no tasks
    </div>
    <input
      ref="input"
      :class="$style.input"
      placeholder="Add a new task"
      v-on:keyup.enter="add"
      :value="taskText"
      @input="taskText = $event.target.value"
    />
  </main>
</template>

<script>
import TaskList from "@/components/organisms/TaskList.vue";
import { v4 as uuidv4 } from "uuid";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Content",
  data() {
    return {
      taskText: "",
    };
  },
  components: {
    TaskList,
  },
  computed: mapGetters(["allTasks"]),
  methods: {
    ...mapMutations(["addTask"]),
    add() {
      this.addTask({
        title: this.taskText,
        isChecked: false,
        id: uuidv4(),
      });
      this.taskText = "";
    },
  },
};
</script>

<style lang="scss" module>
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
  .zeroTasks {
    @include flexProps(center, row);
    @include fontText($color800);
    margin: 2rem 0 4rem;
    border: 0.125rem solid $color400;
    padding: 2rem;
  }
  .hide {
    display: none;
  }
  @media (max-width: 600px) {
    .main {
      width: 15rem;
    }
  }
}
</style>
