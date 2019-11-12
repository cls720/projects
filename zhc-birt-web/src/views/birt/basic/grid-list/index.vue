<template>
  <div>
    <birt-page :layout="layout" :style="pageStyle" />
    <el-button @click="showInfo2()">通用对象保存测试</el-button>
    <span>{{out}}</span>
  </div>
</template>

<script>
import BirtPage from "@/components/BirtPage";
import { gridListModel } from "./gridList.js";
import ConfigObject from "@/utils/ConfigObject";

export default {
  name: "GridListBirt",
  components: { BirtPage },
  data() {
    return {
      pageStyle: gridListModel.style,
      layout: gridListModel.layout,
      out: "out value"
    };
  },
  methods: {
    showInfo2() {      
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