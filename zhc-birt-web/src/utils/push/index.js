
//import queryParam from "@/utils/query";



export default class {
    constructor({ targetDs, type }) {
        this.type = type || 'view';
        this.targetDs = targetDs || '';
    }
    setPushToView(param) {
        let viewPs = {}
        if (param.className == 'Params') {
            viewPs = param.toJSON();
            this.viewPs = viewPs;
        } else {
            this.viewData = param;
        }
        this.type = 'view';
    }
    getPuhsToView() {
        let data = {
            "type": 'view',
            "target": {
                "storeUrl": this.targetDs,
                "ps": this.viewPs
            }
        }
        if (this.viewPs) {
            data.target.ps = this.viewPs
        } else if (this.viewData) {
            data.target.data = this.viewData;
        }
        return data;
    }
    getPushData() {
        if (this.type == 'view')
            return this.getPuhsToView();
    }
}


export const PushDataParser = class {
    constructor(pushData) {
        this.className = 'PushDataParser'
        this.type = pushData.type
        this.target = pushData.target
    }
    getTargetDs() {
        return this.target.storeUrl;
    }
}
// export default {
//     methods: {
//         buildPushData(param, model) {
//             let pushParam = {}
//             pushParam[PUSHKEY] = param
//             if (param.className != "Params" && model) {
//                 let paramIns = new queryParam.Param();
//                 paramIns.createWhereByModel(param, model); // marketModel
//                 pushParam[PUSHKEY] = paramIns
//             }
//             return pushParam
//         },
//         getPushData() {
//             console.log("base的getPushData")
//             return this.$route.params[PUSHKEY]
//         },

//         push(name, param) {

//             let pushParam = this.buildPushData(param)
//             this.$router.push({
//                 name,
//                 params: pushParam
//             })
//         }
//     }

// }