import Vue from 'vue'
import App from './layout/App.vue'
import router from './router/index.js'
import '@/docs/fonts/iconfont/iconfont.css';
import '@/docs/css/index.css'
import '@/docs/css/custom.css'

// 引用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import cmps from './components/complist'

for (var k in cmps) {
  console.log(k);  
  let cmpt = cmps[k];
  Vue.component(cmpt.name, cmpt);
}
Vue.prototype.$HCBIRT = { tabHeight: 0 };

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
