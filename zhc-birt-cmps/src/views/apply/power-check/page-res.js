import pinyin from "js-pinyin";
import axios from 'axios';

export const pageRes = {
    controlName: "ElRow",
    controlId: "ElRow_r2",
    gutter: 10,
    style: "margin-top:20px;",
    children: [
        {
            controlName: "ElCol",
            controlId: "ElCol_r2_c1",
            span: 6,
            children: [
                {
                    controlName: "HcInputFilter",
                    controlId: "HcInputFilter_restree",
                    fireAction: "keyup",
                    size: "medium",
                    events: {
                        filterChange: function (filterKey, datas) {
                            this.getRefCompt("HcTree_restree").filter(
                                filterKey
                            );
                        }
                    }
                },
                {
                    controlName: "HcTree",
                    controlId: "HcTree_restree",
                    dataset: "dsResTree",
                    isTreeData: false,
                    idField: "resId",
                    parentIdField: "parentId",
                    labelField: "name",
                    defaultExpandAll: true,
                    filterNodeMethod: function (value, data, node) {
                        let key =
                            node.label +
                            "_" +
                            pinyin.getCamelChars(node.label);
                        return key.indexOf(value.toUpperCase()) !== -1;
                    },
                    height: function (parentHeight) {
                        return parentHeight - 140;
                    },
                    style:
                        "margin-top:10px;overflow: auto;border:1px solid rgb(235, 238, 245)",
                    events: {
                        currentChange: function (data, node) {
                            let param = { userId: data.id };
                            axios.get('/user/check', param)
                                .then(function (response) {
                                    debugger;
                                    console.log(response);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                        }
                    }

                }
            ]
        },
        {
            controlName: "ElCol",
            controlId: "ElCol_r2_c2",
            span: 18,
            children: [
                {
                    controlName: "HcTable",
                    controlId: "HcTable_restree",
                    dataset: "dsRes",
                    rowKey: "resId",
                    idField: "resId",
                    parentIdField: "parentId",
                    defaultExpandAll: true,
                    height: function (parentHeight) {
                        return parentHeight - 90;
                    },
                    children: [
                        {
                            controlName: "HcTableColumn",
                            controlId: "HcTableColumn_0",
                            prop: "name",
                            label: "功能名称",
                            minWidth: 300,
                            children: [
                                {
                                    controlName: "HcInputFilter",
                                    controlId: "HcInputFilter_res",
                                    slot: "header",
                                    size: "small",
                                    placeholder: "功能名称",
                                    events: {
                                        filterChange: function (filterKey, datas) {
                                            let hcTable = this.getRefCompt(
                                                "HcTable_restree"
                                            );
                                            if (filterKey) {
                                                hcTable.$set(
                                                    hcTable.filterConf,
                                                    "name",
                                                    function filterRecd(recd) {
                                                        let key =
                                                            recd.name +
                                                            "_" +
                                                            pinyin.getCamelChars(recd.name);
                                                        return key.indexOf(filterKey.toUpperCase()) !== -1;
                                                    }
                                                );
                                            } else {
                                                hcTable.$delete(
                                                    hcTable.filterConf,
                                                    "name"
                                                );
                                            }
                                        }
                                    }
                                },
                                {
                                    controlName: "ElRow",
                                    controlId: "ElRow_ck_type",
                                    slot: "header",
                                    style: "margin-top:10px;text-align:right;",
                                    children: [
                                        {
                                            controlName: "HcRadioGroup",
                                            controlId: "HcRadioGroup_1",
                                            value: "all",
                                            size: "small",
                                            children: [
                                                {
                                                    controlName: "HcRadioButton",
                                                    controlId: "HcRadioButton_func",
                                                    label: "func",
                                                    title: "功能"
                                                },
                                                {
                                                    controlName: "HcRadioButton",
                                                    controlId: "HcRadioButton_flow",
                                                    label: "flow",
                                                    title: "流程"
                                                },
                                                {
                                                    controlName: "HcRadioButton",
                                                    controlId: "HcRadioButton_all",
                                                    label: "all",
                                                    title: "全部"
                                                }
                                            ],
                                            events: {
                                                change: function (filterKey) {
                                                    let hcTable = this.getRefCompt(
                                                        "HcTable_restree"
                                                    );
                                                    if (filterKey != "all") {
                                                        hcTable.$set(
                                                            hcTable.filterConf,
                                                            "type",
                                                            function filterRecd(recd) {
                                                                return (
                                                                    recd.type === filterKey
                                                                );
                                                            }
                                                        );
                                                    } else {
                                                        hcTable.$delete(
                                                            hcTable.filterConf,
                                                            "type"
                                                        );
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            controlName: "HcTableColumn",
                            controlId: "HcTableColumn_0",
                            slot: "scope",
                            prop: "assignName",
                            label: "授权来源",
                            width: 120,
                            children: [{
                                controlName: "HcButton",
                                controlId: "HcButton_link",
                                vif: "{{scope.row.assignId}}",
                                title: "{{scope.row.assignName}}"
                            }]
                        },
                        {
                            controlName: "HcTableColumn",
                            controlId: "HcTableColumn_2",
                            label: "数据权限",
                            children: [
                                {
                                    controlName: "HcTableColumnRadio",
                                    controlId: "HcTableColumn_2_1",
                                    isShow: function (row) {
                                        if (row.daPower) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                    disabled: true,
                                    showCheckAll: false,
                                    prop: "daValue",
                                    radioValue: "daPower.personalScheme.value",
                                    label: "个人",
                                    width: 75
                                },
                                {
                                    controlName: "HcTableColumnRadio",
                                    controlId: "HcTableColumn_2_2",
                                    isShow: function (row) {
                                        if (row.daPower) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                    disabled: true,
                                    showCheckAll: false,
                                    prop: "daValue",
                                    radioValue: "daPower.groupScheme.value",
                                    label: "团队",
                                    width: 75
                                },
                                {
                                    controlName: "HcTableColumnRadio",
                                    controlId: "HcTableColumn_2_3",
                                    isShow: function (row) {
                                        if (row.daPower) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                    disabled: true,
                                    showCheckAll: false,
                                    prop: "daValue",
                                    radioValue: "daPower.businessScheme.value",
                                    label: "企业",
                                    width: 75
                                },
                                {
                                    controlName: "HcTableColumnRadio",
                                    controlId: "HcTableColumn_2_4",
                                    isShow: function (row) {
                                        if (row.daPower && row.daPower.others) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                    disabled: true,
                                    showCheckAll: false,
                                    prop: "daValue",
                                    radioValue: "daPower.others",
                                    label: "其它",
                                    width: 90
                                }
                            ]
                        },
                        {
                            controlName: "HcTableColumn",
                            controlId: "HcTableColumn_3",
                            label: "操作权限分配",
                            width: 200,
                            children: [
                                {
                                    controlName: "HcTableColumnCheckbox",
                                    controlId: "HcTableColumn_3_1",
                                    isShow: function (row) {
                                        if (row.opPower) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                    disabled: true,
                                    showCheckAll: false,
                                    prop: "opAdd",
                                    label: "添加",
                                    width: 75
                                },
                                {
                                    controlName: "HcTableColumnCheckbox",
                                    controlId: "HcTableColumn_3_2",
                                    isShow: function (row) {
                                        if (row.opPower) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                    disabled: true,
                                    showCheckAll: false,
                                    prop: "opEdit",
                                    label: "修改",
                                    width: 75
                                },
                                {
                                    controlName: "HcTableColumnCheckbox",
                                    controlId: "HcTableColumn_3_3",
                                    isShow: function (row) {
                                        if (row.opPower) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                    disabled: true,
                                    showCheckAll: false,
                                    prop: "opDelete",
                                    label: "删除",
                                    width: 75
                                },
                                {
                                    controlName: "HcTableColumnCheckbox",
                                    controlId: "HcTableColumn_3_4",
                                    isShow: function (row) {
                                        if (row.opPower) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                    disabled: true,
                                    showCheckAll: false,
                                    prop: "opExport",
                                    label: "导出",
                                    width: 75
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}