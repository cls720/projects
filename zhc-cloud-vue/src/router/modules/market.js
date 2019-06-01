/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const marketRouter = {
  path: '/market',
  component: Layout,
  //hidden: true,
  redirect: '/market/market-stat',
  name: 'market',
  meta: {
    title: 'market',
    icon: 'cloud'
  },
  children: [
    {
      path: 'market/query',
      component: () => import('@/views/market/query/index'),
      name: 'marketquery',
      meta: { title: 'marketQuery' }
    },
    {
      path: 'market-stat',
      component: () => import('@/views/market/stat/index'),
      name: 'marketStat',
      meta: { title: 'marketStat' }
    },
    {
      path: 'detail',
      hidden: true,
      component: () => import('@/views/market/detail'),
      name: 'MarketDetail',
      meta: { title: 'MarketDetail' }
    }
  ]
}
export default marketRouter
