<template>
  <el-container class="zhc-birt-form-sheet" :style="confStyle">
    <el-main style="padding:0px 5px;">
      <birt-cell-children v-if="conf.children" :children="conf.children"/>
    </el-main>
  </el-container>
</template>

<script>
import autosize from "@/components/mixins/autosize";

export default {
  name: "birt-form-sheet",
  mixins: [autosize],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    width() {
      return this.conf.width;
    },
    height() {
      return this.conf.height;
    },
    confStyle() {
      return `${this.autoSizeStyle()};${this.conf.style};`;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>