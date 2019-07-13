export default {
    modelFile: "appauth",
    fields: {
        appId: {
            desc: "ID",
            dbType: "dbString",
            operate: "eq",
            default: {
                //rule: 'first', //prior
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