<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-menu :conf="hcMenu"></hc-menu>
    <br />
    <hc-menu :conf="hcMenu2"></hc-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hcMenu: {
        controlName: "HcMenu",
        controlId: "HcMenu_basic01_1",
        mode: "horizontal",
        events: {
          select: function(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        children: [
          {
            controlName: "HcMenuItem",
            controlId: "HcMenuItem_1",
            index: "1",
            title: "处理中心"
          },
          {
            controlName: "HcSubMenu",
            controlId: "HcSubMenu_2",
            index: "2",
            title: "我的工作台",
            children: [
              {
                controlName: "HcMenuItem",
                controlId: "HcMenuItem_2_1",
                index: "2_1",
                title: "选项1"
              },
              {
                controlName: "HcMenuItem",
                controlId: "HcMenuItem_2_2",
                index: "2_2",
                title: "选项2"
              },
              {
                controlName: "HcMenuItem",
                controlId: "HcMenuItem_2_3",
                index: "2_3",
                title: "选项3"
              },
              {
                controlName: "HcSubMenu",
                controlId: "HcSubMenu_2_4",
                index: "2_4",
                title: "选项4",
                children: [
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_2_4_1",
                    index: "2_4_1",
                    title: "选项4-1"
                  },
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_2_4_2",
                    index: "2_4_2",
                    title: "选项4-2"
                  },
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_2_4_3",
                    index: "2_4_3",
                    title: "选项4-3"
                  }
                ]
              }
            ]
          }
        ]
      },
      hcMenu2: {
        controlName: "HcMenu",
        controlId: "HcMenu_basic01_2",
        mode: "horizontal",
        events: {
          select: function(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        backgroundColor: "#545c64",
        textColor: "#fff",
        activeTextColor: "#ffd04b",
        children: [
          {
            controlName: "HcMenuItem",
            controlId: "HcMenuItem_1",
            index: "1",
            title: "处理中心"
          },
          {
            controlName: "HcSubMenu",
            controlId: "HcSubMenu_2",
            index: "2",
            title: "我的工作台",
            children: [
              {
                controlName: "HcMenuItem",
                controlId: "HcMenuItem_2_1",
                index: "2_1",
                title: "选项1"
              },
              {
                controlName: "HcMenuItem",
                controlId: "HcMenuItem_2_2",
                index: "2_2",
                title: "选项2"
              },
              {
                controlName: "HcMenuItem",
                controlId: "HcMenuItem_2_3",
                index: "2_3",
                title: "选项3"
              },
              {
                controlName: "HcSubMenu",
                controlId: "HcSubMenu_2_4",
                index: "2_4",
                title: "选项4",
                children: [
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_2_4_1",
                    index: "2_4_1",
                    title: "选项4-1"
                  },
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_2_4_2",
                    index: "2_4_2",
                    title: "选项4-2"
                  },
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_2_4_3",
                    index: "2_4_3",
                    title: "选项4-3"
                  }
                ]
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