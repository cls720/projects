<template>
  <div class="tab-view-container">
    <el-row>
      <el-form :inline="true" :model="paramForm">
        <el-form-item label="订单类型">
          <enumselector v-model="paramForm.FORDERTYPE" multiple etype="ys_orderType"></enumselector>
        </el-form-item>
        <el-form-item label="行业">
           <enumselector v-model="paramForm.FINDUSTRY" multiple etype="industryType"></enumselector>
        </el-form-item>
        <el-form-item label="付款方式">
          <enumselector v-model="paramForm.FPAYMETHOD" multiple etype="ys_payType"></enumselector>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="paramForm.FPRONAME" placeholder="名称"></el-input>
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
        <el-table-column prop="FPRONAME" label="产品名称" ></el-table-column>
        <!-- <el-table-column prop="FPROMODEL" label="产品型号" width="100"></el-table-column> -->
        <el-table-column prop="FORDERTYPE" label="订单类型" width="100" align="center"></el-table-column>
        <el-table-column prop="FMONEY" label="金额" width="80" align="right"></el-table-column>
        <el-table-column prop="FNUMBER" label="数量" width="60" align="right"></el-table-column>
        <el-table-column prop="FPAYMONEY" label="实付金额" width="90" align="right"></el-table-column>
        <el-table-column prop="FCUSTOMER" label="客户" align="right"></el-table-column>
        <el-table-column prop="FSUPPLIER" label="供应商" align="right"></el-table-column>
        <el-table-column prop="FORDERSTATE" label="订单状态" width="100" align="center"></el-table-column>
        <el-table-column prop="FPAYMETHOD" label="付款方式" width="100" align="center"></el-table-column>
        <el-table-column prop="FORDERTIME" width="200" label="订单时间"></el-table-column>
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
import { queryMarketOrder } from "@/api/market";
import { elDateShortCurts } from "@/utils/DateUtil";
import { debuglog } from "util";
import { marketOrderModel } from "@/model";
import database from "@/utils/database";
import enumselector from "@/components/EnumSelector";
export default {
  name: "marketorderquery",
  components: {enumselector},
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
      hyTypes: database.hyTypes,
      orderType: database.orderType,
      payType: database.payType
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
    hideHhone(phone) {
      if (phone && phone.length > 3)
        return phone.substring(0, phone.length - 3) + "***";
    },
    onSubmit(pageIndex, pageSize) {
      this.loading = true;
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      param.returnTotal = true;

      param.createWhereByModel(this.paramForm, marketOrderModel); // marketModel

      param.where.setPage(
        pageIndex || 1,
        pageSize || this.$refs.pagination.pageSize
      );
      let orders = new queryParam.Orders();
      orders.addDesc("FORDERTIME");
      param.setOrders(orders);

      queryMarketOrder(param).then(response => {
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
    this.$dataSet.createDataStore(marketOrderModel)


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
