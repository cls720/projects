/**
 * 初始化事件混入
 */
import emitter from "@/utils/emitter";

export default {
  methods: {
    isPropEvent(eventName) {
      // 混入类重写elEvents:[],定义el事件列表
      return this.elEvents && this.elEvents.indexOf(eventName) >= 0;
    },
    emptyFn() {

    },
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
      let args = [...arguments]
      args.shift();
      let me = this;
      // 处理element组件事件
      if (this.isPropEvent && this.isPropEvent(eventName)) {
        let callElFunc = this.conf.events && this.conf.events[eventName];
        if (callElFunc) {
          let retuFunc = (...args) => { callElFunc.call(me, ...args) };
          return retuFunc;
        } else {
          return this.emptyFn;
        }
      }
      let eventId = this.getEventId && this.getEventId(eventName);
      if (eventId) {
        // 处理控件自定义事件
        emitter.on(eventId, (...args) => {
          callBackFunc.call(me, ...args);
        });
      } else {
        // 处理dom事件
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
