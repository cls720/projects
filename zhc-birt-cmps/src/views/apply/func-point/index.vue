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
                    controlName: "HcTabs",
                    controlId: "HcTabs_funcpoints",
                    tabPosition: "left",
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