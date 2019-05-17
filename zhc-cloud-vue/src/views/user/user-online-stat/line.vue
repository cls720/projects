<template>
  <div :id="id" :style="{height:height+'px',width:width}"/>
</template>


<script>
import echarts from "echarts";
import resize from "@/components/Charts/mixins/resize";
import { dataGroupBy } from "@/utils/DataGroup.js";
require("echarts/theme/macarons");

export default {
  name: "GpLine",
  mixins: [resize],
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
      default: "linechart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: Number,
      default: 300
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
        case "month":
          field = "loginDate";
          break;
        case "day":
        default:
          field = "loginHour";
          break;
      }
      let rows = dataGroupBy(data, {
        groupBy: [field],
        calcFields: [
          { name: "onLineHour", summaryType: "sum" },
          { name: "loginCount", summaryType: "sum" }
        ]
      });
      rows.sort(function(a, b) {
        return parseInt(a.loginHour) - parseInt(b.loginHour);
      });
      let legendData = [];
      let series = [],
        series1 = [];
      rows.forEach(element => {
        legendData.push(element[field]);
        series.push({
          value: element["onLineHour"],
          name: element[field]
        });
        series1.push({
          value: element["loginCount"],
          name: element[field]
        });
      });
      let option = {
        tooltip: {
          trigger: "item"
        },
        legend: {
          data: ["在线小时", "登陆次数"]
        },
        xAxis: [
          {
            type: "category",
            data: legendData
          }
        ],
        yAxis: [
          {
            name: "在线小时",
            type: "value"
          },
          {
            name: "登陆次数",
            type: "value"
          }
        ],
        series: [
          {
            yAxisIndex: 1,
            name: "在线小时",
            type: "line",
            data: series
          },
          {
            name: "登陆次数",
            type: "line",
            data: series1
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>

