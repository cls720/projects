export default {
    modelFile:"service",
    //字段顺序,自动填充的顺充
    sortFields: ["svcId"],
    fields:{
        svcId:{
            desc:"编号",
            dbType:"dbString",
            operate:"eq",
            default: {
                //rule: 'first', //prior
                exps: (model) => {
                  return (new Date()).valueOf()+"";
                }
              }
        },
        svcName:{
            dbType:"dbString",
            operate:"like",
            desc:"服务名称",
        },
        svcUrl:{
            dbType:"dbString",
            operate:"like",
            desc:"服务接口",
        },
        type:{
            dbType:"dbString",
            operate:"eq"
        }
    }
}