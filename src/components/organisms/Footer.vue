<template>
  <footer :class="$style.footer">
    <div :class="[$style.leftSide, $style.side]">
      <div :class="$style.checkedCount">
        {{ leftTasks }} / {{ sortTasks.length }} left
      </div>
    </div>
    <RadioList />
  </footer>
</template>

<script>
import RadioList from "@/components/molecules/RadioList.vue";
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  components: {
    RadioList,
  },
  computed: mapGetters(["leftTasks", "sortTasks"]),
};
</script>

<style lang="scss" module>
.footer {
  @include fontHeader($color800-42op);
  @include flexProps(space-between, row);
  position: relative;
  padding: 0.75rem 0 0.68rem;
  margin: 0;
  background-color: $color300;
  z-index: 10;
  .side {
    @include flexProps(space-between, row);
    margin: 0 1.87rem;
  }
  @media (max-width: 600px) {
    .side {
      margin: 0 0.5rem;
      font-size: 1rem;
    }
  }
}
</style>
