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

require("echarts/theme/macarons");

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
  inject: ["datasource", "dataset"],
  computed: {
    controlId() {
      return (
        this.conf.controlId ||
        ((this.conf.controlName || "") + new Date() + ((Math.random() * 1000).toFixed(0) + ""))
      );
    },
    skin() {
      return this.conf.skin || "";
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
      let retuDatas;
      if (this.datasetDatas.length > 0) {
        retuDatas = this.datasetDatas;
      } else {
        retuDatas = this.conf.datas || [];
      }
      if (!this.row2col) {
        return retuDatas;
      } else {
        return retuDatas.reverse();
      }
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
    offsetParentWidth() {
      return this.conf.offsetParentWidth || 0;
    },
    // 根据配置，计算分组数据
    groupDatas() {
      let me = this;
      let retuGroupDatas = [];
      if (this.conf.controlId == "BarChart_gwlx") debugger;
      if (this.isGroupData) {
        this.calcFields.forEach(calcField => {
          // if (me.chartType == "china") debugger;
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
          let gDatas;
          let filterDatas = dataFilterByExpr(me.datas, calcField.filterExpr);
          if (calcField.isGroupData === false) {
            gDatas = filterDatas;
          } else {
            gDatas = dataGroupBy(filterDatas, {
              groupBy: [calcField.groupBy || me.groupBy],
              calcFields: [calcField]
            });
          }

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
    this.callComptMounted();
  },
  watch: {
    // 监听更改datas,groupBy,calcField属性，更新饼图系列数据
    groupDatas() {
      // var option = this.chart.getOption();
      // this.groupDatas.forEach((gd, i) => {
      //   option.series[i].data = gd;
      // });
      // this.chart.setOption(option);     
      this.refreshChart();
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
    this.callComptBeforeDestroy();
  },
  methods: {
    // 初始化图表对象
    initChart() {
      if (this.conf.controlId == "BarChart_gwlx") debugger;      
      this.checkDomWidth();
      let defaultOption = this.getDefaultOption();
      this.chart = echarts.init(this.$el, this.skin);
      let chartOption = merge(defaultOption, this.option);
      if (this.visualMap) {
        chartOption = merge(chartOption, {
          visualMap: this.visualMap
        });
      }
      this.chart.setOption(chartOption);
    },
    // 当容器隐藏clientWidth=0时需取父dom具体宽度,不然图表100%会变成100px;
    checkDomWidth() {
      if (this.$el && (this.$el.clientWidth === 0)) {
        debugger;
        let parentEl = this.$el.parentNode;
        while (true) {
          if (parentEl.clientWidth > 0) {
            this.$el.style.width = parentEl.clientWidth - this.offsetParentWidth + 'px';
            break;
          }
          parentEl = parentEl.parentNode;
          if (!parentEl) break;
        }
      }
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
    // 刷新图表最新状态
    refreshChart() {
      this.chart.setOption(this.getChartOption());
    },
    // 获取图表配置
    getChartOption() {
      let defaultOption = this.getDefaultOption();
      let chartOption = merge(defaultOption, this.option);
      if (this.visualMap) {
        chartOption = merge(chartOption, {
          visualMap: this.visualMap
        });
      }
      return chartOption;
    },
    // 调用图表渲染完函数配置
    callComptMounted() {
      if (this.conf.mounted) {
        this.conf.mounted.call(this);
      }
    },
    callComptBeforeDestroy() {
      if (this.conf.beforeDestroy) {
        this.conf.beforeDestroy.call(this);
      }
    }
  }
}
