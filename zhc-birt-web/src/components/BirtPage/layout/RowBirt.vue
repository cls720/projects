<template>
  <el-row>
    <template v-for="(val,key) in row">
      <col-birt v-if="key === 'cols'" v-for="(col,j) in val" v-bind:key="'c'+j" :col="col" />
      <table-birt v-if="key === 'tables'" v-for="(tb,k) in val" v-bind:key="'t'+k" :tb="tb" />
    </template>
  </el-row>
</template>

<script>
import ColBirt from "./ColBirt";
import TableBirt from "./TableBirt";

export default {
  name: "RowBirt",
  components: { ColBirt, TableBirt },
  props: {
    row: {
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