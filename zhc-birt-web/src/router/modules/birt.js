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
  children: [   
    {
      path: 'basic',
      name: 'BasicBirt',
      component: () => import('@/views/birt/basic/index'),
      meta: { title: 'basicBirt' },
      children: [
        {
          path: 'form',
          component: () => import('@/views/birt/basic/form/index'),
          name: 'FormBirt',
          meta: { title: 'formBirt' }
        },
        {
          path: 'form-list',
          component: () => import('@/views/birt/basic/form-list/index'),
          name: 'FormListBirt',
          meta: { title: 'formListBirt' }
        },
        {
          path: 'grid-list',
          component: () => import('@/views/birt/basic/grid-list/index'),
          name: 'GridListBirt',
          meta: { title: 'gridListBirt' }
        },
        {
          path: 'grid-group-stat',
          component: () => import('@/views/birt/basic/grid-group-stat/index'),
          name: 'GridGroupStatBirt',
          meta: { title: 'gridGroupStatBirt' }
        },
        {
          path: 'grid-lock',
          component: () => import('@/views/birt/basic/grid-lock/index'),
          name: 'GridLockBirt',
          meta: { title: 'gridLockBirt' }
        }
      ]
    },
    {
      path: 'advince',
      name: 'AdvinceBirt',
      meta: { title: 'advinceBirt'}
    }
  ]
}
export default birtRouter
