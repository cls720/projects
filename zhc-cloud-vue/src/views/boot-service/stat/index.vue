<template>
  <div class="user-online-stat">
    <el-row>
      <el-col :span="12">
        <el-form :inline="true" :model="serviceForm" label-width="80px">
          <el-form-item label="调用时间">
            <div class="block">
              <el-date-picker
                ref="writeTime"
                v-model="serviceForm.writeTime"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                @change="onLoginTimeChange"
              />
            </div>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-radio-group v-model="requestScheme" style="float:right;">
          <el-radio-button label="today">今日调用</el-radio-button>
          <el-radio-button label="week">本周调用</el-radio-button>
          <el-radio-button label="month">本月调用</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="16">
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
      <el-col :span="8">
        <el-card class="pie-card">
          <pie-chart
            :id="'pieServiceGroupName'"
            :height="pieChartHeight"
            :datas="datas"
            :is-group-data="false"
            :group-by="serviceGroupNameGroupBy"
            :calcField="{name:'requestCount',title:'调用次数',summaryType:'sum'}"
            :option="serviceGroupNameOption"
          ></pie-chart>
        </el-card>
        <el-card class="pie-card row-margin-top" :height="pieChartHeight">
          <pie-chart
            :id="'pieServiceName'"
            :height="pieChartHeight"
            :datas="datas"
            :is-group-data="false"
            :group-by="serviceNameGroupBy"
            :calc-field="{name:'requestCount',title:'调用次数',summaryType:'sum'}"
            :option="serviceNameOption"
          ></pie-chart>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="row-margin-top">
      <el-card>
        <line-chart
          :id="'lineRequestCount'"
          :height="lineChartHeight"
          :datas="lineDatas"
          :is-group-data="false"
          :group-by="lineChartGroupBy()"
          :order-by="[{name:lineChartGroupBy(),type:'ASC'}]"
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
import { queryLogService } from "@/api/log-service";
import {
  elDateShortCurts,
  getCurrentWeek,
  getCurentMonth
} from "@/utils/DateUtil";
import { visualMap } from "@/utils/PieUtil";
import queryParam from "@/utils/query";
import { getCurrentDay, date } from "@/utils/DateUtil";
import { stat } from "fs";

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
      serviceGroupNameGroupBy: "serviceGroupName",
      serviceNameGroupBy: "serviceName",
      serviceGroupNameOption: {
        title: { text: "服务分类" },
        visualMap: visualMap(this.datas, "requestCount", "_blue", {
          max: 10000
        })
      },
      serviceNameOption: {
        title: { text: "服务名称" },
        visualMap: visualMap(this.datas, "requestCount", "_yellow", {
          max: 1000
        })
      },
      lineChartCalcFields: [
        {
          name: "requestCount",
          title: "调用次数",
          summaryType: "sum"
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
        }
      },
      requestScheme: "today",
      serviceForm: { writeTime: getCurrentDay() },
      pickerOptions: {
        shortcuts: elDateShortCurts
      },
      policy: {
        rowGroupFields: [
          {
            field: "serviceGroupName",
            width: 200,
            isFrozen: true,
            isFold: true,
            title: "服务分类",
            col: 0,
            isFilter: true,
            filterMultiple: true
          },
          {
            field: "serviceName",
            width: 200,
            isFrozen: true,
            // isFold: true,
            title: "服务名称",
            col: 0,
            dependDatas: [{ field: "serviceGroupId" }, { field: "serviceId" }],
            isFilter: true,
            filterMultiple: true
            // formatter: function(rowData, rowIndex, pagingIndex, col) {
            //   if (col.dependDatas) {
            //     return (
            //       '<a href="' +
            //       +col.dependDatas.serviceGroupId +
            //       "/" +
            //       col.dependDatas.serviceId +
            //       '">' +
            //       col.value +
            //       "</a>"
            //     );
            //   } else {
            //     return col.value;
            //   }
            // }
          }
        ],
        colGroupFields: [],
        dataFields: [{ field: "requestCount", width: 180, title: "调用次数" }]
      },
      rowNo: { isShow: true, width: 40 },
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
    requestScheme() {
      this.serviceForm.writeTime = [];
      let end = new Date();
      let start = new Date();
      if (this.requestScheme === "today") {
        let day = getCurrentDay();
        start = day[0];
        end = day[1];
      } else if (this.requestScheme === "week") {
        let week = getCurrentWeek();
        start = week.start;
        end = week.end;
      } else if (this.requestScheme === "month") {
        let month = getCurentMonth();
        start = month.start;
        end = month.end;
      }
      this.serviceForm.writeTime.push(start);
      this.serviceForm.writeTime.push(end);
      this.onLoginTimeChange();
    },
    // 监控查询面板查询条件，分组依据，排序规范等变化
    serviceForm() {}
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
      return Math.floor(this.mainHeight / 3) - 6;
    },
    lineChartHeight() {
      return Math.floor(this.mainHeight / 3) - 70;
    }
  },
  methods: {
    lineChartGroupBy() {
      switch (this.requestScheme) {
        case "today":
          return "requestHour";
        case "week":
          return "requestWeek";
        case "month":
          return "requestDay";
        default:
          return "requestDate";
      }
    },
    onLoginTimeChange() {
      // alert("根据时间条件过滤数据 ==> " + this.serviceForm.writeTime);
      this.searchData(
        this.serviceForm.writeTime[0],
        this.serviceForm.writeTime[1]
      );
    },
    searchData(start, end) {
      const me = this;
      let where = new queryParam.Where();

      if (this.serviceForm.writeTime && this.serviceForm.writeTime.length > 1) {
        let startDate = date.format(
          this.serviceForm.writeTime[0],
          "yyyy-MM-dd hh:mm:ss"
        );
        let endDate = date.format(
          this.serviceForm.writeTime[1],
          "yyyy-MM-dd hh:mm:ss"
        );
        where.gteq("writeTime", startDate);
        where.lteq("writeTime", endDate);
      }
      // 传参数未按标准格式，提炼后台 query api
      queryLogService({ where: where }).then(response => {
        const data = response.dataPack;
        me.datas = data.rows;
      });

      queryLogService({ where: where, groupBy: this.lineChartGroupBy() }).then(
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
    this.onLoginTimeChange();
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

