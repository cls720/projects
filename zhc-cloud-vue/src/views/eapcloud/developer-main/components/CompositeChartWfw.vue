<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "@/components/Charts/mixins/resize";
import queryParam from "@/utils/query";
import { queryLogService } from "@/api/log-service";
import { convertPieData } from "@/utils/PieUtil.js";

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
      logServiceDatas: [],
      serviceCountDatas: []
    };
  },
  async mounted() {
    await this.loadData();
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {
          data: ["服务数量", "今日调用"],
          textStyle: {
            color: "#008ACD"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "0%",
          top: "20%",
          containLabel: true
        },
        xAxis: [
          {
            show: false,
            type: "category",
            data: this.xAxisDatas(),
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          },
          {
            type: "value"
          }
        ],
        series: [
          {
            yAxisIndex: 0,
            barWidth: 10,
            name: "服务数量",
            type: "bar",
            data: convertPieData(
              this.serviceCountDatas,
              "serviceGroupName",
              "serviceCount"
            )
          },
          {
            yAxisIndex: 1,
            name: "今日调用",
            type: "line",
            data: convertPieData(
              this.logServiceDatas,
              "serviceGroupName",
              "requestCount"
            )
          }
        ]
      };

      this.chart.setOption(option);
    },
    xAxisDatas() {
      let xAxisDatas = [];
      this.logServiceDatas.forEach(recd => {
        xAxisDatas.push(recd.serviceGroupName);
      });
      return xAxisDatas;
    },
    async loadData() {
      const me = this;
      let where = new queryParam.Where();
      where.between("writeTime", "today");

      await queryLogService({
        where: where,
        groupBy: "serviceGroupName"
      }).then(response => {
        const data = response.dataPack;
        me.logServiceDatas = data.rows;
      });

      await queryLogService({
        groupBy: "resServiceCount"
      }).then(response => {
        const data = response.dataPack;
        me.serviceCountDatas = data.rows;
      });
    }
  }
};
</script>
