<template>
  <div class="detail">
    <el-card class="card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div>
        <el-form :model="form">
          <div class="detailitem">
            <el-form-item label="供应商名称">{{form.FNAME}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="供应商类型">{{form.FTYPE}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="行业">{{form.FHY}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="企业规模">{{form.FQYGM}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="联系人">{{form.FCONTACT}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="联系电话">{{hideHhone(form.FCONTACTPHONE)}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="省份">{{form.FPROVINCE}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="城市">{{form.FCITY}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="主代理品牌">{{form.FZDLPP}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="注册时间">{{form.FREGTIME}}</el-form-item>
          </div>
          <div>
            <el-form-item label="详细地址">{{form.FADDRESS}}</el-form-item>
          </div>
        </el-form>
      </div>
    </el-card>
    <el-card class="card">
      <div slot="header" class="clearfix">
        <span>财务信息</span>
      </div>
      <div>
        <el-form :model="form">
          <div class="detailitem">
            <el-form-item label="统一社会信用代码">{{form.FTYSHXYDM}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="附件">{{form.FFJ}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="开户银行">{{form.FKHYH}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="开户名称">{{form.FKHMC}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="银行账号">{{form.FYHZH}}</el-form-item>
          </div>
          <div class="detailitem">
            <el-form-item label="公司税号">{{form.FGSSH}}</el-form-item>
          </div>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { queryMarketSupplier } from "@/api/market";
import queryParam from "@/utils/query";
export default {
  components: {},
  data() {
    return {
      form: {}
    };
  },
  model: {
    prop: "value",
    event: "valuechange"
  },
  props: {
    value: {
      type: Object
    }
  },

  computed: {},
  watch: {},
  methods: {
    hideHhone(phone){
      if (phone && phone.length>3)
        return phone.substring(0,phone.length-3)+"***";
    },
  },
  mounted() {
    let me = this;
    let guid = this.$route.query.guid;
    let param = new queryParam.Param();
    param.createWhereByModel({ FGUID: guid }, null); // marketModel

    queryMarketSupplier(param).then(response => {
      const data = response.dataPack;
      if (data.rows.length > 0) me.form = data.rows[0];
      me.loading = false;
    });
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.detail {
  .card {
    margin: 5px 5px;
  }
  .detailitem {
    float: left;
    width: 50%;
  }
}
</style>

