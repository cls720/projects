/**
 * 组件插槽混入
 */
export default {
    data() {
        return {
            //引用混入组件重写此数据项配置
            slots: []
        }
    },
    methods: {
        // 获取引用组件对象，从当前及父对象爬
        slotChildren(slotId) {
            let rest = [];
            (this.conf.children || []).forEach(child => {
                if (child.slot == slotId) {
                    rest.push(child);
                }
            });
            return rest;
        }
    }
}
