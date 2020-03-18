<template>
  <div :class="className" :style="imageStyle">
    <template v-for="child in conf.children">
      <hc-text-label
        :ref="child.controlId"
        :key="child.controlId"
        v-if="child.controlName=='HcTextLabel'"
        :conf="child"
        :bind-dataset="getParentDataSet(child.dataset)"
      />
    </template>
    {{title}}
    <slot></slot>
  </div>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import events from "@/components/mixins/events";

export default {
  name: "hc-image-title",
  extends:HcCmpt,
  mixins: [events],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    className() {
      return this.conf.className || "hc-image-title";
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "60px";
    },
    imageUrl() {
      return this.conf.imageUrl || "";
    },
    title() {
      return this.conf.title || "";
    },
    imageStyle() {
      let imgcss = "";
      if (this.comptEvents && this.comptEvents.click) {
        imgcss = "cursor: pointer;";
      }
      imgcss += `width:${this.width};height:${this.height};backgroundImage:${this.imageUrl};line-height:${this.height};${this.conf.style}`;
      return imgcss;
    }
  },
  data() {
    return {};
  },
  methods: {
    getParentDataSet(datasetId) {
      if (!datasetId) return {};
      let parent = this.$parent;
      while (parent) {
        if (parent.getDataSetInstance) {
          return parent.getDataSetInstance(datasetId);
        }
        parent = parent.$parent;
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
.hc-image-title {
  font-size: 16px;
  color: #ffffff;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
