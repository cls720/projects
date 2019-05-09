/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

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
      path: 'architecture-diagram',
      component: () => import('@/views/eapcloud/architecture-diagram/index'),
      name: 'ArchitectureDiagram',
      meta: { title: 'architectureDiagram' }
    },
    {
      path: 'developer-main',
      component: () => import('@/views/eapcloud/developer-main/index'),
      name: 'DeveloperMain',
      meta: { title: 'developerMain' }
    },
    {
      path: 'server-monitor',
      component: () => import('@/views/eapcloud/server-monitor/index'),
      name: 'ServerMonitor',
      meta: { title: 'serverMonitor' }
    }
  ]
}
export default eapcloudRouter
