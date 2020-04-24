<template>
  <div style="padding:20px;">
    <birt-work-book :conf="birtModel"></birt-work-book>
  </div>
</template>

<script>
// https://www.cnblogs.com/homehtml/p/11977915.html

export default {
  data() {
    return {
      birtModel: {
        controlName: "BirtWorkBook",
        controlId: "BirtWorkBook_power",
        showToolBar: false,
        totalPage: 1,
        renderType: "pages",
        children: [
          {
            controlName: "BirtSheet",
            controlId: "BirtSheet_0",
            name: "sheet0", //配置页,children为其算法分页，如插入分页符或A4纸数据过长换页
            pageIndex: 0,
            dataSets: [
              {
                controlName: "JsWebSocketDataSet",
                controlId: "dsFuncPoints",
                datas: []
              }
            ],
            children: [
              {
                controlName: "BirtFormSheet",
                controlId: "BirtFormSheet_02",
                children: [
                  {
                    controlName: "ElRow",
                    controlId: "ElRow_l",
                    children: [
                      {
                        controlName: "ElCol",
                        controlId: "ElCol_l4",
                        span: 4,
                        children: [
                          {
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
                            labelField: "title",
                            datas: [
                              {
                                id: "1",
                                pid: "-1",
                                title: "主题分类一",
                                index: "1",
                                icon: "el-icon-location"
                              },                            
                              {
                                id: "2",
                                pid: "-1",
                                title: "主题分类二",
                                index: "2",
                                icon: "el-icon-menu"
                              },
                              {
                                id: "3",
                                pid: "-1",
                                title: "主题分类三",
                                index: "3",
                                icon: "el-icon-document"
                              },
                              {
                                id: "4",
                                pid: "-1",
                                title: "主题分类四",
                                index: "4",
                                icon: "el-icon-setting"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        controlName: "ElCol",
                        controlId: "ElCol_r20",
                        span: 20,
                        children: [
                          {
                            controlName: "HcButton",
                            controlId: "HcButton_1",
                            title: "",
                            icon: "el-icon-edit",
                            events: {
                              click: function(e) {
                                alert("click:" + e);
                              }
                            }
                          }
                        ]
                      }
                    ]
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