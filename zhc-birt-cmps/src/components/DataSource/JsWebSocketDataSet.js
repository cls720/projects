import emitter from "@/utils/emitter";
import cloneDeep from "lodash/fp/cloneDeep";

export default class JsWebSocketDataSet {
  constructor(option) {
    if (!option.datas) {
      console.error("数据集datas属性未配置")
    }
    // this.datas = option.datas;  
    Object.assign(this, option);
    this.curRecord = {
      __empty: true
    };
  }

  /**
   * 获取后台返回未加式源数据
   */
  getSouceData() {
    return this.sourcedata || [];
  }

  /**
   * 数据集加载后台源数据
   * @param {*} datas 
   * @param {*} option 
   */
  loadData(datas, option) {
    this.sourcedata = cloneDeep(datas);
    emitter.emit("loadData" + this.controlId, datas);
    this.setData(datas, option);
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
    // if (rec == this.curRecord)
    //   return;    
    this.curRecord = rec
    emitter.emit("curRecordChange" + this.controlId, rec);
  }
}
