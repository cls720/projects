<template>
  <div>
    <birt-page :layout="layout" :style="pageStyle" />
  </div>
</template>

<script>
import JsBarcode from "jsbarcode";
import BirtPage from "@/components/BirtPage";
import { cardSplitModel } from "./cardSplit.js";

export default {
  name: "gridLockBirt",
  components: { BirtPage },
  data() {
    return {
      pageStyle: cardSplitModel.style,
      layout: cardSplitModel.layout
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>