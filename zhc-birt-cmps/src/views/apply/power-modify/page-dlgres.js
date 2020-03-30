import pinyin from "js-pinyin";
import { resources } from "./resources";

export const pageDlgres = {
    controlName: "BirtWorkBook",
    controlId: "BirtWorkBook_0",
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
                    controlId: "dsRes",
                    datas: resources
                }
            ],
            children: [
                {
                    controlName: "BirtFormSheet",
                    controlId: "BirtFormSheet_02",
                    children: [
                        {
                            controlName: "HcInputFilter",
                            controlId: "HcInputFilter_diaog_res",
                            size: "medium",
                            events: {
                                filterChange: function (filterKey, datas) {
                                    debugger;
                                    this.getRefCompt("HcTree_res").filter(
                                        filterKey
                                    );
                                }
                            }
                        },
                        {
                            controlName: "ElRow",
                            controlId: "ElRow_org_toolbar",
                            style: "margin-top:10px;text-align:right;",
                            children: [
                                {
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
                                                "HcTree_res"
                                            ).filter(val);
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            controlName: "HcTree",
                            controlId: "HcTree_res",
                            dataset: "dsRes",
                            isTreeData: false,
                            idField: "resId",
                            parentIdField: "parentId",
                            labelField: "name",
                            showCheckbox: true,
                            defaultExpandAll: true,
                            filterNodeMethod: function (
                                value,
                                data,
                                node
                            ) {
                                debugger;
                                if (!value || value === "0") return true;
                                if (value === "1") return node.checked;
                                if (value === "2") return !node.checked;
                                let key =
                                    node.label +
                                    "_" +
                                    pinyin.getCamelChars(node.label);
                                return (
                                    key.indexOf(value.toUpperCase()) !== -1
                                );
                            },
                            events: {
                                checkChange: function (
                                    data,
                                    checked,
                                    node
                                ) {
                                    debugger;
                                    let checkNodes = this.elTree().getCheckedNodes(
                                        false,
                                        true
                                    );
                                    let keys = [];
                                    checkNodes.forEach(recd => {
                                        keys.push(recd.resId);
                                    });
                                    this.setDatasChecked(keys);
                                }
                            },
                            mounted: function () {
                                debugger
                                this.getWorkBook().on(
                                    "afterLoad",
                                    doPageAfterLoad
                                );
                                let me = this;
                                function doPageAfterLoad(param) {
                                    debugger;
                                    me.elTree().setCheckedKeys(
                                        param.resIds
                                    );
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
}