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
    ref="eltable"
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
    // 返回标准树型数据
    treeData() {
      if (this.idField && this.parentIdField) {
        return this.getConvertTreeData(this.datas);
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
    getConvertTreeData(datas) {
      let cloneDatas = JSON.parse(JSON.stringify(datas));
      let treeData = convertToTreeData(cloneDatas, {
        id: this.idField,
        parentId: this.parentIdField,
        rootValue: this.rootValue
      });
      return treeData;
    },
    /**
     *  执行表格过滤
     *  keyword 过滤关键字
     *  column
     */
    filter(filterMehtod) {
      debugger;
      let filteredData = this.$refs.eltable.store._data.states.filteredData;
      let cloneDatas = JSON.parse(JSON.stringify(filteredData));

      treeDeepFilter(cloneDatas, filterMehtod);

      function treeDeepFilter(recds, filterMehtod) {
        debugger;
        let childCount = 0;
        for (var i = recds.length - 1; i >= 0; i--) {
          let recd = recds[i];
          let rest;
          if (recd.children && recd.children.length > 0) {
            rest = treeDeepFilter(recd.children, filterMehtod);
          } else {
            rest = filterMehtod.call(this, recd);
          }
          if (rest) {
            childCount++;
          } else {
            recds.splice(i, 1);
          }
        }
        return childCount > 0;
      }
      debugger
      // filteredData.splice(0, filteredData.length, cloneDatas);
    },
    onFilterChange(filterObj) {
      debugger;
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