:::demo
```html
<template>
         <div class="mt30">
            <h3>WebSocketConection</h3>
            <div class="mt30">
               <anchor id="basic-apply" label="基础应用" h4 ></anchor>
               <md-basic-apply></md-basic-apply>
           </div>
            <div class="mt30">
               <anchor id="set-cdion" label="设置过滤条件" h4 ></anchor>
               <md-set-cdion></md-set-cdion>
           </div>
            <div class="mt30">                              
                <md-config></md-config>
           </div>
        </div>
</template>
<script>

    import MdBasicApply from './basic-apply.md'
    import MdSetCdion from './set-cdion.md'
    import MdConfig from './config.md'

    export default{
        name: "websocket-connection-api",
        components: {
            MdBasicApply,
            MdSetCdion,
            MdConfig
        }
    }
</script>
```
:::