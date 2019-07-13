/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const funclibRouter = {
  path: '/funclib',
  component: Layout,
  redirect: '/funclib/add',
  name: 'funclib',
  // hidden: true,
  meta: {
    title: 'funclib',
    icon: 'user-manage'
  },
  children: [
    {
      path: 'query',
      component: () => import('@/views/funclib/query/index'),
      name: 'FunclibQuery',
      hidden: true,
      meta: { title: 'funclibQuery'}
    },
    {
      path: 'add',
      component: () => import('@/views/funclib/add/index'),
      name: 'FunclibAdd',
      hidden:true,
      meta: { title: 'funclibAdd' }
    }
  ]
}
export default funclibRouter
