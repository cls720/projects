import Vue from 'vue'
import APP from './main/app.vue'
import demoBox from './main/demo-box.vue'
import anchor from './main/anchor.vue'
import cmps from '@/components/complist'

import router from './router/index.js'

import './fonts/iconfont/iconfont.css';
import './css/index.css'
import './css/custom.css'

// 引用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.component('demo-box', demoBox);
Vue.component('anchor', anchor);

for (var k in cmps) {
  let cmpt = cmps[k];
  Vue.component(cmpt.name, cmpt);
}
Vue.prototype.$HCBIRT = { tabHeight: 500 };

Vue.use(ElementUI)


// router.beforeEach((to, from, next) => {
//     next();
// })

// router.afterEach(() => {

// });

new Vue({
  el: '#app',
  router,
  render: h => h(APP)
})