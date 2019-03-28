<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import { debounce } from "@/utils";

const animationDuration = 6000;

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 100);
    window.addEventListener("resize", this.__resizeHandler);
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    window.removeEventListener("resize", this.__resizeHandler);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");

      this.chart.setOption({
        backgroundColor: "rgba(128, 128, 128, 0)",
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          data: ["项目", "小程序", "功能模块", "组件", "指令"],
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          show: false,
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70],
            type: "bar",
            barWidth: 20,
            itemStyle: { normal: { label: { show: true, position: "top" } } }
          }
        ]
      });
    }
  }
};
</script>
