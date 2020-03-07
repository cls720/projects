
:::demo 通过给 `columns` 设置 `isEdit:true` 开启单元格编辑。<br> **回调事件**： <br> - `cell-edit-done`回调函数，回调参数为 `newValue`、`oldValue`、`rowIndex`、`rowData`、`field`，并给`table-data`当前编辑的列赋值 <br> **提示**：由于直接通过操作DOM 会破坏响应式，通过在`cell-edit-done`回调函数中给 `table-data`编辑的列赋值，达到响应式的目的

```html
<template>    
    <hc-image-title :conf="hcImageTitleConf"></hc-image-title>    
</template>

<script>
    // import HcImageTitle from "@/components/Hc/ImageTitle";

    export default{
        // components: {  HcImageTitle },
        data() {
            return {
                hcImageTitleConf: {
                    controlName: "HcImageTitle",
                    controlId: "HcImageTitle_11",
                    width: "100%",
                    height: "30px",
                    imageUrl: "url(" + require("@/images/border-title-01.png") + ")",
                    title: "全国大圆机运行监控",
                    style:
                    "text-align: center;font-size: 24px;font-weight: bold;color: #32d3eb;"
                }
            }
        },
        methods:{
        }
    }
</script>
```
:::

