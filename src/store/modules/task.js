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
      }
    },
    countTasks: (state) => {
      return state.tasks.length;
    },
    leftTasks: (state, getters) => {
      return getters.sortTasks.filter((task) => !task.isChecked).length;
    },
  },
  mutations: {
    addSubTask(state, newSubTask) {
      newSubTask.title
        ? state.tasks
            .filter((task) => task.id === newSubTask.id)[0]
            .subTasks.push({
              title: newSubTask.title,
              isChecked: false,
              id: uuidv4(),
            })
        : null;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
		changeShowStatus: (state, id) => {
			  state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isShow: !task.isShow } : task
      );
			localStorage.setItem("tasks", JSON.stringify(state.tasks));
		},
    addTask(state, textTask) {
      textTask
        ? state.tasks.push({
            title: textTask,
            isChecked: false,
            id: uuidv4(),
						isShow: false,
            subTasks: [],
          })
        : null;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteSubTask(state, Ids) {
      let nTask = state.tasks.find((task) => task.id === Ids.mainId);
			nTask.subTasks = nTask.subTasks.filter((subTask) => subTask.id !== Ids.id)
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
		checkSubTask(state, Ids) {
			let nTask = state.tasks.find((task) => task.id === Ids.mainId);
			nTask.subTasks = nTask.subTasks.map((subTask) => 
			subTask.id === Ids.id 
			?{ ...subTask, isChecked: !subTask.isChecked } 
			: subTask)
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
		showSubTasks(state) {
			state.isShow = !state.isShow;
		},
    checkTask(state, id) {
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    renderLocalStorageTasks(state) {
      localStorage.getItem("tasks")
        ? (state.tasks = JSON.parse(localStorage.getItem("tasks")))
        : new Array();
    },
  },
  actions: {
    renderLocalStorageTasks(context) {
      context.commit("renderLocalStorageTasks");
    },
  },
};
