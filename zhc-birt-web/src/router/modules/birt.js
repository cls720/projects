/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const birtRouter = {
  path: '/birt',
  component: Layout,
  redirect: '/birt/basic/form',
  name: 'birt',
  meta: {
    title: 'birt',
    icon: 'table'
  },
  children: [{
    path: 'basic',
    name: 'BasicBirt',
    component: () => import('@/views/birt/basic/index'),
    meta: {
      title: 'basicBirt'
    },
    children: [{
      path: 'form',
      component: () => import('@/views/birt/workbook/index'),
      name: 'FormBirt',
      meta: {
        title: 'formBirt'
      }
    },
    {
      path: 'form-list',
      component: () => import('@/views/birt/workbook/index'),
      name: 'FormListBirt',
      meta: {
        title: 'formListBirt'
      }
    },
    {
      path: 'grid-list',
      component: () => import('@/views/birt/workbook/index'),
      name: 'GridListBirt',
      meta: {
        title: 'gridListBirt'
      }
    },
    {
      path: 'grid-group-stat',
      component: () => import('@/views/birt/workbook/index'),
      name: 'GridGroupStatBirt',
      meta: {
        title: 'gridGroupStatBirt'
      }
    },
    {
      path: 'grid-lock',
      component: () => import('@/views/birt/workbook/index'),
      name: 'GridLockBirt',
      meta: {
        title: 'gridLockBirt'
      }
    },
    {
      path: 'column-split',
      component: () => import('@/views/birt/workbook/index'),
      name: 'ColumnSplitBirt',
      meta: {
        title: 'columnSplitBirt'
      }
    },
    {
      path: 'card-split',
      component: () => import('@/views/birt/workbook/index'),
      name: 'CardSplitBirt',
      meta: {
        title: 'cardSplitBirt'
      }
    },
    {
      path: 'invoice-print',
      component: () => import('@/views/birt/workbook/index'),
      name: 'invoicePrintBirt',
      meta: {
        title: 'invoicePrintBirt'
      }
    }
    ]
  },
  {
    path: 'advince',
    name: 'AdvinceBirt',
    component: () => import('@/views/birt/advance/index'),
    meta: {
      title: 'advinceBirt'
    },
    children: [{
      path: 'archives',
      component: () => import('@/views/birt/workbook/index'),
      name: 'ArchivesBirt',
      meta: {
        title: 'archivesBirt'
      }
    },
    {
      path: 'electronic-signature',
      component: () => import('@/views/birt/workbook/index'),
      name: 'ElectronicSignatureBirt',
      meta: {
        title: 'electronicSignatureBirt'
      }
    },
    {
      path: 'documents',
      component: () => import('@/views/birt/workbook/index'),
      name: 'DocumentsBirt',
      meta: {
        title: 'documentsBirt'
      }
    },
    {
      path: 'data-deep',
      component: () => import('@/views/birt/workbook/index'),
      name: 'DataDeepBirt',
      meta: {
        title: 'dataDeepBirt'
      },
      children: [{
        hidden: true,
        path: 'order-detail',
        component: () => import('@/views/birt/workbook/index'),
        name: 'OrderDetailBirt',
        meta: {
          title: 'orderDetailBirt'
        }
      }, {
        hidden: true,
        path: 'bom-detail',
        component: () => import('@/views/birt/workbook/index'),
        name: 'BomDetailBirt',
        meta: {
          title: 'bomDetailBirt'
        }
      }]
    },
    {
      path: 'tab',
      component: () => import('@/views/birt/workbook/index'),
      name: 'TabBirt',
      meta: {
        title: 'tabBirt'
      }
    },
    {
      path: 'carousel',
      component: () => import('@/views/birt/workbook/index'),
      name: 'CarouselBirt',
      meta: {
        title: 'carouselBirt'
      }
    },
    {
      path: 'loop-scroll',
      component: () => import('@/views/birt/workbook/index'),
      name: 'LoopScrollBirt',
      meta: {
        title: 'loopScrollBirt'
      }
    },
    {
      path: 'media',
      component: () => import('@/views/birt/workbook/index'),
      name: 'MediaBirt',
      meta: {
        title: 'mediaBirt'
      }
    },
    ]
  }
  ]
}
export default birtRouter
