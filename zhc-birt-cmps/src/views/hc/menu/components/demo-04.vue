<template>
  <div style="padding:20px;height:300px;">
    <h4>4. datas行转树型数据</h4>
    <hc-menu :conf="hcMenu"></hc-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hcMenu: {
        controlName: "HcMenu",
        controlId: "HcMenu_basic04",
        events: {
          open: function(key, keyPath) {
            console.log(key, keyPath);
          },
          close: function(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        mode: "horizontal",
        idField: "id",
        parentIdField: "pid",
        labelField: "title",
        datas: [
          {
            id: "1",
            pid: "-1",
            title: "导航一",
            index: "1",
            icon: "el-icon-location"
          },
          { id: "1_1", pid: "1", title: "选项1", index: "1_1" },
          { id: "1_2", pid: "1", title: "选项2", index: "1_2" },
          { id: "1_3", pid: "1", title: "选项3", index: "1_3" },
          { id: "1_4", pid: "1", title: "选项4", index: "1_4" },
          { id: "1_4_1", pid: "1_4", title: "选项4-1", index: "1_4_1" },
          { id: "1_4_2", pid: "1_4", title: "选项4-2", index: "1_4_2" },
          { id: "1_4_3", pid: "1_4", title: "选项4-3", index: "1_4_3" },
          {
            id: "2",
            pid: "-1",
            title: "导航二",
            index: "2",
            icon: "el-icon-menu"
          },
          {
            id: "3",
            pid: "-1",
            title: "导航三",
            index: "3",
            disabled: true,
            icon: "el-icon-document"
          },
          {
            id: "4",
            pid: "-1",
            title: "导航四",
            index: "4",
            icon: "el-icon-setting"
          }
        ]
      }
    };
  },
  methods: {}
};
</script>