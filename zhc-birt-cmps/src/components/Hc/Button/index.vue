<template>
  <el-button
    :size="size"
    :type="type"
    :plain="plain"
    :round="round"
    :circle="circle"
    :loading="loading"
    :disabled="disabled"
    :icon="icon"
    :autofocus="autofocus"
    :native-type="nativeType"
    :style="confStyle"
  >{{title}}</el-button>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import events from "@/components/mixins/events";

export default {
  name: "hc-button",
  mixins: [events],
  extends: HcCmpt,
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    title() {
      return this.conf.title || "";
    },
    size() {
      return this.conf.size;
    },
    type() {
      return this.conf.type;
    },
    plain() {
      return this.conf.plain;
    },
    round() {
      return this.conf.round;
    },
    circle() {
      return this.conf.circle;
    },
    loading() {
      return this.conf.loading;
    },
    disabled() {
      return this.conf.disabled;
    },
    icon() {
      return this.conf.icon;
    },
    autofocus() {
      return this.conf.autofocus;
    },
    nativeType() {
      return this.conf.nativeType;
    },
    confStyle() {
      debugger;
      return this.conf.style;
    }
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 注册控件事件
     * eventName 事件名
     * callBackFunc 回调函数
     * params 附加参数
     */
    on(eventName, callBackFunc) {
      let me = this;
      this.$el.addEventListener(eventName, () => {
        callBackFunc.call(me);
      });
    }
  }
};
</script>