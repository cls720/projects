<template>
  <div class="tab-view-container">
    <el-row>
      <el-form :inline="true" :model="userInfo">
        <el-form-item label="用户名">
          <el-input
            v-model="userInfo.userName"
            placeholder="用户名"
            style="width:150px;"
            label-width="40px"
            @keyup.enter.native="onSubmit"
          ></el-input>
        </el-form-item>

        <el-form-item label="姓名">
          <el-input
            v-model="userInfo.userXm"
            placeholder="姓名"
            style="width:150px;"
            label-width="40px"
            @keyup.enter.native="onSubmit"
          ></el-input>
        </el-form-item>

        <el-form-item label="设备类型" label-width="70px">
          <el-select
            v-model="userInfo.deviceType"
            multiple
            collapse-tags
            placeholder="请选择"
            style="width:180px;"
          >
            <el-option
              v-for="item in deviceType"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="登录时间" label-width="70px">
          <el-date-picker
            ref="loginTime"
            v-model="userInfo.loginTime"
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
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row :style="{height:mainHeight+'px'}">
      <el-table
        :data="userDatas"
        :height="gridHeight"
        border
        style="width: 100%"
        v-loading="loading"
      >
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="userName" label="用户名" width="100"></el-table-column>
        <el-table-column prop="userXm" label="姓名" width="100"></el-table-column>
        <el-table-column prop="userProvince" label="所在省份" width="100"></el-table-column>
        <el-table-column prop="userCity" label="所在城市" width="100"></el-table-column>
        <el-table-column prop="pcIp" label="登录IP" width="200"></el-table-column>
        <!-- <el-table-column prop="deviceType" label="设备类型" width="100"></el-table-column> -->
        <el-table-column prop="loginTime" label="登录时间" width="180"></el-table-column>
        <!-- <el-table-column prop="logoutTime" label="登出时间"></el-table-column> -->
      </el-table>
    </el-row>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 50, 200, 1000]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import queryParam from "@/utils/query";
import { loginQuery } from "@/api/log-login";
import { elDateShortCurts, date } from "@/utils/DateUtil";

export default {
  name: "loingLog",
  components: {},
  data() {
    return {
      loading: false,
      screenHeight: window.innerHeight,
      userInfo: {
        userXm: this.$route.query.userXm,
        userName: "",
        deviceType: "",
        loginTime: this.$route.query.loginTime0
          ? [new Date(this.$route.query.loginTime0), new Date(this.$route.query.loginTime1)]
          : ""
      },
      pageNum: 1,
      pageSize: 20,
      totalCount: 1231,
      userDatas: [],
      deviceType: [
        { name: "PC", value: "PC" },
        { name: "MB", value: "MB" },
        { name: "PAD", value: "PAD" }
      ],
      pickerOptions: {
        shortcuts: elDateShortCurts
      }
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
      let height = this.screenHeight - 60 - 50;
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84;
      }
      return height;
    },
    gridHeight() {
      return this.mainHeight - 5;
    }
  },
  methods: {
    onSubmit() {
      this.loading = true;
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();

      param.returnTotal = true;
      where.setPage(this.pageNum, this.pageSize);
      if (this.userInfo.userXm) where.like("userXm", this.userInfo.userXm);
      if (this.userInfo.userName)
        where.like("userName", this.userInfo.userName);
      if (this.userInfo.deviceType && this.userInfo.deviceType.length > 0)
        where.like("deviceType", this.userInfo.deviceType);
      if (this.userInfo.loginTime && this.userInfo.loginTime.length > 1) {
        let startDate =
          date.format(this.userInfo.loginTime[0], "yyyy-MM-dd") + " 00:00:00";
        let endDate =
          date.format(this.userInfo.loginTime[1], "yyyy-MM-dd") + " 23:59:59";
        where.gteq("loginTime", startDate);
        where.lteq("loginTime", endDate);
      }
      param.where = where;

      loginQuery(param).then(response => {
        const data = response.dataPack;
        const outParameter = response.outParameter;

        me.userDatas = data.rows;
        me.totalCount =
          outParameter.factRecordSize == -1 ? 0 : outParameter.factRecordSize;
        me.loading = false;
      });
    },
    czHandleClick(row) {
      alert(JSON.stringify(row));
    },
    handleSizeChange(val) {
      this.pageNum = 1;
      this.pageSize = val;
      this.onSubmit();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.onSubmit(val, this.pageSize);
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
.tab-view-container {
  padding: 10px;
  background-color: rgb(240, 242, 245);

  .row-margin-top {
    margin-top: 8px;
  }
}
</style>
