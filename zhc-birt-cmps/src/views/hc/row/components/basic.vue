<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-row :conf="basicConf"></hc-row>
    <hc-row :conf="basicConf2"></hc-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicConf: {
        controlName: "HcRow",
        controlId: "HcRow_r1",
        style: "height:30px;background: #99a9bf;"
      },
      basicConf2: {
        controlName: "HcRow",
        controlId: "HcRow_r2",
        gutter: 20,
        style: "height:30px;margin-top:10px;",
        children: [
          {
            controlName: "HcCol",
            controlId: "HcCol_r2_c1",
            span: 12,
            style: "height:30px;",
            children: [
              {
                controlName: "HcTextLabel",
                controlId: "HcTextLabel_1",
                title: "1",
                style: "background: #99a9bf;"
              }
            ]
          },
          {
            controlName: "HcCol",
            controlId: "HcCol_r2_c2",
            span: 12,
            style: "height:30px;",
            children: [
              {
                controlName: "HcTextLabel",
                controlId: "HcTextLabel_2",
                title: "2",
                style: "background: #99a9bf;"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {}
};
</script>