
export default {
  methods: {
    getWorkBook() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === 'birt-work-book') {
          return parent;
        } else {
          parent = parent.$parent;
        }
      }
    },
    // 获取引用组件对象，从当前及父对象爬
    getRefCompt(refId) {
      let wb = this.getWorkBook();
      if (wb && wb.cmps[refId]) {
        return wb.cmps[refId];
      }
      let parent = this;
      while (parent) {
        for (var key in parent.$refs) {
          if (key === refId) {
            let refCompt = parent.$refs[key];
            return (refCompt.length > 0) && refCompt[0];
          }
        }
        parent = parent.$parent;
      }
    }
  },
  mounted() {
    let wb = this.getWorkBook();
    if (wb) {
      wb.addRefCmpt(this);
    }
  }
}
