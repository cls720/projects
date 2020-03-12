<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-dialog ref="dialog" :conf="hcDialog"></hc-dialog>
    <hc-button :conf="hcButtonConf"></hc-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hcDialog: {
        controlName: "HcDialog",
        controlId: "HcDialog_1",
        visible: false,
        title: "测试对话框",
        footer: ["cancel", "confirm"],
        events: {
          confirm: function() {
            alert("ok");
          }
        }
      },
      hcButtonConf: {
        controlName: "HcButton",
        controlId: "HcButton_1",
        title: "对话框",
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
      this.$refs.dialog.doOpen();
    }
  }
};
</script>