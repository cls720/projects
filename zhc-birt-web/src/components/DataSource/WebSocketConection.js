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
        let msgid = data.msgid;
        let target = me.target[msgid];
        let datasetId = target.datasetId;
        if (target && me.dataset[datasetId]) {
          me.dataset[datasetId].setData(data.datas);
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
