<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-input-filter :conf="hcInput"></hc-input-filter>
    {{hcInput.value}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      hcInput: {
        controlName: "HcInputFilter",
        controlId: "HcInputFilter_1",
        children: [
          {
            controlName: "HcButton",
            controlId: "HcButton_2",
            title: "",
            icon: "el-icon-edit",
            events: {
              click: function(e) {
                alert("click1:" + e);
              }
            }
          }
        ]
      }
    };
  },
  methods: {}
};
</script>