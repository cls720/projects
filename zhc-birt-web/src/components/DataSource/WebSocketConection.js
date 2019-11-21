export default class WebSocketConection {
  constructor(option) {
    this.target = option.target;
    this.dataset = option.dataset;
    this.conection(option.webSocketUrl)
  }

  conection(url) {
    let me = this;
    this.webSocket = new WebSocket(url);
    this.webSocket.onerror = this.onerror;
    this.webSocket.onopen = this.onopen;
    this.webSocket.onmessage = function (event) {
      if (event.data) {
        let data = JSON.parse(event.data);
        let dataId = data.dataId;
        if (dataId) {
          // if (dataId == "dyj_WcuFn0RQ")debugger;
          let target = me.target[dataId];
          if (!target) return;
          let datasetId = target.datasetId;
          if (target && me.dataset[datasetId]) {
            me.dataset[datasetId].setData(data.datas);
          }
        } else {
          for (var mid in data) {
            dataId = mid;
            let target = me.target[mid];
            if (!target) {
              return;
            }
            let datasetId = target.datasetId;
            if (target && me.dataset[datasetId]) {
              me.dataset[datasetId].setData(data[mid].data);
            }
          }
        }
      }
    };
  }

  close() {
    if (this.webSocket) {
      this.webSocket.close();
      console.log("web socket 已关闭")
    }
  }

  onerror(event) {
    console.log("web socket error:" + event.data)
  }

  onopen(event) {
    console.log("websocket连接成功")
  }
}
