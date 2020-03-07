<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-radio-group :conf="hcRadioGroupConf"></hc-radio-group>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
      hcRadioGroupConf: {
        controlName: "HcRadioGroup",
        controlId: "HcRadioGroup_1",
        value: "",
        children: [
          {
            controlName: "HcRadio",
            controlId: "HcRadio_1",
            label: "1",
            value: this.radio,
            title: "选项1"
          },
          {
            controlName: "HcRadio",
            controlId: "HcRadio_2",
            label: "2",
            value: this.radio,
            title: "选项2"
          }
        ],
        events: {
          change: function(val) {
            debugger;
            alert(val + "," + this.value);
          }
        }
      }
    };
  },
  methods: {
    doChange(val) {
      alert(val);
    }
  }
};
</script>