<template>
  <div class="tab-view-container">
    <el-row>
      <el-form :inline="true" :model="paramForm">
        <!-- <el-form-item label="供应商类型">
           <el-select v-model="paramForm.FTYPE" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in supplierType"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="行业">
          <el-select v-model="paramForm.FHY" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in hyTypes"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="规模">
          <el-select v-model="paramForm.FQYGM" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in enterpriseScale"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="paramForm.FNAME" placeholder="名称"></el-input>
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
        <el-table-column label="供应商名称">
          <template slot-scope="scope">
            <a
              style="color:rgb(64, 120, 192);"
              :href="'#/market/supplier/detail?guid='+scope.row.FGUID"
            >{{scope.row.FNAME}}</a>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="FTYPE" label="供应商类型"></el-table-column> -->
        <el-table-column prop="FHY" label="行业"></el-table-column>
        <el-table-column prop="FQYGM" label="企业规模" ></el-table-column>
        <el-table-column prop="FPROVINCE" label="省份"></el-table-column>
        <!-- <el-table-column prop="FCITY" label="城市"></el-table-column> -->
        <el-table-column prop="FCONTACT" label="联系人"></el-table-column>
        <el-table-column label="联系电话">
          <template slot-scope="scope">
            <span>{{hideHhone(scope.row.FCONTACTPHONE)}}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="FGSSH" label="税号"></el-table-column>
        <el-table-column prop="FKHYH" label="开户行"></el-table-column> -->
        <el-table-column prop="FREGTIME" label="注册时间"></el-table-column>
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
import { queryMarketSupplier } from "@/api/market";
import { elDateShortCurts } from "@/utils/DateUtil";
import { debuglog } from "util";
import { supplierModel } from "@/model";
import database from "@/utils/database";
export default {
  name: "supplierquery",
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
      hyTypes: database.hyTypes,
      enterpriseScale: database.enterpriseScale,
      supplierType:database.supplierType,
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
    hideHhone(phone){
      if (phone && phone.length>3)
        return phone.substring(0,phone.length-3)+"***";
    },
    onSubmit(pageIndex, pageSize) {
      this.loading = true;
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      param.returnTotal = true;

      param.createWhereByModel(this.paramForm, supplierModel); // marketModel

      param.where.setPage(
        pageIndex || 1,
        pageSize || this.$refs.pagination.pageSize
      );
      let orders = new queryParam.Orders();
      orders.addDesc("FREGTIME");
      param.setOrders(orders);

      queryMarketSupplier(param).then(response => {
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
