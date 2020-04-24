<template>
  <table class="zhc-birt-data-list" :style="confStyle">
    <thead>
      <tr>
        <th v-for="(th, i) in conf.cols" :style="getThStyle(th)" :key="'td'+i"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr,j) in trRows" :style="{height:tr.rowHeight+'px'}" :key="'tr'+j">
        <td
          v-for="(td, key) in tr.tds"
          :key="key"
          :style="getTdStyle(td)"
          :rowspan="td.rowspan"
          :colspan="td.colspan"
        >
          <view-style v-if="td.viewStyle" :td-obj="td" />
          <hc-link-hrefs v-else-if="td.hrefs && (td.hrefs.length > 0)" :td-obj="td" />
          <span v-else>{{td.value}}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";
import ViewStyle from "@/components/ViewStyle";

export default {
  name: "hc-data-list",
  mixins: [autosize, datasource],
  extends: HcCmpt,
  components: { ViewStyle },
  computed: {
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "100%";
    },
    confStyle() {
      return `${this.autoSizeStyle()};${this.conf.style};`;
    },
    trRows() {
      debugger
      let me = this;
      let trRows = {};
      let i = 1;
      for (var trkey in this.conf.rows) {
        let tr = this.conf.rows[trkey];
        let extendArrow = this.getTrExtendArrow(tr);
        if (extendArrow && this.datasetDatas) {
          if (extendArrow == "down") {
            this.datasetDatas.forEach(recd => {
              let extendTr = me.getTrExprInstance(tr, recd);
              trRows["r" + i] = extendTr;
              i++;
            });
          }
        } else {
          let wb = this.getWorkBook();
          if (wb && this.conf.dataset) {
            let curtRecd = this.getWorkBook().dataset[this.conf.dataset]
              .curRecord;
            trRows["r" + i] = me.getTrExprInstance(tr, curtRecd);
            i++;
          }
        }
      }
      return trRows;
    }
  },
  data() {
    return {};
  },
  methods: {
    // 初始化条件表达式列表
    initConditionExpr() {
      for (var key in this.conf.rows) {
        let tr = this.conf.rows[key];
        for (var tdkey in tr.tds) {
          let td = tr.tds[tdkey];
          if (td.conditionExprs) {
            this.setTdStyleByConditionExpr(td, tr);
          }
        }
      }
      this.conf.hasInitConditionExpr = true;
    },
    // 获取表头th样式
    getThStyle(th) {
      if (typeof th.colWidth == "number") {
        return `width:${th.colWidth}px;`;
      } else {
        return `width:${th.colWidth};`;
      }
    },
    // 获取表体单元格样式
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
    },
    // 获取tr扩展方向
    getTrExtendArrow(tr) {
      for (var key in tr.tds) {
        let td = tr.tds[key];
        if (td.extendArrow) {
          return td.extendArrow;
        }
      }
    },
    /**
     * 获取行表达式应用实例
     * tr 行配置对象
     * recd 当前记录
     */
    getTrExprInstance(tr, recd) {
      let trInse = JSON.parse(JSON.stringify(tr));
      for (var key in trInse.tds) {
        let td = trInse.tds[key];
        td.value = this.getTdValue(td, recd);
        trInse.tds[key] = td;
      }
      return trInse;
    },
    /**
     * 应用td表达式, 获取值, 应用表达式
     * td 单元格配置对象
     * recd 当前记录
     */
    getTdValue(td, recd) {
      if (td.value && td.value.indexOf("${") != -1) {
        let expr = td.value.replace("${", "").replace("}", "");
        return eval(expr);
      } else {
        return td.value;
      }
    }
  },
  created() {
    if (!this.conf.hasInitConditionExpr) {
      this.initConditionExpr();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
