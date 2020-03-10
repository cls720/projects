<template>
  <el-table-column
    :label="label"
    :width="width"
    :min-width="minWidth"
    :sortable="sortable"
    :style="confStyle"
  >
    <el-checkbox slot="header" :checked="checkAll" @change="doCheckAllChange">{{label}}</el-checkbox>
    <template slot-scope="{row}">
      <el-checkbox v-if="isShow(row)" v-model="row[prop]">{{label}}</el-checkbox>
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
  },
 
};
</script>