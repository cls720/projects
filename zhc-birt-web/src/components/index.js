import Charts from './Charts'
import BirtWorkBook from "./Birt/WorkBook"
import BirtToolBar from "./Birt/ToolBar"
import BirtGridSheet from "./Birt/GridSheet"
import BirtFormSheet from "./Birt/FormSheet"
import BirtCellChildren from "./BirtCellChildren"
import HcCarousel from "./Hc/Carousel"
import HcDataList from "./Hc/DataList"
import HcLoopScroll from "./Hc/LoopScroll"
import HcTabs from "./Hc/Tabs"
import HcTimeline from "./Hc/Timeline"
import HcToolBar from "./Hc/ToolBar"
import HcVideo from "./Hc/Video"

import HcImageTitle from './Hc/ImageTitle'
import HcTextLabel from "./Hc/TextLabel"
import HcLinkHrefs from "./Hc/LinkHrefs";

const cmps = {
  BirtWorkBook,
  BirtToolBar,
  BirtGridSheet,
  BirtFormSheet,
  BirtCellChildren,
  HcCarousel,
  HcDataList,
  HcLoopScroll,
  HcTabs,
  HcTimeline,
  HcToolBar,
  HcVideo,
  HcImageTitle,
  HcTextLabel,
  HcLinkHrefs
};
if (window && window.Vue) {
  for (var key in cmps) {
    Vue.component(key, cmps[key]);
  }
}


const install = function (Vue, ops = {}) {
  //=========08335============
  if (!Vue.prototype.$HCBIRT) {
    Vue.prototype.$HCBIRT = ops;
    return;
  }
  Vue.prototype.$HCBIRT.tabHeight = ops.tabHeight;

}
export default {
  ...cmps,
  Charts,
  install
};
