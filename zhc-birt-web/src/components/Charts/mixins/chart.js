import echarts from "echarts";
import merge from "lodash/fp/merge";
import {
  dataGroupBy
} from "@/funclib/DataGroup.js";
import {
  dataFilterByExpr
} from '@/funclib/DataFilter.js'
import {
  convertSeriesData,
  visualMap
} from "@/funclib/ChartUtil.js";

export default {
  props: {
    // dataset: {
    //   type: Object,
    //   default: function () {
    //     return null
    //   }
    // },
    datasetDatas: {
      type: Array,
      default: function () {
        return []
      }
    },
    conf: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  computed: {
    controlId() {
      return (
        this.conf.controlId ||
        ((this.conf.controlName || "") + new Date() + ((Math.random() * 1000).toFixed(0) + ""))
      );
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "100%";
    },
    option() {
      return this.conf.option || {};
    },
    datas() {
      return this.conf.datas || [];
    },
    isGroupData() {
      if (this.conf.isGroupData === undefined) {
        return true;
      } else {
        return this.conf.isGroupData;
      }
    },
    visualMap() {
      if (this.conf.visualMap) {
        let calcField = this.conf.visualMap.calcField;
        let schemeId = this.conf.visualMap.schemeId;
        let retuVisuaMap = visualMap(this.datas, calcField, schemeId);
        return Object.assign(retuVisuaMap, this.conf.visualMap);
      }
    },
    groupBy() {
      return this.conf.groupBy || "";
    },
    calcFields() {
      return this.conf.calcFields || [];
    },
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
    chartStyle() {
      return `height:${this.chartHeight};width:${this.chartWidth};${this.conf.style || ""};`
    },
    // 根据配置，计算分组数据
    groupDatas() {
      let me = this;
      let retuGroupDatas = [];
      if (this.isGroupData) {
        this.calcFields.forEach(calcField => {
          retuGroupDatas.push(
            convertSeriesData(
              dataFilterByExpr(me.datas, calcField.filterExpr),
              calcField.groupBy || me.groupBy,
              calcField.name
            )
          );
        });
      } else {
        this.calcFields.forEach(calcField => {
          let gDatas = dataGroupBy(dataFilterByExpr(me.datas, calcField.filterExpr), {
            groupBy: [calcField.groupBy || me.groupBy],
            calcFields: [calcField]
          });
          retuGroupDatas.push(
            convertSeriesData(
              gDatas,
              calcField.groupBy || me.groupBy,
              calcField.name
            )
          );
        });
      }
      return retuGroupDatas;
    },
    chartEvents() {
      return this.conf.events;
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
    this.initEvents();
    this.callChartMounted()
  },
  watch: {
    // 监听更改datas,groupBy,calcField属性，更新饼图系列数据
    groupDatas() {
      var option = this.chart.getOption();
      this.groupDatas.forEach((gd, i) => {
        option.series[i].data = gd;
      });
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
    // 初始化图表对象
    initChart() {      
      let defaultOption = this.getDefaultOption();
      this.chart = echarts.init(document.getElementById(this.controlId));
      let chartOption = merge(defaultOption, this.option);
      if (this.visualMap) {
        chartOption = merge(chartOption, {
          visualMap: this.visualMap
        });
      }
      this.chart.setOption(chartOption);
    },
    // 初始化图表事件
    initEvents() {
      if (this.chart && this.chartEvents) {
        for (var eventName in this.chartEvents) {
          this.chart.off(eventName);
          this.chart.on(eventName, this.chartEvents[eventName], this);
        }
      }
    },
    // 调用图表渲染完函数配置
    callChartMounted() {
      if (this.conf.mounted) {
        this.conf.mounted.call(this);
      }
    }
  }
}
