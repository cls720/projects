<template>
  <div :id="controlId" :style="chartStyle"/>
</template>


<script>
import chart2Axis from "@/components/Charts/mixins/chart2Axis";
import BaseEChart from "@/components/Charts/BaseEChart.vue";

export default {
  name: "RealTimeChart",
  extends: BaseEChart,
  mixins: [chart2Axis],
  data() {
    return {
      chartType: "line",
      drawInterval: null
    };
  },
  computed: {
    // 当前实时数据包
    realtimeDatas() {
      if (this.datasetDatas.length > 0) {
        return [].concat(this.datasetDatas);
      } else {
        return [].concat(this.conf.datas || []);
      }
      // return [].concat(this.datasetDatas);
    },
    // 图表显示实时点数,-1无限制
    pointCount() {
      return this.conf.pointCount || 100;
    },
    // 绘制实时图表点频率
    drawPointInterval() {
      return this.conf.drawPointInterval || 0;
    }
  },
  watch: {
    realtimeDatas() {
      this.setDrawChartInterval();
    }
  },
  methods: {
    getNowTime() {
      return new Date().toLocaleTimeString().replace(/^\D*/, "");
    },
    refreshChart() {},
    // 根据实时数据，drawPointInterval点数刷新频率绘制实时图
    updateChart(recds) {
      if (!this.chart) return;
      let option = this.chart.getOption();

      // 绘制图表新增节点
      let me = this;
      recds.forEach(r => {
        option.xAxis.forEach(item => {
          item.data.push(r[me.groupBy]);
        });
        option.series.forEach((item, i) => {
          let fieldName = me.calcFields[i].name;
          item.data.push(r[fieldName]);
        });
      });
      // 删除过期节点
      this.removeOverdueData(option);
      this.chart.setOption(option);
    },
    // 移除过期节点数据
    removeOverdueData(option) {
      let xAxisData = option.xAxis[0].data;
      // 移除图表坐标第1个节点
      if (xAxisData.length > this.pointCount && this.pointCount > 0) {
        option.xAxis.forEach(item => {
          item.data.shift();
        });
        option.series.forEach(item => {
          item.data.shift();
        });
      }
      return option;
    },
    // 定时绘制图表
    setDrawChartInterval() {
      if (this.drawPointInterval > 0 && !this.drawInterval) {
        this.drawInterval = setInterval(
          this.drawRealtimeChart,
          this.drawPointInterval
        );
      } else {
        this.updateChart(this.realtimeDatas);
      }
    },
    // 多条数据可能掉点
    drawRealtimeChart() {
      if (this.realtimeDatas.length > 0) {
        let recd = this.realtimeDatas.shift();
        if (recd) {
          this.updateChart([recd]);
        }
      }
    }
  },
  mounted() {},
  beforeDestroy() {
    if (!this.drawInterval) {
      return;
    }
    clearInterval(this.drawInterval);
    this.drawInterval = null;
  }
};
</script>

