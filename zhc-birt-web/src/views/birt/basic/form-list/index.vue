<template>
  <table-birt-page :tables="tables" />
</template>

<script>
import TableBirtPage from "@/components/BirtPage/TableBirtPage";
import { formBirtModel } from "./formList.js";

export default {
  name: "FormListBirt",
  components: { TableBirtPage },
  data() {
    return {
      tables: formBirtModel.tables
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>