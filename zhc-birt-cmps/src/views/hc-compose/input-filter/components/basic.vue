<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-input-filter :conf="hcInputFilter"></hc-input-filter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hcInputFilter: {
        controlName: "HcInputFilter",
        controlId: "HcInputFilter_1",
        fireAction: "keyup",
        events: {
          filterChange: function(filterKey, datas) {
            alert("fiterChange." + filterKey);
          }
        },
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