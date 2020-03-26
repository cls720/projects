<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :width="width"
    :type="conf.type"
    :min-width="conf.minWidth"
    :fixed="conf.fixed"
    :sortable="conf.sortable"
    :filters="conf.filters"
    :filter-multiple="conf.filterMultiple"
    :filter-method="conf.filterMethod && filterMethod"
    :style="confStyle"
  >
    <template slot-scope="rowscope">
      <birt-cell-children :children="conf.children" :scope="rowscope" />
    </template>
  </el-table-column>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import column from "../mixins/column";

export default {
  name: "hc-table-column-scope",
  mixins: [column],
  extends: HcCmpt,
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>