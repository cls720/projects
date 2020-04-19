<template>
  <el-menu-item
    :index="conf.index"
    :route="conf.route"
    :disabled="conf.disabled"
    :style="confStyle"
  >{{expr(conf.title)}}</el-menu-item>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";

export default {
  name: "hc-menu-item",
  extends: HcCmpt,
  computed: {
    confStyle() {
      return this.conf.style;
    }
  }
};
</script>