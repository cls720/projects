<template>
  <el-col
    :span="conf.span"
    :offset="conf.offset"
    :push="conf.push"
    :pull="conf.pull"
    :xs="conf.xs"
    :sm="conf.sm"
    :md="conf.md"
    :lg="conf.lg"
    :xl="conf.xl"
    :tag="conf.tag"
    :style="confStyle"
  >
    <template v-for="(child,i) in conf.children">
      <hc-row v-if="child.controlName=='HcRow'" :key="conf.controlId+i" :conf="child"></hc-row>
      <birt-cell-children v-else :key="conf.controlId+i" :children="[child]" />
    </template>
  </el-col>
</template>

<script>
import autosize from "@/components/mixins/autosize";

export default {
  name: "hc-col",
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