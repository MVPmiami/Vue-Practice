<template>
  <main :class="$style.main">
    <TaskList />
    <div :class="[sortTasks.length ? $style.hide : $style.zeroTasks]">
      There are no tasks
    </div>
    <form @submit.prevent="add">
      <input
        :class="$style.input"
        placeholder="Add a new task"
        v-model="taskText"
      />
    </form>
  </main>
</template>

<script>
import TaskList from "@/components/organisms/TaskList.vue";
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
  computed: mapGetters(["sortTasks"]),

  methods: {
    ...mapMutations(["addTask", "renderLocalStorageTasks"]),
    add() {
      this.addTask(this.taskText);
      this.taskText = "";
    },
  },

  mounted() {
    if (localStorage.tasks) {
      this.renderLocalStorageTasks(JSON.parse(localStorage.tasks).tasks);
    }
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
