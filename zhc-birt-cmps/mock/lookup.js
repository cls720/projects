const dataTreeSelf = {
    controlName: "BirtWorkBook",
    controlId: "BirtWorkBook_0",
    showToolBar: false,
    totalPage: 1,
    renderType: "pages",
    height: function (parentHeight) {
        debugger
        return parentHeight;
    },
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
                    datas: [
                        {
                            "resId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
                            "name": "测试菜单",
                            "parentId": "-1",
                            "type": "dir",
                            "resUrl": "",
                        },
                        {
                            "resId": "31418B1A-5253-31A2-77F6-B5F18198ABE2",
                            "name": "测试功能",
                            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
                            "type": "func",
                            "resUrl": "/systemplate/csgn/csgn/funcdir/csgn1.func",
                            "daValue": "",
                            "opAdd": false,
                            "opEdit": false,
                            "opDelete": false,
                            "opExport": false,
                            "daPower": {
                                "personalScheme": {
                                    "name": "个人",
                                    "value": "AccessPlan_BZP"
                                },
                                "groupScheme": {
                                    "name": "团队",
                                    "value": "AccessPlan_BZG"
                                },
                                "businessScheme": {
                                    "name": "企业",
                                    "value": "AccessPlan_BZQ"
                                },
                                "AccessPlan_CW": {
                                    "name": "财务经理",
                                    "value": "AccessPlan_CW",
                                }
                            },
                            "opPower": {
                                "add": {
                                    "value": 0
                                },
                                "edit": {
                                    "value": 0
                                },
                                "delete": {
                                    "value": 0
                                },
                                "export": {
                                    "value": 0
                                }
                            }
                        },
                        {
                            "resId": "23DF68DC-EEA7-41E5-0288-02AB9909CB8F",
                            "name": "测试流程",
                            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
                            "type": "flow",
                            "resUrl": "/systemplate/csgn/csgn/flowdir/cslc.flow",
                        }
                    ]
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

export default [
    {
        url: '/lookup/data/tree/self',
        type: 'get',
        response: config => {
            console.log(config.query);
            let param = config.query;
            return {
                status: 200,
                dataPack: JSON.stringify(dataTreeSelf)
            }
        }
    }
]
