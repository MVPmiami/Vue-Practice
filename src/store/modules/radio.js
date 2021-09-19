export default {
  state: {
    radioBtns: [
      { title: "All", isChecked: false, id: 1 },
      { title: "Active", isChecked: false, id: 2 },
      { title: "Completed", isChecked: false, id: 3 },
    ],
  },
  getters: {
    allRadioBtns: (state) => {
      return state.radioBtns;
    },
  },
  mutations: {
    checkRadio(state, payload) {
      state.radioBtns = state.radioBtns.map((radio) =>
        radio.id == payload.id
          ? { title: radio.title, ischecked: true, id: radio.id }
          : radio
      );
    },
  },
};
