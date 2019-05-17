<template>
  <div class="user-online-stat">
    <el-row>
      <el-col :span="12">
        <el-form :inline="true" :model="userLogin" label-width="80px">
          <el-form-item label="调用时间">
            <div class="block">
              <el-date-picker
                ref="loginTime"
                v-model="userLogin.loginTime"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
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
        <el-radio-group v-model="onlineScheme" style="float:right;">
          <el-radio-button label="today">今日调用</el-radio-button>
          <el-radio-button label="week">本周调用</el-radio-button>
          <el-radio-button label="month">本月调用</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <gp-table
      is-horizontal-resize
      is-vertical-resize
      column-width-drag
      style="width:100%"
      :height="500"
      ref="gptable"
      :is-show-sub-total="true"
      :row-no="rowNo"
      :policy="policy"
      :datas="datas"
      even-bg-color="#f4f4f4"
      row-click-color="#edf7ff"
    />
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
import { logRequest } from "@/api/log-request";

export default {
  name: "FrozenTitleColumns",
  components: {
    GpTable
  },
  data() {
    return {
      onlineScheme: "today",
      userLogin: { loginTime: "" },
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
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
            dependDatas: [{ field: "serviceGroupId" },{ field: "serviceId" }],
            isFilter: true,
            filterMultiple: true,
            formatter: function(rowData, rowIndex, pagingIndex, col) {            
              if (col.dependDatas) {
                return (
                  '<a href="' +
                  +col.dependDatas.serviceGroupId + '/' + col.dependDatas.serviceId +
                  '">' +
                  col.value +
                  "</a>"
                );
              } else {
                return col.value;
              }
            }
          }
          // ,
          // {
          //   field: "appId",
          //   width: 200,
          //   isFrozen: true,
          //   title: "调用ID"
          // }
        ],
        colGroupFields: [],
        dataFields: [{ field: "requestCount", width: 120, title: "调用次数" }]
      },
      rowNo: { isShow: true, width: 40 },
      datas: []
    };
  },
  watch: {
    onlineScheme() {
      this.userLogin.loginTime = [];
      const end = new Date();
      const start = new Date();
      if (this.onlineScheme === "today") {
      } else if (this.onlineScheme === "week") {
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      } else if (this.onlineScheme === "month") {
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      }
      this.userLogin.loginTime.push(start);
      this.userLogin.loginTime.push(end);
      this.onLoginTimeChange();
    }
  },
  mounted() {
    const me = this;
    logRequest({}).then(response => {
      const { data } = response;
      me.datas = data.rows;

      //gptable
    });
  },
  methods: {
    onLoginTimeChange() {
      alert("根据时间条件过滤数据 ==> " + this.userLogin.loginTime);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.user-online-stat {
  padding: 10px;
}
</style>

