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
      path: '/tree-lookup',
      component: () => import('@/views/hc-compose/tree-lookup'),
      name: 'hcTreeLookup',
      meta: { title: 'HcTreeLookup 树形查找定义' }
    },
  ]
}

export default hcComposeRouter
