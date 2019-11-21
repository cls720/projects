<template>
  <div :id="controlId" :class="className" :style="textStyle">
    {{title}}
    <slot></slot>
  </div>
</template>

<script>
import Bus from "@/utils/bus";

export default {
  props: {
    conf: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: Object,
      default() {
        return {};
      }
    },
    currecord: {
      type: Object,
      default() {
        return {};
      }
    },
    datasetDatas: {
      type: Array,
      default: function() {
        return [];
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
    this.initDataSetEvents();
  },
  methods: {
    initDataSetEvents() {
      let me = this;
      Bus.$on("curRecordChange", recd => {
        me.title = this.getTitle(recd);
      });
    },
    // 获取标题值
    getTitle(recd) {
      debugger;
      if (typeof this.conf.title === "function") {
        return this.conf.title.call(this, recd);
      } else {
        return this.conf.title;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
