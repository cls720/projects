<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/components/Charts/mixins/resize'

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
      chart: null
    }
  },
  mounted() {
    this.initChart()
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
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}个'
        },
        legend: {
          data: ['用户数量', '本月新增']
        },
        series: [
          {
            name: '用户数量',
            type: 'funnel',
            sort: 'ascending',
            left: '2%',
            width: '70%',
            top: '20%',
            height: '60%',
            label: {
              normal: {
                formatter: '{b}: {c}个'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                opacity: 0.7
              }
            },
            data: [
              { value: 186, name: '平台研发用户' },
              { value: 239, name: 'VIP用户' },
              { value: 430, name: '合作伙伴' },
              { value: 850, name: '体验用户' }
            ]
          },
          {
            name: '本月新增',
            type: 'funnel',
            sort: 'ascending',
            left: '2%',
            width: '70%',
            top: '20%',
            height: '60%',
            maxSize: '80%',
            label: {
              normal: {
                position: 'inside',
                formatter: '{c}个',
                textStyle: {
                  color: '#fff'
                }
              },
              emphasis: {
                position: 'inside',
                formatter: '本月新增：{c}个'
              }
            },
            itemStyle: {
              normal: {
                opacity: 0.5,
                borderColor: '#fff',
                borderWidth: 2
              }
            },
            data: [
              { value: 5, name: '平台研发用户' },
              { value: 39, name: 'VIP用户' },
              { value: 30, name: '合作伙伴' },
              { value: 150, name: '体验用户' }
            ]
          }
        ]
      }

      this.chart.setOption(option)
    }
  }
}
</script>
