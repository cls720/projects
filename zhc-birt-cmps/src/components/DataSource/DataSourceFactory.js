import WebSocketConection from "./WebSocketConection"
import JsWebSocketDataSet from "./JsWebSocketDataSet"

export default class DataSourceFactory {
  static newInstance(option) {
    if (option.controlName == "WebSocketConection") {
      return new WebSocketConection(option);
    } else if (option.controlName == "JsWebSocketDataSet") {
      return new JsWebSocketDataSet(option);
    }
  }
}
