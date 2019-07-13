<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import _ from "lodash";
import echarts from "echarts";
import chinaMap from "echarts/map/js/china.js";
import resize from "@/components/Charts/mixins/resize";
import {
  geoCoordMap,
  provincesId,
  provincesName,
  convertMapData
} from "@/utils/MapUtil.js";
import { dataGroupBy } from "@/funclib/DataGroup.js";
import { debug, debuglog } from "util";
require("echarts/theme/macarons");

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
      default: "100%"
    },
    storeZxyh: {
      type: Array,
      default: function() {
        return [];
      }
    },
    inLineUsers: {
      type: Array,
      default: function() {
        return [];
      }
    },
    outLineUsers: {
      type: Array,
      default: function() {}
    }
  },
  data() {
    return {
      chart: null,
      provinces: provincesId,
      provincesText: provincesName
    };
  },
  computed: {
    zxyhUserCityGroup() {
      return dataGroupBy(this.storeZxyh, {
        groupBy: ["userCity"],
        calcFields: [{ name: "value", summaryType: "count" }]
      });
    },
    zxyhMapData() {
      return convertMapData(this.zxyhUserCityGroup, "userCity", "value");
    },
    cityMaxUserCount() {
      return _.maxBy(this.zxyhUserCityGroup, "value").value;
    }
  },
  watch: {
    storeZxyh(oldVal, newVal) {
      var option = this.chart.getOption();
      option.series[0].data = this.zxyhMapData;
      // option.visualMap.max = this.cityMaxUserCount;      
      this.chart.setOption(option);
    },
    inLineUsers(oldVal, newVal) {
      var option = this.chart.getOption();
      option.series[1].data = convertMapData(this.inLineUsers, "userCity");
      this.chart.setOption(option);
    },
    outLineUsers(oldVal, newVal) {
      var option = this.chart.getOption();
      option.series[2].data = convertMapData(this.outLineUsers, "userCity");
      this.chart.setOption(option);
    }
  },
  mounted() {
    this.initEcharts("china", "中国");
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initEcharts(pName, pNameText) {
      const me = this;
      const option = {
        tooltip: {
          formatter: function(params) {
            return params.name + " : " + params.value[0];
          }
        },
        // legend: {
        //   orient: "horizontal",
        //   y: "top",
        //   x: "right",
        //   data: ["热力分布", (pNameText || pName) + "2", (pNameText || pName) + "3"],
        //   textStyle: {
        //     color: "#fff"
        //   }
        // },
        visualMap: {
          min: 0,
          max: 100,
          padding: [0, 10, 0, 10],
          calculable: true,
          inRange: {
            color: ["#F7E0CE", "#DE4D58"]
          },
          textStyle: {
            color: "#fff"
          }
        },
        geo: {
          map: pName,
          top: "15%", // 组件距离容器的距离
          zoom: 1.2,
          selectedMode: "single",
          mapType: pName,
          roam: false, // 是否开启鼠标缩放和平移漫游
          itemStyle: {
            color: "#333",
            borderWidth: 0.5, // 区域边框宽度
            borderColor: "#ffffff", // 区域边框颜色
            areaColor: "#1D6790" // 区域颜色
          },
          label: {
            show: true,
            textStyle: { color: "#fbfdfe" } // 省份标签字体颜色
          },
          emphasis: {
            itemStyle: {
              borderWidth: 2,
              borderColor: "#ffffff",
              areaColor: "#2a333d"
            },
            label: {
              show: true,
              textStyle: { color: "#fff" } // 省份标签字体颜色
            }
          }
        },
        series: [
          {
            name: "热力分布",
            type: "heatmap",
            minOpacity: 0.2,
            maxOpacity: 0.8,
            blurSize: 1,
            coordinateSystem: "geo",
            data: this.zxyhMapData
          },
          {
            name: (pNameText || pName) + "2",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertMapData(this.inLineUsers, "userCity", "value"),
            label: {
              show: true,
              color: "#E6A23C",
              fontSize: 14,
              fontWeight: "bold",
              formatter: function(params) {
                return (
                  params.name +
                  "\n\n" +
                  params.data.userXm +
                  "  " +
                  params.data.loginTime +
                  "  登录"
                );
              }
            },
            symbol: "image://" + require("@/images/title-02.png"),
            symbolSize: [150, 60],
            symbolOffset: [0, "-50%"],
            itemStyle: {
              color: "#5AB1EF"
            },
            emphasis: {
              itemStyle: {
                borderColor: "#fff",
                borderWidth: 1
              }
            }
          },
          {
            name: (pNameText || pName) + "3",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertMapData(this.outLineUsers, "userCity", "value"),
            label: {
              show: true,
              color: "#88949A",
              fontSize: 14,
              fontWeight: "bold",
              formatter: function(params) {
                return (
                  params.name +
                  "\n\n" +
                  params.data.userXm +
                  "  " +
                  params.data.logoutTime +
                  "  下线"
                );
              }
            },
            symbol: "image://" + require("@/images/title-03.png"),
            symbolSize: [150, 60],
            symbolOffset: [0, "-50%"],
            itemStyle: {
              color: "#5AB1EF"
            },
            emphasis: {
              itemStyle: {
                borderColor: "#fff",
                borderWidth: 1
              }
            }
          }
        ]
      };

      this.chart = echarts.init(this.$el, "macarons");
      this.chart.setOption(option);
      this.chart.off("click");
      if (pName === "china") {
        // 全国时，添加click 进入省级
        this.chart.on("click", this.doChartClick);
      } else {
        // 省份，添加双击 回退到全国
        this.chart.on("dblclick", this.doChartDblckick);
      }
    },
    // 展示对应的省
    showProvince(pName, pNameText) {
      require("echarts/map/js/province/" + pName + ".js");
      this.initEcharts(pNameText);
      this.$emit("deepProvince", pNameText);
    },
    /**
     * 处理图表单击事件，下钻省分
     */
    doChartClick(param) {
      // 遍历取到provincesText 中的下标  去拿到对应的省js
      for (let i = 0; i < this.provincesText.length; i++) {
        if (param.name === this.provincesText[i]) {
          // 显示对应省份的方法
          this.showProvince(this.provinces[i], this.provincesText[i]);
          break;
        }
      }
    },
    doChartDblckick() {
      this.initEcharts("china", "中国");
      this.$emit("deepProvince", "中国");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.chart {
  width: 100%;
}
</style>
