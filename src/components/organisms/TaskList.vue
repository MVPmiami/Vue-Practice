<template>
  <div :class="$style.taskLlist">
    <Task
      v-for="task in sortTasks"
      :key="task.id"
      :title="task.title"
      :isChecked="task.isChecked"
      :id="task.id"
      :subTasks="task.subTasks"
			:isShow="task.isShow"
    />
  </div>
</template>

<script>
import Task from "@/components/molecules/Task.vue";
import { mapGetters } from "vuex";

export default {
  name: "TaskList",
  computed: mapGetters(["sortTasks"]),
  components: {
    Task,
  },
};
</script>

<style lang="scss" module>
.taskLlist {
  @include flexProps(space-around, column);
  background-color: $color100;
  position: relative;
  z-index: 10;
}
</style>
