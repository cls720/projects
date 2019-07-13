<template>
  <div class="tab-view-container">
    <el-dialog title="详情" :visible.sync="isShowDetail">
      <detailForm :form="currentData"></detailForm>
    </el-dialog>
    <el-row>
      <el-form :inline="true" :model="paramForm">
        <el-form-item label="请求地址">
          <el-input
            v-model="paramForm.FURI"
            placeholder="请求地址"
            @keyup.enter.native="onSubmit(null,null)"
          ></el-input>
        </el-form-item>
        
        <el-form-item label="异常标题">
          <el-input
            v-model="paramForm.FERRORTITLE"
            placeholder="异常标题"
            @keyup.enter.native="onSubmit(null,null)"
          ></el-input>
        </el-form-item>

        <el-form-item label="执行方法名">
          <el-input
           style="width:110px"
            v-model="paramForm.FACTION"
            placeholder="执行方法名"
            @keyup.enter.native="onSubmit(null,null)"
          ></el-input>
        </el-form-item>

        <el-form-item label="异常编码">
          <el-input
           style="width:100px"
            v-model="paramForm.FERRORID"
            placeholder="异常编码"
            @keyup.enter.native="onSubmit(null,null)"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input
            v-model="paramForm.FUSERNAME"
            placeholder="用户名"
            style="width:100px"
            @keyup.enter.native="onSubmit(null,null)"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(null,null)">查询</el-button>
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
        <el-table-column label="异常标题">
          <template slot-scope="scope">
            <a style="color:rgb(64, 120, 192);" @click="showDetail(scope.row)">{{scope.row.FERRORTITLE}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="FURI" label="请求地址"></el-table-column>
        <el-table-column prop="FACTIONPARAMS" label="输入参数"></el-table-column>
        <el-table-column prop="FKIND" label="请求后缀"></el-table-column>
        <el-table-column prop="FCLASSNAME" label="执行类名"></el-table-column>
        <el-table-column prop="FACTION" label="执行方法名"></el-table-column>
        <el-table-column prop="FERRORID" label="异常编码"></el-table-column>
        <el-table-column prop="FHOST" label="服务器地址"></el-table-column>
        <el-table-column prop="FUSERNAME" label="用户名"></el-table-column>
        <el-table-column prop="FTOMCATID" label="tomcatID"></el-table-column>
        <el-table-column prop="FWRITETIME" label="时间"></el-table-column>
      </el-table>
    </el-row>
    <div class="block">
      <el-pagination
        ref="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 50, 200, 1000]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import queryParam from "@/utils/query";
import detailForm from "./detail";
import { queryErrorService } from "@/api/log-service";
import { elDateShortCurts } from "@/utils/DateUtil";
import { debuglog } from 'util';

export default {
  name: "UserQuery",
  components: { detailForm },
  data() {
    return {
      currentData: {},
      isShowDetail: false,
      loading: false,
      screenHeight: window.innerHeight,
      paramForm: {},
      pageNum: 1,
      pageSize: 20,
      total: 0,
      creationDatas: []
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
    showDetail(data) {
      this.currentData = data;
      this.isShowDetail=true;
    },
    onSubmit(pageIndex, pageSize) {
      this.loading = true;
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      param.returnTotal = true;

      param.createWhereByModel(this.paramForm); // marketModel

      param.where.setPage(
        pageIndex || 1,
        pageSize || this.$refs.pagination.pageSize
      );
      let orders = new queryParam.Orders();
      orders.addDesc("FWRITETIME");
      param.setOrders(orders);

      queryErrorService(param).then(response => {
        const data = response.dataPack;
        const outParameter = response.outParameter;
        me.creationDatas = data.rows;
        me.total =
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
    this.onSubmit();
    window.onresize = () => {
      return (() => {
        me.screenHeight = window.innerHeight;
      })();
    };
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
