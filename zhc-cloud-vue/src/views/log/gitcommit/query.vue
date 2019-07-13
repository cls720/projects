<template>
  <div class="tab-view-container">
    <el-row>
      <el-row>
        <el-col :span="22">
          <el-form :inline="true" :model="paramForm">
            <el-form-item label="消息">
              <el-input v-model="paramForm.message" placeholder="消息"></el-input>
            </el-form-item>
            <el-form-item label="项目名">
              <el-input v-model="paramForm.gitProjectName" placeholder="项目名"></el-input>
            </el-form-item>
            <el-form-item label="提交时间">
              <el-date-picker
                ref="regTime"
                v-model="paramForm.commitTime"
                type="daterange"
                format="yyyy-MM-dd"
                align="right"
                unlink-panels
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                style="width:260px;"
              />
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="paramForm.author" placeholder="作者"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit()">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </el-row>
    <el-row :style="{height:mainHeight+'px'}">
      <el-table
        :data="dataset.data"
        :height="gridHeight"
        border
        style="width: 100%"
        v-loading="loading"
      >
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="message" label="消息"></el-table-column>
        <el-table-column prop="branchName" label="分支"></el-table-column>
        <el-table-column prop="gitProjectName" label="项目名"></el-table-column>
        <el-table-column prop="author" label="作者"></el-table-column>
        <el-table-column prop="commitTime" label="提交时间"></el-table-column>
      </el-table>
    </el-row>
    <div class="block">
      <el-pagination
        ref="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 200, 1000]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import queryParam from "@/utils/query";
import { elDateShortCurts } from "@/utils/DateUtil";
import { debuglog } from "util";
import { gitlogModel } from "@/model";

export default {
  name: "gitlog",

  components: {},
  data() {
    return {
      dataset: this.$dataset.createDataStore(
        Object.assign({ returnTotal: true }, gitlogModel)
      ),
      total: 0,
      screenHeight: window.innerHeight,
      paramForm: {
        FOPERATOR: this.$route.query.operator
      },
      currentPage4: 1,
      creationDatas: [],
      loading: false,

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
      let height = this.screenHeight - 60 - 51;
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
    pushData(guid) {
      let param = new queryParam.Param();
      param.createWhereByModel({ FGUID: guid });
      return this.buildPushData(param);
    },
    gotoDetail(guid) {
      let param = new queryParam.Param();
      param.createWhereByModel({ FGUID: guid });

      param.createWhereByModel(this.paramForm, customerModel);
      dataPush.push(this, "customerdetail", param);
    },
    hideHhone(phone) {
      if (phone && phone.length > 3)
        return phone.substring(0, phone.length - 3) + "***";
    },
    onSubmit() {
      const me = this;
      this.dataset.load(this.paramForm);
    },
    handleSizeChange(val) {
      this.dataset.turnPage(1, val);
      //this.onSubmit(1, val);
    },
    handleCurrentChange(val) {
      this.dataset.turnPage(val, this.$refs.pagination.pageSize);
      //this.onSubmit(val, this.$refs.pagination.pageSize);
    }
  },
  mounted() {
    const me = this;
    window.onresize = () => {
      return (() => {
        me.screenHeight = window.innerHeight;
      })();
    };
    //this.dataset = this.$dataset.createDataStore(customerModel)
    this.dataset.on("beginload", param => {
      this.loading = true;
    });

    this.dataset.on("afterload", response => {
      this.loading = false;
      this.total =
        response.outParameter.factRecordSize == -1
          ? 0
          : response.outParameter.factRecordSize;
      console.log(this.total);
    });
    this.onSubmit();
  },
  created() {}
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
