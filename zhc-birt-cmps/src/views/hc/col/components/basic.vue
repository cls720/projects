<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-button :conf="hcButtonConf" style="width:200px;"></hc-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hcButtonConf: {
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
    };
  },
  methods: {}
};
</script>