import Charts from './Charts'
// import BirtBook from "./BirtBook"
// import BirtSheet from "./BirtSheet"
// import BirtToolBar from "./BirtToolBar"
// import BirtCellChildren from "./BirtCellChildren"
import ImageTitle from './ImageTitle'
import TextLabel from "./TextLabel"
import HcTimeline from "./Hc/Timeline"

const cmps = {
//   BirtBook,
//   BirtSheet,
//   BirtToolBar,
//   BirtCellChildren,
  ImageTitle,
  TextLabel,
  HcTimeline
};
if (window && window.Vue) {
  for (var key in cmps) {
    Vue.component(key, cmps[key]);
  }
}
export default {
  ...cmps,
  Charts
};
