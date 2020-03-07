

:::demo 本地脚本数据集

```html
<template>{{JSON.stringify(dsChina.curRecord)}}</template>

<script>
import JsWebSocketDataSet from "@/components/DataSource/JsWebSocketDataSet";

export default {
  data() {
    return {
      datas: [
        {
          gpsEast: 119.56,
          gpsNorth: 26,
          runProvince: "福建",
          runAddr: "长乐",
          dyjId: "DYJ-0001",
          company: "长源纺织",
          id: 1,
          runCity: "福州",
          state_BSIs: 1
        },
        {
          gpsEast: 119.6,
          gpsNorth: 26.1,
          runProvince: "福建",
          runAddr: "长乐",
          dyjId: "DYJ-0002",
          company: "长源纺织",
          id: 2,
          runCity: "福州",
          state_BSIs: 2
        }
      ],
      dataSet: {
        controlName: "JsWebSocketDataSet",
        controlId: "dsChina",
        datas: []
      },
      dsChina: function() {
        return {};
      }
    };
  },
  mounted() {
    this.dsChina = new JsWebSocketDataSet(this.dataSet);
    this.dsChina.setData(this.datas);
  },
  methods: {}
};
</script>
```
:::

