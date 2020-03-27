<template>
  <el-table
    :data="treeData"
    :height="autoHeight()"
    :max-height="conf.maxHeight"
    :stripe="conf.stripe"
    :border="conf.border"
    :size="conf.size"
    :fit="conf.fit"
    :show-header="conf.showHeader"
    :highlight-current-row="conf.highlightCurrentRow"
    :current-row-key="conf.currentRowKey"
    :row-class-name="conf.rowClassName"
    :row-style="conf.rowStyle"
    :cell-class-name="conf.cellClassName"
    :cell-style="conf.cellStyle"
    :header-row-class-name="conf.headerRowClassName"
    :header-row-style="conf.headerRowStyle"
    :header-cell-class-name="conf.headerCellClassName"
    :header-cell-style="conf.headerCellStyle"
    :row-key="conf.rowKey"
    :empty-text="conf.emptyText"
    :default-expand-all="conf.defaultExpandAll"
    :expand-row-keys="conf.expandRowKeys"
    :default-sort="conf.defaultSort"
    :tooltip-effect="conf.tooltipEffect"
    :show-summary="conf.showSummary"
    :sum-text="conf.sumText"
    :summary-method="conf.summaryMethod"
    :span-method="conf.spanMethod"
    :select-on-indeterminate="conf.selectOnIndeterminate"
    :indent="conf.indent"
    :lazy="conf.lazy"
    :load="conf.load"
    :tree-props="conf.treeProps"
    :style="confStyle"
    @filter-change="onFilterChange"
  >
    <template v-for="(child,i) in conf.children">
      <hc-table-column-scope v-if="child.slot=='scope'" :key="conf.controlId+i" :conf="child"></hc-table-column-scope>
      <hc-table-column v-else :key="conf.controlId+i" :conf="child"></hc-table-column>
    </template>
  </el-table>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";

import HcTableColumn from "./Column";
import HcTableColumnScope from "./Column/Scope";

import { convertToTreeData, filterTreeData } from "@/funclib/DataTree.js";

export default {
  name: "hc-table",
  extends: HcCmpt,
  mixins: [autosize, datasource],
  components: { HcTableColumn, HcTableColumnScope },
  computed: {
    // 返回标准树型数据
    treeData() {
      let retuData;
      if (this.idField && this.parentIdField) {
        retuData = this.getConvertTreeData(this.datas);
      } else {
        retuData = this.datas;
      }
      return filterTreeData(retuData, this.doFilterConf);
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
    return {
      filterConf: {}
    };
  },
  provide: function() {
    return { tableRows: () => this.datas};
  },
  mounted() {},
  methods: {
    // 根据配置获取转换后的树型数据
    getConvertTreeData(datas) {
      let cloneDatas = JSON.parse(JSON.stringify(datas));
      let treeData = convertToTreeData(cloneDatas, {
        id: this.idField,
        parentId: this.parentIdField,
        rootValue: this.rootValue
      });
      return treeData;
    },
    // 应用各列过滤配置
    doFilterConf(data) {
      let isOk = true;
      for (var key in this.filterConf) {
        let filterFunc = this.filterConf[key];
        isOk = filterFunc.call(this, data);
        if (!isOk) return false;
      }
      return true;
    },
    onFilterChange(filterObj) {
      let filterChangeFunc = this.conf.events && this.conf.events.filterChange;
      if (filterChangeFunc) {
        filterChangeFunc.call(this, filterObj);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>