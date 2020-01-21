<template>
  <div :id="controlId" :style="chartStyle"/>
</template>


<script>
import chart1Axis from "@/components/Charts/mixins/chart1Axis";
import BaseEChart from "@/components/Charts/BaseEChart.vue";

export default {
  name: "GaugeChart",
  extends: BaseEChart,
  mixins: [chart1Axis],
  data() {
    return {
      chartType: "gauge",
      tooltip: function() {
        return {
          formatter: "{a} : {c}"
        };
      }
    };
  },
  computed: {},
  methods: {
    /**
     * 根据数据条数创建系列，多组环形图
     * @param {*} calcField 计算字段配置
     * @param {*} i 所在计算字段数组下标
     */
    createSeriesByData(calcField, i) {
      let me = this;
      let series = [];
      let gds = this.groupDatas[i] || [];
      let sumVal = this.getSeriesSumValue(gds);
      gds.forEach(recd => {
        series.push({
          name: calcField.title,
          type: me.chartType,
          data: [].concat(recd)
        });
      });
      return series;
    }
  }
};
</script>

