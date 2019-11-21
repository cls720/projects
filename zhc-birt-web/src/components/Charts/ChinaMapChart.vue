<template>
  <div>
    <div :id="controlId" :style="chartStyle" />
  </div>
</template>


<script>
import echarts from "echarts";
import chinaMap from "echarts/map/js/china.js";

import chart from "@/components/Charts/mixins/chart";
import resize from "@/components/Charts/mixins/resize";
import autosize from "@/components/mixins/autosize";
import {
  provincesMap,
  convertMapData,
  convertMapDataByGps
} from "@/funclib/MapUtil.js";
import merge from "lodash/fp/merge";

export default {
  name: "ChinaMapChart",
  mixins: [chart, resize, autosize],
  data() {
    return {
      chartType: "china",
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
    },
    chartStyle() {
      return `${this.autoSizeStyle()};${this.conf.style || ""};`;
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
      let provinceId = provincesMap[param.name];
      if (!provinceId) return;
      //require("echarts/map/js/province/" + provinceId + ".js");
      let defaultOption = this.getDefaultOption();
      let geo = { geo: { map: param.name } };
      let chartOption = merge(defaultOption, this.option);
      chartOption = merge(chartOption, geo);
      if (this.visualMap) {
        chartOption = merge(chartOption, {
          visualMap: this.visualMap
        });
      }
      // 过滤深度分析数据
      this.doOptionSeriesDataFilter(chartOption, deepDataFilterFunc);
      this.chart.setOption(chartOption);
      this.chart.off("dblclick");
      this.chart.on("dblclick", this.initChinaChart);

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

