<template>
  <div :class="[$style.radioList, $style.side]">
    <Radio
      v-for="radioBtn in radioBtns"
      :key="radioBtn.id"
      :title="radioBtn.title"
      :isChecked="radioBtn.isChecked"
    />
  </div>
</template>

<script>
import Radio from "@/components/atoms/Radio.vue";

export default {
  name: "RadioList",
  components: {
    Radio,
  },
  data() {
    return {
      radioBtns: [
        { title: "All", isChecked: true, id: 1 },
        { title: "Active", isChecked: false, id: 2 },
        { title: "Completed", isChecked: false, id: 3 },
      ],
    };
  },
};
</script>

<style lang="scss" module>
.side {
  @include flexProps(space-between, row);
  margin: 0 1.87rem;
  @media (max-width: 600px) {
    .side {
      margin: 0 0.5rem;
      font-size: 1rem;
    }
  }
}
</style>
