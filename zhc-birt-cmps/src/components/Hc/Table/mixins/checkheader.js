/**
 * 复选框全选操作列混入
 */
export default {
    computed: {
        showCheckAll() {
            if (this.conf.showCheckAll == undefined) {
                return true;
            } else {
                return this.conf.showCheckAll;
            }
        }
    },
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
            this.setRowCheckAll(this.tableRows(), val);
        },
        /**
         * 设置所有行选中值
         */
        setRowCheckAll(rows, checked) {
            debugger
            let me = this;
            let store = this.store();
            rows.forEach(row => {
                row[me.prop] = checked;
                if (store && store.edit) {
                    store.edit(row, me.prop)
                }
                if (row.children) {
                    me.setRowCheckAll(row.children, checked);
                }
            });
        },
        setRowChange(scope) {
            debugger;
            let store = scope._self.store;
            if (store && store.edit) {
                store.edit(scope.row, this.prop)
            } else {
                scope._self.datas[scope.$index][this.prop] = scope.row[this.prop];
            }
        }
    }
}
