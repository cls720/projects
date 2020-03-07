import Layout from '@/layout/child-router-tpl.vue'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: '/charts/pie-chart',
  name: 'chart',
  meta: {
    title: '图表'
  },
  children: [
    // {
    //   path: '/pie',
    //   component: () => import('@/docs/md/charts/pie/main.md'),
    //   name: 'pieChart',
    //   meta: { title: 'PieChart 饼图' }
    // },
    // {
    //   path: '/bar',
    //   component: () => import('@/docs/md/charts/bar/main.md'),
    //   name: 'barChart',
    //   meta: { title: 'BarChart 柱图' }
    // },
    // {
    //   path: '/bar-percent',
    //   component: () => import('@/docs/md/charts/bar-percent/main.md'),
    //   name: 'barPercentChart',
    //   meta: { title: 'BarPercentChart 柱图百份比' }
    // },
    // {
    //   path: '/line',
    //   component: () => import('@/docs/md/charts/line/main.md'),
    //   name: 'lineChart',
    //   meta: { title: 'LineChart 线图' }
    // },
    // {
    //   path: '/area',
    //   component: () => import('@/docs/md/charts/area/main.md'),
    //   name: 'areaChart',
    //   meta: { title: 'AreaChart 区域图' }
    // },
    // {
    //   path: '/compose',
    //   component: () => import('@/docs/md/charts/compose/main.md'),
    //   name: 'composeChart',
    //   meta: { title: 'ComposeChart 合成图' }
    // },
    // {
    //   path: '/realtime',
    //   component: () => import('@/docs/md/charts/realtime/main.md'),
    //   name: 'realtimeChart',
    //   meta: { title: 'RealtimeChart 实时图' }
    // },
    // {
    //   path: '/radar',
    //   component: () => import('@/docs/md/charts/radar/main.md'),
    //   name: 'radarChart',
    //   meta: { title: 'RadarChart 雷达图' }
    // },
    // {
    //   path: '/funnel',
    //   component: () => import('@/docs/md/charts/funnel/main.md'),
    //   name: 'funnelChart',
    //   meta: { title: 'FunnelChart 漏斗图' }
    // },
    // {
    //   path: '/gauge',
    //   component: () => import('@/docs/md/charts/gauge/main.md'),
    //   name: 'gaugeChart',
    //   meta: { title: 'GaugeChart 仪表盘' }
    // },
    // {
    //   path: '/china-map',
    //   component: () => import('@/docs/md/charts/china-map/main.md'),
    //   name: 'chinaMapChart',
    //   meta: { title: 'ChinaMapChart 中国地图' }
    // },
  ]
}

export default chartsRouter
