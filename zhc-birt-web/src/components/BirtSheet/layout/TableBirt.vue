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
          <td
            v-for="td in tr.tds"
            :style="getTdStyle(td)"
            :rowspan="td.rowspan"
            :colspan="td.colspan"
          >
            <birt-cell-children v-if="td.children" :children="td.children" />
            <view-style v-else-if="td.viewStyle" :td-obj="td" />
            <link-hrefs v-else-if="td.hrefs && (td.hrefs.length > 0)" :td-obj="td" />
            <span v-else>{{td.value}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BirtCellChildren from "@/components/BirtCellChildren";
import LinkHrefs from "@/components/LinkHrefs";
import ViewStyle from "@/components/ViewStyle";

export default {
  name: "TableBirt",
  components: { BirtCellChildren, LinkHrefs, ViewStyle },
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
    // 初始化条件表达式列表
    initConditionExpr() {      
      for (var key in this.tb.rows) {
        let tr = this.tb.rows[key];
        for (var tdkey in tr.tds) {
          let td = tr.tds[tdkey];
          if (td.conditionExprs) {
            this.setTdStyleByConditionExpr(td, tr);
          }
        }
      }
      this.tb.hasInitConditionExpr = true;
    },
    getTdStyle(td) {
      let tdStyle = td.style || "";
      if (td.styleExpr) {        
        tdStyle += td.styleExpr() || "";
      }
      return tdStyle;
    },
    // 根据条件表达式配置，初始化[当前单元格、当前行、当前列]样式
    setTdStyleByConditionExpr(td, tr) {
      let me = this;
      td.conditionExprs.forEach(cdion => {
        if (cdion.expr.call()) {
          let applyItems = cdion.applyItems;
          applyItems.forEach(item => {
            let itemStyle = me.getApplyItemStyle(item);
            if (item.applyScheme === "applyCell") {              
              if (td.style === undefined) {
                td.style = "";
              }
              td.style += itemStyle;
            } else if (item.applyScheme === "applyRow") {
              me.setTrStyleByApplyRow(tr, itemStyle);
            } else if (item.applyScheme === "applyCol") {
              me.setTdStyleByConditionExpr(td, itemStyle);
            }
          });
        }
      });
    },
    // 设置条件表达式行应用样式
    setTrStyleByApplyRow(tr, styleVal) {      
      for (var tdkey in tr.tds) {
        let td = tr.tds[tdkey];
        td.style += styleVal;
      }
    },
    // 设置条件表达式列应用样式
    setColStyleByApplyRow(td, styleVal) {},
    getApplyItemStyle(applyItem) {
      let retuStyle = "";
      if (applyItem.controlName === "ConditionApplyColor") {
        retuStyle += `color:${applyItem.color};`;
      } else if (applyItem.controlName === "ConditionApplyBackgroundColor") {
        retuStyle += `background-color:${applyItem.backgroundColor};`;
      }
      return retuStyle;
    }
  },
  created() {
    if (!this.tb.hasInitConditionExpr){
      this.initConditionExpr();
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>