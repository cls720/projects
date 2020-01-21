<template>
  <div :id="controlId" :style="chartStyle"/>
</template>


<script>
import BaseEChart from "@/components/Charts/BaseEChart.vue";
import chart1Axis from "@/components/Charts/mixins/chart1Axis";

export default {
  name: "FunnelChart",
  extends: BaseEChart,
  mixins: [chart1Axis],
  data() {
    return {
      chartType: "funnel"
    };
  },
  methods: {}
};
</script>

