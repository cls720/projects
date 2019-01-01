
:::demo 通过设置 `multiple-sort` 为 `false` 开启单个字段进行排序；<br>通过设置属性`sort-always`允许排序只在升序和降序切换；<br> 通过传入`sort-change`回调函数，获取当前排序的字段，将排序结果重新赋值`table-data`达到排序的目的；
```html
<template>
    <div>
        <v-table
             is-horizontal-resize
             style="width:100%"
             :multiple-sort="multipleSort"
             :columns="columns"
             :table-data="tableData"
             @sort-change="sortChange"
             row-hover-color="#eee"
             row-click-color="#edf7ff"
        ></v-table>
    </div>
</template>

<script>

    export default{
        name: 'sort-by-single-columns',
        data(){
            return {
                 tableData: [
                    {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                    {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                    {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                    {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                    {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
                 ],
                multipleSort:false,
                columns: [
                    {field: 'name', title: '姓名', width: 80, titleAlign: 'center',columnAlign:'center',orderBy:'asc',isResize:true},
                    {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center',columnAlign:'center',orderBy:'asc',isResize:true},
                    {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'address', title: '地址',width: 280, titleAlign: 'center',columnAlign:'left',isResize:true}
                ]
            }
        },
        methods: {

            // 获取 table 组件每次操作后的参数（重新去请求数据）
            sortChange(params){
                console.log(params)
            }
        }
    }
</script>
```
:::
