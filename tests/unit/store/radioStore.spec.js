import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import storeConfig from "./radioStore.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("store testing", () => {
  it("return count radio btns", () => {
    expect(store.getters.allRadioBtns.length).toBe(3);
  });
  it("return active radio button", () => {
    expect(store.getters.currentRadioBtn).toBe("All");
  });
  it("change active radio button", () => {
    const id = store.state.radioBtns[1].id;
    expect(store.commit("checkRadio", id));
    expect(store.getters.currentRadioBtn).toBe("Active");
  });
});
