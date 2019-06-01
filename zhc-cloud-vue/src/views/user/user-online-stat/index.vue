<template>
  <div class="user-online-stat">
    <el-row>
      <el-col :span="16">
        <el-form :inline="true" :model="userLogin" label-width="80px">
          <el-form-item label="登录时间">
            <div class="block">
              <el-date-picker
                ref="loginTime"
                v-model="userLogin.loginTime"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                style="width:260px;"
              />
            </div>
          </el-form-item>
          <el-form-item label="登录次数" label-width="70px">
            <el-input-number
              v-model="userLogin.loginCount"
              controls-position="right"
              :min="0"
              style="width:85px;"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="在线小时" label-width="70px">
            <el-input-number
              v-model="userLogin.onLineHour"
              controls-position="right"
              :min="0"
              style="width:85px;"
            ></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-dropdown split-button type="primary" @click="onSubmit">
              查询
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item,index) in userLogin.groupBy.schemes"
                  :key="item.field"
                >
                  <el-radio
                    @change="onSubmit"
                    v-model="userLogin.groupBy.index"
                    :label="index"
                  >{{item.groupByDesc}}</el-radio>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8">
        <el-radio-group v-model="onlineScheme" style="float:right;">
          <el-radio-button label="today">今日在线</el-radio-button>
          <el-radio-button label="week">本周在线</el-radio-button>
          <el-radio-button label="month">本月在线</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="18">
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
      </el-col>
      <el-col :span="6">
        <el-card class="pie-card">
          <el-radio-group class="group-by-radio" v-model="loginCountGroupBy" size="mini">
            <el-radio-button label="userProvince">省</el-radio-button>
            <el-radio-button label="userCity">市</el-radio-button>
          </el-radio-group>
          <pie-chart
            :id="'pieLoginCount'"
            :height="pieChartHeight"
            :datas="datas"
            :is-group-data="false"
            :group-by="loginCountGroupBy"
            :calcField="{name:'loginCount',title:'登录次数',summaryType:'sum'}"
            :option="loginCountOption"
          ></pie-chart>
        </el-card>
        <el-card class="pie-card row-margin-top" :height="pieChartHeight">
          <el-radio-group class="group-by-radio" v-model="onLineHourGroupBy" size="mini">
            <el-radio-button label="userProvince">省</el-radio-button>
            <el-radio-button label="userCity">市</el-radio-button>
          </el-radio-group>
          <pie-chart
            :id="'pieOnLineHour'"
            :height="pieChartHeight"
            :datas="datas"
            :is-group-data="false"
            :group-by="onLineHourGroupBy"
            :calc-field="{name:'onLineHour',title:'在线小时',summaryType:'sum'}"
            :option="onLineHourOption"
          ></pie-chart>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="row-margin-top">
      <el-card>
        <line-chart
          :id="'lineLoginCountHour'"
          :height="lineChartHeight"
          :datas="lineDatas"
          :is-group-data="true"
          :group-by="lineChartGroupBy()"
          :calcFields="lineChartCalcFields"
          :option="lineChartOption"
        ></line-chart>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import "@/components/ZhcGpTable/css/index.css";
import "@/components/ZhcGpTable/css/custom.css";

import "@/components/ZhcGpTable/css/themes-base/index.css";

import GpTable from "@/components/ZhcGpTable/gp-table.vue";
import PieChart from "@/components/Charts/PieChart.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import { getCurrentDay, date } from "@/utils/DateUtil";
import queryParam from "@/utils/query";
import { queryLogLogin } from "@/api/log-login";
import {
  elDateShortCurts,
  getCurrentWeek,
  getCurentMonth
} from "@/utils/DateUtil";
import { visualMap } from "@/utils/PieUtil";
import { getPolicies, getPolicyByIndex } from "./userOnline.js";

export default {
  name: "FrozenTitleColumns",
  components: {
    GpTable,
    PieChart,
    LineChart
  },
  props: {
    isTagFullscreen: false
  },
  data() {
    return {
      screenHeight: window.innerHeight,
      loginCountGroupBy: "userProvince",
      loginCountOption: {
        title: { text: "登录次数" },
        visualMap: visualMap(this.datas, "loginCount", "_blue")
      },
      onLineHourGroupBy: "userProvince",
      onLineHourOption: {
        title: { text: "在线小时" },
        visualMap: visualMap(this.datas, "onLineHour", "_yellow", { max: 1000 })
      },
      lineChartCalcFields: [
        {
          name: "loginCount",
          title: "登录次数",
          summaryType: "sum",
          yAxis: true
        },
        {
          name: "onLineHour",
          title: "在线小时",
          summaryType: "sum",
          yAxis: true
        }
      ],
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
      onlineScheme: "today",
      userLogin: {
        loginTime: getCurrentDay(),
        loginCount: 0,
        onLineHour: 0,
        groupBy: {
          index: 0,
          schemes: getPolicies()
        }
      },
      pickerOptions: {
        shortcuts: elDateShortCurts
      },
      policy: getPolicyByIndex(0),
      rowNo: { isShow: true, width: 60 },
      datas: [],
      lineDatas: []
    };
  },
  watch: {
    screenHeight(val) {
      if (!this.timer) {
        this.screenHeight = val;
        this.timer = true;
        const me = this;
        setTimeout(function() {
          me.timer = false;
        }, 400);
      }
    },
    onlineScheme() {
      this.userLogin.loginTime = [];
      let end = new Date();
      let start = new Date();
      if (this.onlineScheme === "today") {
      } else if (this.onlineScheme === "week") {
        let week = getCurrentWeek();
        start = week.start;
        end = week.end;
      } else if (this.onlineScheme === "month") {
        let month = getCurentMonth();
        start = month.start;
        end = month.end;
      }
      this.userLogin.loginTime.push(start);
      this.userLogin.loginTime.push(end);
    },
    // 监控查询面板查询条件，分组依据，排序规范等变化
    userLogin() {}
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
      return Math.floor((this.mainHeight / 3) * 2);
    },
    pieChartHeight() {
      return Math.floor(this.mainHeight / 3) - 46;
    },
    lineChartHeight() {
      return Math.floor(this.mainHeight / 3) - 70;
    }
  },
  methods: {
    lineChartGroupBy() {
      switch (this.onlineScheme) {
        case "today":
          return "loginHour";
        case "week":
          return "loginDate";
        case "month":
          return "loginDay";
        default:
          return "loginDate";
      }
    },
    onSubmit() {
      // alert("根据时间条件过滤数据 ==> " + this.userLogin.loginTime);
      this.searchData(this.userLogin.loginTime[0], this.userLogin.loginTime[1]);
    },
    searchData(start, end) {
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();      

      if (this.userLogin.loginTime && this.userLogin.loginTime.length > 1) {
        let startDate = date.format(this.userLogin.loginTime[0], "yyyy-MM-dd");
        let endDate = date.format(this.userLogin.loginTime[1], "yyyy-MM-dd");
        where.gteq("loginTime", startDate);
        where.lteq("loginTime", endDate);
      }
      
      // 传参数未按标准格式，提炼后台 query api
      queryLogLogin({ where: where }).then(response => {
        const data = response.dataPack;
        me.datas = data.rows;
      });

      queryLogLogin({ where: where, groupBy: this.lineChartGroupBy() }).then(
        response => {
          const data = response.dataPack;
          me.lineDatas = data.rows;
        }
      );
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
    this.onSubmit();
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

