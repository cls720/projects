
:::demo 不设置表格总体宽度，只设置每列的宽度，表格的总宽度将会自动计算

```html
<template>    
    <hc-text-label :conf="hcTextLabelConf"></hc-text-label>    
</template>

<script>
    // import HcTextLabel from "@/components/Hc/TextLabel";
    
    export default{
        // components: {  HcTextLabel },
        data() {
            return {
                hcTextLabelConf: {
                    controlName: "HcTextLabel",
                    controlId: "HcTextLabel_01",                  
                    title: "标签标题",
                    style: "text-align: center;font-size: 16px;font-weight: bold;color: #32d3eb;"
                }
            }
        }        
    }
</script>
```
:::

