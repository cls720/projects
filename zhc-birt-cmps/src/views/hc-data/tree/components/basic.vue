<template>
  <div>
    <h4>1. 基础应用</h4>
    <hc-tree :conf="hcTreeConf"></hc-tree>
  </div>
</template>

<script>
import { allData } from "./org.js";
import { convertToTreeData } from "@/funclib/DataTree.js";

export default {
  data() {
    return {
      hcTreeConf: {
        controlName: "HcTree",
        controlId: "HcTree_1",
        datas: [],
        showCheckbox: true,
        events: {
          nodeClick: function(data, node, scope) {
            debugger;
            alert("nodeClick:" + JSON.stringify(data));
          },
          checkChange(data, checked, indeterminate) {
            // alert("checkChange:" + JSON.stringify(data));
          }
        }
      }
    };
  },
  mounted(){
    let cloneDatas = JSON.parse(JSON.stringify(allData));
    let treeData = convertToTreeData(cloneDatas, {
      id: "id",
      parentId: "pid",
      rootValue: "-1"
    });
    this.hcTreeConf.datas = treeData;
  },
  methods: {}
};
</script>