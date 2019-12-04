/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const mobileRouter = {
  path: '/mobile',
  component: Layout,
  redirect: '/mobile/basic',
  name: 'mobile',
  meta: {
    title: 'mobile',
    icon: 'mobile-phone'
  },
  children: [{
    path: 'basic',
    component: () => import('@/components/BirtBook/index'),
    name: 'basic',
    meta: {
      title: 'mobileBasic'
    }
  }, {
    path: 'gcld',
    component: () => import('@/components/BirtBook/index'),
    name: 'gcld',
    meta: {
      title: 'seniorLeadership'
    }
  }, {
    path: 'zcld',
    component: () => import('@/components/BirtBook/index'),
    name: 'gcld',
    meta: {
      title: 'middleLevelLeadership'
    }
  }, {
    path: 'yxyg',
    component: () => import('@/components/BirtBook/index'),
    name: 'gcld',
    meta: {
      title: 'frontLineStaff'
    }
  }]
}
export default mobileRouter
