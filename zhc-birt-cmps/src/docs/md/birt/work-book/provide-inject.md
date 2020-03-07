1. workbook provide提供全局 datasource数据源、dataset数据集
```javascript
 provide() {
    return { datasource: this.datasource, dataset: this.dataset };
  }
```
2. 子组件按需 inject注入 datasource数据源、dataset数据集
```javascript
inject: ["dataset"],
```
:::demo  this.title = this.dataset.ds1.curRecord.dyjId;当前标签对象访问inject注入的dataset列表，获取ds1当前记录值。

```html
<template>
  <birt-work-book :ref="birtModel.controlId" :conf="birtModel" />
</template>

<script>
export default {
  data() {
    return {
      birtModel: {
        controlName: "BirtWorkBook",
        controlId: "BirtWorkBook_0",
        totalPage: 1,
        renderType: "pages",
        showToolBar: true,
        dataSources: [
          {
            controlName: "WebSocketConection",
            controlId: "ws1",
            webSocketUrl:
              "ws://114.118.97.228:8080/amrept-web/dyj/sktcloud/admin.do",
            target: {
              dyj_WcuFn0RQ: {
                datasetId: "ds1"
              }
            }
          }
        ],
        children: [
          {
            controlName: "BirtSheet",
            controlId: "BirtSheet_0",
            name: "Sheet1",
            pageIndex: 0,
            dataSets: [
              {
                controlName: "JsWebSocketDataSet",
                controlId: "ds1",
                datas: []
              }
            ],
            children: [
              {
                controlName: "BirtFormSheet",
                controlId: "BirtFormSheet_01",
                children: [
                  {
                    controlName: "HcTextLabel",
                    controlId: "HcTextLabel_01",
                    title: "点击我切换成inject注入内容...",
                    events: {
                      click: function() {                                                
                        this.title = this.dataset.ds1.curRecord.dyjId;
                      }
                    }
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
```
:::

