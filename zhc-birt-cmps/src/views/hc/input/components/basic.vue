<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-input :conf="hcInput"></hc-input>
    {{hcInput.value}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputChangeValue: "",
      hcInput: {
        controlName: "HcInput",
        controlId: "HcInput_1",
        value: "",
        events: {
          change: function(val) {
            debugger;
            alert(val + "," + this.value);
          },
          input: function(val) {
            debugger;
            console.log(val);
          }
        }
      }
    };
  },
  methods: {}
};
</script>