<template>
  <div>
    <birt-page :layout="layout" :style="pageStyle" />
  </div>
</template>

<script>
import BirtPage from "@/components/BirtPage";
import { gridGroupStatModel } from "./gridGroupStat.js";

export default {
  name: "GridGroupStatBirt",
  components: { BirtPage },
  data() {
    return {
      pageStyle: gridGroupStatModel.style,
      layout: gridGroupStatModel.layout
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>