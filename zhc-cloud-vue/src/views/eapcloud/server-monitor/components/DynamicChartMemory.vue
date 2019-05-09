<template>
  <el-row>
    <el-col :xs="6" :sm="6" :lg="4">
      <bar-percent-chart1
        id="memoryBarPercent"
        :bar-val="cpuVal"
        :option="barCpuOption"
        height="100px"
        width="100%"
      />
    </el-col>
    <el-col :xs="18" :sm="18" :lg="20">
      <line-time-chart1
        id="memorylineTime"
        :point-val="cpuVal"
        :option="lineMemoryOption"
        height="100px"
        width="95%"
      />
    </el-col>
  </el-row>
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
      cpuVal: 30,
      barCpuOption: {
        textStyle: {
          color: "#fff"
        },
        yAxis: [
          {
            axisLabel: {
              show: false
            }
          }
        ]
      },
      lineMemoryOption: {
        textStyle: {
          color: "rgba(242,242,240,0.5)"
        },
        title: {
          text: "内存",
          textStyle: {
            color: "rgba(242,242,240,0.3)"
          }
        }
      }
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
}
</style>

