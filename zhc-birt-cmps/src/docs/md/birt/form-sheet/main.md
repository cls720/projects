:::demo
```html
<template>
         <div class="mt30">
            <h3>BirtFormSheet 表单布局</h3>
            <div class="mt30">
               <anchor id="basic-apply" label="基础应用" h4 ></anchor>
               <md-basic-apply></md-basic-apply>
           </div>           
            <div class="mt30">                              
                <md-config></md-config>
           </div>
        </div>
</template>
<script>

    import MdBasicApply from './basic-apply.md'    
    import MdConfig from './config.md'

    export default{
        name: "birt-form-sheet-api",
        components: {
            MdBasicApply,           
            MdConfig
        }
    }
</script>
```
:::