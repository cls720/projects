<template>
  <div>
    <birt-work-book :conf="birtModel1"></birt-work-book>
  </div>
</template>

<script>
import pinyin from "js-pinyin";

import { allData } from "./org.js";
import { resources } from "./resources";
import { pageOrg } from "./page-org";
import { pageRes } from "./page-res";

export default {
  data() {
    return {
      birtModel1: {
        controlName: "BirtWorkBook",
        controlId: "BirtWorkBook_modify",
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
                datas: allData
              },
              {
                controlName: "HcEditDataset",
                controlId: "dsEditRes",
                data: []
              },
              {
                controlName: "JsWebSocketDataSet",
                controlId: "dsResTree",
                datas: resources
              },
              {
                controlName: "HcDataset",
                controlId: "dsRes2",
                data: []
              }
            ],
            children: [
              {
                controlName: "BirtFormSheet",
                controlId: "BirtFormSheet_102",
                children: [
                  {
                    controlName: "HcTabs",
                    controlId: "HcTabs_org",
                    tabPosition: "top",
                    activeTabName: "org",
                    height: function(parentHeight) {
                      return parentHeight - 20;
                    },
                    children: [
                      {
                        controlName: "HcTabPane",
                        controlId: "HcTabPane_org",
                        label: "按分配对象修改",
                        name: "org",
                        children: pageOrg
                      },
                      {
                        controlName: "HcTabPane",
                        controlId: "HcTabPane_func",
                        label: "按功能修改",
                        name: "func",
                        children: pageRes
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