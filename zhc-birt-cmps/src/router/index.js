import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import datasourceRouter from './modules/datasource'
import birtRouter from './modules/birt'
import hcRouter from './modules/hc'
import hcDataRouter from './modules/hc-data'
import chartsRouter from './modules/charts'
import hcComposeRouter from './modules/hc-compose'
import applyRouter from './modules/apply'

export const constantRoutes = [
  datasourceRouter,
  birtRouter,
  hcRouter,
  hcDataRouter,
  chartsRouter,
  hcComposeRouter,
  applyRouter
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
