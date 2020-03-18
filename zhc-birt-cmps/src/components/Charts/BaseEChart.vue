<template></template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import chart from "@/components/Charts/mixins/chart";
import resize from "@/components/Charts/mixins/resize";
import autosize from "@/components/mixins/autosize";

export default {
  name: "BaseEChart",
  extends: HcCmpt,
  mixins: [chart, resize, autosize],
  computed: {
    chartStyle() {
      return `${this.autoSizeStyle()};${this.conf.style || ""};`;
    }
  }
};
</script>

