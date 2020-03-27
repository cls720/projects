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
    computed: {
        datas() {
            let retuDatas;
            if (this.datasetDatas.length > 0) {
                retuDatas = this.datasetDatas;
            } else {
                retuDatas = this.conf.datas || [];
            }
            return retuDatas;
        },
        store() {
            if (this.conf.dataset) {
                let wb = this.getWorkBook();
                return wb && wb.dataset[this.conf.dataset];
            }
        }
    },
    methods: {

    },
    mounted() {
    }
}
