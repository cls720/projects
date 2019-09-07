<template>
  <table-birt-page :tables="tables" />
</template>

<script>
import TableBirtPage from "@/components/BirtPage/TableBirtPage";
import { formBirtModel } from "./form.js";

export default {
  name: "FormBirt",
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