<template>
  <birt-page :layout="layout" :style="pageStyle" />
</template>

<script>
import BirtPage from "@/components/BirtPage";
import { formBirtModel } from "./formList.js";

export default {
  name: "FormListBirt",
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