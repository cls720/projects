<template>
  <el-menu-item-group :title="conf.title" :style="confStyle">
    <template v-for="(child,i) in conf.children">
      <hc-menu-child :key="conf.controlId+i" :conf="child"></hc-menu-child>
    </template>
  </el-menu-item-group>
</template>

<script>
export default {
  name: "hc-menu-item-group",
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    confStyle() {
      return this.conf.style;
    }
  }
};
</script>