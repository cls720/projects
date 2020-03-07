<template>
  <div :id="controlId" :style="chartStyle"/>
</template>


<script>
import chart1Axis from "@/components/Charts/mixins/chart1Axis";
import BaseEChart from "@/components/Charts/BaseEChart.vue";

export default {
  name: "PieChart",
  extends: BaseEChart,
  mixins: [chart1Axis],
  data() {
    return {
      chartType: "pie"
    };
  },
  methods: {}
};
</script>

