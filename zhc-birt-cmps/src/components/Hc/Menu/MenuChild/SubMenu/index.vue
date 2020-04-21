<template>
  <el-submenu
    :index="conf.index"
    :popper-class="conf.popperClass"
    :show-timeout="conf.showTimeout	"
    :hide-timeout="conf.hideTimeout	"
    :disabled="conf.disabled"
    :popper-append-to-body="popperAppendToBody"
    :style="confStyle"
  >
    <template slot="title">
      <i v-if="conf.icon" :class="conf.icon"></i>
      {{expr(conf.title)}}
    </template>
    <template v-for="(child,i) in conf.children">
      <hc-menu-child :key="conf.controlId+i" :conf="child"></hc-menu-child>
    </template>
  </el-submenu>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";

export default {
  name: "hc-sub-menu",
  extends: HcCmpt,
  computed: {
    popperAppendToBody() {
      if (this.conf.popperAppendToBody == undefined) {
        return false;
      }
      return this.conf.popperAppendToBody;
    },
    confStyle() {
      return this.conf.style;
    }
  }
};
</script>