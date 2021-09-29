import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import storeConfig from "./taskStore.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("store testing", () => {
  it("return count tasks", () => {
    expect(store.getters.countTasks).toBe(3);
  });
  it("return left tasks", () => {
    expect(store.getters.leftTasks).toBe(2);
  });
  it("return sorted tasks", () => {
    expect(store.getters.sortTasks.length).toBe(3);
    /* тут не получается изолировать, так как геттер береться из настоящего стора,
		 а в нем (в гетере) аргументом приходит из другого модуля еще 1 геттер.
		 Двнный тест показывает что геттер отрабатывает как надо и возвращает все таски
		 независимо от их статуса. P.S. передать аргументом в геттер фейк результат не выходит
		 Тесты не считают его функцией*/
  });
  it("add task into taskList", () => {
    const newTask = "qwerty4";
    store.commit("addTask", newTask);
    expect(store.getters.countTasks).toBe(4);
    expect(store.state.tasks[3].title).toBe(newTask);
    expect(store.state.tasks[3].isChecked).toBe(false);
    expect(store.state.tasks[3].id).toBeTruthy();
  });
  it("delete task from taskList", () => {
    const id = store.state.tasks[3].id;
    store.commit("deleteTask", id);
    expect(store.getters.countTasks).toBe(3);
  });
  it("check task in taskList", () => {
    const id = store.state.tasks[1].id;
    store.commit("checkTask", id);
    expect(store.state.tasks[1].isChecked).toBe(true);
  });
  it("get storage state", () => {
    store.dispatch("renderLocalStorageTasks");
    expect(store.getters.countTasks).toBe(3);
  });
});
