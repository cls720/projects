<template>
  <div :id="controlId" :style="chartStyle" />
</template>


<script>
import echarts from "echarts";
import chart from "@/components/Charts/mixins/chart";
import chart2Axis from "@/components/Charts/mixins/chart2Axis";
import resize from "@/components/Charts/mixins/resize";

export default {
  name: "LineChart",
  mixins: [chart, chart2Axis, resize],
  data() {
    return {
      chartType: "line"
    };
  },
  methods: {}
};
</script>

