import pinyin from "js-pinyin";
import axios from 'axios';
import { pageDlgres } from "./page-dlgres";

export const pageOrg = [
    {
        controlName: "ElRow",
        controlId: "ElRow_r1",
        gutter: 10,
        children: [
            {
                controlName: "ElCol",
                controlId: "ElCol_r1_c1",
                span: 20,
                children: [
                    {
                        controlName: "HcSteps",
                        controlId: "HcSteps_1",
                        simple: true,
                        active: 3,
                        style: "color:black;",
                        children: [
                            {
                                controlName: "HcStep",
                                controlId: "HcStep_1",
                                title: "选择分配对象",
                                icon: "el-icon-user",
                                status: "process"
                            },
                            {
                                controlName: "HcStep",
                                controlId: "HcStep_2",
                                title: "选择预分配功能",
                                icon: "el-icon-s-order",
                                status: "process"
                            },
                            {
                                controlName: "HcStep",
                                controlId: "HcStep_3",
                                title: "分配数据权限、操作权限",
                                icon: "el-icon-key",
                                status: "process",
                                style: "color:red"
                            }
                        ]
                    }
                ]
            },
            {
                controlName: "ElCol",
                controlId: "ElCol_r1_c2",
                span: 4,
                children: [
                    {
                        controlName: "HcButton",
                        controlId: "HcButton_save",
                        title: "保存",
                        type: "primary",
                        icon: "el-icon-s-claim",
                        disabled: false,
                        style: "width:95%;font-size:16px;",
                        events: {
                            click: function () {
                                debugger;
                                let orgData = this.getWorkBook().dataset.dsOrg.datas.filter(
                                    function (recd) {
                                        return recd._checked;
                                    }
                                );
                                let chkClearorg = this.getRefCompt(
                                    "HcCheckbox_clearorg"
                                ).conf.value;
                                let chkClearres = this.getRefCompt(
                                    "HcCheckbox_clearres"
                                ).conf.value;

                                const h = this.$createElement;
                                let message = [
                                    h(
                                        "span",
                                        {
                                            style: "line-height:30px;font-size:16px;"
                                        },
                                        "是否确认保存?"
                                    )
                                ];
                                if (chkClearorg) {
                                    message.push(h("br", null, ""));
                                    message.push(h("i", "确定"));
                                    message.push(
                                        h(
                                            "i",
                                            { style: "color: red" },
                                            "分配对象“清空添加”"
                                        )
                                    );
                                    message.push(
                                        h(
                                            "i",
                                            "，即将清空已选组织人员的所有权限，重新分配当前权限"
                                        )
                                    );
                                }
                                if (
                                    this.getRefCompt("HcCheckbox_clearres").conf
                                        .value
                                ) {
                                    message.push(h("br", null, ""));
                                    message.push(h("i", "确定"));
                                    message.push(
                                        h(
                                            "i",
                                            { style: "color: red" },
                                            "分配功能“清空添加"
                                        )
                                    );
                                    message.push(
                                        h(
                                            "i",
                                            "，即将清空已选功能菜单的所有权限，重新分配当前权限"
                                        )
                                    );
                                }
                                this.$msgbox({
                                    title: "保存确认",
                                    message: h("p", null, message),
                                    showCancelButton: true,
                                    confirmButtonText: "保存",
                                    cancelButtonText: "取消",
                                    beforeClose: (action, instance, done) => {
                                        if (action === "confirm") {
                                            instance.confirmButtonLoading = true;
                                            instance.confirmButtonText = "执行中...";
                                            setTimeout(() => {
                                                done();
                                                setTimeout(() => {
                                                    instance.confirmButtonLoading = false;
                                                }, 300);
                                            }, 3000);
                                        } else {
                                            done();
                                        }
                                    }
                                }).then(action => {
                                    this.$message({
                                        type: "info",
                                        message: "保存成功"
                                    });
                                });
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
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
                        controlId: "HcInputFilter_org",
                        fireAction: "keyup",
                        size: "medium",
                        events: {
                            filterChange: function (filterKey, datas) {
                                debugger;
                                this.getRefCompt("HcTree_org").filter(
                                    filterKey
                                );
                            }
                        }
                    },
                    {
                        controlName: "HcTree",
                        controlId: "HcTree_org",
                        dataset: "dsOrg",
                        isTreeData: false,
                        idField: "id",
                        parentIdField: "pid",
                        labelField: "label",
                        filterNodeMethod: function (value, data, node) {
                            debugger;
                            let key =
                                node.label +
                                "_" +
                                pinyin.getCamelChars(node.label);
                            return key.indexOf(value.toUpperCase()) !== -1;
                        },
                        height: function (parentHeight) {
                            debugger;
                            return parentHeight - 190;
                        },
                        style:
                            "margin-top:10px;overflow: auto;border:1px solid rgb(235, 238, 245)",
                        cancelNodeChange: function () {
                            debugger;
                            return false;
                        },
                        events: {
                            currentChange: function (data, node) {
                                debugger
                                let me = this;
                                let param = { orgId: data.id, kind: data.kind };
                                axios.get('/api/org/modify?id=' + data.id, { params: param })
                                    .then(function (response) {
                                        debugger;
                                        let targetDataset = me.getWorkBook().dataset.dsRes;
                                        targetDataset.setData(response.data.dataPack.rows || []);
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
                        controlId: "HcTable_res",
                        dataset: "dsRes",
                        rowKey: "resId",
                        idField: "resId",
                        parentIdField: "parentId",
                        defaultExpandAll: true,
                        height: function (parentHeight) {
                            debugger;
                            return parentHeight - 120;
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
                                                debugger;
                                                let hcTable = this.getRefCompt(
                                                    "HcTable_res"
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
                                                        "name"
                                                    );
                                                }
                                            }
                                        },
                                        children: [
                                            {
                                                controlName: "HcButton",
                                                controlId: "HcButton_opendialog",
                                                title: "",
                                                icon: "el-icon-edit",
                                                events: {
                                                    click: function () {
                                                        debugger;
                                                        let resKeys = [];
                                                        this.getWorkBook().dataset.dsRes.getData().forEach(
                                                            recd => {
                                                                if (recd.type != "dir")
                                                                    resKeys.push(recd.resId);
                                                            }
                                                        );
                                                        this.getRefCompt(
                                                            "HcDialog_res"
                                                        ).doOpen({
                                                            resIds: resKeys
                                                        });
                                                    }
                                                }
                                            }
                                        ]
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
                                                            "HcTable_res"
                                                        );
                                                        if (filterKey != "all") {
                                                            hcTable.$set(
                                                                hcTable.filterConf,
                                                                "type",
                                                                function filterRecd(recd) {
                                                                    debugger;
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
                                prop: "assignName",
                                label: "授权来源",
                                width: 120
                            },
                            {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_2",
                                label: "数据权限分配",
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
    },
    {
        controlName: "HcDialog",
        controlId: "HcDialog_res",
        visible: false,
        title: "选择资源树",
        footer: ["cancel", "confirm"],
        events: {
            confirm: function () {
                debugger;
                let retuData = this.getContent().dataset.dsRes.getData().filter(
                    function (recd) {
                        return recd._checked;
                    }
                );
                this.getWorkBook().dataset.dsRes.setData(retuData);
            }
        },
        children: [
            pageDlgres
        ]
    }]