:::demo 表头合并需要设置 `titleRows`对象：<br>`titleRows`数组中的每一项代表表头的每一行，通过 `fields`属性设置当前要合并的表头列，如果需要和并列则使用`colspan`,如果需要行合并则设置`rowspan` 
```html

<template>
    <div>
        <hc-sort-dropmenu></hc-sort-dropmenu>        
        <gp-table
             is-horizontal-resize column-width-drag style="width:100%"    
             is-vertical-resize              
             :height="400"                     
             :is-show-sub-total="true"
             :is-show-all-total="true"
             :row-no="rowNo"
             :policy="policy"
             :datas="datas"
             :column-cell-class-name="columnCellClass"
             :paging-index="(pageIndex-1)*pageSize"
             even-bg-color="#f4f4f4"             
             row-click-color="#edf7ff"
             all-total-class="allTotal"             
        ></gp-table>       
        <div class="mt20 mb20 bold"> 
            <el-pagination
                @current-change="pageChange"
                @size-change="pageSizeChange"            
                :total="pageTotal"
                :current-page="pageIndex"
                :page-size="pageSize"
                :page-sizes="[2, 4, 10, 20, 50]"            
                layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
         <div class="mt20 mb20 bold">
            <v-pagination 
                @page-change="pageChange" 
                @page-size-change="pageSizeChange"                
                :total="pageTotal" 
                :page-size="pageSize" 
                :page-size-option="[2, 4, 10, 20, 50]"
                :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']">                
            </v-pagination>
       </div>
    </div>
</template>

<style>
    .sheet1-cell-D0{
        background-color: #187;
        color:#fff;
    }
    .shee11-cell-cpJlXm{
        background-color: #f60;
        color:#fff;
    }
    .shee11-cell-projectName{
        background-color: #187;
        color:#fff;
    }
   
</style>

<script>

    import htlbData from '../../../mock/xm-htlb-data.js'
    import elDragDialog from '../../../../libs/src/directives/el-dragDialog'

    export default{
        name: 'multi-header-suball-total1',
        directives: { elDragDialog },
        data(){
            return {
                 pageIndex:1,
                 pageSize:4,      
                 sort:{
                     title:'排序',
                     items:[{field:'htHy',title:'所属行业'},{field:'cpJlXm',title:'产品经理'},{field:'projectName',title:'项目名称'},{field:'createMonth',title:'月份'},{field:'htMoney',title:'合同金额'}],
                     orderBy:[{name:'htHy',title:'所属行业',type:'asc'}]
                 },
                 policy:{
                    rowGroupFields:[
                        {field:'htHy',width: 100, isFrozen:true,isFold:true,title:"所属行业",titleAlign: 'center',
                        columnAlign: 'center', col:0},
                        {field:'cpJlXm',width: 100, isFrozen:true,isFold:true,title:"产品经理",titleAlign: 'center',columnAlign: 'center', col:1},                        
                        {field:'projectName',width: 130, isFrozen:true,isFold:false,title:"项目名称", col:2,
                         titleCellClassName:'sheet1-cell-D0',
                         isFilter:true,
                         filterMultiple: true}
                    ],
                    colGroupFields:[                        
                        {field:'createMonth',width: 120,  title:"月份"},
                        {field:'htType',width: 120,  title:"合同类型"}
                    ],
                    dataFields:[
                        {field:'htMoney',width: 80, title:"合同金额", formatter: function (rowData, index) {
                            let val = rowData.value;
                            if (!rowData.type){
                                if (val <= 10){
                                    return '<span style="color:red;font-weight: bold;">' + val + '</span>';    
                                }else if (val >= 50){
                                    return '<span style="color:blue;font-weight: bold;">' + val + '</span>';
                                }
                            }                            
                            return val;                         
                        }},
                        {field:'yfkMoney',width: 90, title:"预付款金额"}
                    ]
                 },
                 rowNo:{isShow: true,width:40},                                    
                 datas: []               
            }
        }, 
        computed:{
            // 计算分页总页数
            pageTotal(){                
                return htlbData.length;
            }
        },
        methods:{
            columnCellClass(rowIndex,columnName,rowData){     
                if (rowData.type) return;
                let classList = ['shee11-cell-cpJlXm','shee11-cell-projectName'];
                for (let i=0, l = classList.length; i < l ; i++){
                    let itemClass = classList[i];
                    let field = itemClass.substring(itemClass.lastIndexOf("-")+1);
                    if (columnName.indexOf(field) != "-1"){
                        return itemClass;
                    }
                }                    
            },
            rowClick(rowIndex,rowData){
                console.log(rowIndex);
                console.log(rowData);
            },
            getTableData(){
                this.datas = htlbData.slice((this.pageIndex-1)*this.pageSize,(this.pageIndex)*this.pageSize)
            },
            pageChange(pageIndex){
                 this.pageIndex = pageIndex;
                 this.getTableData();
                 console.log(pageIndex)
            },
            pageSizeChange(pageSize){
                this.pageIndex = 1;
                this.pageSize = pageSize;
                this.getTableData();
           },
            sortChange(params){
                if (params.height.length > 0){
                    this.datas.sort(function (a, b) {
                        if (params.height === 'asc'){
                           return a.height - b.height;
                        }else if(params.height === 'desc'){
                                return b.height - a.height;
                        }else{
                            return 0;
                        }
                    });
                }
            }
        },
        created(){
            this.getTableData();
        }
    }
</script>
```
:::
