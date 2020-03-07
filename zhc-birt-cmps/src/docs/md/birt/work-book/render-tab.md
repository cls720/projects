

:::demo  birtModel报表配置模型, renderType: "tabs" 选项卡渲染方式,一个Sheet一个选项卡,一个Sheet可分多页，如上“投标文件投标函部分”分了两个页，点击选项卡可定位到当前Sheet开始页。

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
        totalPage: 3,
        renderType: "tabs",
        tabPosition: "right",
        children: [
          {
            controlName: "BirtSheet",
            controlId: "BirtSheet_0",
            name: "投标文件投标函部分",
            pageIndex: 0,
            children: [
              {
                controlName: "BirtGridSheet",
                controlId: "BirtGridSheet_01",
                style: "border-spacing:0px;border-collapse: collapse;",
                rows: {
                  r1: {
                    rowHeight: 40,
                    tds: {
                      A1: {
                        value: "投标文件投标函部分",
                        style: ""
                      },
                      B1: {
                        value: "第一页内容",
                        style: ""
                      }
                    }
                  }
                },
                cols: [
                  {
                    colWidth: 200
                  },
                  {
                    colWidth: 200
                  }
                ]
              },
              {
                controlName: "BirtGridSheet",
                controlId: "BirtGridSheet_02",
                style: "border-spacing:0px;border-collapse: collapse;",
                rows: {
                  r1: {
                    rowHeight: 40,
                    tds: {
                      A1: {
                        value: "投标文件投标函部分",
                        style: ""
                      },
                      B1: {
                        value: "第二页内容",
                        style: ""
                      }
                    }
                  }
                },
                cols: [
                  {
                    colWidth: 200
                  },
                  {
                    colWidth: 200
                  }
                ]
              }
            ]
          },
          {
            controlName: "BirtSheet",
            controlId: "BirtSheet_1",
            name: "身份证明书",
            pageIndex: 2,
            children: [
              {
                controlName: "BirtGridSheet",
                controlId: "BirtGridSheet_03",
                style: "border-spacing:0px;border-collapse: collapse;",
                rows: {
                  r1: {
                    rowHeight: 40,
                    tds: {
                      A1: {
                        value: "身份证明书",
                        style: ""
                      },
                      B1: {
                        value: "第一页内容",
                        style: ""
                      }
                    }
                  }
                },
                cols: [
                  {
                    colWidth: 200
                  },
                  {
                    colWidth: 200
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

