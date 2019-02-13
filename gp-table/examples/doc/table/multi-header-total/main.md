:::demo
```html
<template>
         <div class="mt30">
            <h3>列固定</h3>
        
            <div class="mt30">
                  <anchor id="multi-header-suball-total" label="动态多表头小计总计" h4 ></anchor>
                  实现 是否小计 是否总计 小计样式 总计样式
                  <br>webpack 打包样式
                  <multi-header-suball-total></multi-header-suball-total>
            </div>

            <div class="mt30">
                  <anchor id="complex-header-fixed-column" label="固定复杂表头和固定列" h4 ></anchor>
                  <complex-header-fixed-column></complex-header-fixed-column>
            </div>
        </div>
</template>

<script>
    
    import multiHeaderSuballTotal from './multi-header-suball-total.md'
    import complexHeaderFixedColumn from './complex-header-fixed-column.md'

    export default{
        name: "multi-header-total1",
        components: {            
            multiHeaderSuballTotal,
            complexHeaderFixedColumn
        }
    }
</script>
```
:::