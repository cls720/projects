<template>
  <div :class="className" :style="textStyle">
    {{title}}
    <slot></slot>
  </div>
</template>

<script>
export default {
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
      return this.conf.className || "";
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "30px";
    },
    title() {
      return this.conf.title || "";
    },
    textStyle() {
      return `width:${this.width};height:${this.height};line-height:${this.height};${this.conf.style}`;
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
