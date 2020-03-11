import Layout from '@/layout/child-router-tpl.vue'

const hcComposeRouter = {
  path: '/hc-compose',
  component: Layout,
  redirect: '/hc-compose/input-filter',
  name: 'hc-compose',
  meta: {
    title: '组合组件'
  },
  children: [
    {
      path: '/input-filter2',
      component: () => import('@/views/hc-compose/input-filter'),
      name: 'hcInputFilter',
      meta: { title: 'HcInputFilter 关键字过滤' }
    },
    {
      path: '/tree-transfer',
      component: () => import('@/views/hc-compose/tree-transfer'),
      name: 'hcTreeTransfer',
      meta: { title: 'HcTreeTransfer 树形穿梭框' }
    },
  ]
}

export default hcComposeRouter
