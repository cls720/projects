<template>
  <el-submenu
    :index="conf.index"
    :popper-class="conf.popperClass"
    :show-timeout="conf.showTimeout	"
    :hide-timeout="conf.hideTimeout	"
    :disabled="conf.disabled"
    :popper-append-to-body="conf.popperAppendToBody"
    :style="confStyle"
  >
    <template slot="title">{{expr(conf.title)}}</template>
    <template v-for="(child,i) in conf.children">
      <hc-menu-child v-if="isMenuChild(child.controlName)" :key="conf.controlId+i" :conf="child"></hc-menu-child>
    </template>
  </el-submenu>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";

export default {
  name: "hc-sub-menu",
  extends: HcCmpt,
  computed: {
    confStyle() {
      return this.conf.style;
    }
  },
  methods: {
    isMenuChild(controlName) {
      return (
        ["HcSubMenu", "HcMenuItem", "HcMenuItemGroup"].indexOf(controlName) !=
        -1
      );
    }
  }
};
</script>