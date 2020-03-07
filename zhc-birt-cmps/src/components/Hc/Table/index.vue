<template>
  <el-table :data="datas" :row-key="rowKey" :style="confStyle">
    <hc-table-column v-for="child in conf.children" :key="child.controlId" :conf="child"></hc-table-column>
  </el-table>
</template>

<script>
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";
import HcTableColumn from "./Column";

export default {
  name: "hc-table",
  mixins: [autosize, datasource],
  components: { HcTableColumn },
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    rowKey() {
      return this.conf.rowKey;
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height;
    },
    confStyle() {
      return `${this.autoSizeStyle()};${this.conf.style};`;
    }
  },
  data() {
    return {};
  },
  provide() {
    return { tableRows: this.datas };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>