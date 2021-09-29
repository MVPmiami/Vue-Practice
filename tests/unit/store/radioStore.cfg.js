import vuex from "@/store/modules/radio.js";

export default {
  state: {
    radioBtns: [
      { title: "All", isChecked: true, id: 1 },
      { title: "Active", isChecked: false, id: 2 },
      { title: "Completed", isChecked: false, id: 3 },
    ],
  },
  mutations: vuex.mutations,
  getters: vuex.getters,
};
