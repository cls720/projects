<template>
  <div :id="controlId" :style="chartStyle"/>
</template>


<script>
import BaseEChart from "@/components/Charts/BaseEChart.vue";
import chart2Axis from "@/components/Charts/mixins/chart2Axis";

export default {
  name: "LineChart",
  extends: BaseEChart,
  mixins: [chart2Axis],
  data() {
    return {
      chartType: "line"
    };
  },
  methods: {}
};
</script>

