:::demo
```html
<template>
         <div class="mt30">
            <h3>列固定</h3>
        
            <div class="mt30">
                  <anchor id="multi-header-suball-total" label="动态多表头小计总计" h4 ></anchor>
                  实现 是否显示小计 是否显示总计 小计样式 总计样式
                  <br>webpack 打包样式                  
                  <br>单元格字段值  fromat 突出显示, titleCellClassName单元格表头固定样式，columnCellClass单元格注入函数样式
                  <br>表头添加默认过滤 “等于”，整列去从过滤数据源列表
                  <br>引用 饿了么套件
                  <br>集成分页工具条 element-ui,内置分布v-pagination
                  <br>添加工具条，排序，突出显示，自定义过滤项，分组策略，复制事务  
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