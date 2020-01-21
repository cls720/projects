/**
 * 数据源组件混入,带数据集组件
 */
export default {
    props: {
        datasetDatas: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    inject: ["datasource", "dataset"],
    computed: {

    },
    methods: {

    },
    mounted() {
    }
}
