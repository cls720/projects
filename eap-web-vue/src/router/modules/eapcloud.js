/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const eapcloudRouter = {
  path: '/eapcloud',
  component: Layout,
  redirect: '/eapcloud/developer-main',
  name: 'eapcloud',
  meta: {
    title: 'eapcloud',
    icon: 'international'
  },
  children: [
    {
      path: 'developer-main',
      component: () => import('@/views/eapcloud/developerMain/index'),
      name: 'DeveloperMain',
      meta: { title: 'developerMain' }
    },
    {
      path: 'server-monitor',
      component: () => import('@/views/eapcloud/serverMonitor/index'),
      name: 'ServerMonitor',
      meta: { title: 'serverMonitor' }
    }
  ]
}
export default eapcloudRouter
