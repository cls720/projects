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
        disabled(row) {
            if (typeof this.conf.disabled === "function") {
                return this.conf.disabled.call(this, row);
            }
            return this.conf.disabled
        },
        doCheckAllChange(val) {
            debugger;
            this.setRowCheckAll(this.tableRows(), val);
        },
        /**
         * 设置所有行选中值
         */
        setRowCheckAll(rows, checked) {
            let me = this;
            rows.forEach(row => {
                row[me.prop] = checked;
                if (row.children) {
                    me.setRowCheckAll(row.children, checked);
                }
            });
        },
        setRowChange(scope) {
            debugger;
            scope._self.datas[scope.$index][this.prop] = scope.row[this.prop];
        }
    }
}
