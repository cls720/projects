:::demo
```html
<template>
         <div class="mt30">
            <h3>BirtSheet 工作表</h3>
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
        name: "birt-sheet-api",
        components: {
            MdBasicApply,           
            MdConfig
        }
    }
</script>
```
:::