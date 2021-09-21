<template>
  <div :class="[$style.radioList, $style.side]">
    <Radio
      v-for="radioBtn in allRadioBtns"
      :key="radioBtn.id"
      :title="radioBtn.title"
      :isChecked="radioBtn.isChecked"
      :id="radioBtn.id"
    />
  </div>
</template>

<script>
import Radio from "@/components/atoms/Radio.vue";
import { mapGetters } from "vuex";

export default {
  name: "RadioList",
  components: {
    Radio,
  },
  computed: mapGetters(["allRadioBtns"]),
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
