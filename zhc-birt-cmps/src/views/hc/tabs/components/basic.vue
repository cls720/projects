<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-tabs :conf="hcTabs"></hc-tabs>
    {{hcTabs.value}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputChangeValue: "",
      hcTabs: {
        controlName: "HcTabs",
        controlId: "HcTabs_user",
        tabPosition: "top",
        activeTabName: "user",
        height: 100,
        events: {
          tabClick: function(tabItem) {
            console.log(JSON.stringify(tabItem));
          }
        },
        children: [
          {
            controlName: "HcTabPane",
            controlId: "HcTabPane_user",
            label: "按用户反查",
            name: "user",            
            children: [
              {
                controlName: "HcTextLabel",
                controlId: "TextLabel_byUser",
                title: "用户页面内容1"
              }
            ]
          },
          {
            controlName: "HcTabPane",
            controlId: "HcTabPane_func",
            label: "按功能反查",
            name: "func",
            children: [
              {
                controlName: "HcTextLabel",
                controlId: "TextLabel_byFunc",
                title: "功能页面内容1"
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