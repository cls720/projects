/**
 * 初始化事件混入
 */
import emitter from "@/utils/emitter";

export default {
  methods: {
    // 触发事件
    emit(eventName) {
      debugger
      let args = [...arguments]
      args.shift();
      emitter.emit(eventName, ...args)
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
      let args = [...arguments]
      args.shift();
      let me = this;
      let eventId = this.getEventId && this.getEventId(eventName);
      if (eventId) {
        emitter.on(eventId, (...args) => {
          callBackFunc.call(me, ...args);
        });
      } else {
        this.$el.addEventListener(eventName, (...args) => {
          callBackFunc.call(me, ...args);
        });
      }
    },
    // 初始化事件events
    initEvents() {
      if (this.conf.events) {
        for (var eventName in this.conf.events) {
          this.on(eventName, this.conf.events[eventName]);
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
            if (refCompt.length > 0) {
              return refCompt[0]
            } else {
              return refCompt
            }
          }
        }
        parent = parent.$parent;
      }
    },
    // 调用图表渲染完函数配置
    callComptMounted() {
      if (this.conf.mounted) {
        this.conf.mounted.call(this);
      }
    },
  },
  mounted() {
    this.initEvents();
    this.callComptMounted();
  }
}
