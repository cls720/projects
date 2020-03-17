<template>
  <div>
    <birt-work-book ref="workbook" :conf="birtModel"></birt-work-book>
    <hc-dialog ref="dialogRes" :conf="hcDialog"></hc-dialog>
  </div>
</template>

<script>
import pinyin from "js-pinyin";

import { allData } from "./org.js";
import { resources } from "./resources";
import { treeResources } from "./treeResources";
import { convertToTreeData } from "@/funclib/DataTree.js";

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
                controlName: "JsWebSocketDataSet",
                controlId: "dsRes",
                datas: []
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
                            disabled: false,
                            style: "width:95%;font-size:16px;"
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
                            size: "medium",
                            events: {
                              filterChange: function(filterKey, datas) {
                                debugger;
                                this.getRefCompt("HcTree_org").filter(
                                  filterKey
                                );
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
                                span: 8,
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
                                span: 16,
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
                                        debugger;
                                        this.getRefCompt("HcTree_org").filter(
                                          val
                                        );
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            controlName: "HcTree",
                            controlId: "HcTree_org",
                            dataset: "dsOrg",
                            showCheckbox: true,
                            idField: "id",
                            filterNodeMethod: function(value, data, node) {
                              debugger;
                              if (!value || value === "0") return true;
                              if (value === "1") return node.checked;
                              if (value === "2") return !node.checked;
                              let key =
                                node.label +
                                "_" +
                                pinyin.getCamelChars(node.label);
                              return key.indexOf(value.toUpperCase()) !== -1;
                            },
                            height: function(parentHeight) {
                              debugger;
                              return parentHeight - 210;
                            },
                            style:
                              "margin-top:10px;overflow: auto;border:1px solid rgb(235, 238, 245)",
                            events: {}
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
                            height: function(parentHeight) {
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
                                              debugger;
                                              return (
                                                recd.name.indexOf(filterKey) >=
                                                0
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
                                            this.getRefCompt(
                                              "workbook"
                                            ).dataset.dsRes.datas.forEach(
                                              recd => {
                                                if (recd.type != "dir")
                                                  resKeys.push(recd.resId);
                                              }
                                            );
                                            this.getRefCompt(
                                              "dialogRes"
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
                                controlId: "HcTableColumn_2",
                                label: "数据权限分配",
                                children: [
                                  {
                                    controlName: "HcTableColumnRadio",
                                    controlId: "HcTableColumn_2_1",
                                    isShow: function(row) {
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
                                    isShow: function(row) {
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
                                    isShow: function(row) {
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
                  }
                ]
              }
            ]
          }
        ]
      },
      hcDialog: {
        controlName: "HcDialog",
        controlId: "HcDialog_res",
        visible: false,
        title: "选择资源树",
        footer: ["cancel", "confirm"],
        events: {
          confirm: function() {
            {
              let retuData = this.getContent().dataset.dsRes.datas.filter(
                function(recd) {
                  return recd._checked;
                }
              );
              debugger;
              this.getRefCompt("workbook").dataset.dsRes.setData(retuData);
            }
          }
        },
        children: [
          {
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
                          filterChange: function(filterKey, datas) {
                            debugger;
                            this.getRefCompt("HcTree_res").filter(filterKey);
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
                              change: function(val) {
                                this.getRefCompt("HcTree_res").filter(val);
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
                        filterNodeMethod: function(value, data, node) {
                          debugger;
                          if (!value || value === "0") return true;
                          if (value === "1") return node.checked;
                          if (value === "2") return !node.checked;
                          let key =
                            node.label + "_" + pinyin.getCamelChars(node.label);
                          return key.indexOf(value.toUpperCase()) !== -1;
                        },
                        events: {
                          checkChange: function(data, checked, node) {
                            debugger;
                            let checkNodes = this.$refs.eltree.getCheckedNodes(
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
                        mounted: function() {
                          this.getRefCompt("BirtWorkBook_0").on(
                            "afterLoad",
                            doPageAfterLoad
                          );
                          let me = this;
                          function doPageAfterLoad(param) {
                            debugger;
                            me.$refs.eltree.setCheckedKeys(param.resIds);
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    let cloneDatas = JSON.parse(JSON.stringify(allData));
    let orgTreeData = convertToTreeData(cloneDatas, {
      id: "id",
      parentId: "pid",
      rootValue: "-1"
    });
    debugger;
    this.$refs.workbook.dataset.dsOrg.loadData(orgTreeData);
  }
};
</script>