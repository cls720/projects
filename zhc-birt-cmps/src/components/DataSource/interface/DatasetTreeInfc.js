import { convertToTreeData, findParentTreeData } from "@/funclib/DataTree.js";


export default class DatasetTreeInfc {
    // 是否启用树型数据
    _isTree() {
        return this._infcTree ? true : false;
    }

    // 获取树节点ID字段名
    getIdField() {
        if (!(this._infcTree && this._infcTree.idField)) {
            console.error("接口_treeInfc.idField属性未配置.")
        }
        return this._infcTree.idField;
    }

    // 获取树父节点字段名
    getParentIdField() {
        if (!(this._infcTree && this._infcTree.parentIdField)) {
            console.error("接口_treeInfc.parentIdField属性未配置.")
        }
        return this._infcTree.parentIdField;
    }

    // 获取树根节点值
    getRootValue() {
        return this._infcTree && this._infcTree.rootValue || -1;
    }


    // 获取父节点数组
    getParentDataArray(pidValue) {
        debugger;
        let pidField = this.getParentIdField();
        if (pidField) {
            let pData = findParentTreeData(this._getDataMap(), pidField, pidValue);
            return pData;
        }
    }

    // 返回标准树型数据
    getTreeData() {
        debugger
        return this.getConvertTreeData();
    }

    // 根据配置获取转换后的树型数据
    getConvertTreeData() {
        let cloneDatas = JSON.parse(JSON.stringify(this.data));
        let treeData = convertToTreeData(cloneDatas, {
            id: this.getIdField(),
            parentId: this.getParentIdField(),
            rootValue: this.getRootValue()
        });
        return treeData;
    }
}