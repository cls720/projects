<template>
  <div :id="controlId" :class="className" :style="textStyle">
    {{title}}
    <slot></slot>
  </div>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import emitter from "@/utils/emitter";
import events from "@/components/mixins/events";

export default {
  name: "hc-text-label",
  extends: HcCmpt,
  mixins: [events],
  inject: ["dataset"],
  props: {  
    bindDataset: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  computed: {
    controlId() {
      return this.conf.controlId;
    },
    className() {
      return this.conf.className || "";
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "30px";
    },
    textStyle() {
      return `width:${this.width};height:${this.height};line-height:${this.height};${this.conf.style}`;
    }
  },
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    if (this.bindDataset && this.bindDataset.controlId) {
      this.initDataSetEvents();
    } else {
      this.title = this.getTitle();
    }
  },
  methods: {
    initDataSetEvents() {
      let me = this;
      emitter.on("curRecordChange" + this.bindDataset.controlId, recd => {
        me.title = this.getTitle(recd);
      });
    },
    // 获取标题值
    getTitle(recd) {
      if (typeof this.conf.title === "function") {
        return this.conf.title.call(this, recd);
      } else {
        return this.conf.title;
      }
    },
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

<style lang="scss" scoped>
</style>
