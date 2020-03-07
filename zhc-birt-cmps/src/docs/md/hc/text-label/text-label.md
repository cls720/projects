:::demo 设置标签title属性,显示标签内容,设置style属性应用样式

```html
<template>    
    <hc-text-label :conf="hcTextLabelConf"></hc-text-label>    
</template>

<script>    
    export default{        
        data() {
            return {
                hcTextLabelConf: {
                    controlName: "HcTextLabel",
                    controlId: "HcTextLabel_01",                  
                    title: "Hello zhc-birt-cmps",
                    style: "text-align: center;font-size: 16px;font-weight: bold;color: #32d3eb;"
                }
            }
        }        
    }
</script>
```
:::

