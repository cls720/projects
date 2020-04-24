/**
 * 打包要把webpack.config.js 放在根目录下打包才可以
 * 放本目录打包的话 引用上级目录  es6不会转译 会有问题 
 * 同时要注意一下 webpack 输入输出的路径
 */

import HcCarousel from "./Carousel"
import HcDataList from "./DataList"
import HcImageTitle from './ImageTitle'
import HcLinkHrefs from "./LinkHrefs";
import HcLoopScroll from "./LoopScroll"
import HcTabs from "./Tabs"
import HcTextLabel from "./TextLabel"
import HcTimeline from "./Timeline"
import HcToolBar from "./ToolBar"
import HcVideo from "./Video"


const cmps = {
  HcCarousel,
  HcDataList,
  HcImageTitle,
  HcLinkHrefs,
  HcLoopScroll,
  HcTabs,
  HcTextLabel,
  HcTimeline,
  HcToolBar,
  HcVideo
};
const install = () => {
  for (var key in cmps) {
    Vue.component(key, cmps[key]);
  }
}
if (window && window.Vue) {
  install();
}
export default {
  ...cmps,
  install
};