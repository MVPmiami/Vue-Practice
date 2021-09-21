import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    tasks: [],
  },
  getters: {
    sortTasks: (state, rootGetters) => {
      switch (rootGetters.currentRadioBtn) {
        case "All":
          return state.tasks;
        case "Active":
          return state.tasks.filter((task) => !task.isChecked);
        case "Completed":
          return state.tasks.filter((task) => task.isChecked);
        default:
          return state.tasks;
      }
    },
    leftTasks: (state, getters) => {
      return getters.sortTasks.filter((task) => !task.isChecked).length;
    },
  },
  mutations: {
    addTask(state, textTask) {
      textTask.length
        ? state.tasks.push({ title: textTask, isChecked: false, id: uuidv4() })
        : null;
      localStorage.clear();
      localStorage.setItem("tasks", JSON.stringify({ tasks: state.tasks }));
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
      localStorage.clear();
      localStorage.setItem("tasks", JSON.stringify({ tasks: state.tasks }));
    },
    checkTask(state, id) {
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      );
      localStorage.clear();
      localStorage.setItem("tasks", JSON.stringify({ tasks: state.tasks }));
    },
    renderLocalStorageTasks(state, localStorageTasks) {
      state.tasks = localStorageTasks;
    },
  },
};
