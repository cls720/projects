import Layout from '@/layout/child-router-tpl.vue'

const applyRouter = {
  path: '/apply',
  component: Layout,
  redirect: '/apply/power-assign',
  name: 'apply',
  meta: {
    title: '综合应用'
  },
  children: [
    {
      path: '/power-assign',
      component: () => import('@/views/apply/power-assign'),
      name: 'powerAssign',
      meta: { title: 'PowerAssign 权限分配' }
    },   
  ]
}

export default applyRouter
