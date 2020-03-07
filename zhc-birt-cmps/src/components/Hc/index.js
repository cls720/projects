/**
 * 打包要把webpack.config.js 放在根目录下打包才可以
 * 放本目录打包的话 引用上级目录  es6不会转译 会有问题 
 * 同时要注意一下 webpack 输入输出的路径
 */

import HcTextLabel from "./TextLabel"
import HcImageTitle from './ImageTitle'
import HcLinkHrefs from "./LinkHrefs";
import HcToolBar from "./ToolBar"
import HcTabs from "./Tabs"
import HcCarousel from "./Carousel"
import HcDataList from "./DataList"
import HcLoopScroll from "./LoopScroll"
import HcTimeline from "./Timeline"
import HcVideo from "./Video"

const cmps = {
  HcTextLabel,
  HcImageTitle,
  HcLinkHrefs,
  HcToolBar,
  HcTabs,  
  HcCarousel,
  HcDataList,    
  HcLoopScroll,  
  HcTimeline,  
  HcVideo
};
const install = function (Vue, opts = {}) {
  for (var k in cmps) {
    let cmpt = cmps[k];
    Vue.component(cmpt.name, cmpt);
  }
}
if (window && window.Vue) {
  install(window.Vue);
}
export default {
  ...cmps,
  install
};