export default {
    modelFile:"appcompany",

    fields:{
        coId:{
            desc:"ID",
            dbType:"dbString",
            operate:"eq",
            
            default: {
                //rule: 'first', //prior
                exps: (model) => {
                  return (new Date()).valueOf()+"";
                }
              }
        },
        coName:{
            dbType:"dbString",
            operate:"like",
            desc:"公司名称",
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