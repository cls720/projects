<template>
  <div :id="controlId" :style="chartStyle" />
</template>


<script>
import chart from "@/components/Charts/mixins/chart";
import chart1Axis from "@/components/Charts/mixins/chart1Axis";
import resize from "@/components/Charts/mixins/resize";

export default {
  name: "PieChart",
  mixins: [chart, chart1Axis, resize],
  data() {
    return {
      chartType: "pie"
    };
  },
  methods: {}
};
</script>

