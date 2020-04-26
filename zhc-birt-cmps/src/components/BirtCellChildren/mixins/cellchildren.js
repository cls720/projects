/**
 * BirtCellChildren 子组件加载混入
 */
import { execVueExpr } from "@/funclib/ExprUtil.js";

export default {
    props: {
        children: {
            type: Array,
            required: true,
            default: function () {
                return [];
            }
        },
        scope: Object
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        isRender(child, controlName) {
            if (child.vif) {
                return this.expr(child.vif);
            } else {
                return child.controlName === controlName;
            }
        },
        expr(value) {
            if (value && value.indexOf("}}") > 0 && this.scope) {
                return execVueExpr(value, this.scope);
            } else {
                return value;
            }
        },
        getParentDataSet(datasetId) {
            // if (!datasetId) console.error("未绑定数据集Id");
            if (!datasetId) return {};
            let parent = this.$parent;
            while (parent) {
                if (parent.getDataSetInstance) {
                    return parent.getDataSetInstance(datasetId);
                }
                parent = parent.$parent;
            }
        },
        getDataSetData(datasetId) {
            if (datasetId) {
                let ds = this.getParentDataSet(datasetId);
                return ds.getData() || [];
            } else {
                return [];
            }
        }
    }
}