import { shallowMount } from "@vue/test-utils";
import Header from "@/components/atoms/Header.vue";

describe("test for component Header", () => {
  const wrapper = shallowMount(Header);

  it("render a h1", () => {
    expect(wrapper.find("h1")).toBeTruthy();
  });

  it("visibility", () => {
    expect(wrapper.isVisible()).toBe(true);
  });
});
