/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/user-query',
  name: 'user',
  meta: {
    title: 'user',
    icon: 'international'
  },
  children: [
    {
      path: 'user-query',
      component: () => import('@/views/user/user-query/index'),
      name: 'UserQuery',
      meta: { title: 'userQuery'}
    },
    {
      path: 'user-add',
      component: () => import('@/views/user/user-add/index'),
      name: 'UserAdd',
      meta: { title: 'userAdd' }
    },
    {
      path: 'user-type-stat',
      component: () => import('@/views/user/user-type-stat/index'),
      name: 'UserTypeStat',
      meta: { title: 'userTypeStat' }
    },
    {
      path: 'user-online-stat',
      component: () => import('@/views/user/user-online-stat/index'),
      name: 'UserOnlineStat',
      meta: { title: 'userOnlineStat' }
    }
  ]
}
export default userRouter
