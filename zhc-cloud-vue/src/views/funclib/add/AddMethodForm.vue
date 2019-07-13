<template>
  <el-form
    class="method-form"
    ref="form"
    :model="methodModel_data"
    label-width="100px"
    size="small"
  >
    <el-form-item label="引用类">
      <el-col :span="12">
        <el-input v-model="methodModel_data.refClassImport">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-form-item label=" . " label-width="20px" style="margin-bottom:0px;">
          <el-input v-model="methodModel_data.refClassName" :disabled="true"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label=" . " label-width="20px" style="margin-bottom:0px;">
          <el-input v-model="methodModel_data.refMethodName" :disabled="true"></el-input>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="引用表达式">
      <el-input v-model="methodModel_data.refExpression"></el-input>
    </el-form-item>

    <el-row>
      <el-col :span="12">
        <el-form-item label="类名称">
          <el-input v-model="methodModel_data.className"></el-input>
        </el-form-item>
        <el-form-item label="方法名称">
          <el-input v-model="methodModel_data.methodName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="类中文名称">
          <el-input v-model="methodModel_data.classNameCn"></el-input>
        </el-form-item>
        <el-form-item label="方法中文名称">
          <el-input v-model="methodModel_data.methodNameCn"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="方法注释">
      <el-input
        type="textarea"
        v-model="methodModel_data.showdoc"
        :autosize="{ minRows: 6, maxRows: 12}"
      ></el-input>
    </el-form-item>
    <el-form-item label="调用表达式">
      <el-input v-model="methodModel_data.expression"></el-input>
    </el-form-item>
    <el-form-item label="索引关键字">
      <el-input v-model="methodModel_data.searchKeyWorld"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input
        type="textarea"
        v-model="methodModel_data.note"
        :autosize="{ minRows: 2, maxRows: 4}"
      ></el-input>
    </el-form-item>
    <el-row>
      <el-col :span="12">
        <el-form-item label="制单人">
          <el-input v-model="methodModel_data.operator"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="制单时间">
          <el-input v-model="methodModel_data.writeTime"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "AddMethodForm",
  components: {},
  props: {
    methodModel: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      methodModel_data: this.methodModel
    };
  },
  methods: {
    onSubmit() {}
  },
  mounted() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.method-form {
  .el-form-item--small.el-form-item {
    margin-bottom: 5px;
  }
}
</style>
