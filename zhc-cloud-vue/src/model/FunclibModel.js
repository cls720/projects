export default {
    modelFile: "FunclibModel",
    fields: {
        funcGuid: {
            desc: "序号Guid",
            dbType: "dbString",            
            default: {                
                exps: (model) => {
                    return (new Date()).valueOf() + "";
                }
            }
        },
        svcId: {
            dbType: "dbString",
            operate: "eq"
        }
    }
}