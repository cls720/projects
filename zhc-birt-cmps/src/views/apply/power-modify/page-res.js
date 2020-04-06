import pinyin from "js-pinyin";
import axios from 'axios';
import { pageDlgorg } from "./page-dlgorg";

export const pageRes = [
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
                                title: "选择分配功能",
                                icon: "el-icon-user",
                                status: "process"
                            },
                            {
                                controlName: "HcStep",
                                controlId: "HcStep_2",
                                title: "修改授权对象",
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
                                let saveData = this.getWorkBook().dataset.dsEditRes2.getData();
                                let saveDirtyData = this.getWorkBook().dataset.dsEditRes2.getDirtyData();

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
                            let dsEditRes2 = this.getWorkBook().dataset.dsEditRes2;
                            let me = this;
                            dsEditRes2.on("dirtyChange", (isDirty) => {
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
        style: "margin-top:10px;",
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
                        highlightCurrent: true,
                        defaultExpandAll: true,
                        filterNodeMethod: function (value, data, node) {
                            let key =
                                node.label +
                                "_" +
                                pinyin.getCamelChars(node.label);
                            return key.indexOf(value.toUpperCase()) !== -1;
                        },
                        height: function (parentHeight) {
                            return parentHeight - 105;
                        },
                        style:
                            "margin-top:10px;overflow: auto;border:1px solid rgb(235, 238, 245)",
                        events: {
                            currentChange: function (data, node) {
                                debugger
                                if (data.type == 'dir') return;
                                let me = this;
                                let param = { resId: data.resId };
                                axios.get('/api/res/check?id=' + data.resId, { params: param })
                                    .then(function (response) {
                                        debugger;
                                        let targetDataset = me.getWorkBook().dataset.dsEditRes2;
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
                        controlId: "HcTable_res2",
                        dataset: "dsEditRes2",
                        rowKey: "rowIndex",
                        // idField: "resId",
                        // parentIdField: "parentId",
                        defaultExpandAll: true,
                        height: function (parentHeight) {
                            return parentHeight - 55;
                        },
                        children: [
                            {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_0",
                                prop: "name",
                                label: "当前功能名称",
                                minWidth: 150,
                            },
                            {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_0",
                                prop: "assignName",
                                label: "授权对象",
                                minWidth: 200,
                                children: [
                                    {
                                        controlName: "HcInputFilter",
                                        controlId: "HcInputFilter_res",
                                        slot: "header",
                                        fireAction: "keyup",
                                        size: "small",
                                        placeholder: "授权对象",
                                        events: {
                                            filterChange: function (filterKey, datas) {
                                                debugger;
                                                let hcTable = this.getRefCompt(
                                                    "HcTable_res2"
                                                );
                                                if (filterKey) {
                                                    hcTable.$set(
                                                        hcTable.filterConf,
                                                        "assignName",
                                                        function filterRecd(recd) {
                                                            let key =
                                                                recd.assignName +
                                                                "_" +
                                                                pinyin.getCamelChars(recd.assignName);
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
                                                        "assignName"
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
                                                        let orgKeys = [];
                                                        this.getWorkBook().dataset.dsEditRes2.getData().forEach(
                                                            recd => {
                                                                if (recd.type != "dir")
                                                                    orgKeys.push(recd.assignId);
                                                            }
                                                        );
                                                        this.getRefCompt(
                                                            "HcDialog_org"
                                                        ).doOpen({
                                                            orgIds: orgKeys
                                                        });
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_operate2",
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
        controlId: "HcDialog_org",
        visible: false,
        title: "选择分配对象",
        width:"50%",
        footer: ["cancel", "confirm"],
        events: {
            confirm: function () {
                debugger;
                let retuData = [];
                let assignData = this.getContent().dataset.dsOrg.getData().filter(
                    function (recd) {
                        return recd.isAssign;
                    }
                );
                let curtNode = this.getRefCompt("HcTree_restree").elTree().getCurrentNode();
                assignData.forEach(recd => {
                    let resNode = JSON.parse(JSON.stringify(curtNode));
                    resNode.assignId = recd.id;
                    resNode.assignName = recd.label;
                    resNode.assignKind = recd.kind;
                    retuData.push(resNode);
                })
                let dsEditRes2 = this.getWorkBook().dataset.dsEditRes2
                // 添加新增选择
                dsEditRes2.add(retuData);
                // 删除取消选择    
                let oldOrgIds = this.param.orgIds || [];
                oldOrgIds.forEach(key => {
                    for (var i = 0, l = retuData.length; i < l; i++) {
                        if (key == retuData[i].assignId) return;
                    }
                    dsEditRes2.remove(key);
                })
            }
        },
        children: [
            pageDlgorg
        ]
    }
]