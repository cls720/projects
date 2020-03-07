<template>
  <div :id="controlId" :style="chartStyle"/>
</template>


<script>
import BaseEChart from "@/components/Charts/BaseEChart.vue";
import chart2Axis from "@/components/Charts/mixins/chart2Axis";

export default {
  name: "BarChart",
  extends: BaseEChart,
  mixins: [chart2Axis],
  data() {
    return {
      chartType: "bar"
    };
  },
  computed: {
    // 是否柱形极坐标
    isAngleAxis() {
      return this.conf.isAngleAxis;
    },
    // 叠加柱图分组字段
    stackBy() {
      return this.conf.stackBy;
    }
  },
  methods: {
    // 叠加柱图合并数据列,插入补空数据项
    mergeStackBy(seriesItem) {
      if (seriesItem.data.length > 0) {
        let xVal = seriesItem.data[0].name;
        let l = this.xAxisDatas.indexOf(xVal);
        for (var i = 0; i < l; i++) {
          seriesItem.data.unshift({});
        }
        seriesItem.stack = this.stackBy;
      }
    }
  }
};
</script>

