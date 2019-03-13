import Vue from 'vue'
import APP from './comp/app.vue'
import router from './router'
import $ from 'jquery';

import NProgress from 'nprogress'; // Progress 进度条

// 引用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './css/index.css'
import './css/custom.css'

// Progress 进度条 样式
import 'nprogress/nprogress.css';
// highlight theme
import 'highlight.js/styles/color-brewer.css';

import demoBox from './comp/demo-box.vue'
import anchor from './comp/anchor.vue'
Vue.component('demo-box', demoBox);
Vue.component('anchor', anchor);

// product
import '../libs/themes-base/index.css'
 import {VTable,GPTable,VPagination,VCheckbox,VCheckboxGroup,VSelect,VDropdown} from '../libs/index.js'

// dev
/*import '../packages/themes-base/index.css'
import {VTable,VPagination,VCheckbox,VCheckboxGroup,VSelect,VDropdown} from '../packages/index.js'*/

Vue.component(VTable.name, VTable)
Vue.component(GPTable.name, GPTable)
Vue.component(VPagination.name, VPagination)
Vue.component(VCheckbox.name, VCheckbox)
Vue.component(VCheckboxGroup.name, VCheckboxGroup)
Vue.component(VSelect.name, VSelect)
Vue.component(VDropdown.name, VDropdown)
Vue.use(ElementUI)



router.beforeEach((to, from, next) => {

    NProgress.start();

    next();

    NProgress.done();
})

router.afterEach(() => {
    NProgress.done(); // 结束Progress
});

new Vue({
    el: '#app',
    router,
    render: h => h(APP)
})