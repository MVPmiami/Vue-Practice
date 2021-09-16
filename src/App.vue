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
@import "./assets/styles/index.scss";
#app {
  @include flexProps(center, row);
  width: 100%;
  height: 100%;
  background: $colorBckg;
}
.container {
  position: relative;
}
.side {
  @include flexProps(space-between, row);
  margin: 0 1.87rem;
}
.right-side {
  width: 16rem;
}
.img-list {
  @include imgProps("~@/assets/img/list.png");
  width: 32rem;
  height: 32rem;
  position: absolute;
  top: -2.12rem;
  right: -14.93rem;
  z-index: 0;
}
.todo-app {
  width: 33.75rem;
  display: flex;
  flex-direction: column;
  z-index: 10;
  box-shadow: 0 0.5rem 2.18rem 0.31rem $color-shadow;
  &-header {
    @include fontHeader($color800);
    @include flexProps(center, row);
    margin: 0;
    background-color: $color300;
    padding: 0.75rem 0 0.68rem 0;
    z-index: 10;
  }
  &-list {
    @include flexProps(space-around, column);
    background-color: $color100;
    z-index: 10;
    padding: 1.875rem;

    &-task {
      @include flexProps(space-between, row);
      @include fontText($color800);
      margin-bottom: 1.875rem;
      background-color: $color200;
      border-radius: 0.625rem;
      width: 100%;
      padding: 0.688rem 0;
    }
  }
  &-sort {
    @include fontHeader($color800-42op);
    @include flexProps(space-between, row);
    padding: 0.75rem 0 0.68rem;
    margin: 0;
    background-color: $color300;
    z-index: 10;
  }
}
.sort-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  & input {
    display: none;
  }
  & .fake {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0.125rem 0.375rem;
    text-align: center;
  }
  & input:checked + .fake {
    border: 0.063rem solid $color800-42op;
    border-radius: 0.625rem;
    padding: 0.062rem 0.312rem;
  }
  & .fake:hover {
    border: 0.063rem solid $color800-42op;
    border-radius: 0.625rem;
    padding: 0.062rem 0.312rem;
  }
}
.delete-task-btn {
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
.custom-checkbox {
  margin: 0 1.438rem;
  position: absolute;
  z-index: -1;
  opacity: 0;
  width: 1.5rem;
  height: 1.5rem;
}
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
.custom-checkbox + label::before {
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
.custom-checkbox:checked + label::before {
  border-color: $color400;
  background-color: $color400;
  background-image: url("~@/assets/img/check.png");
}
.input-add-new-task {
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
@media (max-width: 600px) {
  .todo-app {
    width: 18.75rem;
    &-sort {
      font-size: 1rem;
    }
  }
  .side {
    margin: 0 0.5rem;
  }
  .right-side {
    width: 13rem;
  }
}
</style>
