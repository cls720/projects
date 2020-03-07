/**
 * 打包要把webpack.config.js 放在根目录下打包才可以
 * 放本目录打包的话 引用上级目录  es6不会转译 会有问题 
 * 同时要注意一下 webpack 输入输出的路径
 */
import BaseEChart from './BaseEChart'
import BarChart from './BarChart.vue'
import BarPercentChart from './BarPercentChart.vue'
import ChinaMapChart from './ChinaMapChart.vue'
import FunnelChart from './FunnelChart.vue'
import GaugeChart from './GaugeChart.vue'
import LineChart from './LineChart.vue'
import PieChart from './PieChart.vue'
import RadarChart from './RadarChart.vue'
import RealtimeChart from './RealtimeChart.vue'
import HcVideo from "@/components/Hc/Video"

const cmps = {
  BaseEChart,
  BarChart,
  BarPercentChart,
  ChinaMapChart,
  FunnelChart,
  GaugeChart,
  LineChart,
  PieChart,
  RadarChart,
  RealtimeChart,
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
