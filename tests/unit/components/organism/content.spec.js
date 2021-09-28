import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Content from "@/components/organisms/Content.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for component Content", () => {
  let mutations;
  let getters;
  let actions;
  let store;

  beforeEach(() => {
    mutations = {
      addTask: jest.fn(),
    };
    actions = {
      renderLocalStorageTasks: jest.fn(),
    };
    getters = {
      countTasks: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      getters,
      mutations,
    });
  });

  it("call addTask", () => {
    const wrapper = shallowMount(Content, { store, localVue });
    wrapper.find("form").trigger("submit.prevent");
    expect(mutations.addTask).toHaveBeenCalled();
  });

  it("call countTasks", () => {
    const wrapper = shallowMount(Content, { store, localVue });
    expect(getters.countTasks).toHaveBeenCalled();
  });

  it("call renderLocalStorageTasks", () => {
    const wrapper = shallowMount(Content, { store, localVue });
    expect(actions.renderLocalStorageTasks).toHaveBeenCalled();
  });
});
