/**
 * 打包要把webpack.config.js 放在根目录下打包才可以
 * 放本目录打包的话 引用上级目录  es6不会转译 会有问题 
 * 同时要注意一下 webpack 输入输出的路径
 */
import BirtWorkBook from "./WorkBook"
import BirtToolBar from "./ToolBar"
import BirtGridSheet from "./GridSheet"
import BirtFormSheet from "./FormSheet"


const cmps = {
  BirtWorkBook,
  BirtToolBar,
  BirtGridSheet,
  BirtFormSheet 
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