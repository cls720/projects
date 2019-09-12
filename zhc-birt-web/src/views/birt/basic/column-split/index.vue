<template>
  <div>
    <birt-page :layout="layout" :style="pageStyle" />
  </div>
</template>

<script>
import BirtPage from "@/components/BirtPage";
import { columnSplitModel } from "./columnSplit.js";

export default {
  name: "gridLockBirt",
  components: { BirtPage },
  data() {
    return {
      pageStyle: columnSplitModel.style,
      layout: columnSplitModel.layout
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>