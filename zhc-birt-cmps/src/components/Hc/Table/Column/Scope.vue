<template>
  <el-table-column
    :prop="prop"
    :label="expr(label)"
    :width="width"
    :type="conf.type"
    :min-width="conf.minWidth"
    :sortable="conf.sortable"
    :filters="conf.filters"
    :filter-multiple="conf.filterMultiple"
    :filter-method="conf.filterMethod && filterMethod"
    :style="confStyle"
  >
    <template slot-scope="scope">
      <birt-cell-children :children="conf.children" :scope="scope" />
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