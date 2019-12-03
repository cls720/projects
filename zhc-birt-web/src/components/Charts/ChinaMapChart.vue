<template>
  <div>
    <div :id="controlId" :style="chartStyle"/>
  </div>
</template>


<script>
import chinaMap from "echarts/map/js/china.js";
import BaseEChart from "@/components/Charts/BaseEChart.vue";

import {
  provincesMap,
  convertMapData,
  convertMapDataByGps
} from "@/funclib/MapUtil.js";
import merge from "lodash/fp/merge";

export default {
  name: "ChinaMapChart",
  extends: BaseEChart,
  data() {
    return {
      chartType: "china",
      isDeepProvince: false,
      tooltip: function() {
        return {
          trigger: "item"
        };
      }
    };
  },
  computed: {
    series() {
      let seri = [];
      this.calcFields.forEach((field, i) => {
        let mapData = [];
        if (field.gpsEast) {
          mapData = convertMapDataByGps(
            this.groupDatas[i],
            field.gpsAddr,
            field.gpsEast,
            field.gpsNorth,
            field.name
          );
        } else {
          mapData = convertMapData(
            this.groupDatas[i],
            this.groupBy,
            field.name
          );
        }
        let item = {
          name: field.title,
          type: "scatter",
          coordinateSystem: "geo",
          data: mapData
        };
        seri.push(item);
      });
      return seri;
    }  
  },
  watch: {},
  methods: {
    getDefaultOption() {
      return {
        tooltip: this.tooltip(),
        legend: {},
        geo: {
          map: this.chartType,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: "rgba(30,119,163,0.8)",
              borderColor: "#111"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },
        series: this.series
      };
    },
    /**
     * 深度分析返回绘制中国地图
     */
    initChinaChart() {
      this.isDeepProvince = false;
      this.chartType = "china";
      this.initChart("china", "中国");
      this.initEvents();
      this.$emit("deep-province", "中国");
    },
    /**
     * 绘制省份图表
     *
     * param 选中省份对象
     * deepDataFilterFunc 深度分析数据过滤回调函数
     */
    initProvinceChart(param, deepDataFilterFunc) {
      this.isDeepProvince = true;
      this.chartType = param.name;
      let provinceId = provincesMap[param.name];
      if (!provinceId) return;
      //require("echarts/map/js/province/" + provinceId + ".js");

      // 过滤深度分析数据
      let chartOption = this.getChartOption();
      this.doOptionSeriesDataFilter(chartOption, deepDataFilterFunc);
      this.chart.setOption(chartOption);

      this.$emit("deep-province", param.name);
    },
    /**
     * 过滤图表系列数据项
     */
    doOptionSeriesDataFilter(option, deepDataFilterFunc) {
      if (option && deepDataFilterFunc) {
        option.series.forEach(seri => {
          seri.data = seri.data.filter(deepDataFilterFunc);
        });
      }
    }
  }
};
</script>

