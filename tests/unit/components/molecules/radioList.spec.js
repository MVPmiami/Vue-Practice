import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import RadioList from "@/components/molecules/RadioList.vue";
import Radio from "@/components/atoms/Radio.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for component RadioList", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      allRadioBtns: () => [{ title: "All", isChecked: true, id: 1 }],
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it("getting allRadioBtns", () => {
    const wrapper = shallowMount(RadioList, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(RadioList)).toBeTruthy();
    expect(wrapper.findComponent(Radio).isVisible()).toBe(true);
  });
});
