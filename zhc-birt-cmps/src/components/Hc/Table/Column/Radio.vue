<template>
  <el-table-column
    :label="label"
    :width="width"
    :min-width="conf.minWidth"
    :sortable="conf.sortable"
    :style="confStyle"
  >
    <el-checkbox
      v-if="showCheckAll"
      slot="header"
      :checked="checkAll"
      @change="doCheckAllChange"
    >{{label}}</el-checkbox>
    <template slot-scope="scope">
      <div v-if="isArray(scope.row)">
        <el-radio
          v-for="(da,i) in getBindArray(scope.row)"
          :key="da.value + i"
          v-model="scope.row[prop]"
          :label="da.value"
          :disabled="disabled(scope.row)"
          @change="setRowChange(scope)"
        >{{da.name}}</el-radio>
      </div>
      <el-radio
        v-else-if="isShow(scope.row)"
        v-model="scope.row[prop]"
        :label="getBindVar(scope.row,radioValue)"
        :disabled="disabled(scope.row)"
        @change="setRowChange(scope)"
      >{{label}}</el-radio>
      <span v-else>—</span>
    </template>
  </el-table-column>
</template>

<script>
import column from "../mixins/column";
import checkheader from "../mixins/checkheader";

export default {
  name: "hc-table-column-radio",
  mixins: [column, checkheader],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    radioValue() {
      return this.conf.radioValue || "";
    }
  },
  methods: {
    // 判断同列是否数组选项
    isArray(row) {
      return Array.isArray(this.getBindVar(row, this.radioValue));
    },
    // 根据表达式获取绑定变量, a.b.c
    getBindVar(row, key) {
      let field = key.split(".");
      let retuModel;
      field.forEach(key => {
        if (retuModel) {
          retuModel = retuModel[key];
        } else {
          retuModel = row[key];
        }
      });
      return retuModel;
    },
    // 获取绑定数组变量
    getBindArray(row) {
      return this.getBindVar(row, this.radioValue);
    },
    /**
     * 设置所有行选中值
     */
    setRowCheckAll(rows, checked) {
      rows.forEach(row => {
        let rv = this.getBindVar(row, this.radioValue);
        if (checked) {
          row[this.prop] = rv;
        } else {
          debugger;
          if (row[this.prop] == rv) {
            row[this.prop] = "";
          }
        }
        //row[this.prop] = checked ? this.getBindVar(row, this.radioValue) : "";
        if (row.children) {
          this.setRowCheckAll(row.children, checked);
        }
      });
    }
  }
};
</script>