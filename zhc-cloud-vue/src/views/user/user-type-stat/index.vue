<template>
  <div class="user-online-stat">
    <el-row>
      <el-form :inline="true" :model="userInfo" label-width="50px">
        <el-form-item label="注册时间" label-width="70px">
          <el-date-picker
            ref="regTime"
            v-model="userInfo.regTime"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            style="width:260px;"
          />
        </el-form-item>
        <el-form-item label="省份">
          <el-select
            v-model="userInfo.userProvinces"
            multiple collapse-tags
            placeholder="请选择"
            style="width:180px;"
          >
            <el-option v-for="item in chinaProvinces" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户类型" label-width="70px">
          <el-select v-model="userInfo.userType" multiple collapse-tags placeholder="请选择" style="width:160px;">
            <el-option
              v-for="item in userTypes"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
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
          :is-loading="isLoading"
          even-bg-color="#f4f4f4"
          row-click-color="#edf7ff"
        />
      </el-col>
      <el-col :span="6">
        <el-card class="pie-card">
          <el-radio-group class="group-by-radio" v-model="userCountGroupBy" size="mini">
            <el-radio-button label="userProvince">省</el-radio-button>
            <el-radio-button label="userCity">市</el-radio-button>
          </el-radio-group>
          <pie-chart
            :id="'pieUserCount'"
            :height="pieChartHeight"
            :datas="datas"
            :is-group-data="false"
            :group-by="userCountGroupBy"
            :calcField="{name:'userCount',title:'用户个数',summaryType:'sum'}"
            :option="userCountOption"
          ></pie-chart>
        </el-card>
        <el-card class="pie-card row-margin-top" :height="userTypePieChartHeight">
          <pie-chart
            :id="'pieUserType'"
            :height="userTypePieChartHeight"
            :datas="datas"
            :is-group-data="false"
            :group-by="userTypeGroupBy"
            :calc-field="{name:'userCount',title:'用户个数',summaryType:'sum'}"
            :option="userTypeOption"
          ></pie-chart>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="row-margin-top">
      <el-card>
        <line-chart
          :id="'lineNewRegUserCount'"
          :height="lineChartHeight"
          :datas="newUsers"
          :is-group-data="false"
          :group-by="'regDate'"
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
import { userInfo, newUser } from "@/api/user-info";
import {
  elDateShortCurts,
  getCurrentWeek,
  getCurentMonth
} from "@/utils/DateUtil";
import { visualMap } from "@/utils/PieUtil";
import { date } from "@/utils/DateUtil";
import queryParam from "@/utils/query";
import { debuglog } from "util";

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
      isLoading: false, 
      screenHeight: window.innerHeight,
      chinaProvinces: ["福建", "广东", "北京", "上海"],
      userTypes: [
        { name: "普通开发者", value: "PTYF" },
        { name: "VIP开发者", value: "VIP" },
        { name: "合作开发者", value: "HZHB" },
        { name: "注册用户", value: "TY" }
      ],
      userCountGroupBy: "userProvince",
      userCountOption: {
        title: { text: "用户区域" },
        visualMap: visualMap(this.datas, "userCount", "_blue", { max: 50000 })
      },
      userTypeGroupBy: "userType",
      userTypeOption: {
        title: { text: "用户类型" },
        visualMap: visualMap(this.datas, "userCount", "_yellow", { max: 20000 })
      },
      lineChartCalcFields: [
        {
          name: "userCount",
          title: "新增用户",
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
      userInfo: { userProvinces: [], userType: "", regTime: "" },
      pickerOptions: {
        shortcuts: elDateShortCurts
      },
      policy: {
        rowGroupFields: [
          {
            field: "userProvince",
            width: 150,
            isFrozen: true,
            isFold: true,
            title: "省份",
            col: 0,
            isFilter: true,
            filterMultiple: true
          },
          {
            field: "userCity",
            width: 150,
            isFrozen: true,
            title: "城市",
            col: 0
          }
        ],
        colGroupFields: [
          {
            field: "userType",
            width: 120,
            title: "用户类型"
          }
        ],
        dataFields: [{ field: "userCount", width: 100, title: "用户个数" }]
      },
      rowNo: { isShow: true, width: 40 },
      datas: [],
      newUsers: []
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
      return Math.floor((this.mainHeight / 3) * 2);
    },
    pieChartHeight() {
      return Math.floor(this.mainHeight / 3) - 46;
    },
    userTypePieChartHeight() {
      return Math.floor(this.mainHeight / 3) - 6;
    },
    lineChartHeight() {
      return Math.floor(this.mainHeight / 3) - 70;
    }
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      if (this.userInfo.regTime && this.userInfo.regTime.length > 1) {       
        let startDate = date.format(this.userInfo.regTime[0], "yyyy-MM-dd");
        let endDate = date.format(this.userInfo.regTime[1], "yyyy-MM-dd");
        where.gteq("regTime", startDate);
        where.lteq("regTime", endDate);
      }      
      if (this.userInfo.userProvinces)
        where.in("userProvince", this.userInfo.userProvinces);
      if (this.userInfo.userType) where.in("userType", this.userInfo.userType);
      param.where = where;
            
      userInfo(param).then(response => {
        const data = response.dataPack;
        me.datas = data.rows;
        this.isLoading = false;
      });
      newUser(where).then(response => {
        const data = response.dataPack;
        me.newUsers = data.rows;
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

