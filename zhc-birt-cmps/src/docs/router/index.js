import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import startRouter from './modules/start'
import datasourceRouter from './modules/datasource'
import birtRouter from './modules/birt'
import hcRouter from './modules/hc'
import chartsRouter from './modules/charts'

export const constantRoutes = [
  startRouter,
  datasourceRouter,
  birtRouter,
  hcRouter,
  chartsRouter
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
