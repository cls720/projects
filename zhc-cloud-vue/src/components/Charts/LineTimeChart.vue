<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";
import merge from "lodash/fp/merge";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "300px"
    },
    height: {
      type: String,
      default: "150px"
    },
    option: {
      type: Object,
      default: function() {
        return {};
      }
    },
    pointCount: {
      type: Number,
      default: 100
    },
    pointVal: {
      type: Number,
      default: 1
    },
    timeStep: {
      type: Number,
      default: 2
    },
    lineTime: {
      type: Array,
      default: function() {
        return [];
      }
    },
    lineData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    lineOption: function() {
      return {
        grid: {
          left: "0%",
          right: "0%",
          bottom: "5%",
          top: "5%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#283b56"
            }
          }
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true
            },
            data: this.lineTime
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 100,
            axisTick: {
              show: false
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "",
            type: "line",
            data: this.lineData
          }
        ]
      };
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  watch: {
    pointVal() {
      let option = this.chart.getOption();

      if (option.xAxis[0].data.length > this.pointCount) {
        option.xAxis[0].data.shift();
        option.series[0].data.shift();
      }
      option.xAxis[0].data.push(this.getNowTime());
      option.series[0].data.push(this.pointVal);

      this.chart.setOption(option);
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    getNowTime() {
      return new Date().toLocaleTimeString().replace(/^\D*/, "");
    },
    getXAxisTimeData() {
      var now = new Date();
      var res = [];
      var len = this.pointCount;
      while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
        now = new Date(now - this.timeStep * 1000);
      }
      return res;
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      let chartOption = merge(this.lineOption, this.option);
      this.chart.setOption(chartOption);
    }
  }
};
</script>
