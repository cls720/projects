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
                controlId: "dsOrgTree",
                datas: allData
              },
              {
                controlName: "HcEditDataset",
                controlId: "dsEditRes",
                rowKey: "resId",
                data: []
              },
              {
                controlName: "JsWebSocketDataSet",
                controlId: "dsResTree",
                datas: resources
              },
              {
                controlName: "HcEditDataset",
                controlId: "dsEditRes2",
                rowKey: "assignId",
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
                    tabPosition: "left",
                    activeTabName: "org",
                    height: function(parentHeight) {
                      return parentHeight;
                    },
                    children: [
                      {
                        controlName: "HcTabPane",
                        controlId: "HcTabPane_org",
                        label: "按授权对象修改",
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