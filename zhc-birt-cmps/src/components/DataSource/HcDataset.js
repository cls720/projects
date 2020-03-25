/**
 * 报表数据集
 */
import emitter from "@/utils/emitter";

export default class HcDataset {
    constructor(option) {
        if (!option.data) {
            console.error("数据集data属性未配置")
        }
        Object.assign(this, option);
        // 属性是否修改
        this._dirty = false;
        // 属性当前记录        
        this.curtRecord = {
            __empty: true
        };
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
        return this.data;
    }

    /**
     * 设置当前显示数据
     * @param {*} datas      
     */
    setData(data) {
        this.data.splice(0, this.data.length, ...data);
    }

    /**
     * 获取数据集修改后的数据
     */
    getDirtyData() {
        return this.dirtyData || [];
    }

    /**
     * 设置数据集修改后数据
     * @param {*} data 
     */
    setDirtyData(data) {
        if (!this.dirtyData) {
            this.dirtyData = [];
        }
        this.dirtyData.splice(0, this.dirtyData.length, ...data);
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
}
