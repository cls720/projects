<template>
  <el-menu-item-group :title="conf.title" :style="confStyle"></el-menu-item-group>
</template>

<script>
export default {
  name: "hc-menu-item-group",
  computed: {
    confStyle() {
      return this.conf.style;
    }
  }
};
</script>