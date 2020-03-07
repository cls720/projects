<template>
  <el-tree
    :data="datas"
    :props="props"
    :show-checkbox="showCheckbox"
    :load="load"
    :lazy="lazy"
    @node-click="nodeClick"
    @check-change="checkChange"
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
    showCheckbox() {
      return this.conf.showCheckbox;
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
      return this.conf.events && this.conf.events.nodeClick;
    },
    checkChange() {
      return this.conf.events && this.conf.events.checkChange;
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
