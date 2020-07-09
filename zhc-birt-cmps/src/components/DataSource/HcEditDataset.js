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
        this.dirtyData = [];
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
        return this.dirtyData;
    }

    /**
     * 设置数据集修改后数据
     * @param {*} data 
     */
    setDirtyData(data) {
        this.dirtyData.splice(0, this.dirtyData.length, ...data);
    }

    /**
     * 添加数据
     * @param {*} data 
     */
    add(data) {
        if (Array.isArray(data)) {
            data.forEach(recd => {
                this._addRecd(recd);
            })
        } else {
            this._addRecd(data);
        }
    }

    _addRecd(recd) {
        let existIndex = this._getRowIndex(recd, this.data);
        if (existIndex == -1) {
            this.getData().push(recd);
            this.getDirtyData().push({ ...recd, ...{ _state: "rsInsert" } })
            this._setDirty(true);
        }
    }

    /**
     * 修改记录
     * 
     * @param {*} recd 修改记录
     * @param {*} field 修改字段列表 string|array
     */
    edit(recd, field) {
        debugger
        let editIndex = this._getRowIndex(recd, this.data);
        if (editIndex != -1) {
            let editRecd = this.data[editIndex];
            if (typeof field == "string") {
                editRecd[field] = recd[field];
            } else if (Array.isArray(field)) {
                field.forEach(f => {
                    editRecd[f] = recd[f];
                })
            }
        }

        let dirtyEditIndex = this._getRowIndex(recd, this.dirtyData);
        if (dirtyEditIndex != -1) {
            let dirtyRecd = this.dirtyData[dirtyEditIndex]
            if (typeof field == "string") {
                dirtyRecd[field] = recd[field];
            } else if (Array.isArray(field)) {
                field.forEach(f => {
                    dirtyRecd[f] = recd[f];
                })
            }
            dirtyRecd._state = "rsUpdate";
            this._setDirty(true);
        }
    }

    remove(recdOrKey) {
        debugger
        let removeIndex = this._getRowIndex(recdOrKey, this.data);
        if (removeIndex != -1) {
            let removeRecd = this.data[removeIndex];
            this.data.splice(removeIndex, 1);
        }

        let removeDirtyIndex = this._getRowIndex(recdOrKey, this.dirtyData);
        if (removeDirtyIndex != -1) {
            let removeDirtyRecd = this.dirtyData[removeDirtyIndex];
            if (removeDirtyRecd._state == "rsInsert") {
                this.dirtyData.splice(removeDirtyIndex, 1);
            } else {
                removeDirtyRecd._state = "rsDelete";
                this._setDirty(true);
            }
        }
    }

    // 是否有修改数据
    isDirty() {
        return this._dirty;
    }

    // 标记数据是否更改
    _setDirty(isDirty) {
        if (this._dirty !== isDirty) {
            this._dirty = isDirty;
            emitter.emit("dirtyChange" + this.controlId, isDirty);
        }
    }

    /**
     * 获取数据下标
     * @param {*} recd 查找记录对象或key值
     * @param {*} data 被查找数据列表
     */
    _getRowIndex(recd, data) {
        let keyValue = this._getRowKeyValue(recd);
        if (keyValue === undefined) return -1;
        for (var i = 0, l = data.length; i < l; i++) {
            let curtKeyValue = this._getRowKeyValue(data[i]);
            if (keyValue === curtKeyValue) return i;
        }
        return -1;
    }
}
