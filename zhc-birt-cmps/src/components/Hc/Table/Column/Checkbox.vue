<template>
  <el-table-column
    :label="label"
    :width="width"
    :min-width="conf.minWidth"
    :sortable="conf.sortable"
    :style="confStyle"
  >
    <el-checkbox
      slot="header"
      v-if="showCheckAll"
      :checked="checkAll"
      @change="doCheckAllChange"
    >{{label}}</el-checkbox>
    <template slot-scope="scope">
      <el-checkbox
        v-if="isShow(scope.row)"
        v-model="scope.row[prop]"
        :disabled="disabled(scope.row)"
        :border="conf.border"
        @change="setRowChange(scope)"
      >{{label}}</el-checkbox>
      <span v-else>—</span>
    </template>
  </el-table-column>
</template>

<script>
import column from "../mixins/column";
import checkheader from "../mixins/checkheader";

export default {
  name: "hc-table-column-checkbox",
  mixins: [column, checkheader],
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