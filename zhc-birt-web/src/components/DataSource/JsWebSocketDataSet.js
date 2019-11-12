export default class JsWebSocketDataSet {
  constructor(option) {
    if (!option.datas) {
      console.error("数据集datas属性未配置")
    }
    this.datas = option.datas;
    this.curRecord = {
      __empty: true
    };
  }

  last() {
    if (this.datas && this.datas.length > 0) {
      return this.datas[this.datas.length - 1];
    }
  }

  setData(datas, option) {
    this.datas.splice(0, this.datas.length, ...datas);
    this.setCurRecord(this.last());
  }

  setCurRecord(rec) {
    if (rec == this.curRecord)
      return;
    this.curRecord = rec;
    // this.emitter.emit('recordChange', this, rec);
  }
}
