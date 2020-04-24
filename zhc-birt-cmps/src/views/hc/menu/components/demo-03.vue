<template>
  <div style="padding:20px;">
    <h4>3. datas数据源</h4>
    <hc-menu :conf="hcMenu"></hc-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hcMenu: {
        controlName: "HcMenu",
        controlId: "HcMenu_basic03",
        events: {
          open: function(key, keyPath) {
            console.log(key, keyPath);
          },
          close: function(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        mode: "horizontal",
        labelField: "title",
        datas: [
          {
            title: "导航一",
            index: "1",
            icon: "el-icon-location",
            children: [
              { title: "选项1", index: "1_1" },
              { title: "选项2", index: "1_2" },
              { title: "选项3", index: "1_3" },
              {
                title: "选项4",
                index: "1_4",
                children: [
                  { title: "选项4-1", index: "4_1" },
                  { title: "选项4-2", index: "4_2" },
                  { title: "选项4-3", index: "4_3" }
                ]
              }
            ]
          }
        ],
        children: [
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