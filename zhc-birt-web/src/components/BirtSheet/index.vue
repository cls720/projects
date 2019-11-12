<template>
  <div class="zhc-birt-sheet">
    <div id="print_div" :style="layout.style">
      <template v-for="(val,key) in layout">
        <row-birt v-if="key === 'rows'" v-for="(row,i) in val" v-bind:key="'r'+i" :row="row" />
        <col-birt v-if="key === 'cols'" v-for="(col,j) in val" v-bind:key="'c'+j" :col="col" />
        <table-birt v-if="key === 'tables'" v-for="(tb,k) in val" v-bind:key="'t'+k" :tb="tb" />
        <form-birt v-if="key === 'forms'" v-for="(frm,k) in val" v-bind:key="'frm'+k" :frm="frm" />
      </template>
    </div>
  </div>
</template>

<script>
import RowBirt from "./layout/RowBirt";
import ColBirt from "./layout/ColBirt";
import TableBirt from "./layout/TableBirt";
import FormBirt from "./layout/FormBirt";

export default {
  name: "BirtSheet",
  components: { RowBirt, ColBirt, TableBirt, FormBirt },
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
  watch: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.zhc-birt-sheet {
  overflow: auto;
}
</style>
