import WebSocketConection from "./WebSocketConection"
import HcDataset from "./HcDataset"
import HcEditDataset from "./HcEditDataset"

import JsWebSocketDataSet from "./JsWebSocketDataSet"

export default class DataSourceFactory {
  static newInstance(option) {
    if (option.controlName == "WebSocketConection") {
      return new WebSocketConection(option);
    } else if (option.controlName == "HcDataset") {
      return new HcDataset(option);
    } else if (option.controlName == "HcEditDataset") {
      return new HcEditDataset(option);
    } else if (option.controlName == "JsWebSocketDataSet") {
      return new JsWebSocketDataSet(option);
    }
  }
}
