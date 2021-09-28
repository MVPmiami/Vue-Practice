import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import TaskList from "@/components/organisms/TaskList.vue";
import Task from "@/components/molecules/Task.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for component TaskList", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      sortTasks: () => [{ title: "some text task", isChecked: false, id: "1" }],
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it("getting sortTasks", () => {
    const wrapper = shallowMount(TaskList, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(TaskList)).toBeTruthy();
    expect(wrapper.findComponent(Task).isVisible()).toBe(true);
  });
});
