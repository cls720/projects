:::demo AreaChart图表示例

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
        showToolBar:false,
        children: [
          {
            controlName: "BirtSheet",
            controlId: "BirtSheet_0",
            name: "sheet0", //配置页,children为其算法分页，如插入分页符或A4纸数据过长换页
            pageIndex: 0,
            children: [              
              {
                controlName: "BirtFormSheet",
                controlId: "BirtFormSheet_01",
                children: [
                      {
                          controlName: "AreaChart",
                          controlId: "AreaChart_1",
                          height: 230,
                          datas: [{
                            "sailArea": "华北",
                            "sailValue": 20372,
                          },
                          {
                            "sailArea": "华东",
                            "sailValue": 10922,
                          },
                          {
                            "sailArea": "华中",
                            "sailValue": 10776,
                          },
                          {
                            "sailArea": "华南",
                            "sailValue": 30776,
                          },
                          {
                            "sailArea": "酉北",
                            "sailValue": 6800,
                          },
                          {
                            "sailArea": "东北",
                            "sailValue": 9000,
                          },
                          {
                            "sailArea": "酉南",
                            "sailValue": 8600,
                          },
                          ],
                          isGroupData: false,
                          groupBy: "sailArea",
                          calcFields: [{
                            name: 'sailValue',
                            title: '销售金额',
                            summaryType: 'sum'
                          }],
                          option: {
                            title: {
                              text: "基础折线图"
                            },
                            legend: {
                              left: 'right'
                            },
                            grid: {
                              left: '3%',
                              right: '4%',
                              bottom: '3%',
                              containLabel: true
                            },
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

