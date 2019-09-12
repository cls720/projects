<template >
  <el-col :span="col.span" :style="{width:col.width+'px'}">
    <template v-for="(val,key) in col">
      <row-birt v-if="key === 'rows'" v-for="(row,i) in val" v-bind:key="'r'+i" :row="row" />
      <table-birt v-if="key === 'tables'" v-for="(tb,k) in val" v-bind:key="'t'+k" :tb="tb" />
    </template>
  </el-col>
</template>

<script>
import RowBirt from "./RowBirt";
import TableBirt from "./TableBirt";

export default {
  name: "ColBirt",
  components: { RowBirt, TableBirt },
  props: {
    col: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>