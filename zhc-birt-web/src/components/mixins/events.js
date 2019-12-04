/**
 * 初始化事件混入
 */

export default {
  computed: {
    comptEvents() {
      return this.conf.events;
    }
  },
  methods: {
    // 初始化事件
    initEvents() {
      if (this.comptEvents) {        
        for (var eventName in this.comptEvents) {
          this.on(eventName, this.comptEvents[eventName]);
        }
      }
    },
    // 获取引用组件对象，从当前及父对象爬
    getRefCompt(refId) {
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
    this.initEvents();
  }
}
