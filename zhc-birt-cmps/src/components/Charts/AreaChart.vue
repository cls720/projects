<template>
  <div :id="controlId" :style="chartStyle"/>
</template>


<script>
import LineChart from "@/components/Charts/LineChart.vue";

export default {
  name: "area-chart",
  extends: LineChart, 
  methods: {
    // 区域图合并数据列,填充区域图颜色
    mergeAreaStyle(seriesItem) {          
      seriesItem.areaStyle = {};      
    }
  }
};
</script>

