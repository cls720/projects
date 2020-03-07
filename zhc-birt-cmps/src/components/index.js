import cmps from './complist'

const install = function (Vue, opts = {}) {
    Vue.prototype.$HCBIRT = opts;
    for (var k in cmps) {
        let cmpt = cmps[k];
        Vue.component(cmpt.name, cmpt);
    }
}
if (window && window.Vue) {
    install(window.Vue);
}

export default { ...cmps, install }