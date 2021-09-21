export default {
  state: {
    radioBtns: [
      { title: "All", isChecked: true, id: 1 },
      { title: "Active", isChecked: false, id: 2 },
      { title: "Completed", isChecked: false, id: 3 },
    ],
  },
  getters: {
    allRadioBtns: (state) => {
      return state.radioBtns;
    },
    currentRadioBtn: (state) => {
      return state.radioBtns.filter((radio) => radio.isChecked)[0].title;
    },
  },
  mutations: {
    checkRadio(state, id) {
      state.radioBtns = state.radioBtns.map((radio) =>
        radio.id == id
          ? { ...radio, isChecked: true }
          : { ...radio, isChecked: false }
      );
    },
  },
};
