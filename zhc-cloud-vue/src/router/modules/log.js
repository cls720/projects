/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const logRouter = {
  path: '/log',
  component: Layout,
  redirect: '/log/login',
  name: 'log',
  meta: {
    title: 'log',
    icon: 'log'
  },
  children: [
    {
      path: 'login',
      component: () => import('@/views/log/login/query.vue'),
      name: 'LogLoginQuery',
      meta: { title: 'logLoginQuery'}
    },
    {
      path: 'error',
      component: () => import('@/views/log/error/query.vue'),
      name: 'LogErrorQuery',
      meta: { title: 'logErrorQuery'}
    }
  ]
}
export default logRouter
