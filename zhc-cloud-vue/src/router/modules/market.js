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
    icon: 'pie'
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
      path: 'market-customer',
      component: () => import('@/views/market/customer/index'),
      name: 'customerquery',
      meta: { title: 'marketCustomer' }
    },
    {
      path: 'customer/detail',
      hidden: true,
      component: () => import('@/views/market/customer/detail'),
      name: 'customerdetail',
      meta: { title: 'customerDetail' }
    },
    {
      path: 'market-supplier',
      component: () => import('@/views/market/supplier/index'),
      name: 'supplierquery',
      meta: { title: 'marketSupplier' }
    },
    {
      path: 'supplier/detail',
      hidden: true,
      component: () => import('@/views/market/supplier/detail'),
      name: 'supplierdetail',
      meta: { title: 'supplierDetail' }
    },
    {
      path: 'order',
      component: () => import('@/views/market/order/index'),
      name: 'marketorderquery',
      meta: { title: 'marketOrder' }
    },
    
    {
      path: 'detail',
      hidden: true,
      component: () => import('@/views/market/detail'),
      name: 'MarketDetail',
      meta: { title: 'marketDetail' }
    }
  ]
}
export default marketRouter
