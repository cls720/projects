<template>
  <div class="chart-container">
    <bar-percent-chart1 :bar-val="cpuVal" width="120px"/>
    <line-time-chart1 id="lineTimeChart1" :point-val="cpuVal"/>
  </div>
</template>

<script>
import BarPercentChart1 from "@/components/Charts/BarPercentChart";
import LineTimeChart1 from "@/components/Charts/LineTimeChart";
import { setInterval } from "timers";
import { debug } from "util";

export default {
  name: "BarPercentChart",
  components: { BarPercentChart1, LineTimeChart1 },
  data() {
    return {
      cpuVal: 30
    };
  },
  mounted() {
    let scope = this;
    setInterval(() => {
      scope.cpuVal = Math.floor(Math.random() * 100 + 1);
    }, 2000);
  }
};
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

