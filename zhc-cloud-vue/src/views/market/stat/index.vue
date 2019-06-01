<template>
  <div class="user-online-stat">
    
    <el-row>
      <el-col :span="18">
        
        <el-form :inline="true" :model="queryParams" label-width="80px">
          <el-form-item label="类型">
            <el-select
              v-model="queryParams.kind"
              multiple
              collapse-tags
              placeholder="请选择"
              @change="kindChange"
            >
              <el-option
                v-for="item in kinds"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="行业">
            <el-select
              v-model="queryParams.hyType"
              multiple
              collapse-tags
              placeholder="请选择"
              @change="kindHyType"
            >
              <el-option
                v-for="item in hyTypes"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-radio-group v-model="groupScheme" style="float:right;">
          <el-radio-button label="FTYPE">按类型</el-radio-button>
          <el-radio-button label="FSORT">按行业</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="18">
        <el-card>
        <gp-table
          is-horizontal-resize
          is-vertical-resize
          column-width-drag
          style="width:100%"
          :height="gpGridRowHeight"
          ref="gptable"
          :is-show-sub-total="true"
          :row-no="rowNo"
          :policy="policy"
          :datas="datas"
          even-bg-color="#f4f4f4"
          row-click-color="#edf7ff"
        />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="pie-card">
          <pie-chart
            id="gppie"
            title="查看次数"
            :height="pieChartHeight"
            :datas="datas"
            :is-group-data="false"
            :group-by="groupScheme"
            :calcField="{name:'FCOUNTSEE',title:'查看次数',summaryType:'sum'}"
            ref="gppie"
            :option="viewCountOption"
          ></pie-chart>
        </el-card>
        <el-card class="pie-card row-margin-top">
          <pie-chart
            id="gppie2"
            title="购买次数"
            :height="pieChartHeight"
            :datas="datas"
            :is-group-data="false"
            :group-by="groupScheme"
            :calcField="{name:'FCOUNTBUY',title:'购买次数',summaryType:'sum'}"
            :option="buyCountOption"
            ref="gppie2"
          ></pie-chart>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="row-margin-top">
      <el-card>
        <line-chart
          id="linechart"
          :height="lineChartHeight"
          :datas="datas"
          ref="gpline"
          :is-group-data="false"
          :group-by="groupScheme"
          :calcFields="[{name:'FCOUNTSEE',title:'查盾次数',summaryType:'sum'},{name:'FCOUNTBUY',title:'购买次数',summaryType:'sum'}]"
          :option="lineChartOption"
        ></line-chart>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import NProgress from "nprogress"; // Progress 进度条
// Progress 进度条 样式
import "nprogress/nprogress.css";
// highlight theme
import "highlight.js/styles/color-brewer.css";

import "@/components/ZhcGpTable/css/index.css";
import "@/components/ZhcGpTable/css/custom.css";

import "@/components/ZhcGpTable/css/themes-base/index.css";

import GpTable from "@/components/ZhcGpTable/gp-table.vue";
import PieChart from "@/components/Charts/PieChart.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import { queryMarket } from "@/api/market";
import { debuglog } from "util";
import { visualMap } from "@/utils/PieUtil";

import queryParam from "@/utils/query";

// let userlogLogins = []
// new Promise((resolve, reject) => {
//   logLogin({})
//     .then(response => {
//       const { data } = response
//       userlogLogins = data.dataPack.rows
//       resolve()
//     })
//     .catch(error => {
//       reject(error)
//     })
// })

export default {
  name: "FrozenTitleColumns",
  props: {
    isTagFullscreen: false
  },
  components: {
    GpTable,
    PieChart,
    LineChart
  },
  data() {
    return {
      screenHeight: window.innerHeight,
      lineChartOption: {
        grid: {
          left: "0px",
          right: "100px",
          bottom: "0px",
          top: "5px",
          containLabel: true
        },
        legend: {
          left: "right",
          orient: "vertical"
        },
        yAxis: [
          {
            name: "",
            type: "value"
          },
          {
            name: "",
            type: "value"
          }
        ]
      },
      viewCountOption: {
        title: { text: "查看次数" }
        //visualMap: visualMap(this.datas, "viewCount", "_blue")
      },
      buyCountOption: {
        title: { text: "购买次数" }
        //visualMap: visualMap(this.datas, "buyCount", "_yellow")
      },
      hyTypes: [
        {
          name: "ERP",
          value: "ERP"
        },
        { name: "能源能耗", value: "nynh" },
        { name: "农业", value: "ny" },
        { name: "MES", value: "mes" },
        { name: "矿业", value: "ky" },
        { name: "ERP", value: "erp" },
        { name: "电商", value: "ds" },
        { name: "数据中心", value: "sjzx" },
        { name: "锂电", value: "ld" }
      ],
      kinds: [
        { name: "模型算法", value: "zl" },
        { name: "项目", value: "project" },
        { name: "功能模块", value: "funcpack" },
        { name: "工业APP", value: "gyapp" },
        { name: "工业组件", value: "gyzj" },
        { name: "标准组件", value: "co" },
        { name: "组态仿真", value: "ztfz" }
      ],
      //gridHeight: 0,
      //pieHeight: 100,
      //lineHeigth: 100,
      groupScheme: "FTYPE",
      queryParams: {},
      policy: {
        rowGroupFields: [
          {
            field: "FTYPENAME",
            width: 200,
            isFrozen: true,
            isFold: true,
            title: "类型",
            col: 0,
            isFilter: true,
            filterMultiple: true
          },
          {
            field: "FNAME",
            width: 320,
            isFrozen: true,
            title: "创作名称",
            col: 0,
            dependDatas: [{ field: "FGUID" }],
            formatter: function(rowData, rowIndex, pagingIndex, col) {
              if (col.dependDatas) {
                return (
                  '<a href="#/market/detail?id=' +
                  col.dependDatas.FGUID +
                  '">' +
                  col.value +
                  "</a>"
                );
              } else {
                return col.value;
              }
            }
          }
        ],
        colGroupFields: [],
        dataFields: [
          { field: "FCOUNTSEE", width: 120, title: "查看次数" },
          { field: "FCOUNTBUY", width: 120, title: "购买次数" }
        ]
      },
      rowNo: { isShow: true, width: 40 },
      datas: []
    };
  },
  watch: {
    groupScheme() {
      let end = new Date();
      let start = new Date();
      if (this.groupScheme === "FTYPE") {
        this.policy.rowGroupFields[0].field = "FTYPENAME";
        this.policy.rowGroupFields[0].title = "类型";
      } else if (this.groupScheme === "FSORT") {
        this.policy.rowGroupFields[0].field = "FSORTNAME";
        this.policy.rowGroupFields[0].title = "行业";
      }
      this.onGroupSchemeChange();
    }
  },
  computed: {
     mainHeight() {
      // 84固定头部高度
      let height = this.screenHeight - 60;
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84;
      }
      return height;
    },
    gpGridRowHeight() {
      return Math.floor((this.mainHeight / 3) * 2)-40;//50
    },
    pieChartHeight() { 
      return Math.floor(this.mainHeight / 3) -5;  // 10
    },
    lineChartHeight() {
      return Math.floor(this.mainHeight / 3) - 70;
    }
  },
  methods: {
    kindChange() {
      this.searchData();
    },
    kindHyType() {
      this.searchData();
    },
    //本周
    getCurrentWeek() {
      var now = new Date();
      var weekStartDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - now.getDay()
      );
      var weekEndDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + (6 - now.getDay())
      );
      weekEndDate.setHours(23);
      weekEndDate.setMinutes(59);
      weekEndDate.setSeconds(59);
      return {
        start: weekStartDate,
        end: weekEndDate
      };
    },
    getCurentMonth() {
      var now = new Date();
      var monthStartDate = new Date(now.getFullYear(), now.getMonth(), 1);

      let year = now.getFullYear();
      let month = now.getMonth();
      var monthEndDate = new Date(
        new Date(year, month + 1, 1).getTime() - 1000 * 60 * 60 * 24
      );
      monthEndDate.setHours(23);
      monthEndDate.setMinutes(59);
      monthEndDate.setSeconds(59);
      return {
        start: monthStartDate,
        end: monthEndDate
      };
    },
    onGroupSchemeChange() {
      // alert("根据时间条件过滤数据 ==> " + this.queryParams.loginTime);
      this.searchData();
    },
    searchData() {
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      if (this.queryParams.kind) where.in("FTYPE", this.queryParams.kind);
      if (this.queryParams.hyType) where.in("FSORT", this.queryParams.hyType);
      param.where = where;
      queryMarket(where).then(response => {
        const data = response.dataPack;
        me.datas = data.rows;
        //me.$refs.gppie.loadData(me.datas, this.groupScheme);
        //me.$refs.gppie2.loadData(me.datas, this.groupScheme);
        //me.$refs.gpline.loadData(me.datas, this.groupScheme);
        //gptable
      });
    }
  },
  mounted() {
    const me = this;
    window.onresize = () => {
      return (() => {
        me.screenHeight = window.innerHeight;
      })();
    };
  },
  created() {
    // let h = document.body.clientHeight - 120;
    // let h1 = 60; //面板高度
    // let h2 = ((h - h1) / 3) * 2;
    // let h3 = (h - h1) / 3;
    // this.gridHeight = h2;
    // this.pieHeight = h2 / 2;
    // this.lineHeigth = h3;
    this.onGroupSchemeChange();

    // let param  = new queryParam.Param();
    // let where = new queryParam.Where()
    // where.addEqual("FC1","1123")
    // param.where = where;
    // console.log(param.toJSON())
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.user-online-stat {
  padding: 10px;
  background-color: rgb(240, 242, 245);

  .pie-card {
    .group-by-radio {
      margin: 5px 10px;
    }
    .el-card__body {
      padding: 0px;
    }
  }

  .row-margin-top {
    margin-top: 8px;
  }
}
</style>

