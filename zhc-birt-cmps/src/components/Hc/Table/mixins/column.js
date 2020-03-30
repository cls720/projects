/**
 * 表格列混入,定义列共有属性方法
 */
export default {
    inject: ["tableRows", "store"],
    props: {
    },
    computed: {
        prop() {
            return this.conf.prop || "";
        },
        label() {
            return this.conf.label;
        },
        width() {
            return this.conf.width;
        },
        confStyle() {
            return this.conf.style;
        }
    },
    methods: {

    },
    mounted() {
    }
}
