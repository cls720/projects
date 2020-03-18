<template>
  <div>
    <h4>2. 懒加载</h4>
    <hc-tree :conf="hcTreeConf"></hc-tree>
  </div>
</template>

<script>
import { orgData, ptmData, ryData } from "./org.js";

export default {
  data() {
    return {
      hcTreeConf: {
        controlName: "HcTree",
        controlId: "HcTree_2",
        showCheckbox: true,
        lazy: true,
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([
              { label: "组织", id: "zz_id", pid: "-1", kind: "DIR" },
              { label: "岗位", id: "gw_id", pid: "-1", kind: "DIR" },
              { label: "人员", id: "ry_id", pid: "-1", kind: "DIR" }
            ]);
          }
          if (node.id == "zz_id") {
            resolve(orgData);
          }
        },
        events: {}
      }
    };
  },
  methods: {}
};
</script>