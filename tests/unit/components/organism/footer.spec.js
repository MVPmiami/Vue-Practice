import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Footer from "@/components/organisms/Footer.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for component TaskList", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      leftTasks: jest.fn(),
      countTasks: jest.fn(),
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it("getting leftTasks and countTasks", () => {
    const wrapper = shallowMount(Footer, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(getters.leftTasks).toHaveBeenCalled();
    expect(getters.countTasks).toHaveBeenCalled();
  });
});
