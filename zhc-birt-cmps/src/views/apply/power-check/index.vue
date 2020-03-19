<template>
  <div>
    <birt-work-book :conf="birtModel1"></birt-work-book>
  </div>
</template>

<script>
import pinyin from "js-pinyin";

import { allData, ryData2 } from "./org.js";
import { resources, res1001 } from "./resources";
import { pageUser } from "./page-user";

export default {
  data() {
    return {
      birtModel1: {
        controlName: "BirtWorkBook",
        controlId: "BirtWorkBook_check",
        showToolBar: false,
        totalPage: 1,
        renderType: "pages",
        children: [
          {
            controlName: "BirtSheet",
            controlId: "BirtSheet_10",
            name: "sheet0", //配置页,children为其算法分页，如插入分页符或A4纸数据过长换页
            pageIndex: 0,
            dataSets: [
              {
                controlName: "JsWebSocketDataSet",
                controlId: "dsOrg",
                datas: ryData2
              },
              {
                controlName: "JsWebSocketDataSet",
                controlId: "dsRes",
                datas: res1001
              }
            ],
            children: [
              {
                controlName: "BirtFormSheet",
                controlId: "BirtFormSheet_102",
                style: "padding:10px;",
                children: [
                  {
                    controlName: "HcTabs",
                    controlId: "HcTabs_user",
                    tabPosition: "top",
                    activeTabName: "user",
                    height: function(parentHeight) {
                      return parentHeight - 20;
                    },
                    events: {
                      tabClick: function(tabItem) {
                        debugger;
                        alert(1);
                      }
                    },
                    children: [
                      {
                        controlName: "HcTabPane",
                        controlId: "HcTabPane_user",
                        label: "按用户反查",
                        name: "user",
                        children: [pageUser]
                      },
                      {
                        controlName: "HcTabPane",
                        controlId: "HcTabPane_func",
                        label: "按功能反查",
                        name: "func",
                        children: [
                          {
                            controlName: "HcTextLabel",
                            controlId: "TextLabel_zxyh",
                            title: "按功能反查..."
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
  }
};
</script>