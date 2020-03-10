<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-steps ref="steps" :conf="hcSteps"></hc-steps>
    <hc-button :conf="hcButtonConf"></hc-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
      confStyle: "margin-top:10px;",      
      hcSteps: {
        controlName: "HcSteps",
        controlId: "HcSteps_1",
        simple: true,
        active: 0,
        children: [
          {
            controlName: "HcStep",
            controlId: "HcStep_1",
            title: "选择分配对象",
            icon: "el-icon-user"
          },
          {
            controlName: "HcStep",
            controlId: "HcStep_2",
            title: "选择预分配功能",
            icon: "el-icon-s-order"
          },
          {
            controlName: "HcStep",
            controlId: "HcStep_3",
            title: "分配数据权限、操作权限",
            icon: "el-icon-key"
          }
        ],
        events: {
          click: function(val) {
            debugger;
            alert(val + "," + this.value);
          }
        }
      },
      hcButtonConf: {
        controlName: "HcButton",
        controlId: "HcButton_1",
        title: "下一步",
        style: 'margin-top:10px;',
        events: {
          click: this.next
        }
      }
    };
  },
  methods: {
    next() {
      if (this.$refs.steps.active++ > 2) this.$refs.steps.active = 0;
    }
  }
};
</script>