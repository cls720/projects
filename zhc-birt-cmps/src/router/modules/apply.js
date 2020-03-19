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
    {
      path: '/power-check',
      component: () => import('@/views/apply/power-check'),
      name: 'powerCheck',
      meta: { title: 'PowerCheck 权限反查' }
    },
    {
      path: '/power-modify',
      component: () => import('@/views/apply/power-modify'),
      name: 'powerModify',
      meta: { title: 'PowerModify 权限修改' }
    },
  ]
}

export default applyRouter
