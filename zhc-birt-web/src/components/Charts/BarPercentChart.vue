<template>
  <div :id="controlId" :style="chartStyle" />
</template>


<script>
import BaseEChart from "@/components/Charts/BaseEChart.vue";

export default {
  name: "BarPercentChart",
  extends: BaseEChart,
  props: {},
  data() {
    return {
      chartType: "bar"
    };
  },
  computed: {
    barVal() {      
      if (this.datasetDatas && this.datasetDatas.length > 0) {
        let fieldName = this.calcFields[0].name;
        let lastIndex = this.datasetDatas.length - 1;
        return this.datasetDatas[lastIndex][fieldName];
      }
      return this.conf.barVal || 0;
    },
    minBarVal() {
      return this.conf.minBarVal || 0;
    },
    maxBarVal() {
      return this.conf.maxBarVal || 100;
    },
    stepBarVals() {
      return (
        this.conf.stepBarVals || [
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
        ]
      );
    },
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
            min: this.minBarVal,
            max: this.maxBarVal,
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
            data: [this.maxBarVal]
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
            data: this.barData
          }
        ]
      };
    }
  },
  watch: {
    barVal(val, newVal) {         
      var option = this.chart.getOption();
      option.series[1].data = this.barData;
      option.series[1].itemStyle = this.getBarItemStyle();
      this.chart.setOption(option);
    }
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
    getDefaultOption() {
      return this.barOption;
    }
  },
  mounted() {}
};
</script>

