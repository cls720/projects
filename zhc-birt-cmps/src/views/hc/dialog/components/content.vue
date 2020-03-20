<template>
  <div style="padding:20px;">
    <h4>2. 传递children内容</h4>
    <hc-dialog ref="dialog2" :conf="hcDialog"></hc-dialog>
    <hc-button :conf="hcButtonConf"></hc-button>
    <hc-table :conf="tableConf"></hc-table>
  </div>
</template>

<script>
import pinyin from "js-pinyin";

import { resources } from "../resources";
import { convertToTreeData } from "@/funclib/DataTree.js";

export default {
  data() {
    return {
      hcDialog: {
        controlName: "HcDialog",
        controlId: "HcDialog_2",
        visible: false,
        title: "选择资源树",
        footer: ["cancel", "confirm"],
        param: {},
        option: {},
        return: {},
        events: {
          confirm: this.doConfirm
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
                        controlId: "HcInputFilter_org",
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
                        // defaultExpandAll: true,
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
                        mounted: function() {
                          this.getRefCompt("BirtWorkBook_0").on(
                            "afterLoad",
                            doPageAfterLoad
                          );
                          let me = this;
                          function doPageAfterLoad(param) {
                            debugger;
                            me.elTree().setCheckedKeys(param.resIds);
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
      },
      hcButtonConf: {
        controlName: "HcButton",
        controlId: "HcButton_2",
        title: "添加数据",
        style: "margin-top:10px;",
        events: {
          click: this.openDialog
        }
      },
      tableConf: {
        controlName: "HcTable",
        controlId: "HcTable_02",
        datas: [],
        rowKey: "resId",
        idField: "resId",
        parentIdField: "parentId",
        children: [
          {
            controlName: "HcTableColumn",
            controlId: "HcTableColumn_0",
            prop: "name",
            label: "功能名称",
            width: 250
          },
          {
            controlName: "HcTableColumn",
            controlId: "HcTableColumn_1",
            prop: "type",
            label: "类型",
            width: 70
          },
          {
            controlName: "HcTableColumn",
            controlId: "HcTableColumn_2",
            prop: "resUrl",
            label: "功能路径"
          }
        ]
      }
    };
  },
  methods: {
    openDialog() {
      debugger;
      let resKeys = [];
      this.tableConf.datas.forEach(recd => {
        if (recd.type != "dir") resKeys.push(recd.resId);
      });
      this.$refs.dialog2.doOpen({ resIds: resKeys });
    },
    doConfirm() {
      let retuData = this.$refs.dialog2
        .getContent()
        .dataset.dsRes.datas.filter(function(recd) {
          return recd._checked;
        });
      this.tableConf.datas = retuData;
      debugger;
    }
  }
};
</script>