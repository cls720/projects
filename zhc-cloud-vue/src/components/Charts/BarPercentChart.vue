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
      default: "150px"
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
    barVal: {
      type: Number,
      default: 30
    },
    stepBarVals: {
      type: Array,
      default: function() {
        return [
          {
            barVal: 75,
            startColor: "#67C23A",
            endColor: "rgba(165,211,131,.7)"
          },
          {
            barVal: 90,
            startColor: "#E6A23C",
            endColor: "rgba(241,207,156,.7)"
          },
          {
            barVal: 100,
            startColor: "#F56C6C",
            endColor: "rgba(247,142,142,.7)"
          }
        ];
      }
    }
  },
  computed: {
    barData: function() {
      return [this.barVal];
    },
    barOption: function() {
      return {
        grid: {
          left: "0%",
          right: "0%",
          bottom: "20%",
          top: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            min: 0,
            max: 100,
            position: "left",
            axisTick: {
              show: true
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              formatter: function(value, index) {
                return value;
              }
            },
            splitLine: {
              show: false
            },
            type: "value"
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            silent: true,
            itemStyle: {
              normal: {
                color: "rgba(233,233,235,.5)",
                barBorderRadius: [0, 0, 0, 0]
              }
            },
            barGap: "-100%",
            data: [100]
          },
          {
            name: "",
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "bottom",
                formatter: function(o) {
                  return o.value + "%";
                }
              }
            },
            itemStyle: this.getBarItemStyle(),
            data: (function() {
              var res = [];
              var len = 1;
              while (len--) {
                res.push(Math.round(Math.random() * 100));
              }
              return res;
            })()
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
    barVal(val, newVal) {
      var option = this.chart.getOption();
      option.series[1].data = this.barData;
      option.series[1].itemStyle = this.getBarItemStyle();
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
    getBarItemStyle() {
      return {
        normal: {
          barBorderRadius: [0, 0, 0, 0],
          color: {
            colorStops: [
              {
                offset: 0,
                color: this.getStepStartColor(this.barVal)
              },
              {
                offset: 1,
                color: this.getStepEndColor(this.barVal)
              }
            ]
          }
        }
      };
    },
    /**
     * 渐变色开始颜色
     */
    getStepStartColor(val) {
      for (var i = 0, l = this.stepBarVals.length; i < l; i++) {
        let item = this.stepBarVals[i];
        if (val <= item.barVal) {
          return item.startColor;
        }
      }
    },
    /**
     * 渐变色结束颜色
     */
    getStepEndColor(val) {
      for (var i = 0, l = this.stepBarVals.length; i < l; i++) {
        let item = this.stepBarVals[i];
        if (val <= item.barVal) {
          return item.endColor;
        }
      }
    },
    initChart() {      
      this.chart = echarts.init(document.getElementById(this.id));
      let chartOption = merge(this.barOption, this.option);
      this.chart.setOption(chartOption);
    }
  }
};
</script>
