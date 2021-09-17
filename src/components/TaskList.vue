<template>
  <div :class="$style.taskLlist">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :title="task.title"
      :isChecked="task.isChecked"
      :id="task.id"
    />
  </div>
</template>

<script>
import Task from "@/components/Task.vue";

export default {
  name: "TaskList",
  data() {
    return {
      tasks: [
        { title: "Task 1", isChecked: true, id: 1 },
        { title: "Task 2", isChecked: false, id: 2 },
        { title: "Task 3", isChecked: false, id: 3 },
      ],
    };
  },
  components: {
    Task,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/index.scss";

.taskLlist {
  @include flexProps(space-around, column);
  background-color: $color100;
  position: relative;
  z-index: 10;
}
</style>
