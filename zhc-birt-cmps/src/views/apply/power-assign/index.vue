<template>
  <div>
    <birt-work-book ref="workbook" :conf="birtModel"></birt-work-book>
  </div>
</template>

<script>
import { allData } from "./org.js";
import { treeResources } from "./treeResources";
import { convertToTreeData } from "@/funclib/DataTree.js";

export default {
  data() {
    return {
      birtModel: {
        controlName: "BirtWorkBook",
        controlId: "BirtWorkBook_0",
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
                datas: treeResources
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
                            active: 0,
                            children: [
                              {
                                controlName: "HcStep",
                                controlId: "HcStep_1",
                                title: "选择分配对象",
                                icon: "el-icon-user"
                              },
                              {
                                controlName: "HcStep",
                                controlId: "HcStep_2",
                                title: "选择预分配功能",
                                icon: "el-icon-s-order"
                              },
                              {
                                controlName: "HcStep",
                                controlId: "HcStep_3",
                                title: "分配数据权限、操作权限",
                                icon: "el-icon-key"
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
                                    debugger;
                                    this.getRefCompt("HcTree_org").filter(val);
                                  }
                                }
                              }
                            ]
                          },
                          {
                            controlName: "HcTree",
                            controlId: "HcTree_org",
                            dataset: "dsOrg",
                            showCheckbox: true,
                            defaultExpandAll: true,
                            filterNodeMethod: function(value, data, node) {
                              debugger;
                              if (!value || value === "0") return true;
                              if (value === "1") return node.checked;
                              if (value === "2") return !node.checked;
                              return data.label.indexOf(value) !== -1;
                            },
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
                            children: [
                              {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_0",
                                prop: "name",
                                label: "功能名称",
                                minWidth: 230,
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
                                        this.getRefCompt("HcTree_org").filter(
                                          filterKey
                                        );
                                      }
                                    },
                                    children: [
                                      {
                                        controlName: "HcButton",
                                        controlId: "HcButton_1",
                                        title: "",
                                        icon: "el-icon-edit",
                                        events: {
                                          click: function(e) {
                                            alert("click:" + e);
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_1",
                                prop: "type",
                                label: "类型",
                                width: 75,
                                sortable: true
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
                                    width: 75
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