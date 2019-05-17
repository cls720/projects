<template>
  <div :id="id" :style="{height:chartHeight,width:chartWidth}"/>
</template>


<script>
import echarts from "echarts";
import merge from "lodash/fp/merge";
import resize from "@/components/Charts/mixins/resize";
import { dataGroupBy } from "@/utils/DataGroup.js";
import { convertPieData } from "@/utils/PieUtil.js";
require("echarts/theme/macarons");

export default {
  name: "PieChart",
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
    calcField: {
      type: Object,
      default: function() {
        return {};
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
    // 根据配置，计算分组数据
    groupDatas() {
      if (this.isGroupData) {
        return convertPieData(this.datas, this.groupBy, this.calcField);
      } else {        
        let gDatas = dataGroupBy(this.datas, {
          groupBy: [this.groupBy],
          calcFields: [this.calcField]
        });
        return convertPieData(gDatas, this.groupBy, this.calcField.name);
      }
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
      option.series[0].data = this.groupDatas;
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
      let pieOption = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: this.calcField.title,
            type: "pie",
            data: this.groupDatas,
            label: {
              show: false
            }
          }
        ]
      };

      this.chart = echarts.init(document.getElementById(this.id));
      let chartOption = merge(pieOption, this.option);
      this.chart.setOption(chartOption);
    }
  }
};
</script>

