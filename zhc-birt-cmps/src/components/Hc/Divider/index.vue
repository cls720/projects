<template>
  <el-divider
    :direction="conf.direction"
    :content-position="conf.contentPosition"
    :style="confStyle"
  >{{title}}</el-divider>
</template>

<script>
export default {
  name: "hc-divider",
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
    confStyle() {
      return this.conf.style;
    }
  }
};
</script>