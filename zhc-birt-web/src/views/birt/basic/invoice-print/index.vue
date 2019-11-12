<template>
  <birt-page :layout="layout" :style="pageStyle" />
</template>

<script>
import BirtPage from "@/components/BirtPage";
import { invoicePrintBirtModel } from "./invoicePrint.js";

export default {
  name: "InvoicePrintBirt",
  components: { BirtPage },
  data() {
    return {
      pageStyle: invoicePrintBirtModel.style,
      layout: invoicePrintBirtModel.layout
    };
  },
  methods: {}
};
</script>

<style>
</style>