<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "@/components/Charts/mixins/resize";
import { queryMarketHotProd } from "@/api/market";
import queryParam from "@/utils/query";
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
      chartYAxis: []
    };
  },
  mounted() {
     let param = new queryParam.Param();
      let where = new queryParam.Where();
      where.setPage(1,5)
      param.where = where;
    queryMarketHotProd(param).then(response => {
      let me = this;
      const data = response.dataPack;
      me.chartData = [];
      for (let i = 0; i < data.rows.length; i++) {
        let element = data.rows[i];
        me.chartData.push(element.fcountsee);
        me.chartYAxis.push(element.fname);
      }

      this.initChart();
    });
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

      let option = (option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["产品销量"],
          textStyle: {
            color: "#008ACD"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "20%",
          containLabel: true
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category",
          axisLabel: {
            interval: 0
          },
          data: this.chartYAxis
        },
        series: [
          {
            name: "产品销量",
            type: "bar",
            data: this.chartData
          }
        ]
      });

      this.chart.setOption(option);
    }
  }
};
</script>
