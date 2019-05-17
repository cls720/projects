<template>
  <div
    :id="id"
    :style="{height:height,width:width}"
  />
</template>


<script>
import echarts from "echarts";
import { dataGroupBy } from "@/utils/DataGroup.js";
export default {
  name: "GpPie",
  components: {},
  data() {
    return {
      chart: null
    };
  },
  watch: {},
  props: {
    id: {
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
    },
    datas: {
      type: Array,
      default: []
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  mounted() {
    const me = this;
    this.initChart();
  },
  methods: {
    initChart() {
      if (!this.chart)
        this.chart = echarts.init(document.getElementById(this.id));
    },
    loadData(data, type) {
      let field = "";
      switch (type) {
        case "week":
        case "mouth":
          field = "loginDate";
          break;
        case "day":
        default:
          field = "loginHour";
          break;
      }
      let rows = dataGroupBy(data, {
        groupBy: [field],
        calcFields: [{ name: "value", summaryType: "count" }]
      });
      let legendData = [];
      let series = [];
      rows.forEach(element => {
        legendData.push(element[field]);
        series.push({
          value: element["value"],
          name: element[field]
        });
      });
      let option = {
        tooltip: {},
        // legend: {
        //   type: "scroll",
        //   orient: "vertical",
        //   right: 10,
        //   top: 20,
        //   bottom: 20,
        //   data: legendData
        // },
        series: [
          {
            name: "今日在线",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: series,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>

