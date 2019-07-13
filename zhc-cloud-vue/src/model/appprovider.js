export default {
    modelFile:"appprovider",

    fields:{
        coId:{
            desc:"prvdId",
            dbType:"dbString",
            operate:"eq"
        },
        prvdName:{
            dbType:"dbString",
            operate:"like",
            desc:"供应商名称",
        },
        linkMan:{
            dbType:"dbString",
            operate:"like",
            desc:"联系人",
        },
        linkPhone:{
            dbType:"dbString",
            operate:"like",
            desc:"联系电话"
        }
    }
}