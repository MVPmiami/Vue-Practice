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
            <div class="todo-app-sort-all-tasks sort-btn">All</div>
            <div class="todo-app-sort-active-tasks sort-btn">Active</div>
            <div class="todo-app-sort-completed-tasks sort-btn">Completed</div>
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
        { title: "Task 1", checked: false, id: 1 },
        { title: "Task 2", checked: false, id: 2 },
        { title: "Task 3", checked: false, id: 3 },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans:wght@600&display=swap");
@import "./assets/index.scss";
</style>
