function JsWebSocketDataSet(option) {
    if (!option.datas) {
        console.error("数据集datas属性未配置")
    }
    this.datas = option.datas;
    this.curRecord = {
        __empty: true
    };
}

JsWebSocketDataSet.prototype.last = function () {
    if (this.datas && this.datas.length > 0) {
        return this.datas[this.datas.length - 1];
    }
}

JsWebSocketDataSet.prototype.setData = function (datas) {
    this.datas.splice(0, this.datas.length, ...datas);
    this.setCurRecord(this.last());
}

JsWebSocketDataSet.prototype.setCurRecord = function (rec) {
    if (rec == this.curRecord)
        return;
    this.curRecord = rec;
}