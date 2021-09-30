import vuex from "@/store/modules/task.js";

export default {
  state: {
    tasks: [
      {
        title: "qwerty1",
        isChecked: true,
        id: "1",
      },
      {
        title: "qwerty2",
        isChecked: false,
        id: "2",
      },
      {
        title: "qwerty3",
        isChecked: false,
        id: "3",
      },
    ],
  },
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters,
};
