<template>
  <birt-page :layout="layout" :style="pageStyle" />
</template>

<script>
import BirtPage from "@/components/BirtPage";
import { formBirtModel } from "./form.js";

export default {
  name: "FormBirt",
  components: { BirtPage },
  data() {
    return {
      pageStyle: formBirtModel.style,
      layout: formBirtModel.layout
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>