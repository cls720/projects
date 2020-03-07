

:::demo BirtGridSheet表单布局示例

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
            name: "sheet0", 
            pageIndex: 0,
            style: "padding:10px;",
            children: [
              {
                controlName: "BirtGridSheet",
                controlId: "BirtFormSheet_01",
                width: 705,
                style: "",
                rows: {
                  r1: {
                    rowHeight: 20,
                    tds: {
                      A1: {
                        value: "产品明细",
                        style:
                          "text-align:left;vertical-align:middle;font-size:20px;font-weight:bold;",
                        colspan: 8
                      }
                    }
                  },                                 
                  r2: {
                    rowHeight: 35,
                    tds: {
                      A2: {
                        value: "产品名称",
                        style:
                          "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                      },
                      B2: {
                        value: "供应商",
                        style:
                          "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                      },
                      C2: {
                        value: "类别",
                        style:
                          "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                      },
                      D2: {
                        value: "规格",
                        style:
                          "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                      },
                      E2: {
                        value: "单价",
                        style:
                          "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                      },
                      F2: {
                        value: "库存量",
                        style:
                          "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                      },
                      G2: {
                        value: "订购量",
                        style:
                          "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                      },
                      H2: {
                        value: "订购金额",
                        style:
                          "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                      }
                    }
                  },
                  r3: {
                    rowHeight: 30,
                    tds: {
                      A3: {
                        value: "苹果",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                      },
                      B3: {
                        value: "水果大王",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                      },
                      C3: {
                        value: "水果",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                      },
                      D3: {
                        value: "Kg",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                        colspan: 1
                      },
                      E3: {
                        value: "13.8",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                        colspan: 1
                      },
                      F3: {
                        value: "1000",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                        colspan: 1
                      },
                      G3: {
                        value: "235",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                        colspan: 1
                      },
                      H3: {
                        value: "3243",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                        colspan: 1
                      }
                    }
                  },
                  r4: {
                    rowHeight: 30,
                    tds: {
                      A4: {
                        value: "香蕉",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                      },
                      B4: {
                        value: "水果大王",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                      },
                      C4: {
                        value: "水果",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                      },
                      D4: {
                        value: "Kg",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                        colspan: 1
                      },
                      E4: {
                        value: "8.9",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                        colspan: 1
                      },
                      F4: {
                        value: "500",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                        colspan: 1
                      },
                      G4: {
                        value: "150",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                        colspan: 1
                      },
                      H4: {
                        value: "1335",
                        style:
                          "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                        colspan: 1
                      }
                    }
                  },               
                  r5: {
                    rowHeight: 3,
                    tds: {
                      A5: {
                        value: "",
                        style: "border-bottom: 1px solid rgb(108,202,205)"
                      },
                      B5: {
                        value: "",
                        style: "border-bottom: 1px solid rgb(108,202,205)"
                      },
                      C5: {
                        value: "",
                        style: "border-bottom: 1px solid rgb(108,202,205)"
                      },
                      D5: {
                        value: "",
                        style: "border-bottom: 1px solid rgb(108,202,205)"
                      },
                      E5: {
                        value: "",
                        style: "border-bottom: 1px solid rgb(108,202,205)"
                      },
                      F5: {
                        value: "",
                        style: "border-bottom: 1px solid rgb(108,202,205)"
                      },
                      G5: {
                        value: "",
                        style: "border-bottom: 1px solid rgb(108,202,205)"
                      },
                      H5: {
                        value: "",
                        style: "border-bottom: 1px solid rgb(108,202,205)"
                      }
                    }
                  },
                  r6: {
                    rowHeight: 28,
                    tds: {
                      A6: {
                        value: "",
                        style: ""
                      },
                      B6: {
                        value: "",
                        style: ""
                      },
                      C6: {
                        value: "",
                        style: ""
                      },
                      D6: {
                        value: "汇总: ",
                        style: "text-align:center;font-weight:bold"
                      },
                      E6: {
                        value: "22.7",
                        style: "text-align:center;font-weight:bold"
                      },
                      F6: {
                        value: "1500",
                        style: "text-align:center;font-weight:bold"
                      },
                      G6: {
                        value: "385",
                        style: "text-align:center;font-weight:bold"
                      },
                      H6: {
                        value: "4578",
                        style: "text-align:center;font-weight:bold"
                      }
                    }
                  }
                },
                cols: [
                  {
                    colWidth: 150
                  },
                  {
                    colWidth: 120
                  },
                  {
                    colWidth: 120
                  },
                  {
                    colWidth: 120
                  },
                  {
                    colWidth: 100
                  },
                  {
                    colWidth: 120
                  },
                  {
                    colWidth: 100
                  },
                  {
                    colWidth: 120
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

