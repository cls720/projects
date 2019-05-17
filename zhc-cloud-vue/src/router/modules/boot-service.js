/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const bootServiceRouter = {
  path: '/boot-service',
  component: Layout,
  redirect: '/boot-service/service-stat',
  name: 'BootService',
  meta: {
    title: 'bootService',
    icon: 'cloud'
  },
  children: [
    {
      path: 'service-stat',
      component: () => import('@/views/boot-service/service-stat/index'),
      name: 'ServiceStat',
      meta: { title: 'serviceStat' }
    }
  ]
}
export default bootServiceRouter
