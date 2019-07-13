/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const bootServiceRouter = {
  path: '/boot-service',
  component: Layout,
  redirect: '/boot-service/myservice',
  name: 'BootService',
  meta: {
    title: 'bootService',
    icon: 'stat'
  },
  children: [
    {
      path: 'myservice',
      component: () => import('@/views/boot-service/myservice/index'),
      name: 'MyService',
      meta: { title: 'myService' }
    },
    {
      path: 'register',
      component: () => import('@/views/boot-service/register/index'),
      name: 'ServiceRegister',
      meta: { title: 'serviceRegister' }
    },
    {
      path: 'query',
      component: () => import('@/views/boot-service/query/index'),
      name: 'ServiceQuery',
      meta: { title: 'serviceQuery' }
    },
    {
      path: 'detail',
      component: () => import('@/views/boot-service/query/detail'),
      name: 'servicedetail',
      hidden:true,
      meta: { title: 'serviceDetail' }
    },
    {
      path: 'stat',
      component: () => import('@/views/boot-service/stat/index'),
      name: 'ServiceStat',
      meta: { title: 'serviceStat' }
    },
    {
      path: 'eureka',
      component: () => import('@/views/boot-service/eureka/index'),
      name: 'ServiceEureka',
      meta: { title: 'serviceEureka' }
    }
  ]
}
export default bootServiceRouter
