<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
// import { debounce } from "@/utils";
import resize from "@/components/Charts/mixins/resize";
import { queryMarketStat } from "@/api/market";
import { debuglog } from "util";

const animationDuration = 6000;

export default {
  mixins: [resize],
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
      chart: null,
      chartData: [],
      chartXAxis: []
    };
  },
  mounted() {
    queryMarketStat().then(response => {
      let me = this;
      const data = response.dataPack;
      me.chartData = [];
      data.rows.forEach(element => {
        me.chartData.push(element.FCOUNT);
        me.chartXAxis.push(element.optionvalue);
      });
      this.initChart();
    });

    // this.__resizeHandler = debounce(() => {
    //   if (this.chart) {
    //     this.chart.resize();
    //   }
    // }, 100);
    // window.addEventListener("resize", this.__resizeHandler);
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    // window.removeEventListener("resize", this.__resizeHandler);
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
        grid: {
          left: "5%",
          right: "5%",
          bottom: "35%",
          top: "10%"
        },
        xAxis: {
          data: this.chartXAxis, //["项目", "小程序", "功能模块", "组件", "指令"],
          axisLabel: {
            rotate: 45,
            interval: 0
          }
        },
        yAxis: {
          show: false,
          type: "value"
        },
        series: [
          {
            data: this.chartData, //[120, 200, 150, 80, 70],
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
