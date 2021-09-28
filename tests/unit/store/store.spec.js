import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import storeConfig from "./store.cfg.js";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("store testing", () => {
  it("return count tasks", () => {
    expect(store.getters.countTasks).toBe(3);
  });
});
