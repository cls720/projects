<template>
  <div :id="id" :style="{height:chartHeight,width:chartWidth}"/>
</template>


<script>
import echarts from "echarts";
import merge from "lodash/fp/merge";
import resize from "@/components/Charts/mixins/resize";
import { dataGroupBy } from "@/utils/DataGroup.js";
import { jsonArrayMultiSort } from "@/utils/DataSort.js";
import { convertLineData, yAxis } from "@/utils/LineUtil.js";
import { debuglog } from "util";
require("echarts/theme/macarons");

export default {
  name: "LineChart",
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: "chart"
    },
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    height: {
      type: [Number, String],
      default: "300"
    },
    option: {
      type: Object,
      default: function() {
        return {};
      }
    },
    datas: {
      type: Array,
      default: []
    },
    isGroupData: {
      type: Boolean,
      default: true
    },
    groupBy: {
      type: String,
      default: ""
    },
    // 计算字段数组 [{name:"fieldId",title:"字段名",summaryType:"统计类型",yAxsi:[true,false]}]
    calcFields: {
      type: Array,
      default: function() {
        return [];
      }
    },
    orderBy: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    chartHeight() {
      if (typeof this.height === "number") {
        return this.height + "px";
      } else {
        return this.height;
      }
    },
    chartWidth() {
      if (typeof this.width === "number") {
        return this.width + "px";
      } else {
        return this.width;
      }
    },
    // 图表缩略项
    legendData() {
      let retu = [];
      this.calcFields.forEach(field => {
        retu.push(field.title);
      });
      return retu;
    },
    // 根据配置，计算分组数据
    groupDatas() {
      const me = this;
      if (this.isGroupData) {
        return convertLineData(this.datas, this.groupBy, this.calcFields);
      } else {
        let gDatas = dataGroupBy(this.datas, {
          groupBy: [this.groupBy],
          calcFields: this.calcFields
        });

        if (this.orderBy && this.orderBy.length > 0) {
          gDatas = jsonArrayMultiSort(gDatas, this.orderBy);
        }
        return convertLineData(gDatas, this.groupBy, this.calcFields);
      }
    },
    xAxisDatas() {
      let xAxisDatas = [];
      if (this.groupDatas.length > 0) {
        this.groupDatas[0].forEach(recd => {
          xAxisDatas.push(recd[this.groupBy]);
        });
      }
      return xAxisDatas;
    },
    series() {
      let seri = [];
      let yAxisIndex = 0;
      this.calcFields.forEach((field, i) => {
        let item = {
          name: field.title,
          type: "line",
          data: this.groupDatas[i]
        };
        if (yAxisIndex > 0) item.yAxisIndex = yAxisIndex;
        if (field.yAxis) yAxisIndex++;
        seri.push(item);
      });
      return seri;
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
    // 监听更改datas,groupBy,calcField属性，更新饼图系列数据
    groupDatas() {      
      var option = this.chart.getOption();
      option.legend.data = this.legendData;
      option.xAxis[0].data = this.xAxisDatas;
      option.series.forEach((gDatas, i) => {
        option.series[i].data = this.groupDatas[i];
      });
      debugger
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
    initChart() {
      let lineOption = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
          data: this.legendData
        },
        xAxis: [
          {
            type: "category",
            data: this.xAxisDatas
          }
        ],
        yAxis: yAxis(this.calcFields),
        series: this.series
      };
      
      this.chart = echarts.init(document.getElementById(this.id));
      let chartOption = merge(lineOption, this.option);
      this.chart.setOption(chartOption);
    }
  }
};
</script>

