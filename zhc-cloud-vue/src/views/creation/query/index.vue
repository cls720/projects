<template>
  <div class="tab-view-container">
    <el-row>
      <el-form :inline="true" :model="paramForm">
        <el-form-item label="类别">
          <enumselector v-model="paramForm.kind" multiple etype="applicationType"></enumselector>
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
        <el-table-column prop="FNAME" label="名称"></el-table-column>
        <el-table-column prop="optionValue" label="类别" width="180"></el-table-column>
        <el-table-column prop="FOPERATOR" label="作者" width="180"></el-table-column>
        <el-table-column prop="FVER" label="版本" width="180"></el-table-column>
        <el-table-column prop="FWRITETIME" label="时间"></el-table-column>
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
import enumselector from "@/components/EnumSelector";
import queryParam from "@/utils/query";
import { queryCreation } from "@/api/creation";
import { elDateShortCurts } from "@/utils/DateUtil";
import { debuglog } from "util";
import { creationModel } from "@/model";
import database from "@/utils/database";
export default {
  name:"Creation",
  components: {enumselector},
  data() {
    return {
      total: 0,
      screenHeight: window.innerHeight,
      paramForm: {
        FOPERATOR:this.$route.query.operator
      },
      currentPage4: 1,
      creationDatas: [],
      loading: false,
      kinds: database.softKinds
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
    onSubmit(pageIndex, pageSize) {
      this.loading = true;
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      param.returnTotal = true;
      //where.setPage(pageIndex || 1, pageSize || this.$refs.pagination.pageSize);
      // if (this.paramForm.FNAME) where.addEqual("FNAME", this.paramForm.FNAME);
      // if (this.paramForm.kind) where.in("FKIND", this.paramForm.kind);
      // if (this.paramForm.FOPERATOR)
      //   where.addEqual("FOPERATOR", this.paramForm.FOPERATOR);
     
      // param.where = where;
      param.createWhereByModel(this.paramForm,creationModel);
      param.where.setPage(pageIndex || 1, pageSize || this.$refs.pagination.pageSize);
      let orders = new queryParam.Orders();
      orders.addDesc("FWRITETIME")
      param.setOrders(orders)
      queryCreation(param).then(response => {
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
