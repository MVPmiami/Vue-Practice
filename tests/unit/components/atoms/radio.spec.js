import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Radio from "@/components/atoms/Radio.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for component Radio", () => {
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      checkRadio: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it("call check task", () => {
    const wrapper = shallowMount(Radio, { store, localVue });
    wrapper.find("label").trigger("click");
    expect(mutations.checkRadio).toHaveBeenCalled();
  });
});
