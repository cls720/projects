:::demo
```html
<template>
         <div class="mt30">
            <h3>JsWebSocketDataSet</h3>
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
        name: "js-websocket-dataset-api",
        components: {
            MdBasicApply,           
            MdConfig
        }
    }
</script>
```
:::