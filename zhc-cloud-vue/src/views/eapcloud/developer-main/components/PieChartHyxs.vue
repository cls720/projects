<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/components/Charts/mixins/resize'
import { queryMarketSellStat } from "@/api/market";
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      chartData:[],
      chartTitle:''
    }
  },
  mounted() {
    queryMarketSellStat().then(response => {
      let me = this;
      const data = response.dataPack;
      me.chartData = [];
      let total=0
      data.rows.forEach(element => {
        me.chartData.push({value:element.saleMoney,name:element.industryName});
        total = total + element.saleMoney;
      });
      
      this.chartTitle = `2019年销售总额：${total}元`
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      const option = {
        title: {
          text: this.chartTitle,
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}元 ({d}%)'
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.chartData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      this.chart.setOption(option)
    }
  }
}
</script>
