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
    @select="select"
    @select-all="selectAll"
    @selection-change="selectionChange"
    @cell-mouse-enter="cellMouseEnter"
    @cell-mouse-leave="cellMouseLeave"
    @cell-click="cellClick"
    @cell-dblclick="cellDblclick"
    @row-click="rowClick"
    @row-contextmenu="rowContextmenu"
    @row-dblclick="rowDblclick"
    @header-click="headerClick"
    @header-contextmenu="headerContextmenu"
    @sort-change="sortChange"
    @filter-change="filterChange"
    @current-change="currentChange"
    @header-dragend="headerDragend"
    @expand-change="expandChange"
  >
    <template v-for="(child,i) in conf.children">
      <hc-table-column-scope v-if="child.slot=='scope'" :key="conf.controlId+i" :conf="child"></hc-table-column-scope>
      <hc-table-column
        v-else-if="child.controlName=='HcTableColumn'"
        :key="conf.controlId+i"
        :conf="child"
      ></hc-table-column>
      <hc-table-column-radio
        v-else-if="child.controlName=='HcTableColumnRadio'"
        :key="conf.controlId+i"
        :conf="child"
      ></hc-table-column-radio>
      <hc-table-column-checkbox
        v-else-if="child.controlName=='HcTableColumnCheckbox'"
        :key="conf.controlId+i"
        :conf="child"
      ></hc-table-column-checkbox>
    </template>
  </el-table>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import events from "@/components/mixins/events";
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";

import HcTableColumn from "./Column";
import HcTableColumnRadio from "./Column/Radio";
import HcTableColumnCheckbox from "./Column/Checkbox";
import HcTableColumnScope from "./Column/Scope";

import { convertToTreeData, filterTreeData } from "@/funclib/DataTree.js";

export default {
  name: "hc-table",
  extends: HcCmpt,
  mixins: [events, autosize, datasource],
  components: {
    HcTableColumn,
    HcTableColumnRadio,
    HcTableColumnCheckbox,
    HcTableColumnScope
  },
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
    },
    select() {
      return this.on("select");
    },
    selectAll() {
      return this.on("selectAll");
    },
    selectionChange() {
      return this.on("selectionChange");
    },
    cellMouseEnter() {
      return this.on("cellMouseEnter");
    },
    cellMouseLeave() {
      return this.on("cellMouseLeave");
    },
    cellClick() {
      return this.on("cellClick");
    },
    cellDblclick() {
      return this.on("cellDblclick");
    },
    rowClick() {
      return this.on("rowClick");
    },
    rowContextmenu() {
      return this.on("rowContextmenu");
    },
    rowDblclick() {
      return this.on("rowDblclick");
    },
    headerClick() {
      return this.on("headerClick");
    },
    headerContextmenu() {
      return this.on("headerContextmenu");
    },
    sortChange() {
      return this.on("sortChange");
    },
    filterChange() {
      return this.on("filterChange");
    },
    currentChange() {
      return this.on("currentChange");
    },
    headerDragend() {
      return this.on("headerDragend");
    },
    expandChange() {
      return this.on("expandChange");
    }
  },
  data() {
    return {
      elEvents: [
        "select",
        "selectAll",
        "selectionChange",
        "cellMouseEnter",
        "cellMouseLeave",
        "cellClick",
        "cellDblclick",
        "rowClick",
        "rowContextmenu",
        "rowDblclick",
        "headerClick",
        "headerContextmenu",
        "sortChange",
        "filterChange",
        "currentChange",
        "headerDragend",
        "expandChange"
      ],
      filterConf: {}
    };
  },
  provide: function() {
    return { tableRows: () => this.datas, store: () => this.store };
  },
  methods: {
    elTable() {
      if (this.$children && this.$children.length > 0) {
        return this.$children[0];
      } else {
        console.error("找不到eltable实例");
      }
    },
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>