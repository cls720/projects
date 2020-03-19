<template>
  <el-tab-pane
    :label="conf.label"
    :disabled="conf.disabled"
    :name="conf.name"
    :closable="conf.closable"
    :lazy="conf.lazy"
    :style="confStyle"
  >
    <birt-cell-children :children="conf.children" />
  </el-tab-pane>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";

export default {
  name: "hc-tab-pane",
  extends: HcCmpt,
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
      return `${this.conf.style};`;
    }
  }
};
</script>