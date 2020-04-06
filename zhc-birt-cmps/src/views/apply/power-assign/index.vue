<template>
  <div>
    <birt-work-book :conf="birtModel"></birt-work-book>
  </div>
</template>

<script>
import pinyin from "js-pinyin";

import { pageDlgres } from "./page-dlgres";
import { allData } from "./org.js";

export default {
  data() {
    return {
      birtModel: {
        controlName: "BirtWorkBook",
        controlId: "BirtWorkBook_power",
        showToolBar: false,
        totalPage: 1,
        renderType: "pages",
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
              },
              {
                controlName: "HcEditDataset",
                controlId: "dsRes",
                rowKey: "resId",
                data: []
              }
            ],
            children: [
              {
                controlName: "BirtFormSheet",
                controlId: "BirtFormSheet_02",
                children: [
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
                            disabled: true,
                            style: "width:95%;font-size:16px;",
                            events: {
                              click: function() {
                                debugger;
                                let orgData = this.getWorkBook().dataset.dsOrg.datas.filter(
                                  function(recd) {
                                    // return recd._checked;
                                    return recd.isAssign;
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
                            },
                            mounted: function() {
                              debugger;
                              let dsRes = this.getWorkBook().dataset.dsRes;
                              let me = this;
                              dsRes.on("dirtyChange", isDirty => {
                                debugger;
                                me.conf.disabled = !isDirty;
                              });
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
                        span: 7,
                        children: [
                          {
                            controlName: "HcInputFilter",
                            controlId: "HcInputFilter_org",
                            size: "medium",
                            events: {
                              filterChange: function(filterKey, datas) {
                                debugger;
                                let hcTable = this.getRefCompt("HcTree_org");
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
                                        key.indexOf(filterKey.toUpperCase()) !==
                                        -1
                                      );
                                    }
                                  );
                                } else {
                                  hcTable.$delete(hcTable.filterConf, "label");
                                }
                              }
                            }
                          },
                          {
                            controlName: "ElRow",
                            controlId: "ElRow_org_toolbar",
                            style: "margin-top:10px",
                            children: [
                              {
                                controlName: "ElCol",
                                controlId: "ElCol_ct_1",
                                span: 6,
                                style: "line-height:30px",
                                children: [
                                  {
                                    controlName: "HcCheckbox",
                                    controlId: "HcCheckbox_clearorg",
                                    border: true,
                                    size: "small",
                                    style:
                                      "width:90px;color:red;background-color: #DCDFE6;",
                                    title: "清空添加",
                                    events: {
                                      change: function(val) {
                                        if (val) {
                                          this.$message({
                                            dangerouslyUseHTMLString: true,
                                            message:
                                              "<font color='red' size=4>您已选择“清空添加”，即将清空“已选分配对象”原有的所有权限，<br><br>重新分配当前权限，请<strong>慎用</strong></font>",
                                            type: "warning",
                                            showClose: true,
                                            duration: 0,
                                            offset: 200
                                          });
                                        }
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                controlName: "ElCol",
                                controlId: "ElCol_ct_2",
                                span: 18,
                                style: "text-align:right;",
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
                                      change: function(val) {
                                        let hcTable = this.getRefCompt(
                                          "HcTree_org"
                                        );
                                        if (val == "0") {
                                          hcTable.$delete(
                                            hcTable.filterConf,
                                            "isAssign"
                                          );
                                        } else if (val == "1") {
                                          hcTable.$set(
                                            hcTable.filterConf,
                                            "isAssign",
                                            function filterRecd(recd) {
                                              return recd.isAssign;
                                            }
                                          );
                                        } else {
                                          hcTable.$set(
                                            hcTable.filterConf,
                                            "isAssign",
                                            function filterRecd(recd) {
                                              return !recd.isAssign;
                                            }
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
                            controlName: "HcTable",
                            controlId: "HcTree_org",
                            dataset: "dsOrg",
                            rowKey: "id",
                            idField: "id",
                            parentIdField: "pid",
                            showHeader: false,
                            // defaultExpandAll: true,
                            height: function(parentHeight) {
                              return parentHeight - 145;
                            },
                            style:
                              "margin-top:10px;border-top:1px solid rgb(235, 238, 245);",
                            children: [
                              {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_0",
                                prop: "label",
                                label: "组织名称",
                                minWidth: 220
                              },
                              {
                                controlName: "HcTableColumnCheckbox",
                                controlId: "HcTableColumn_3_chk",
                                isShow: function(row) {
                                  debugger;
                                  return row.kind != "DIR";
                                },
                                prop: "isAssign",
                                label: "授权",
                                width: 75
                              }
                            ]
                          }
                        ]
                      },
                      {
                        controlName: "ElCol",
                        controlId: "ElCol_r2_c2",
                        span: 17,
                        children: [
                          {
                            controlName: "HcTable",
                            controlId: "HcTable_res",
                            dataset: "dsRes",
                            rowKey: "resId",
                            idField: "resId",
                            parentIdField: "parentId",
                            defaultExpandAll: true,
                            height: function(parentHeight) {
                              debugger;
                              return parentHeight - 56;
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
                                      filterChange: function(filterKey, datas) {
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
                                          click: function() {
                                            debugger;
                                            let resKeys = [];
                                            this.getWorkBook()
                                              .dataset.dsRes.getData()
                                              .forEach(recd => {
                                                if (recd.type != "dir")
                                                  resKeys.push(recd.resId);
                                              });
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
                                    style: "margin-top:10px;",
                                    children: [
                                      {
                                        controlName: "ElCol",
                                        controlId: "ElCol_ck",
                                        span: 8,
                                        children: [
                                          {
                                            controlName: "HcCheckbox",
                                            controlId: "HcCheckbox_clearres",
                                            size: "small",
                                            style:
                                              "width:90px;margin-top:5px;color:red;",
                                            title: "清空添加",
                                            events: {
                                              change: function(val) {
                                                if (val) {
                                                  this.$message({
                                                    dangerouslyUseHTMLString: true,
                                                    message:
                                                      "<font color='red' size=4>您已选择“清空添加”，即将清空“已选功能菜单”原有的所有权限，<br><br>重新分配当前权限，请<strong>慎用</strong></font>",
                                                    type: "warning",
                                                    showClose: true,
                                                    duration: 0,
                                                    offset: 200
                                                  });
                                                }
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        controlName: "ElCol",
                                        controlId: "ElCol_type",
                                        span: 16,
                                        style: "text-align:right",
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
                                              change: function(filterKey) {
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
                                  }
                                ]
                              },
                              {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_operate",
                                label: "操作",
                                width: 80,
                                slot: "scope",
                                children: [
                                  {
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
                                            });
                                          }
                                          store.remove(recd);
                                        }
                                        deleteChildren(
                                          this.scope._self.store,
                                          this.scope.row
                                        );
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_2",
                                label: "数据权限分配",
                                children: [
                                  {
                                    controlName: "HcTableColumnRadio",
                                    controlId: "HcTableColumn_2_1",
                                    isShow: function(row) {
                                      if (
                                        row.daPower &&
                                        row.daPower.personalScheme
                                      ) {
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
                                    isShow: function(row) {
                                      if (
                                        row.daPower &&
                                        row.daPower.groupScheme
                                      ) {
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
                                    isShow: function(row) {
                                      if (
                                        row.daPower &&
                                        row.daPower.businessScheme
                                      ) {
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
                                    isShow: function(row) {
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
                                    isShow: function(row) {
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
                                    isShow: function(row) {
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
                                    isShow: function(row) {
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
                                    isShow: function(row) {
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
                    width: "50%",
                    footer: ["cancel", "confirm"],
                    events: {
                      confirm: function() {
                        debugger;
                        let retuData = this.getContent()
                          .dataset.dsRes2.getData()
                          .filter(function(recd) {
                            return recd._checked;
                          });

                        let dsRes = this.getWorkBook().dataset.dsRes;
                        // 添加新增选择
                        dsRes.add(retuData);
                        // 删除取消选择
                        let oldResIds = this.param.resIds;
                        oldResIds.forEach(key => {
                          for (var i = 0, l = retuData.length; i < l; i++) {
                            if (key == retuData[i].resId) return;
                          }
                          dsRes.remove(key);
                        });
                      }
                    },
                    children: [pageDlgres]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  }
};
</script>