<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-checkbox :conf="hcCheckbox"></hc-checkbox>
    <hc-checkbox :conf="hcCheckbox2"></hc-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hcCheckbox: {
        controlName: "HcCheckbox",
        controlId: "HcCheckbox_1",
        value: false,
        title: "选项1",
        events: {
          change: function(val) {
            debugger;
            alert(val + "," + this.value);
          }
        }
      },
      hcCheckbox2: {
        controlName: "HcCheckbox",
        controlId: "HcCheckbox_2",
        title: "选项2",
        events: {
          change: function(val) {
            alert(val + "," + this.value);
          }
        }
      }
    };
  },
  methods: {}
};
</script>