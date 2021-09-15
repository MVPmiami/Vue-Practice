<template>
  <div id="app">
    <div class="container">
      <div class="todo-app">
        <h1 class="todo-app-header">to do list</h1>
        <div class="todo-app-list">
          <div
            class="todo-app-list-task"
            v-for="(task, index) in tasks"
            :key="index"
          >
            <div class="left-side-task">
              <input
                type="checkbox"
                class="custom-checkbox"
                :id="task.id"
                name="task"
              />
              <label :for="task.id">{{ task.title }}</label>
            </div>
            <button class="delete-task-btn"></button>
          </div>
          <input class="input-add-new-task" placeholder="Add a new task" />
        </div>
        <div class="todo-app-sort">
          <div class="left-side side">
            <div class="todo-app-sort-checked-count">1/3 left</div>
          </div>
          <div class="right-side side">
            <label class="todo-app-sort-all-tasks sort-btn">
              <input type="radio" name="radio" />
              <span class="fake">All</span>
            </label>
            <label class="todo-app-sort-active-tasks sort-btn">
              <input type="radio" name="radio" />
              <span class="fake">Active</span>
            </label>
            <label class="todo-app-sort-completed-tasks sort-btn">
              <input type="radio" name="radio" />
              <span class="fake">Completed</span>
            </label>
          </div>
        </div>
      </div>
      <div class="img-list"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tasks: [
        { title: "Task 1", isChecked: false, id: 1 },
        { title: "Task 2", isChecked: false, id: 2 },
        { title: "Task 3", isChecked: false, id: 3 },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./assets/style/index.scss";
</style>
