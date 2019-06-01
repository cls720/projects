<template>
  <div class="market-detail">
    <h2>{{detail.FNAME}}</h2>
    <el-row>
      <el-col :span="12">
        <div class="img-content">
          <img class="img" :src="parseImg(detail.FCOVER)">
        </div>

        <div class="form-content">
          <el-form size="mini">
            <el-form-item label="版本">{{detail.FVERSION}}</el-form-item>
            <el-form-item label="售价">{{formatPrice(detail.FPRICE)}}</el-form-item>
            <el-form-item label="分类">{{detail.FTYPENAME}}</el-form-item>
            <el-form-item label="行业">{{detail.FSORTName}}</el-form-item>
            <el-form-item label="制作人">{{detail.FOPERATOR}}</el-form-item>
            <el-form-item label="上架时间">{{detail.FINTIME}}</el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="qrcode" v-if="detail.FANDROIDQR">
          <div class="title">android二维码</div>
          <img :src="parseImg(detail.FANDROIDQR)" width="138px" height="138px">
        </div>
        <div class="qrcode" v-if="detail.FIPHONEQR">
          <div class="title">ios二维码</div>
          <img :src="parseImg(detail.FIPHONEQR)" width="138px" height="138px">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <p v-html="parseMarkDown(detail.FNOTE)" class="node"></p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { queryMarket } from "@/api/market";
import queryParam from "@/utils/query";
import marked from "marked";
export default {
  data() {
    return {
      detail: {}
    };
  },
  mounted() {
    const me = this;
    window.onresize = () => {
      return (() => {
        me.screenHeight = window.innerHeight;
      })();
    };
  },
  methods: {
    formatPrice(price) {
      if (price == 0) return "免费";
      else return "￥" + price;
    },
    parseMarkDown(str) {
      if (str) return marked(str);
      return "<p></p>";
    },
    parseImg(str) {
      if (!str) {
        return "";
      }
      return (
        "http://eap.histron.cn:90/amrept-web/checkPhoto/photo.do?path=" +
        str.split(";")[2]
      );
    },
    loadDetail() {
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      where.addEqual("FGUID", this.$route.query.id);
      param.where = where;
      queryMarket(where).then(response => {
        const data = response.dataPack;
        me.detail = data.rows[0];
      });
    }
  },
  created() {
    this.loadDetail();
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.market-detail {
  padding: 10px;
  font-family: "Microsoft YaHei", Helvetica, "Meiryo UI", "Malgun Gothic",
    "Segoe UI", "Trebuchet MS", "Monaco", monospace, Tahoma, STXihei, "华文细黑",
    STHeiti, "Helvetica Neue", "Droid Sans", "wenquanyi micro hei", FreeSans,
    Arimo, Arial, SimSun, "宋体", Heiti, "黑体", sans-serif;
  //background-color: rgb(240, 242, 245);
  .img-content {
    float: left;
    width: 250px;
    height: 250px;
  }
  .img {
    width: 250px;
    height: 250px;
  }
  .form-content {
    float: left;
    margin-left: 10px;
    width: 460px;
    height: 260px;
  }
  .qrcode {
    text-align: center;
    width: 138px;
    height: 138px;
    .title {
      padding: 5px 0;
    }
  }
  .node {
    line-height: 28px;
  }
}
</style>
