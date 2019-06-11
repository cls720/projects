<template>
  <div class="tab-view-container">
    <el-row>
      <el-form :inline="true" :model="paramForm">
        <el-form-item label="类型">
          <el-select v-model="paramForm.FTYPE" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in kinds"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="行业">
          <el-select v-model="paramForm.FSORT" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in hyTypes"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="paramForm.FNAME" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="paramForm.FOPERATOR" placeholder="作者"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row :style="{height:mainHeight+'px'}">
      <el-table
        :data="creationDatas"
        :height="gridHeight"
        border
        style="width: 100%"
        v-loading="loading"
      >
        <el-table-column type="index" width="50" label="序号"></el-table-column>

        <el-table-column prop="FNAME" label="应用名称"></el-table-column>
        <el-table-column prop="FCOUNTSEE" label="查看次数" width="100"></el-table-column>
        <el-table-column prop="FCOUNTBUY" label="购买次数" width="100"></el-table-column>
        <el-table-column prop="FPRICE" label="售价" width="180"></el-table-column>
        <el-table-column prop="FTYPENAME" label="类型"></el-table-column>
        <el-table-column prop="FSORTNAME" label="行业"></el-table-column>
        <el-table-column prop="FSTATE" label="状态"></el-table-column>
        <el-table-column prop="FVERSION" label="版本号"></el-table-column>
        <el-table-column prop="FOPERATOR" label="作者"></el-table-column>
        <el-table-column prop="FINTIME" label="上架时间"></el-table-column>
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
import { queryMarket } from "@/api/market";
import { elDateShortCurts } from "@/utils/DateUtil";
import { debuglog } from "util";
import { marketModel } from "@/model";

export default {
  name: "marketquery",
  components: {},
  data() {
    return {
      total: 0,
      screenHeight: window.innerHeight,
      paramForm: {
        FOPERATOR: this.$route.query.operator
      },
      currentPage4: 1,
      creationDatas: [],
      loading: false,
      hyTypes: [
        { name: "能源能耗", value: "nynh" },
        { name: "农业", value: "ny" },
        { name: "制造", value: "zz" },
        { name: "矿业", value: "ky" },
        { name: "电商", value: "ds" },
        { name: "数据中心", value: "sjzx" },
        { name: "纺织", value: "fz" },
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
      ]
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
    onSubmit(pageIndex, pageSize) {
      this.loading = true;
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      param.returnTotal = true;

      param.createWhereByModel(this.paramForm, marketModel);

      param.where.setPage(
        pageIndex || 1,
        pageSize || this.$refs.pagination.pageSize
      );
      let orders = new queryParam.Orders();
      orders.addDesc("FINTIME");
      param.setOrders(orders);

      queryMarket(param).then(response => {
        const data = response.dataPack;
        const outParameter = response.outParameter;
        me.creationDatas = data.rows;
        me.total =
          outParameter.factRecordSize == -1 ? 0 : outParameter.factRecordSize;
        me.loading = false;
      });
    },
    handleSizeChange(val) {
      this.onSubmit(1, val);
    },
    handleCurrentChange(val) {
      this.onSubmit(val, this.$refs.pagination.pageSize);
    }
  },
  mounted() {
    const me = this;
    window.onresize = () => {
      return (() => {
        me.screenHeight = window.innerHeight;
      })();
    };
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
