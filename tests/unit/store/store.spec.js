import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import task from "./modules/taskStore.cfg";
import radio from "./modules/radioStore.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    task,
    radio,
  },
});
describe("store testing", () => {
  const storeTasks = store.state.task.tasks;
  const storeRadioBtns = store.state.radio.radioBtns;
  it("return count tasks", () => {
    expect(store.getters.countTasks).toBe(3);
  });
  it("return left tasks", () => {
    expect(store.getters.leftTasks).toBe(2);
  });
  it("return sorted tasks", () => {
    storeRadioBtns[0].isChecked = false;
    storeRadioBtns[2].isChecked = true;
    expect(store.getters.sortTasks.length).toBe(1);
    storeRadioBtns[0].isChecked = true;
    storeRadioBtns[2].isChecked = false;
    expect(store.getters.sortTasks.length).toBe(3);
    storeRadioBtns[0].isChecked = false;
    storeRadioBtns[1].isChecked = true;
    expect(store.getters.sortTasks.length).toBe(2);
  });
  it("add task into taskList", () => {
    const newTask = "qwerty4";
    store.commit("addTask", newTask);
    expect(store.getters.countTasks).toBe(4);
    expect(storeTasks[3].title).toBe(newTask);
    expect(storeTasks[3].isChecked).toBe(false);
    expect(storeTasks[3].id).toBeTruthy();
    store.dispatch("renderLocalStorageTasks");
  });
  it("delete task from taskList", () => {
    const id = storeTasks[3].id;
    store.commit("deleteTask", id);
    expect(store.getters.countTasks).toBe(3);
  });
  it("check task in taskList", () => {
    const id = storeTasks[1].id;
    store.commit("checkTask", id);
    expect(storeTasks[1].isChecked).toBe(false);
  });
  it("get storage state", () => {
    store.dispatch("renderLocalStorageTasks");
    expect(store.getters.countTasks).toBe(3);
  });
  it("return count radio btns", () => {
    expect(store.getters.allRadioBtns.length).toBe(3);
  });
  it("return active radio button", () => {
    const curBtn = store.getters.currentRadioBtn;
    expect(store.getters.currentRadioBtn).toBe(curBtn);
  });
  it("change active radio button", () => {
    const id = storeRadioBtns[1].id;
    expect(store.commit("checkRadio", id));
    expect(store.getters.currentRadioBtn).toBe("Active");
  });
});
