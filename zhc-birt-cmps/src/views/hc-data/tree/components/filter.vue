<template>
  <div>
    <h4>3. 过滤</h4>
    <hc-input-filter :conf="hcInputFilterConf" style="width:300px;"></hc-input-filter>
    <hc-tree ref="tree" :conf="hcTreeConf"></hc-tree>
  </div>
</template>

<script>
import { allData } from "./org.js";
import { convertToTreeData } from "@/funclib/DataTree.js";

export default {
  data() {
    return {
      hcInputFilterConf: {
        controlName: "HcInputFilter",
        controlId: "HcInputFilter_01",
        size: "medium",
        keys: [
          {
            name: "name",
            weight: 1
          }
        ],
        events: {
          filterChange: this.onFilterChange
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
      },
      hcTreeConf: {
        controlName: "HcTree",
        controlId: "HcTree_3",
        datas: [],
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
  mounted() {
    debugger;
    let cloneDatas = JSON.parse(JSON.stringify(allData));
    let orgTreeData = convertToTreeData(cloneDatas, {
      id: "id",
      parentId: "pid",
      rootValue: "-1"
    });
    this.hcTreeConf.datas = orgTreeData;
  },
  methods: {
    onFilterChange(filterKey, datas) {
      debugger;
      this.$refs.tree.filter(filterKey);
    }
  }
};
</script>