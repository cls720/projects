<template>
  <el-table
    :data="treeData"
    :row-key="rowKey"
    :default-expand-all="conf.defaultExpandAll"
    :style="confStyle"
  >
    <hc-table-column v-for="child in conf.children" :key="child.controlId" :conf="child"></hc-table-column>
  </el-table>
</template>

<script>
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";
import HcTableColumn from "./Column";

import { convertToTreeData } from "@/funclib/DataTree.js";

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
    // 返回标准树型数据
    treeData() {
      if (this.idField && this.parentIdField) {
        return this.getConvertTreeData();
      } else {
        return this.datas;
      }
    },
    idField() {
      return this.conf.idField;
    },
    parentIdField() {
      return this.conf.parentIdField;
    },
    checkField() {
      return this.conf.checkField || "_checked";
    },
    rootValue() {
      return this.conf.rootValue || -1;
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
  provide: function() {
    return { tableRows: () => this.datas };
  },
  mounted() {},
  methods: {
    // 根据配置获取转换后的树型数据
    getConvertTreeData() {
      let cloneDatas = JSON.parse(JSON.stringify(this.datas));
      let treeData = convertToTreeData(cloneDatas, {
        id: this.idField,
        parentId: this.parentIdField,
        rootValue: this.rootValue
      });
      return treeData;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>