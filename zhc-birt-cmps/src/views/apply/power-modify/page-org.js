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
                                title: "选择修改对象",
                                icon: "el-icon-user",
                                status: "process"
                            },
                            {
                                controlName: "HcStep",
                                controlId: "HcStep_2",
                                title: "修改分配功能列表",
                                icon: "el-icon-s-order",
                                status: "process"
                            },
                            {
                                controlName: "HcStep",
                                controlId: "HcStep_3",
                                title: "修改数据权限、操作权限",
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
                        disabled: true,
                        style: "width:95%;font-size:16px;",
                        events: {
                            click: function () {
                                debugger;
                                let saveData = this.getWorkBook().dataset.dsEditRes.getData();
                                let saveDirtyData = this.getWorkBook().dataset.dsEditRes.getDirtyData();

                                this.$msgbox({
                                    title: "保存确认",
                                    message: "是否确认保存?",
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
                        },
                        mounted: function () {
                            debugger
                            let dsEditRes = this.getWorkBook().dataset.dsEditRes;
                            let me = this;
                            dsEditRes.on("dirtyChange", (isDirty) => {
                                debugger
                                me.conf.disabled = !isDirty;
                            })
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
                        dataset: "dsOrgTree",
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
                                        let targetDataset = me.getWorkBook().dataset.dsEditRes;
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
                        dataset: "dsEditRes",
                        rowKey: "resId",
                        idField: "resId",
                        indent: 0,
                        parentIdField: "parentId",
                        defaultExpandAll: true,
                        height: function (parentHeight) {
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
                                                        this.getWorkBook().dataset.dsEditRes.getData().forEach(
                                                            recd => {
                                                                if (recd.type != "dir")
                                                                    resKeys.push(recd.resId);
                                                            }
                                                        );
                                                        this.getRefCompt(
                                                            "HcDialog_resmodify"
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
                                label: "授权对象",
                                width: 120
                            },
                            {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_operate",
                                label: "操作",
                                width: 80,
                                slot: "scope",
                                children: [{
                                    controlName: "HcButton",
                                    controlId: "HcButton_del",
                                    size: "mini",
                                    type: "danger",
                                    title: "删除",
                                    events: {
                                        click() {
                                            debugger;
                                            function deleteChildren(store, recd) {
                                                if (recd.children) {
                                                    recd.children.forEach(child => {
                                                        deleteChildren(store, child);
                                                    })
                                                }
                                                store.remove(recd)
                                            }
                                            deleteChildren(this.scope._self.store, this.scope.row);
                                        }
                                    }
                                }]
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
        controlId: "HcDialog_resmodify",
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
                let curtNode = this.getRefCompt("HcTree_org").elTree().getCurrentNode();
                retuData.forEach(recd => {
                    if (recd.kind != 'dir') {
                        recd.assignId = curtNode.id;
                        recd.assignName = curtNode.label;
                        recd.assignKind = curtNode.kind;
                    }
                })
                let dsEditRes = this.getWorkBook().dataset.dsEditRes
                // 添加新增选择
                dsEditRes.add(retuData);
                // 删除取消选择    
                let oldResIds = this.param.resIds;
                oldResIds.forEach(key => {
                    for (var i = 0, l = retuData.length; i < l; i++) {
                        if (key == retuData[i].resId) return;
                    }
                    dsEditRes.remove(key);
                })
            }
        },
        children: [
            pageDlgres
        ]
    }]