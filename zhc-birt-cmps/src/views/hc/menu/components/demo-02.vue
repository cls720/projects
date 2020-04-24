<template>
  <div style="padding:20px;">
    <h4>2. 侧栏</h4>
    <el-row :gutter="20">
      <el-col :span="12">
        <hc-menu :conf="hcMenu"></hc-menu>
      </el-col>
      <el-col :span="12">
        <hc-menu :conf="hcMenu2"></hc-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hcMenu: {
        controlName: "HcMenu",
        controlId: "HcMenu_basic02_1",
        events: {
          open: function(key, keyPath) {
            console.log(key, keyPath);
          },
          close: function(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        children: [
          {
            controlName: "HcSubMenu",
            controlId: "HcSubMenu_1",
            index: "1",
            title: "导航一",
            icon: "el-icon-location",
            children: [
              {
                controlName: "HcMenuItemGroup",
                controlId: "HcMenuItem_1_1",
                index: "1_1",
                title: "分组1",
                children: [
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_1_1",
                    index: "2_1",
                    title: "选项1"
                  },
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_2_2",
                    index: "2_2",
                    title: "选项2"
                  }
                ]
              },
              {
                controlName: "HcMenuItemGroup",
                controlId: "HcMenuItem_1_1",
                index: "1_2",
                title: "-",
                children: [
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_2_3",
                    index: "2_3",
                    title: "选项3"
                  }
                ]
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
          },
          {
            controlName: "HcMenuItem",
            controlId: "HcMenuItem_2",
            index: "2",
            title: "导航二",
            icon: "el-icon-menu"
          },
          {
            controlName: "HcMenuItem",
            controlId: "HcMenuItem_2",
            index: "3",
            disabled: true,
            title: "导航三",
            icon: "el-icon-document"
          },
          {
            controlName: "HcMenuItem",
            controlId: "HcMenuItem_2",
            index: "4",
            title: "导航四",
            icon: "el-icon-setting"
          }
        ]
      },
      hcMenu2: {
        controlName: "HcMenu",
        controlId: "HcMenu_basic02_2",
        backgroundColor: "#545c64",
        textColor: "#fff",
        activeTextColor: "#ffd04b",
        events: {
          open: function(key, keyPath) {
            console.log(key, keyPath);
          },
          close: function(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        children: [
          {
            controlName: "HcSubMenu",
            controlId: "HcSubMenu_1",
            index: "1",
            title: "导航一",
            icon: "el-icon-location",
            children: [
              {
                controlName: "HcMenuItemGroup",
                controlId: "HcMenuItem_1_1",
                index: "1_1",
                title: "分组1",
                children: [
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_1_1",
                    index: "2_1",
                    title: "选项1"
                  },
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_2_2",
                    index: "2_2",
                    title: "选项2"
                  }
                ]
              },
              {
                controlName: "HcMenuItemGroup",
                controlId: "HcMenuItem_1_1",
                index: "1_2",
                title: "-",
                children: [
                  {
                    controlName: "HcMenuItem",
                    controlId: "HcMenuItem_2_3",
                    index: "2_3",
                    title: "选项3"
                  }
                ]
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
          },
          {
            controlName: "HcMenuItem",
            controlId: "HcMenuItem_2",
            index: "2",
            title: "导航二",
            icon: "el-icon-menu"
          },
          {
            controlName: "HcMenuItem",
            controlId: "HcMenuItem_2",
            index: "3",
            disabled: true,
            title: "导航三",
            icon: "el-icon-document"
          },
          {
            controlName: "HcMenuItem",
            controlId: "HcMenuItem_2",
            index: "4",
            title: "导航四",
            icon: "el-icon-setting"
          }
        ]
      }
    };
  },
  methods: {}
};
</script>