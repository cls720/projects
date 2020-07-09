/**
 * 报表数据集
 */
import emitter from "@/utils/emitter";
import DatasetFilterInfc from "./interface/DatasetFilterInfc"
import DatasetTreeInfc from "./interface/DatasetTreeInfc"
import DatasetPaggingInfc from "./interface/DatasetPaggingInfc"

import { mix } from '@/funclib/ObjectUtil';

export default class HcDataset extends mix(DatasetFilterInfc, DatasetTreeInfc, DatasetPaggingInfc) {
    constructor(option) {
        super();
        debugger
        if (!option.data) {
            console.error("数据集data属性未配置")
        }
        Object.assign(this, option);
        // 属性当前记录        
        this.curtRecord = {
            __empty: true
        };
    }

    /**
    * 获取行记录主键值
    * @param {*} recd 
    */
    _getRowKeyValue(recd) {
        // 主键未配置返回空
        if (!this.rowKey) return;
        if (typeof recd == "string") return recd;
        if (typeof this.rowKey == "string") {
            return recd[this.rowKey]
        } else if (Array.isArray(this.rowKey)) {
            let rowKeyValue = "";
            this.rowKey.forEach(fieldName => {
                rowKeyValue += recd[fieldName];
            });
            return rowKeyValue;
        } else if (typeof this.rowKey == "function") {
            return this.rowKey.call(this, recd);
        }
    }

    // 设置数据map映射关系，方便查找 
    _setDataMap() {
        let me = this;
        let dataMap = {};
        this.data.forEach(r => {
            let keyVal = me._getRowKeyValue(r);
            if (keyVal != undefined) {
                dataMap[keyVal] = r;
            }
        });
        // 设置主键值map映射
        this.dataMap = dataMap;
    }

    // 获取数据记录集map缓存
    _getDataMap() {
        // 当不存在map缓存，且数据有设置主键时计算返存map
        if (!this.dataMap && this.rowKey) {
            this._setDataMap();
        }
        return this.dataMap;
    }

    // 清空map缓存
    _clearDataMap() {
        this.dataMap = null;
    }

    /**
     * 获取后台返回未加工源数据
     */
    getSourceData() {
        return this.sourcedata || [];
    }

    /**
     * 保存后台加载的原始数据
     * @param {*}} data 
     */
    setSourceData(data) {
        if (!this.sourcedata) {
            this.sourcedata = []
        }
        this.sourcedata.splice(0, this.sourcedata.length, ...data);
    }

    /**
     * 数据当前显示数据
     */
    getData() {
        debugger
        if (this._isTree()) {
            return this.getTreeData();
        }
        return this.data;
    }

    /**
     * 设置当前显示数据
     * @param {*} datas      
     */
    setData(data) {
        this.data.splice(0, this.data.length, ...data);
        this._clearDataMap();
    }

    /**
     * 数据集加载后台源数据
     * @param {*} data 
     * @param {*} option 
     */
    loadData(data, option) {
        data = data || [];
        emitter.emit("beforeLoadData" + this.controlId, data);
        let cloneData = JSON.parse(JSON.stringify(data));
        this.setSourceData(cloneData);
        this.setData(data, option);
        emitter.emit("afterLoadData" + this.controlId, data);
    }

    /**
    * 注册控件事件
    * eventName 事件名
    * callBackFunc 回调函数    
    */
    on(eventName, callBackFunc) {
        let args = [...arguments]
        args.shift();
        let me = this;
        // 处理控件自定义事件
        emitter.on(eventName + this.controlId, (...args) => {
            callBackFunc.call(me, ...args);
        });
    }

    // 执行请求后台数据
    requestData(param) {
        if (this.requestFunc) {
            return this.requestFunc.call(this, param);
        }
    }
}
