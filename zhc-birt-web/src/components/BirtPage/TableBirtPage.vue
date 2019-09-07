<template>
  <div class="zhc-birt-page">
    <birt-tool-bar />
    <div id="print_div">
      <div v-for="(tb,index) in tables">
        <div v-if="tb.rowSplit==='pageSplit'" style="page-break-after:always;" />
        <table :style="tb.style">
          <thead>
            <tr>
              <th v-for="th in tb.cols" :style="{width:th.colWidth+'px'}"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tr in tb.rows" :style="{height:tr.rowHeight+'px'}">
              <td
                v-for="td in tr.tds"
                :style="td.style"
                :rowspan="td.rowspan"
                :colspan="td.colspan"
              >
                <span v-if="!td.viewStyle">{{td.value}}</span>
                <div v-else>
                  <view-style :params="td.viewStyle" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import BirtToolBar from "@/components/BirtToolBar";
import ViewStyle from "@/components/ViewStyle";

export default {
  name: "FormListBirt",
  components: { BirtToolBar, ViewStyle },
  props: {
    tables: {
      type: Array,
      default: function() {
        return [];
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