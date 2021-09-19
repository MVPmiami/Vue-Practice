<template>
  <div :class="[$style.radioList, $style.side]">
    <!--<Radio
      v-for="radioBtn in allRadioBtns"
      :key="radioBtn.id"
      :title="radioBtn.title"
      :isChecked="radioBtn.isChecked"
      :id="radioBtn.id"
    />-->
    <label for="1"><input id="1" type="radio" name="rad" />All</label>
    <!-- Пробую создать список тут ибо возможно из-за обертки каждого лейбла в див он не понимает связь инпутов между собой -->
    <label for="2"><input id="2" type="radio" name="rad" />Active</label>
    <label for="3"><input id="3" type="radio" name="rad" />Complite</label>
  </div>
</template>

<script>
//import Radio from "@/components/atoms/Radio.vue";
import { mapGetters } from "vuex";

export default {
  name: "RadioList",
  components: {
    //Radio,
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
