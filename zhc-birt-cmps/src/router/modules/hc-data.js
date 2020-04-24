import Layout from '@/layout/child-router-tpl.vue'

const hcDataRouter = {
  path: '/hc-data',
  component: Layout,
  redirect: '/hc-data/table',
  name: 'hc-data',
  meta: {
    title: '数据'
  },
  children: [
    {
      path: '/table',
      component: () => import('@/views/hc-data/table'),
      name: 'hcTable',
      meta: { title: 'HcTable 表格' }
    },
    {
      path: '/datalist',
      component: () => import('@/views/hc-data/datalist'),
      name: 'hcDataList',
      meta: { title: 'HcDataList 数据列表' }
    },
    {
      path: '/tree',
      component: () => import('@/views/hc-data/tree'),
      name: 'hcTree',
      meta: { title: 'HcTree 树形控件' }
    },
  ]
}

export default hcDataRouter
