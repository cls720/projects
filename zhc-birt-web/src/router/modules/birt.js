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
          component: () => import('@/components/BirtBook/index'),
          name: 'FormBirt',
          meta: {
            title: 'formBirt'
          }
        },
        {
          path: 'form-list',
          component: () => import('@/components/BirtBook/index'),
          name: 'FormListBirt',
          meta: {
            title: 'formListBirt'
          }
        },
        {
          path: 'grid-list',
          component: () => import('@/components/BirtBook/index'),
          name: 'GridListBirt',
          meta: {
            title: 'gridListBirt'
          }
        },
        {
          path: 'grid-group-stat',
          component: () => import('@/components/BirtBook/index'),
          name: 'GridGroupStatBirt',
          meta: {
            title: 'gridGroupStatBirt'
          }
        },
        {
          path: 'grid-lock',
          component: () => import('@/components/BirtBook/index'),
          name: 'GridLockBirt',
          meta: {
            title: 'gridLockBirt'
          }
        },
        {
          path: 'column-split',
          component: () => import('@/components/BirtBook/index'),
          name: 'ColumnSplitBirt',
          meta: {
            title: 'columnSplitBirt'
          }
        },
        {
          path: 'card-split',
          component: () => import('@/components/BirtBook/index'),
          name: 'CardSplitBirt',
          meta: {
            title: 'cardSplitBirt'
          }
        },
        {
          path: 'invoice-print',
          component: () => import('@/components/BirtBook/index'),
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
          component: () => import('@/components/BirtBook/index'),
          name: 'ArchivesBirt',
          meta: {
            title: 'archivesBirt'
          }
        },
        {
          path: 'electronic-signature',
          component: () => import('@/components/BirtBook/index'),
          name: 'ElectronicSignatureBirt',
          meta: {
            title: 'electronicSignatureBirt'
          }
        },
        {
          path: 'documents',
          component: () => import('@/components/BirtBook/index'),
          name: 'DocumentsBirt',
          meta: {
            title: 'documentsBirt'
          }
        },
        {
          path: 'data-deep',
          component: () => import('@/components/BirtBook/index'),
          name: 'DataDeepBirt',
          meta: {
            title: 'dataDeepBirt'
          },
          children: [{
            hidden: true,
            path: 'order-detail',
            component: () => import('@/components/BirtBook/index'),
            name: 'OrderDetailBirt',
            meta: {
              title: 'orderDetailBirt'
            }
          }, {
            hidden: true,
            path: 'bom-detail',
            component: () => import('@/components/BirtBook/index'),
            name: 'BomDetailBirt',
            meta: {
              title: 'bomDetailBirt'
            }
          }]
        },
      ]
    }
  ]
}
export default birtRouter
