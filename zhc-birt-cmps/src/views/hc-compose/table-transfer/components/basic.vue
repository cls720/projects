<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <birt-work-book :conf="birtModel"></birt-work-book>
  </div>
</template>

<script>
import { orgData, ptmData, ryData, allData } from "../org";
import { resources } from "../resources";

export default {
  data() {
    return {
      birtModel: {
        controlName: "BirtWorkBook",
        controlId: "BirtWorkBook_table_transfer",
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
                controlName: "HcDataset",
                controlId: "dsSource",
                rowKey: "id",
                _infcTree: {
                  idField: "id",
                  parentIdField: "pid"
                },
                data: orgData,
                requestFunc: function(param) {
                  debugger
                }
              },
              {
                controlName: "HcEditDataset",
                controlId: "dsRetu",
                rowKey: "id",
                data: ptmData
              }
            ],
            children: [
              {
                controlName: "BirtFormSheet",
                controlId: "BirtFormSheet_02",
                children: [
                  {
                    controlName: "HcRow",
                    controlId: "HcRow_r2",
                    gutter: 10,
                    children: [
                      {
                        controlName: "HcCol",
                        controlId: "HcCol_r2_c1",
                        span: 10,
                        children: [
                          {
                            controlName: "HcInputFilter",
                            controlId: "HcInputFilter_source",
                            size: "medium",
                            events: {
                              filterChange: function(filterKey, datas) {
                                debugger;
                                let hcTable = this.getRefCompt("HcTable_left");
                                if (filterKey) {
                                  // hcTable.$set(
                                  //   hcTable.filterConf,
                                  //   "label",
                                  //   function filterRecd(recd) {
                                  //     let key =
                                  //       recd.label +
                                  //       "_" +
                                  //       pinyin.getCamelChars(recd.label);
                                  //     return (
                                  //       key.indexOf(filterKey.toUpperCase()) !==
                                  //       -1
                                  //     );
                                  //   }
                                  // );
                                  hcTable.store.setFilterData(filterData);
                                } else {
                                  // hcTable.$delete(hcTable.filterConf, "label");
                                  hcTable.store.clearFilter();
                                }
                              }
                            }
                          },
                          {
                            controlName: "HcTable",
                            controlId: "HcTable_left",
                            dataset: "dsSource",
                            rowKey: "id",
                            idField: "id",
                            parentIdField: "pid",
                            showHeader: false,
                            defaultExpandAll: true,
                            height: function(parentHeight) {
                              return parentHeight - 145;
                            },
                            lazy:true,
                            load:function(row, treeNode, resolve){
                              debugger;
                            },
                            style:
                              "margin-top:10px;border-top:1px solid rgb(235, 238, 245);",
                            events: {
                              rowDblclick: function(row, column, event) {
                                let idValue = row[this.store.getIdField()];
                                let pData = this.store.getParentDataArray(
                                  idValue
                                );
                                this.store.getData();
                                if (pData && pData.length > 0) {
                                  pData[pData.length - 1].isAssign = true;
                                }
                                this.getWorkBook().dataset.dsRetu.add(pData);
                                debugger;
                                alert(JSON.stringify(pData));
                              }
                            },
                            children: [
                              {
                                controlName: "HcTableColumn",
                                controlId: "HcTableColumn_0",
                                prop: "label",
                                label: "组织名称",
                                minWidth: 180
                              },
                              {
                                controlName: "HcTableColumnCheckbox",
                                controlId: "HcTableColumn_3_chk",
                                isShow: function(row) {
                                  return row.kind != "DIR";
                                },
                                prop: "isAssign",
                                label: "授权",
                                width: 100
                              }
                            ]
                          }
                        ]
                      },
                      {
                        controlName: "HcCol",
                        controlId: "HcCol_r2_c2",
                        span: 4,
                        style:
                          "text-align:center;line-height:50px;padding-top:100px;",
                        height: 500,
                        children: [
                          {
                            controlName: "HcRow",
                            controlId: "HcRow_btn_r1",
                            style: "",
                            children: [
                              {
                                controlName: "HcButton",
                                controlId: "HcButton_r",
                                icon: "el-icon-arrow-right",
                                events: {
                                  click: function(e) {
                                    alert("click:" + e);
                                  }
                                }
                              }
                            ]
                          },
                          {
                            controlName: "HcRow",
                            controlId: "HcRow_btn_r2",
                            children: [
                              {
                                controlName: "HcButton",
                                controlId: "HcButton_allr",
                                icon: "el-icon-d-arrow-right",
                                events: {
                                  click: function(e) {
                                    alert("click:" + e);
                                  }
                                }
                              }
                            ]
                          },
                          {
                            controlName: "HcRow",
                            controlId: "HcRow_btn_r3",
                            children: [
                              {
                                controlName: "HcButton",
                                controlId: "HcButton_l",
                                icon: "el-icon-arrow-left",
                                events: {
                                  click: function(e) {
                                    alert("click:" + e);
                                  }
                                }
                              }
                            ]
                          },
                          {
                            controlName: "HcRow",
                            controlId: "HcRow_btn_r1",
                            children: [
                              {
                                controlName: "HcButton",
                                controlId: "HcButton_alll",
                                icon: "el-icon-d-arrow-left",
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
                        controlName: "HcCol",
                        controlId: "HcCol_r2_c3",
                        span: 10,
                        children: [
                          {
                            controlName: "HcInputFilter",
                            controlId: "HcInputFilter_retu",
                            fireAction: "keyup",
                            size: "medium",
                            events: {
                              filterChange: function(filterKey, datas) {
                                debugger;
                                let hcTable = this.getRefCompt("HcTable_right");
                                if (filterKey) {
                                  // hcTable.$set(
                                  //   hcTable.filterConf,
                                  //   "label",
                                  //   function filterRecd(recd) {
                                  //     let key =
                                  //       recd.label +
                                  //       "_" +
                                  //       pinyin.getCamelChars(recd.label);
                                  //     return (
                                  //       key.indexOf(filterKey.toUpperCase()) !==
                                  //       -1
                                  //     );
                                  //   }
                                  // );
                                  hcTable.store.setFilterData(filterData);
                                } else {
                                  // hcTable.$delete(hcTable.filterConf, "label");
                                  hcTable.store.clearFilter();
                                }
                              }
                            }
                          },
                          {
                            controlName: "HcTable",
                            controlId: "HcTable_right",
                            dataset: "dsRetu",
                            rowKey: "id",
                            idField: "id",
                            parentIdField: "pid",
                            showHeader: false,
                            defaultExpandAll: true,
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
                                minWidth: 180
                              },
                              {
                                controlName: "HcTableColumnCheckbox",
                                controlId: "HcTableColumn_3_chk",
                                isShow: function(row) {
                                  return row.kind != "DIR";
                                },
                                prop: "isAssign",
                                label: "授权",
                                width: 100
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

      hcTreeConf1: {
        controlName: "HcTree",
        controlId: "HcTree_left",
        datas: resources,
        isTreeData: false,
        idField: "resId",
        parentIdField: "parentId",
        labelField: "name",
        showCheckbox: true,
        defaultExpandAll: true,
        filterNodeMethod: function(value, data) {
          debugger;
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        },
        events: {}
      }
    };
  },
  methods: {}
};
</script>