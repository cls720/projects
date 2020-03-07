<template>
  <div :id="controlId" :style="chartStyle"/>
</template>


<script>
import chartnAxis from "@/components/Charts/mixins/chartnAxis";
import BaseEChart from "@/components/Charts/BaseEChart.vue";

export default {
  name: "RadarChart",
  extends: BaseEChart,
  mixins: [chartnAxis],
  data() {
    return {
      chartType: "radar"
    };
  },
  computed: {
    legend() {
      let me = this;
      let retuLegend = { data: [] };
      this.datas.forEach(recd => {
        retuLegend.data.push(recd[me.groupBy]);
      });
      return retuLegend;
    },
    radar() {
      let retuRadar = { indicator: [] };
      this.calcFields.forEach(calcField => {
        retuRadar.indicator.push({ name: calcField.title });
      });
      return retuRadar;
    }
  },
  methods: {
    getDefaultOption() {
      return {
        tooltip: this.tooltip(),
        legend: this.legend,
        radar: this.radar,
        series: this.series
      };
    }
  }
};
</script>

