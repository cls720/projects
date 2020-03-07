import Layout from '@/docs/main/child-router-tpl.vue'

const birtRouter = {
  path: '/birt',
  component: Layout,
  redirect: '/birt/work-book',
  name: 'birt',
  meta: {
    title: '容器'
  },
  children: [
    {
      path: '/work-book',
      component: () => import('@/docs/md/birt/work-book/main.md'),
      name: 'birtWorkBook',
      meta: { title: 'BirtWorkBook 工作薄' }
    },
    {
      path: '/sheet',
      component: () => import('@/docs/md/birt/sheet/main.md'),
      name: 'birtSheet',
      meta: { title: 'BirtSheet 工作表' }
    },
    {
      path: '/form-sheet',
      component: () => import('@/docs/md/birt/form-sheet/main.md'),
      name: 'birtFormSheet',
      meta: { title: 'BirtFormSheet 表单布局' }
    },
    {
      path: '/grid-sheet',
      component: () => import('@/docs/md/birt/grid-sheet/main.md'),
      name: 'birtGridSheet',
      meta: { title: 'BirtGridSheet 网格布局' }
    },
    {
      path: '/tool-bar',
      component: () => import('@/docs/md/birt/tool-bar/main.md'),
      name: 'birtToolBar',
      meta: { title: 'BirtToolBar 报表工具条' }
    },
  ]
}

export default birtRouter
