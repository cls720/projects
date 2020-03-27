/**
 * 报表数据集
 */
import emitter from "@/utils/emitter";
import HcDataset from "./HcDataset"

export default class HcEditDataset extends HcDataset {
    constructor(option) {
        if (option.rowKey) {
            console.error("数据集主键rowKey未配置")
        }
        super(option);
        // 属性是否修改
        this._dirty = false;
    }

    /**
     * 设置当前显示数据
     * @param {*} datas      
     */
    setData(data) {
        super.setData(data);
        this.setDirtyData(data);
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
     * 添加数据
     * @param {*} data 
     */
    add(data) {
        this.getData().push(data);
        this.getDirtyData().push({ ...data, ...{ _state: "rsInsert" } })
    }

    remove(data) {

    }

    /**
     * 获取行记录主键值
     * @param {*} data 
     */
    _getRowKeyValue(data) {
        if (typeof this.rowKey == "string") {
            return data[this.rowKey]
        } else if (Array.isArray(this.rowKey)) {
            let rowKeyValue = "";
            this.rowKey.forEach(fieldName => {
                rowKeyValue += data[fieldName];
            });
            return rowKeyValue;
        } else if (typeof this.rowKey == "function") {
            return this.rowKey.call(this, data);
        }
    }
    /**
     * 获取数据下标
     * @param {*} recd 查找记录对象
     * @param {*} data 被查找数据列表
     */
    _getRowIndex(recd, data) {
        let keyValue = this._getRowKeyValue(recd);
        for (i = 0, l = data.length; i < l; i++) {
            let curtKeyValue = this._getRowKeyValue(data[i]);
            if (keyValue === curtKeyValue) return i;
        }
        return -1;
    }
}
