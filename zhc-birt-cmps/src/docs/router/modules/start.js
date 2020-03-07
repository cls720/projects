import Layout from '@/docs/main/child-router-tpl.vue'

const startRouter = {
  path: '/',
  component: Layout,
  redirect: 'intro',
  name: 'start',
  meta: {
    title: '开始'
  },
  children: [
    {
      path: '/intro',
      component: () => import('@/docs/md/intro.md'),
      name: 'intro',
      meta: { title: '介绍' }
    },
    {
      path: '/install',
      component: () => import('@/docs/md/install.md'),
      name: 'install',
      meta: { title: '安装' }
    }, {
      path: '/start',
      component: () => import('@/docs/md/start.md'),
      name: 'start',
      meta: { title: '快速上手' }
    },
  ]
}

export default startRouter
