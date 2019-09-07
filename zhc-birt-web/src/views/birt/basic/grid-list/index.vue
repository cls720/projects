<template>
  <div>
    <table-birt-page :tables="tables" :style="pageStyle" />
    <el-button @click="showInfo2()">通用对象保存测试</el-button>
    <span>{{out}}</span>
  </div>
</template>

<script>
import TableBirtPage from "@/components/BirtPage/TableBirtPage";
import { gridListModel } from "./gridList.js";
import ConfigObject from "@/utils/ConfigObject";

export default {
  name: "GridListBirt",
  components: { TableBirtPage },
  data() {
    return {
      pageStyle: gridListModel.style,
      tables: gridListModel.tables,
      out: "out value"
    };
  },
  methods: {
    showInfo2() {
      debugger;
      let me = this;
      $.co.getConfigObjXml({
          controlName: "BizKindConf",
          properties: {
            name: "bkc",
            desc: "节点类型",
            popupNew: ["rpt", "db"]
            // popupAction: [
            //   { controlName: "PopupAction", name: "action1" },
            //   { controlName: "PopupAction", name: "action2" }
            // ]
          }
        })
        .then(value => {
          me.out = value;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>