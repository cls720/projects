/**
 * 复选框全选操作列混入
 */
export default {
    inject: ["tableRows"],
    data() {
        return {
            checkAll: false
        };
    },
    methods: {
        // 是否显示
        isShow(row) {
            if (this.conf.isShow === undefined) {
                return true;
            } else if (typeof this.conf.isShow === "function") {
                return this.conf.isShow.call(this, row);
            }
            return this.conf.isShow;
        },
        doCheckAllChange(val) {
            this.setRowCheckAll(this.tableRows, val);
        },
        /**
         * 设置所有行选中值
         */
        setRowCheckAll(rows, checked) {
            rows.forEach(row => {
                row[this.prop] = checked;
                if (row.children) {
                    this.setRowCheckAll(row.children, checked);
                }
            });
        }
    }
}
