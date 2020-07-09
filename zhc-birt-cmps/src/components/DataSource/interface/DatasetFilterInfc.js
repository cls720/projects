import { filterTreeData } from "@/funclib/DataTree.js";

export default class DatasetFilterInfc {
    // 是否远程过滤
    _isRemoteFilter() {
        return this._infcFilter && this._infcFilter.remoteFilter;
    }

    // 过滤条件配置
    _getFilterCdion() {
        return this._infcFilter && this._infcFilter.filterCdion;
    }

    // hcTable.$set(
    //   hcTable.filterConf,
    //   "label",
    //   function filterRecd(recd) {
    //     let key =
    //       recd.label +
    //       "_" +
    //       pinyin.getCamelChars(recd.label);
    //     return (
    //       key.indexOf(filterKey.toUpperCase()) !==
    //       -1
    //     );
    //   }
    // );

    getFilterData(data) {
        let filterCdion = this._getFilterCdion();
        if (filterCdion) {
            return filterTreeData(data, filterCdion);
        } else {
            return data;
        }
    }

    // 添加过滤条件
    addFilterCdion(field, filterMethod) {

    }

    // 删除过滤条件
    removeFilterCdion(field) {

    }

    /**
     * 清除数据集过滤条件
     */
    clearFilter() {
        this.setData(this.lastBeforeFilterData);
    }

    /**
     * 设置过滤数据包
     * @param {*} data 
     */
    setFilterData(data) {
        debugger
        let cloneData = JSON.parse(JSON.stringify(this.getData()));
        this.lastBeforeFilterData = cloneData;
        this.setData(data);
    }
}