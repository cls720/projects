<template>
  <div class="detail">
    <el-form :model="form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="异常标题">{{form.FERRORTITLE}}</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="异常编码">{{form.FERRORID}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="请求地址">{{form.FURI}}</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="输入参数">{{form.FACTIONPARAMS}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="执行类名">{{form.FCLASSNAME}}</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="执行方法名">{{form.FACTION}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="服务器地址">{{form.FHOST}}</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="请求后缀">{{form.FKIND}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="用户名">{{form.FUSERNAME}}</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="tomcatID">{{form.FTOMCATID}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="时间">{{form.FWRITETIME}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="异常信息">{{form.FERRORMSG}}</el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      //form: {}
    };
  },
  model: {
    prop: "value",
    event: "valuechange"
  },
  props: {
    form: Object,
    value: {
      type: Object
    }
  },

  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>
<style rel="stylesheet/scss" lang="scss">
.detail {
  height: 500px;
  .detailitem {
    float: left;
    width: 50%;
  }
  .detailrowitem {
    width: 100%;
  }
}
</style>

