"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

import $ from 'jquery'
import JsonUtil from '../../src/utils/JsonUtil.js'
import GroupTableLayout from '../../src/layout/GroupTableLayout.js'

exports.default = {
    props: {
        // 是否显示小计
        isShowSubTotal: true,
        // 是否显示总计
        isShowAllTotal: {
            type: Boolean,
            default: true
        },
        // 行号配置
        rowNo: {
            type: Object,
            default: function () {
                return {
                    isShow: false
                }
            }
        },
        // 网格默认列宽
        colWidth: {
            type: [Number, String],
            default: 100
        },
        // 分组策略配置
        policy: {
            type: Object,
            default: function () {
                return {};
            }
        },
        // 表格数据
        datas: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    computed: {
        /**
         * 返回锁定区网格 表头
         */
        $frozenHeadTable() {
            return $(this.$el).find(".v-table-leftview").find(".v-table-htable");
        },
        /**
         * 返回锁定区网格 tbody dom
         */
        $frozenTable() {
            return $(this.$el).find(".v-table-leftview").find(".v-table-btable");
        },
        /**
         * 返回数据区网格 tbody dom
         */
        $dataTable() {
            return $(this.$el).find(".v-table-rightview").find(".v-table-btable");
        },
        /**
         * 返回锁定区与数据区 tbody dom
         */
        $bodyTable() {
            return $(this.$el).find(".v-table-btable");
        },
        isGroup2: function () {
            return this.colGroupFields.length > 0;
        },
        rowNoDefault: {
            get: function () {
                return $.extend({
                    field: 'rowNo',
                    width: 50,
                    titleAlign: 'center',
                    columnAlign: 'center',
                    isFrozen: true
                }, this.rowNo);
            }
        },
        // 行分组字段列表
        rowGroupFields: {
            get: function () {
                return this.policy.rowGroupFields || [];
            },
            set: function (rgFields) {
                this.policy.rowGroupFields = rgFields;
            }
        },
        // 列分组字段列表
        colGroupFields: {
            get: function () {
                return this.policy.colGroupFields || [];
            },
            set: function (cgFields) {
                this.policy.colGroupFields = cgFields;
            }
        },
        /**
         * 获取按列分组树型JsonAry数据
         */
        getGroupCols: {
            get: function () {
                debugger;
                var retuJa = [];
                var g1Ary = $.ju.getJaFieldValues(this.colGroupFields, "field");
                $.gtl.getGroupJsonTree(this.datas, retuJa, g1Ary, [],
                    this.dependFields, [], true)
                $.gtl.calcSpan(retuJa, false);
                return retuJa;
            }
        },
        // 数据字段列表
        dataFields: {
            get: function () {
                return this.policy.dataFields || [];
            },
            set: function (dFields) {
                this.policy.dataFields = dFields;
            }
        },
        // 依赖字段列表
        dependFields: {
            get: function () {
                return this.policy.dependFields || {};
            },
            set: function (dpFields) {
                this.policy.dependFields = dpFields;
            }
        },
        columns: {
            get: function () {
                debugger
                var columns = [];
                // 添加行号
                if (this.rowNo.isShow) {
                    columns.push(this.rowNoDefault);
                }
                // 添加行分组列
                columns = columns.concat(this.getRowGroupColumns());
                if (this.colGroupFields.length > 0) {
                    let gCols = this.getColGroupColumns(this.getGroupCols);
                    if (gCols && gCols.length > 0) {
                        // 添加列分组列
                        columns = columns.concat(gCols);
                        // 添加数据区列
                        for (var i = 0, l = gCols.length; i < l; i++) {
                            let gColItem = gCols[i];
                            if (gColItem.isLeaf) {
                                for (var j = 0, m = this.dataFields.length; j < m; j++) {
                                    let dColItem = $.extend({}, this.dataFields[j]);
                                    dColItem.field += gColItem.axis + "_" + j;
                                    columns.push(dColItem);
                                }
                            }
                        }
                    }
                }
                return columns;
            }
        },
        // 特殊表头
        titleRows: {
            get: function () {
                let multiHeader = [];
                let gCols = this.getGroupCols;
                if (gCols.length > 0) {
                    let gColItem0 = gCols[0];
                    let level = gColItem0.level;
                    let rowspan = level + 1;
                    let header0 = [];
                    // 添加行号
                    if (this.rowNo.isShow) {
                        let hRowNo = this.rowNoDefault;
                        hRowNo.rowspan = rowspan;
                        hRowNo.fields = [hRowNo.field];
                        header0.push(hRowNo);
                    }
                    // 添加行分组列
                    let hRowColumns = this.getRowGroupColumns();
                    for (var i = 0, l = hRowColumns.length; i < l; i++) {
                        let hrci = $.extend({}, hRowColumns[i]);
                        hrci.rowspan = rowspan;
                        hrci.fields = [hrci.field];
                        header0.push(hrci);
                    }

                    // 添加列分组列                   
                    let scope = this;
                    let multiColFun = function (gColsAry, colHeaders, axis) {
                        if (colHeaders == undefined) {
                            colHeaders = [];
                        }
                        let rowHead = [];
                        $.each(gColsAry, function (i, item) {
                            let bizField = scope.getPolicyField(item.field);
                            let bizField2 = $.extend({}, bizField);
                            let caxis = (axis || "") + "_" + i;
                            let isLeaf = !item.children || (item.children.length == 0);

                            bizField2.axis = caxis;
                            bizField2.fields = [bizField2.field + caxis];
                            bizField2.title = item.value;

                            if (!isLeaf) {
                                bizField2.colspan = item.children.length;
                                let subFields = [];
                                $.each(item.children, function () {
                                    subFields.push(this.field);
                                })
                                bizField2.fields = subFields;
                                multiColFun(item.children, colHeaders, caxis);
                            }
                            rowHead.push(bizField2);
                        })
                        colHeaders.push(rowHead);
                        return colHeaders;
                    }

                    let hColColumns = multiColFun(gCols);
                    let hcci0 = hColColumns[0];
                    let hcciLast = hColColumns[hColColumns.length - 1];

                    // 添加数据区列
                    let headerData = [];
                    for (var i = 0, l = hcciLast.length; i < l; i++) {
                        let gcLeafItem = hcciLast[i];
                        let subFields = [];
                        for (var j = 0, m = this.dataFields.length; j < m; j++) {
                            let dColItem = $.extend({}, this.dataFields[j]);
                            let fieldName = dColItem.field + gcLeafItem.axis + "_" + j;
                            subFields.push(fieldName);
                            dColItem.fields = [fieldName];
                            headerData.push(dColItem);
                        }
                        gcLeafItem.fields = subFields;
                    }

                    if (hColColumns.length > 1) {
                        header0 = header0.concat(hcci0);
                    } else {
                        header0 = header0.concat(hcciLast);
                    }

                    multiHeader.push(header0);
                    multiHeader = multiHeader.concat(hColColumns.splice(1, hColColumns.length));
                    multiHeader.push(headerData);
                    // return [
                    //     [{
                    //         fields: ['rowNo'],
                    //         title: '',
                    //         titleAlign: 'center',
                    //         rowspan: 2
                    //     },
                    //     {
                    //         fields: ['htHy'],
                    //         title: '所属行业',
                    //         titleAlign: 'center',
                    //         rowspan: 2
                    //     },
                    //     {
                    //         fields: ['projectName'],
                    //         title: '项目名称',
                    //         titleAlign: 'center',
                    //         rowspan: 2
                    //     },
                    //     {
                    //         fields: ['htMoney_0_0'],
                    //         title: '初始合同',
                    //         titleAlign: 'center'
                    //     },
                    //     {
                    //         fields: ['htMoney_1_0'],
                    //         title: '增补合同',
                    //         titleAlign: 'center'
                    //     }],
                    //     [{
                    //         fields: ['htMoney_0_0'],
                    //         title: '合同金额',
                    //         titleAlign: 'center'
                    //     },
                    //     {
                    //         fields: ['htMoney_1_0'],
                    //         title: '合同金额',
                    //         titleAlign: 'center'
                    //     }]
                    // ];
                }
                return multiHeader;
            }
        },
        tableData: {
            get: function () {
                return this.datas;
            }
        },
        theadTrs: function () {
            var trs = [];
            var tr = [];
            var rowspan = this.colGroupFields.length + 1;
            tr.push({
                isFrozen: true,
                width: 40,
                rowspan: rowspan
            });
            var gfLen = this.rowGroupFields.length;

            // 添加行分组字段列
            var rowGroupFieldsTh = this.getRowGroupFieldsTh(rowspan, gfLen - i);
            tr = tr.concat(rowGroupFieldsTh);

            // 添加列分组字段列
            var groupCols = this.getGroupCols || [];
            var len = groupCols.length || 1;
            if (groupCols.length > 0) {
                for (var i = 0, l = groupCols.length; i < l; i++) {
                    var cItem = groupCols[i];
                    var th = {
                        colspan: this.dataFields.length || 1,
                        value: this.getValue(cItem.value)
                    };
                    tr.push(th);
                }
                if (this.isShowAllTotal) {
                    tr.push({
                        colspan: this.dataFields.length || 1,
                        value: "总计"
                    });
                    var ntr = tr.concat();
                    trs.push(ntr);
                    tr = [];
                    len++;
                }
            }

            // 添加数据字段
            for (var i = 0; i < len; i++) {
                $.each(this.dataFields || [], function () {
                    var th = {
                        isLeaf: true,
                        width: this.width || 100,
                        value: this.value
                    };
                    // if (Scp.data.Types.isNumberType(this.dataType)) {
                    // 	th.style = "text-align: right;"
                    // }
                    if (i == 0) {
                        param = {
                            "form": props.form,
                            "field": this.field,
                            "value": this.value
                        };
                        th.havingCdionUrl = _SYS.havingCdionUrl;
                        th.param = $.fn.obj2str(param);
                    }
                    tr.push(th);
                });
            }

            // 添加分组字段依赖字段
            if (this.dependFields) {
                $.each(this.dependFields, function (key, itemJa) {
                    $.each(itemJa || [], function () {
                        var th = {
                            isLeaf: true,
                            width: this.width || 100,
                            value: this.value
                        };
                        tr.push(th);
                    })
                })
            }

            trs.push(tr);
            return trs;
        },
        tbodyTrs: function () {
            debugger;
            var trs = [];
            var bodyDatas = this.getTBodyJa();
            var rgLen = this.rowGroupFields.length;
            var hlExprs = [];

            var lastSpan = 0;
            var rowStyle = "";
            for (var i = 0, l = bodyDatas.length; i < l; i++) {
                var tr = {
                    frozenTds: [],
                    tds: []
                };
                var rda = bodyDatas[i];
                tr.axis = rda.length > 0 ? rda[0].axis : "";
                // 添加序号td
                if (this.rowNo.isShow) {
                    tr.frozenTds.push({
                        field: "rowNo",
                        value: i + 1
                    });
                }
                var isType = false;
                lastSpan--;
                if (lastSpan <= 0) {
                    rowStyle = "";
                }
                // 添加一行tds
                for (var j = 0, m = rda.length; j < m; j++) {
                    var rdaItem = rda[j];
                    var td = {
                        field: rdaItem.field,
                        rowspan: rdaItem.span || 1
                    };

                    if (rdaItem.type) {
                        td.colspan = td.rowspan;
                        delete td.rowspan;
                        td.value = rdaItem.value + ((this.type == "subTotal") ? "  小计" : "");
                        td.class = rdaItem.type;
                        isType = true;
                    } else if (!isType && (hlExprs.length > 0)) {
                        $.each(hlExprs, function () {
                            if (rdaItem.field == this.field) {
                                var jsExpr = $.format(this.expr, rdaItem.value);
                                if (eval(jsExpr)) {
                                    if (this.fontType == "row") {
                                        rowStyle = $.format(
                                            'background:{0};',
                                            this.color);
                                        lastSpan = spanVal;
                                    } else {
                                        td.style = $.format('{0}:{1};',
                                            this.fontType,
                                            this.color);
                                        return false;
                                    }
                                }
                            }
                        })
                    } else if (rdaItem.field && this.dataFields.length > 0) {
                        $.each(this.dataFields, function () {
                            if (rdaItem.field == this.field) {
                                td.style += "text-align: right;";
                            }
                        });
                    }

                    var dataType;
                    if (rdaItem.level <= this.rowGroupFields.length) {
                        td.isFrozen = this.rowGroupFields[this.rowGroupFields.length - rdaItem.level].isFrozen;
                        dataType = this.rowGroupFields[this.rowGroupFields.length - rdaItem.level].dataType;
                    } else {
                        td.isFrozen = rdaItem.type == "subTotal";
                    }

                    // if (Scp.data.Types.isNumberType(dataType)) {
                    // 	td.style += "text-align: right;";
                    // }
                    if (rdaItem.type == "allColTotal") {
                        td.style += "text-align: right;";
                    }
                    if (rowStyle) {
                        td.style += rowStyle;
                    }
                    if (rdaItem.type == "allTotal") {
                        td.spanVal = rgLen;
                        td.isFrozen = true;
                    } else {
                        td.spanVal = rdaItem.span || 1;
                    }

                    if (rdaItem.level > 1 && !rdaItem.type && rdaItem.level <= this.rowGroupFields.length) {
                        if (this.rowGroupFields[this.rowGroupFields.length - rdaItem.level].isFold) {
                            td.isFold = true;
                            td.axis = rdaItem.axis;
                            td.level = rdaItem.level;
                        }
                    }

                    if (rdaItem.level) {
                        td.level = rdaItem.level;
                    }
                    if (rdaItem.dlevel) {
                        td.dlevel = rdaItem.dlevel;
                    }
                    if (td.spanVal > 1) {
                        td.valign = "top";
                    }
                    td.value = rdaItem.value;
                    if (td.isFrozen) {
                        tr.frozenTds.push(td);
                    } else {
                        tr.tds.push(td);
                    }
                }
                trs.push(tr);
            }
            return trs;
        }
    },
    methods: {
        /**
         * 获取按行分组树型JsonAry数据
         */
        getGroupRows: function () {
            var retuJa = [];
            var g1Ary = $.ju.getJaFieldValues(this.rowGroupFields, "field");
            var g2Ary = $.ju.getJaFieldValues(this.colGroupFields, "field");
            var dAry = $.ju.getJaFieldValues(this.dataFields, "field");
            $.gtl.getGroupJsonTree(this.internalTableData, retuJa, g1Ary, g2Ary,
                this.dependFields, dAry, true);
            $.gtl.calcSpan(retuJa, this.isGroup2);
            return retuJa;
        },
        /**
         * 获取表格TBody rows模型定义
         */
        getTBodyJa: function () {
            var retuTBody = [];
            $.gtl.calcTreeJa2TbodyJa(this.getGroupRows(), this.getGroupCols,
                retuTBody, null, this.policy);
            return retuTBody;
        },
        /**
         * 返回行分组字段表头th集合
         */
        getRowGroupFieldsTh: function (rowspan, level) {
            var ths = [];
            var scope = this;
            $.each(this.rowGroupFields || [], function (i, rgItem) {
                var th = {
                    isLeaf: true,
                    width: scope.getColWidth(rgItem.width),
                    rowspan: rowspan,
                    isFrozen: rgItem.isFrozen,
                    title: rgItem.title
                };
                // if (Scp.data.Types.isNumberType(rgItem.dataType)) {
                // 	th.style = "text-align: right;"
                // }
                if (level > 1 && rgItem.isFold) {
                    th.isFold = true;
                    th.level = level;
                }
                ths.push(th);
            });
            return ths;
        },
        getColWidth: function (w) {
            return w || this.colWidth;
        },
        getValue: function (val) {
            if (val == "NULL") {
                return "";
            } else {
                return val;
            }
        },
        // 获取行分组字段列
        getRowGroupColumns() {
            var ra = [].concat(this.policy.rowGroupFields);
            for (var i = 0, l = ra.length; i < l; i++) {
                var raItem = ra[i];
                var dfs = this.getFieldDependFields(raItem.field);
                $.each(dfs || [], function (i, dfsItem) {
                    JsonUtil.instObjToArrayByKeyOrder(ra, dfsItem, "col");
                });
            }
            return ra;
        },
        // 获取列分组字段列
        getColGroupColumns(gColsAry, gcolumns, axis) {
            if (gcolumns == undefined) {
                gcolumns = [];
            }
            let scope = this;
            $.each(gColsAry, function (i, item) {
                let bizField = scope.getPolicyField(item.field);
                let bizField2 = $.extend({}, bizField);
                let caxis = (axis || "") + "_" + i;
                bizField2.field = bizField2.field + caxis;
                bizField2.isLeaf = !item.children || (item.children.length == 0);
                bizField2.axis = caxis;
                gcolumns.push(bizField2);
                if (!bizField2.isLeaf) {
                    scope.getColGroupColumns(item.children, gcolumns, caxis);
                }
            })
            return gcolumns;
        },
        getFieldDependFields(fieldName) {
            return this.dependFields[fieldName];
        },
        /**
         * 获取策略字段配置
         * @param {* 字段名} fieldName 
         * @param {* 被查找数组,选填} fieldsAry 
         */
        getPolicyField(fieldName, fieldsAry) {
            if (fieldsAry && fieldsAry.length > 0) {
                return JsonUtil.findByKeyValue(fieldsAry, "field", fieldName);
            } else {
                let field;
                field = JsonUtil.findByKeyValue(this.rowGroupFields, "field", fieldName);
                if (field) return field;
                field = JsonUtil.findByKeyValue(this.colGroupFields, "field", fieldName);
                if (field) return field;
                field = JsonUtil.findByKeyValue(this.dataFields, "field", fieldName);
                if (field) return field;
            }
        },
        // 获取列分组字段配置
        colField(field) {
            return JsonUtil.findByKeyValue(this.internalColumns, "field", field) || {};
        },
        /**
         * 获取分组字段层级
         * @param {分组字段} fieldJo 
         */
        getLevel(fieldJo) {
            var i = JsonUtil.findIndexByKeyValue(this.rowGroupFields, "field", fieldJo.field);
            return this.rowGroupFields.length - i;
        },
        /**
         * 获取字段跨列宽度
         * @param {*} field 
         * @param {*} colspan 
         */
        getFieldColspanWidth(field, colspan) {
            let endPosX, startPosX, totalWidth = 0,
                columnsFields = this.getColumnsFields;

            startPosX = columnsFields.indexOf(field);
            endPosX = startPosX + colspan - 1;

            for (var i = startPosX; i <= endPosX; i++) {
                this.internalColumns.forEach(x => {
                    if (columnsFields[i] === x.field) {
                        totalWidth += x.width;
                    }
                })
            }
            return totalWidth;
        },
        /**
         * 获取字段跨行高度
         * @param {* 分组字段名} field 
         * @param {* 跨行值} rowspan 
         */
        getFieldRowspanHeight(field, rowspan) {
            rowspan = rowspan || 1;
            return this.rowHeight * rowspan;
        }

    },
};