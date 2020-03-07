import Layout from '@/docs/main/child-router-tpl.vue'

const datasourceRouter = {
  path: '/datasource',
  component: Layout,
  redirect: '/datasource/websocket-conection',
  name: 'datasource',
  meta: {
    title: '数据源'
  },
  children: [
    {
      path: '/websocket-conection',
      component: () => import('@/docs/md/datasource/websocket-conection/main.md'),
      name: 'websocketConection',
      meta: { title: 'WebSocketConection' }
    },
    {
      path: '/js-websocket-dataset',
      component: () => import('@/docs/md/datasource/js-websocket-dataset/main.md'),
      name: 'jsWebsocketDataset',
      meta: { title: 'JsWebSocketDataSet' }
    },
  ]
}

export default datasourceRouter
