

:::demo BirtFormSheet表单布局示例

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
        totalPage: 2,
        renderType: "pages",
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
                    controlName: "HcTextLabel",
                    controlId: "HcTextLabel_01",
                    title: "表单布局，第一页内容"                    
                  }
                ]
              },
              {
                controlName: "BirtFormSheet",
                controlId: "BirtFormSheet_02",
                children: [
                  {
                    controlName: "HcTextLabel",
                    controlId: "HcTextLabel_02",
                    title: "表单布局，第二页内容",
                    style:
                      "text-align: center;font-size: 14px;color: #B2B7B9;background-color: black;"
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

