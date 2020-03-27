/**
 * 报表数据集
 */
import emitter from "@/utils/emitter";
import HcDataset from "./HcDataset"

export default class HcEditDataset extends HcDataset {
    constructor(option) {
        debugger;
        if (!option.rowKey) {
            console.error(`数据集${option.controlId}主键rowKey未配置`)
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
        this.setDirtyData(JSON.parse(JSON.stringify(data)));
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
     * @param {*} recd 
     */
    add(recd) {
        this.getData().push(recd);
        this.getDirtyData().push({ ...recd, ...{ _state: "rsInsert" } })
    }

    /**
     * 修改记录
     * 
     * @param {*} recd 
     * @param {*} field 
     * @param {*} value 
     */
    edit(recd, field, value) {
        recd[field] = value;
        let dirtyRecdIndex = this._getRowIndex(recd, this.dirtyData);
        if (dirtyRecdIndex != -1) {
            let dirtyRecd = thid.dirtyData[dirtyRecdIndex]
            dirtyRecd[field] = value;
            dirtyRecd._state = "rsUpdate";
        }
    }

    remove(recd) {
        debugger
        let removeIndex = this._getRowIndex(recd, this.data);
        if (removeIndex != -1) {
            let removeRecd = this.data[removeIndex];
            this.data.splice(removeIndex, 1);
        }

        let removeDirtyIndex = this._getRowIndex(recd, this.dirtyData);
        if (removeDirtyIndex != -1) {
            let removeDirtyRecd = this.dirtyData[removeDirtyIndex];
            if (removeDirtyRecd._state == "rsInsert") {
                this.dirtyData.splice(removeDirtyIndex, 1);
            } else {
                removeDirtyRecd._state = "rsDelete";
            }
        }
    }

    /**
     * 获取行记录主键值
     * @param {*} recd 
     */
    _getRowKeyValue(recd) {
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
    /**
     * 获取数据下标
     * @param {*} recd 查找记录对象
     * @param {*} data 被查找数据列表
     */
    _getRowIndex(recd, data) {
        debugger
        let keyValue = this._getRowKeyValue(recd);
        if (keyValue === undefined) return -1;
        for (var i = 0, l = data.length; i < l; i++) {
            let curtKeyValue = this._getRowKeyValue(data[i]);
            if (keyValue === curtKeyValue) return i;
        }
        return -1;
    }
}
