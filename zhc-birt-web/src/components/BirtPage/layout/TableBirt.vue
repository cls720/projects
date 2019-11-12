<template>
  <div>
    <div v-if="tb.rowSplit==='pageSplit'" style="page-break-after:always;" />
    <table :style="tb.style">
      <thead>
        <tr>
          <th v-for="th in tb.cols" :style="{width:th.colWidth+'px'}"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tr in tb.rows" :style="{height:tr.rowHeight+'px'}">
          <td v-for="td in tr.tds" :style="getTdStyle(td)" :rowspan="td.rowspan" :colspan="td.colspan">
            <span v-if="!td.viewStyle">{{td.value}}</span>
            <div v-else>
              <view-style :td-obj="td" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ViewStyle from "@/components/ViewStyle";

export default {
  name: "TableBirt",
  components: { ViewStyle },
  props: {
    tb: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    getTdStyle(td){
      let tdStyle = td.style || "";
      if (td.styleExpr){        
        tdStyle += (td.styleExpr() || "")
      }
      return tdStyle;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>