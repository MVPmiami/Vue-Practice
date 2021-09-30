import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Task from "@/components/molecules/Task.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for component Content", () => {
  let mutations;
  let getters;
  let store;

  beforeEach(() => {
    mutations = {
      checkTask: jest.fn(),
      deleteTask: jest.fn(),
    };
    getters = {
      leftTasks: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
      getters,
    });
  });

  it("call check task", () => {
    const wrapper = shallowMount(Task, { store, localVue });
    wrapper.find('input[type = "checkbox"]').trigger("click");
    expect(mutations.checkTask).toHaveBeenCalled();
    expect(getters.leftTasks).toHaveBeenCalled();
  });

  it("call delete task", () => {
    const wrapper = shallowMount(Task, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(mutations.deleteTask).toHaveBeenCalled();
  });
});
