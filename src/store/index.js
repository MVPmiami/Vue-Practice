import Vue from "vue";
import Vuex from "vuex";
import task from "./modules/task";
import radio from "./modules/radio";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    task,
    radio,
  },
});

export default store;
