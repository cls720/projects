/**
 * 初始化事件混入
 */
import Bus from "@/utils/bus";

export default {
  computed: {
    comptEvents() {
      return this.conf.events;
    }
  },
  methods: {
    // 初始化事件events
    initEvents() {
      if (this.comptEvents) {
        for (var eventName in this.comptEvents) {
          this.on(eventName, this.comptEvents[eventName]);
        }
      }
    },
    /**
    * 注册控件事件
    * eventName 事件名
    * callBackFunc 回调函数
    * params 附加参数
    */
    on(eventName, callBackFunc) {      
      if (this.isPropEvent && this.isPropEvent(eventName)) {        
        return
      }
      let me = this;
      let eventId = this.getEventId && this.getEventId(eventName);
      if (eventId) {
        Bus.on(eventId, (p1, p2, p3, p4, p5) => {
          debugger
          callBackFunc.call(me, p1, p2, p3, p4, p5);
        });
      } else {
        this.$el.addEventListener(eventName, () => {
          callBackFunc.call(me, p1, p2, p3, p4, p5);
        });
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
