<template></template>

<script>
import chart from "@/components/Charts/mixins/chart";
import resize from "@/components/Charts/mixins/resize";
import autosize from "@/components/mixins/autosize";

export default {
  name: "BaseEChart",
  mixins: [chart, resize, autosize],
  computed: {
    chartStyle() {
      return `${this.autoSizeStyle()};${this.conf.style || ""};`;
    }
  }  
};
</script>

