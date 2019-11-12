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
      component: () => import('@/components/BirtRouterView/index'),
      meta: {
        title: 'basicChart'
      },
      children: [{
          path: 'pie',
          component: () => import('@/components/BirtBook/index'),
          name: 'PieChart',
          meta: {
            title: 'pieChart'
          }
        },
        {
          path: 'bar',
          component: () => import('@/components/BirtBook/index'),
          name: 'BarChart',
          meta: {
            title: 'barChart'
          }
        },
        {
          path: 'line',
          component: () => import('@/components/BirtBook/index'),
          name: 'LineChart',
          meta: {
            title: 'lineChart'
          }
        }
      ]
    },
    {
      path: 'deep-join-stat',
      name: 'DeepJoinStatChart',
      component: () => import('@/components/BirtBook/index'),
      meta: {
        title: 'deepJoinStatChart'
      },
      children: [
        {
          path: 'chart-deep',
          component: () => import('@/components/BirtBook/index'),
          name: 'ChartDeepBirt',
          meta: {
            title: 'chartDeepBirt'
          },
          children: [{
            hidden: true,
            path: 'order-detail',
            component: () => import('@/components/BirtBook/index'),
            name: 'OrderDetailBirt',
            meta: {
              title: 'orderDetailBirt'
            }
          }, {
            hidden: true,
            path: 'bom-detail',
            component: () => import('@/components/BirtBook/index'),
            name: 'BomDetailBirt',
            meta: {
              title: 'bomDetailBirt'
            }
          }]
        },
      ]
    }
  ]
}
export default chartRouter
