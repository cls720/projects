import pinyin from "js-pinyin";
import { allData } from "./org.js";

export const pageDlgorg = {
    controlName: "BirtWorkBook",
    controlId: "BirtWorkBook_dlgorg",
    showToolBar: false,
    totalPage: 1,
    renderType: "pages",
    height: 300,
    children: [
        {
            controlName: "BirtSheet",
            controlId: "BirtSheet_0",
            name: "sheet0", //配置页,children为其算法分页，如插入分页符或A4纸数据过长换页
            pageIndex: 0,
            dataSets: [
                {
                    controlName: "JsWebSocketDataSet",
                    controlId: "dsOrg",
                    datas: allData
                }
            ],
            children: [
                {
                    controlName: "BirtFormSheet",
                    controlId: "BirtFormSheet_02",
                    children: [
                        {
                            controlName: "ElRow",
                            controlId: "ElRow_org_toolbar",
                            style: "margin-top:10px;",                            
                            gutter:10,
                            children: [
                                {
                                    controlName: "ElCol",
                                    controlId: "ElCol_1_1",
                                    span: 12,
                                    children: [
                                        {
                                            controlName: "HcInputFilter",
                                            controlId: "HcInputFilter_diaog_res",
                                            fireAction: "keyup",
                                            size: "small",
                                            events: {
                                                filterChange: function (filterKey, datas) {
                                                    debugger;
                                                    let hcTable = this.getRefCompt(
                                                        "HcTree_org"
                                                    );
                                                    if (filterKey) {
                                                        hcTable.$set(
                                                            hcTable.filterConf,
                                                            "label",
                                                            function filterRecd(recd) {
                                                                let key =
                                                                    recd.label +
                                                                    "_" +
                                                                    pinyin.getCamelChars(recd.label);
                                                                return (
                                                                    key.indexOf(
                                                                        filterKey.toUpperCase()
                                                                    ) !== -1
                                                                );
                                                            }
                                                        );
                                                    } else {
                                                        hcTable.$delete(
                                                            hcTable.filterConf,
                                                            "label"
                                                        );
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    controlName: "ElCol",
                                    controlId: "ElCol_1_2",
                                    span: 12,
                                    children: [{
                                        controlName: "HcRadioGroup",
                                        controlId: "HcRadioGroup_1",
                                        value: "0",
                                        size: "small",
                                        children: [
                                            {
                                                controlName: "HcRadioButton",
                                                controlId: "HcRadioButton_1",
                                                label: "1",
                                                title: "已选"
                                            },
                                            {
                                                controlName: "HcRadioButton",
                                                controlId: "HcRadioButton_2",
                                                label: "2",
                                                title: "未选"
                                            },
                                            {
                                                controlName: "HcRadioButton",
                                                controlId: "HcRadioButton_0",
                                                label: "0",
                                                title: "全部"
                                            }
                                        ],
                                        events: {
                                            change: function (val) {
                                                this.getRefCompt(
                                                    "HcTree_org"
                                                ).filter(val);
                                            }
                                        }
                                    }]
                                },

                            ]
                        },
                        {
                            controlName: "HcTable",
                            controlId: "HcTree_org",
                            dataset: "dsOrg",
                            rowKey: "id",
                            idField: "id",
                            parentIdField: "pid",
                            defaultExpandAll: true,
                            children: [
                                {
                                    controlName: "HcTableColumn",
                                    controlId: "HcTableColumn_chk",
                                    type: "selection",
                                    width: 55
                                },
                                {
                                    controlName: "HcTableColumn",
                                    controlId: "HcTableColumn_0",
                                    prop: "label",
                                    label: "组织名称",
                                    minWidth: 300,
                                }, {
                                    controlName: "HcTableColumn",
                                    controlId: "HcTableColumn_0",
                                    prop: "kind",
                                    label: "类型",
                                    minWidth: 300,
                                }],
                            events: {

                            },
                            mounted: function () {
                                debugger
                                this.getRefCompt("BirtWorkBook_dlgorg").on(
                                    "afterLoad",
                                    doPageAfterLoad
                                );
                                let me = this;
                                function doPageAfterLoad(param) {
                                    debugger;
                                    me.elTable().toggleAllSelection()
                                    // me.datas.filter(recd => {
                                    //     let rowIndex = param.orgIds.indexOf(recd.id);
                                    //     if (rowIndex != -1) {
                                    //         me.elTable().toggleRowSelection(recd);
                                    //         return true;
                                    //     }
                                    //     return false
                                    // });
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
}