/**
 * Fuse本地过滤混入
 */
import Bus from "@/utils/bus";
import Fuse from 'fuse.js'

export default {
    props: {
        // 绑定数据集实例
        bindDataset: {
            type: Object,
            default: function () {
                return {};
            }
        },
        // 绑定过滤数据包
        filterDatas: {
            type: Array,
            default: function () {
                return []
            }
        },
    },
    computed: {
        shouldSort() {
            if (this.conf.shouldSort === undefined)
                return true;
            else
                return this.conf.shouldSort
        },
        fuseDefaultOption() {
            return {
                shouldSort: this.shouldSort,
                threshold: this.threshold || 0.4,
                location: this.location || 0,
                distance: this.distance || 100,
                maxPatternLength: this.maxPatternLength || 32,
                minMatchCharLength: this.minMatchCharLength || 2,
                keys: this.conf.keys || []
            }
        },
        datas() {
            return this.filterDatas;
        }
    },
    watch: {
        // 监听更改过滤源数据
        datas() {
            this.initFuse(this.datas);
        }
    },
    data() {
        return {
            fuse: function () {
                return {};
            }
        }
    },
    mounted() {
        this.initFilterDatas();
    },
    methods: {
        /**
         * 初始化过滤数据与过滤选项
         * @param {*} datas [{},{}] 
         */
        initFuse(datas) {
            this.fuse = new Fuse(datas, this.fuseDefaultOption);
        },
        /**
         * 初始化过滤源数据
         */
        initFilterDatas() {
            if (this.bindDataset && this.bindDataset.controlId) {
                let me = this;
                Bus.on("loadData" + this.bindDataset.controlId, datas => {
                    me.initFuse(datas)
                });
            } else if (this.filterDatas) {
                this.initFuse(this.filterDatas);
            }
        },
        /**
         * 获取注册事件ID
         * @param {*} eventId 
         */
        getEventId(eventId) {
            if (eventId === "filterChange") {
                return "filterChange" + (this.bindDataset.controlId || this.controlId)
            }
        },
        /**
        * 执行关键字过滤
        */
        doFilter() {
            debugger
            let recds = [];
            if (this.filterKey && this.filterKey !== "") {
                if (this.fuse) {
                    recds = this.fuse.search(this.filterKey);
                }
            } else {
                recds = this.filterDatas;
            }

            let eventId = this.getEventId("filterChange");
            Bus.emit(eventId, this.filterKey, recds);
        },
    }
}
