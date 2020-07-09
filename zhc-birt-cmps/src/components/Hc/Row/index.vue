<template>
  <el-row
    :gutter="conf.gutter"
    :type="conf.type"
    :justify="conf.justify"
    :align="conf.align"
    :tag="conf.tag"
    :style="confStyle"
  >
    <template v-for="(child,i) in conf.children">
      <hc-col v-if="child.controlName=='HcCol'" :key="conf.controlId+i" :conf="child"></hc-col>
      <birt-cell-children v-else :key="conf.controlId+i" :children="[child]" />
    </template>
  </el-row>
</template>

<script>
import autosize from "@/components/mixins/autosize";

export default {
  name: "hc-row",
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  mixins: [autosize]
};
</script>