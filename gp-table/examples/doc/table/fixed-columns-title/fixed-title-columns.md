:::demo **固定表头**：<br> - 只需要设置`height`属性即可，如果设置的高度大于实际表格的高度，将以实际表格高度为准<br> **固定列**：<br> - 通过给**需要固定的列**，设置 `isFrozen: true` 即可

```html
<template>
    <div>
        <gp-table
             is-horizontal-resize column-width-drag style="width:100%"                  
             :height="400"                     
             :is-show-sub-total="true"
             :row-no="rowNo"
             :policy="policy"
             :datas="datas"
             even-bg-color="#f4f4f4"             
             row-click-color="#edf7ff"
        ></gp-table>
    </div>
</template>

<script>

    import dcimData from '../../../mock/dcimData.js'

    export default{
        name: 'frozen-title-columns',
        data(){
            return {
                 policy:{
                    rowGroupFields:[
                        {field:'year',width: 150, isFrozen:true,isFold:true,title:"年",titleAlign: 'center',columnAlign: 'center', col:0},
                        {field:'fjd',width: 150, isFrozen:true,isFold:true,title:"季度", col:1},
                        {field:'month',width: 150, isFrozen:true,isFold:true,title:"月", col:2},
                        {field:'week',width: 150, isFrozen:false,isFold:false,title:"周", col:3}
                    ],
                    colGroupFields:[],
                    dataFields:[],
                    dependFields:{
                        week:[{field:'FWNUM',title:'周任务',width:200,col:4}],
                        month:[{field:'FMNUM',title:'月任务',width:200,col:5}],
                        fjd:[{field:'FQNUM',title:'季任务',width:200,col:6}],
                        year:[{field:'FYNUM',title:'年任务',width:200,col:7}]
                    }
                 },
                 rowNo:{isShow: true,width:40},                                    
                 datas: dcimData                
            }
        }
    }
</script>
```
:::