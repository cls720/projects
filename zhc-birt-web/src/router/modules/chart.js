/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartRouter = {
  path: '/chart',
  component: Layout,
  redirect: '/chart/basic/pie',
  name: 'chart',
  meta: {
    title: 'chart',
    icon: 'pie'
  },
  children: [{
      path: 'basic',
      name: 'BasicChart',
      component: () => import('@/views/birt/workbook/index'),
      meta: {
        title: 'basicChart'
      },
      children: [{
          path: 'pie',
          component: () => import('@/views/birt/workbook/index'),
          name: 'PieChart',
          meta: {
            title: 'pieChart'
          }
        },
        {
          path: 'bar',
          component: () => import('@/views/birt/workbook/index'),
          name: 'BarChart',
          meta: {
            title: 'barChart'
          }
        },
        {
          path: 'line',
          component: () => import('@/views/birt/workbook/index'),
          name: 'LineChart',
          meta: {
            title: 'lineChart'
          }
        },      
        {
          path: 'area',
          component: () => import('@/views/birt/workbook/index'),
          name: 'AreaChart',
          meta: {
            title: 'areaChart'
          }
        },   
        {
          path: 'compose',
          component: () => import('@/views/birt/workbook/index'),
          name: 'ComposeChart',
          meta: {
            title: 'composeChart'
          }
        },          
        {
          path: 'radar',
          component: () => import('@/views/birt/workbook/index'),
          name: 'RadarChart',
          meta: {
            title: 'radarChart'
          }
        },
        {
          path: 'funnel',
          component: () => import('@/views/birt/workbook/index'),
          name: 'FunnelChart',
          meta: {
            title: 'funnelChart'
          }
        },
        {
          path: 'gauge',
          component: () => import('@/views/birt/workbook/index'),
          name: 'GaugeChart',
          meta: {
            title: 'gaugeChart'
          }
        },
        {
          path: 'china-map',
          component: () => import('@/views/birt/workbook/index'),
          name: 'ChinaMapChart',
          meta: {
            title: 'chinaMapChart'
          }
        },
      ]
    },
    {
      path: 'deep-join-stat',
      name: 'DeepJoinStatChart',
      component: () => import('@/views/birt/workbook/index'),
      meta: {
        title: 'deepJoinStatChart'
      },
      children: [
        {
          path: 'chart-deep',
          component: () => import('@/views/birt/workbook/index'),
          name: 'ChartDeepBirt',
          meta: {
            title: 'chartDeepBirt'
          }
        },
        {
          path: 'bind-dataset',
          component: () => import('@/views/birt/workbook/index'),
          name: 'BindDataset',
          meta: {
            title: 'bindDataset'
          }
        },
      ]
    }
  ]
}
export default chartRouter
