import Layout from '@/docs/main/child-router-tpl.vue'

const hcRouter = {
  path: '/hc',
  component: Layout,
  redirect: '/hc/text-label',
  name: 'hc',
  meta: {
    title: '组件'
  },
  children: [
    {
      path: '/text-label',
      component: () => import('@/docs/md/hc/text-label/main.md'),
      name: 'hcTextLabel',
      meta: { title: 'HcTextLabel 文本标签' }
    },
    {
      path: '/image-title',
      component: () => import('@/docs/md/hc/image-title/main.md'),
      name: 'hcImageTitle',
      meta: { title: 'HcImageTitle 图片标题' }
    },
    {
      path: '/link-hrefs',
      component: () => import('@/docs/md/hc/link-hrefs/main.md'),
      name: 'hcLinkHrefs',
      meta: { title: 'HcLinkHrefs 下推链接' }
    },
    {
      path: '/tool-bar',
      component: () => import('@/docs/md/hc/tool-bar/main.md'),
      name: 'hcToolBar',
      meta: { title: 'HcToolBar 工具条' }
    },
    {
      path: '/hc-tabs',
      component: () => import('@/docs/md/hc/tabs/main.md'),
      name: 'hcTabs',
      meta: { title: 'HcTabs 选项卡' }
    },
    {
      path: '/carousel',
      component: () => import('@/docs/md/hc/carousel/main.md'),
      name: 'hcCarousel',
      meta: { title: 'HcCarousel 走马灯' }
    },
    {
      path: '/loop-scroll',
      component: () => import('@/docs/md/hc/loop-scroll/main.md'),
      name: 'hcLoopScroll',
      meta: { title: 'HcLoopScroll 循环滚屏' }
    },
    {
      path: '/progress',
      component: () => import('@/docs/md/hc/progress/main.md'),
      name: 'hcProgress',
      meta: { title: 'HcProgress 进度条' }
    },
    {
      path: '/time-line',
      component: () => import('@/docs/md/hc/time-line/main.md'),
      name: 'hcTimeline',
      meta: { title: 'HcTimeline 时间轴' }
    },
    {
      path: '/video',
      component: () => import('@/docs/md/hc/video/main.md'),
      name: 'hcVideo',
      meta: { title: 'HcVideo 视频' }
    },
  ]
}

export default hcRouter
