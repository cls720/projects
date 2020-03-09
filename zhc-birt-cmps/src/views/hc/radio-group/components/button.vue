<template>
  <div style="padding:20px;">
    <h4>2. Button应用</h4>
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
            controlName: "HcRadioButton",
            controlId: "HcRadioButton_1",
            label: "3",
            title: "选项1"
          },
          {
            controlName: "HcRadioButton",
            controlId: "HcRadioButton_2",
            label: "4",
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