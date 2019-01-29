:::demo 表头合并需要设置 `titleRows`对象：<br>`titleRows`数组中的每一项代表表头的每一行，通过 `fields`属性设置当前要合并的表头列，如果需要和并列则使用`colspan`,如果需要行合并则设置`rowspan`

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

    import htlbData from '../../../mock/xm-htlb-data.js'

    export default{
        name: 'multi-header-suball-total',
        data(){
            return {
                 policy:{
                    rowGroupFields:[
                        {field:'htHy',width: 80, isFrozen:true,isFold:true,title:"所属行业",titleAlign: 'center',
                        columnAlign: 'center', col:0},
                        {field:'cpJlXm',width: 80, isFrozen:true,isFold:true,title:"产品经理",titleAlign: 'center',columnAlign: 'center', col:1},                        
                        {field:'projectName',width: 130, isFrozen:true,isFold:false,title:"项目名称", col:2,
                         filterMultiple: true,
                         filters: [{
                            label: '第一季度',
                            value: 1,
                        }, {
                            label: '第二季度',
                            value: 2,
                        }, {
                            label: '第三季度',
                            value: 3,
                        }, {
                            label: '第四季度',
                            value: 4,
                        }]}
                    ],
                    colGroupFields:[                        
                        {field:'createMonth',width: 120,  title:"月份"},
                        {field:'htType',width: 120,  title:"合同类型"}
                    ],
                    dataFields:[
                        {field:'htMoney',width: 80, title:"合同金额"},
                        {field:'yfkMoney',width: 90, title:"预付款金额"}
                    ]
                 },
                 rowNo:{isShow: true,width:40},                                    
                 datas: htlbData                
            }
        }
    }
</script>
```
:::
