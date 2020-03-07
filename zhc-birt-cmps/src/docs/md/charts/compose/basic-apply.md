:::demo ComposeChart合成图示例

```html
<template>
  <compose-chart :ref="model.controlId" :conf="model" />
</template>

<script>
export default {
  data() {
    return {
      model: {
        controlName: "ComposeChart",
        controlId: "ComposeChart_line31",
        height: 230,
        datas: [
          {
            weakDay: "周一",
            mail: 105,
            guangao: 220,
            vieo: 150,
            vist: 320,
            search: 820
          },
          {
            weakDay: "周二",
            mail: 110,
            guangao: 230,
            vieo: 140,
            vist: 360,
            search: 860
          },
          {
            weakDay: "周三",
            mail: 120,
            guangao: 256,
            vieo: 175,
            vist: 280,
            search: 750
          },
          {
            weakDay: "周四",
            mail: 145,
            guangao: 290,
            vieo: 180,
            vist: 342,
            search: 837
          },
          {
            weakDay: "周五",
            mail: 160,
            guangao: 365,
            vieo: 198,
            vist: 420,
            search: 960
          },
          {
            weakDay: "周六",
            mail: 150,
            guangao: 330,
            vieo: 170,
            vist: 398,
            search: 869
          },
          {
            weakDay: "周日",
            mail: 140,
            guangao: 260,
            vieo: 190,
            vist: 384,
            search: 920
          }
        ],
        isGroupData: false,
        groupBy: "weakDay",
        calcFields: [
          {
            name: "vieo",
            title: "视频广告",
            summaryType: "sum"
          },
          {
            name: "vist",
            title: "直接访问",
            summaryType: "sum"
          },
          {
            name: "search",
            title: "搜索引擎",
            summaryType: "sum"
          }
        ],
        option: {
          title: {
            text: "合成图"
          },
          legend: {
            top: "84%"
          },
          series: [
            {},
            { type: "bar", itemStyle: { color: "#67C23A" } },
            { areaStyle: {}, itemStyle: { color: "#E6A23C" } }
          ],
          grid: {
            left: "3%",
            right: "4%",
            bottom: "20%",
            containLabel: true
          }
        }
      }
    };
  }
};
</script>
```
:::

