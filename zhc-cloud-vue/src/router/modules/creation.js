/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const creationRouter = {
  path: '/creation',
  component: Layout,
  //hidden: true,
  redirect: '/creation/query',
  name: 'Creation',
  meta: {
    title: 'creation',
    icon: 'dom-search'
  },
  children: [
    {
      path: 'creation/query',
      component: () => import('@/views/creation/query/index'),
      name: 'Creation',
      meta: { title: 'creationQuery' ,noCache:false }
    }
  ]
}
export default creationRouter
