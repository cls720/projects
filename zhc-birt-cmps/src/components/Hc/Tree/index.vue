<template>
  <el-tree
    :data="datas"
    :props="props"
    :default-expand-all="defaultExpandAll"
    :filter-node-method="filterNodeMethod"
    :show-checkbox="showCheckbox"
    :load="load"
    :lazy="lazy"
    @node-click="nodeClick"
    @check-change="checkChange"
    ref="eltree"
  ></el-tree>
</template>

<script>
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";

export default {
  name: "hc-tree",
  mixins: [autosize, datasource],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    props() {
      return this.conf.props;
    },
    defaultExpandAll() {
      return this.conf.defaultExpandAll;
    },
    showCheckbox() {
      return this.conf.showCheckbox;
    },
    filterNodeMethod() {
      return this.conf.filterNodeMethod;
    },
    load() {
      return this.conf.load;
    },
    lazy() {
      return this.conf.lazy;
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "100%";
    },
    confStyle() {
      return `${this.autoSizeStyle()};${this.conf.style};`;
    },
    nodeClick() {
      return (this.conf.events && this.conf.events.nodeClick) || (() => {});
    },
    checkChange() {
      return (this.conf.events && this.conf.events.checkChange) || (() => {});
    }
  },
  methods: {
    filter(filterKey) {
      debugger
      this.$refs.eltree.filter(filterKey);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
