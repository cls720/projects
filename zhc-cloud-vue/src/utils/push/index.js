
import queryParam from "@/utils/query";
const PUSHKEY = "__push"
export default {
    methods:{
        buildPushData(param, model) {
            let pushParam = {}
            pushParam[PUSHKEY] = param
            if (param.className != "Params" && model) {
                let paramIns = new queryParam.Param();
                paramIns.createWhereByModel(param, model); // marketModel
                pushParam[PUSHKEY] = paramIns
            }
            return pushParam
        },
        getPushData(){
            return  this.$route.params[PUSHKEY]
        },
        
        push(name, param) {
    
            let pushParam = this.buildPushData(param)
            this.$router.push({
                name,
                params: pushParam
            })
        }
    }
    
}