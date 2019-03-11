"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

import $ from 'jquery'
import JValidate from '../../src/plugins/jquery.validate.js'
import JsonUtil from '../../src/utils/JsonUtil.js'

export default {
    props: {
        // filter event
        filterMethod: {
            type: Function,
            default: function (filters) {
                debugger;
                this.headRowAllOpen();
                let tableDatas = this.tableData;
                Object.keys(filters).forEach((key, item) => {
                    tableDatas = this.equalFilter(key, filters[key], tableDatas);
                })
                this.internalTableData = tableDatas;
            }
        }
    },
    data() {
        return {
            filterSpecialValue: '__all__'
        }
    },
    methods: {
        // 初始化 columns filters
        initColumnsFilters() {
            // 如果是复杂表头
            if (this.isComplexTitle) {

                this.internalTitleRows.forEach(rows => {

                    rows.forEach(col => {                        
                        if (this.enableFilters(col) && !col.filterMultiple) {

                            col.filters.unshift({
                                label: '全部',
                                value: this.filterSpecialValue,
                                selected: true
                            });
                        }
                    })
                })
            } else {

                this.internalColumns.map(col => {                    
                    if (this.enableFilters(col) && !col.filterMultiple) {

                        col.filters.unshift({
                            label: '全部',
                            value: this.filterSpecialValue,
                            selected: true
                        });
                    }
                })
            }
        },
        // 初始化列默认过滤项
        initColumnsDefalutFilters(col) {
            // 有配置表头过滤
            if (col && col.isFilter) {
                // 没有设置过滤项
                if (!col.filters || (col.filters.length == 0)) {
                    let distinctValues = JsonUtil.getDistinctValues(this.datas, col.field);
                    let filters = [];
                    distinctValues.map(val => {
                        let label = col.filterLabelExpr ? $.format(col.filterLabelExpr, val) : val;                        
                        filters.push({
                            label: label,
                            value: val
                        })
                    });
                    col.filters = filters;
                }
            }
        },

        // 单选条件改变
        filterConditionChange(filterMultiple) {

            // 单选
            if (!filterMultiple) {

                this.filterSummary();
            }
        },

        /*
         * 是否包含 filters 功能
         * col 列配置
         * fields : 当是复杂表头时，必须保证不是 colspan 的列
         * */
        enableFilters(col) {
            if (!col) return false;
            let filters = col.filters || null;
            let fields = col.fields || [];
            let result = false

            if (Array.isArray(fields) && fields.length > 1) {
                result = false;
            }
            if (Array.isArray(filters) && filters.length > 0) {
                result = true;
            }
            if (col.isFilter) return true;
            return result;
        },

        filterEvent() {

            this.filterSummary();
        },

        filterSummary() {

            let result = {},
                columns = [],
                tempArr = [];

            // 复杂表头
            if (this.isComplexTitle) {

                columns = this.internalTitleRows;

                columns.forEach(rows => {

                    rows.forEach(col => {

                        tempArr = [];
                        if (this.enableFilters(col)) {

                            col.filters.forEach(f => {

                                if (f.selected && f.value !== this.filterSpecialValue) {
                                    tempArr.push(f.value)
                                }
                            })

                            result[col.fields[0]] = tempArr.length > 0 ? tempArr : null;
                        }
                    })
                })
            } else {

                columns = this.internalColumns;

                columns.forEach(col => {

                    tempArr = [];
                    if (this.enableFilters(col)) {

                        col.filters.forEach(f => {

                            if (f.selected && f.value !== this.filterSpecialValue) {
                                tempArr.push(f.value)
                            }
                        })

                        result[col.field] = tempArr.length > 0 ? tempArr : null;
                    }
                })
            }

            this.filterMethod && this.filterMethod(result);
        },
        /**
         * 默认相等过滤
         * @param {* 过滤字段名} field 
         * @param {* 过滤值数组} values 
         */
        equalFilter(field, values, tableDatas) {
            if (values == null) {
                return tableDatas;
            } else {
                return tableDatas.filter(item => values.indexOf(item[field]) > -1);
            }
        }
    }
}