:::demo
```html
<template>
         <div class="mt30">
            <h3>WorkBook 工作薄</h3>
            <div class="mt30">
               <anchor id="basic-apply" label="基础应用" h4 ></anchor>
               <md-basic-apply></md-basic-apply>
           </div>
            <div class="mt30">
               <anchor id="render-tab" label="Tabs渲染" h4 ></anchor>
               <md-render-tab></md-render-tab>
           </div>
            <div class="mt30">
               <anchor id="provide-inject" label="provide & inject" h4 ></anchor>
               <md-provide-inject></md-provide-inject>
           </div>
            <div class="mt30">                              
                <md-config></md-config>
           </div>
        </div>
</template>
<script>

    import MdBasicApply from './basic-apply.md'
    import MdRenderTab from './render-tab.md'
    import MdProvideInject from './provide-inject.md'
    import MdConfig from './config.md'
    import Vue from 'vue'

    // 减少报表显示高度
    Vue.prototype.$HCBIRT = { tabHeight: 600 };
    export default{
        name: "websocket-connection-api",
        components: {
            MdBasicApply,
            MdRenderTab,
            MdProvideInject,
            MdConfig
        }
    }
</script>
```
:::