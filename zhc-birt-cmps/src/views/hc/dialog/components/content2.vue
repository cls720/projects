<template>
  <div style="padding:20px;">
    <h4>3. 传递children内容2</h4>
    <hc-dialog ref="dialog3" :conf="hcDialog"></hc-dialog>
    <hc-button :conf="hcButtonConf"></hc-button>
  </div>
</template>

<script>
import { resources } from "../resources";

export default {
  data() {
    return {
      hcDialog: {
        controlName: "HcDialog",
        controlId: "HcDialog_3",
        visible: false,
        title: "选择资源树",
        footer: ["cancel", "confirm"],
        param: {},
        option: {},
        return: {},      
        children: [
          {
            controlName: "BirtWorkBook",
            controlId: "BirtWorkBook_1",
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
                                title: "已选2"
                              },
                              {
                                controlName: "HcRadioButton",
                                controlId: "HcRadioButton_2",
                                label: "2",
                                title: "未选2"
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
                          return node.label.indexOf(value) !== -1;
                        },
                        mounted: function() {
                          debugger;                          
                          this.$refs.eltree.setCheckedKeys([]);
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
      } 
    };
  },
  methods: {
    openDialog() {
      debugger;
      this.$refs.dialog3.doOpen({ resIds: [] });
    },
    onTreeMounted() {}
  }
};
</script>