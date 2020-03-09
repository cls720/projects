<template>
  <div>
    <h4>1. 基础应用</h4>
    <hc-table :conf="tableConf"></hc-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableConf: {
        controlName: "HcTable",
        controlId: "HcTable_01",
        datas: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          }
        ],
        children: [
          {
            controlName: "HcTableColumn",
            controlId: "HcTableColumn_0",
            prop: "date",
            label: "日期",            
          },
          {
            controlName: "HcTableColumn",
            controlId: "HcTableColumn_1",
            prop: "name",
            label: "姓名",
            width: 120
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>