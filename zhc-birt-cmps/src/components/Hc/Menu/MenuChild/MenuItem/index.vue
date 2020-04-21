<template>
  <el-menu-item
    :index="conf.index"
    :route="conf.route"
    :disabled="conf.disabled"
    :style="confStyle"
  >
    <template slot="title">
      <i v-if="conf.icon" :class="conf.icon"></i>
      {{expr(conf.title)}}
    </template>
  </el-menu-item>
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