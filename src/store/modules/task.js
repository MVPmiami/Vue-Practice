export default {
  state: {
    tasks: [],
    doneTasks: 0,
    leftTasks: 0,
  },
  getters: {
    allTasks: (state) => {
      return state.tasks;
    },
    doneTasks: (state) => {
      return (state.doneTasks = state.tasks.filter(
        (task) => task.ischecked
      ).length);
    },
    leftTasks: (state, getters) => {
      return (state.leftTasks = getters.allTasks.length - getters.doneTasks);
    },
  },
  mutations: {
    addTask(state, payload) {
      payload.title.length !== 0 ? state.tasks.push(payload) : null;
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload.id);
    },
    checkTask(state, payload) {
      state.tasks = state.tasks.map((task) =>
        task.id === payload.id
          ? { title: task.title, ischecked: !task.ischecked, id: task.id }
          : task
      );
    },
  },
};
