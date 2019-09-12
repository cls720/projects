<template>
  <div class="zhc-birt-page">
    <birt-tool-bar />
    <div id="print_div">
      <template v-for="(val,key) in layout">
        <row-birt v-if="key === 'rows'" v-for="(row,i) in val" v-bind:key="'r'+i" :row="row" />
        <col-birt v-if="key === 'cols'" v-for="(col,j) in val" v-bind:key="'c'+j" :col="col" />
        <table-birt v-if="key === 'tables'" v-for="(tb,k) in val" v-bind:key="'t'+k" :tb="tb" />
      </template>
    </div>
  </div>
</template>

<script>
import BirtToolBar from "@/components/BirtToolBar";
import RowBirt from "./layout/RowBirt";
import ColBirt from "./layout/ColBirt";
import TableBirt from "./layout/TableBirt";

export default {
  name: "BirtPage",
  components: { BirtToolBar, RowBirt, ColBirt, TableBirt },
  props: {
    layout: {
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
