<template>
  <div>
    <h4>2. 多表头应用</h4>
    <hc-table :conf="tableConf"></hc-table>
  </div>
</template>

<script>
import { resources } from "./resources";
import { treeResources } from "./treeResources";


export default {
  data() {
    return {     
      tableConf: {
        controlName: "HcTable",
        controlId: "HcTable_02",
        datas: treeResources,
        rowKey:"resId",
        children: [
          {
            controlName: "HcTableColumn",
            controlId: "HcTableColumn_0",
            prop: "name",
            label: "功能名称",
            width: 230
          },
          {
            controlName: "HcTableColumn",
            controlId: "HcTableColumn_1",
            prop: "type",
            label: "类型",
            width: 90
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
                width: 70
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
                label: "团队"
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
                label: "企业"
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
                label: "其它"
              }
            ]
          },
           {
            controlName: "HcTableColumn",
            controlId: "HcTableColumn_3",
            label: "操作权限分配",
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
                width: 70
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
                width: 70
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
                width: 70
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
                width: 70
              },
            ]
          }
        ]
      }
    };
  },
  mounted() {
    
  },
  methods: {}
};
</script>