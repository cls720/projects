<template>
  <div>
    <table-birt-page :tables="tables" :style="pageStyle" />
  </div>
</template>

<script>
import TableBirtPage from "@/components/BirtPage/TableBirtPage";
import { gridGroupStatModel } from "./gridGroupStat.js";

export default {
  name: "GridGroupStatBirt",
  components: { TableBirtPage },
  data() {
    return {
      pageStyle: gridGroupStatModel.style,
      tables: gridGroupStatModel.tables
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>