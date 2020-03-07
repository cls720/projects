<template>
  <div class="power-design">
    <el-row :gutter="'10'">
      <el-col :span="20">
        <el-steps :active="0" simple>
          <el-step title="选择预分配功能" icon="el-icon-edit"></el-step>
          <el-step title="选择分配对象" icon="el-icon-upload"></el-step>
          <el-step title="分配数据权限、操作权限" icon="el-icon-picture"></el-step>
        </el-steps>
      </el-col>
      <el-col :span="4" style="text-align:right">
        <el-button
          style="width:95%;font-size:16px;"
          type="primary"
          icon="el-icon-s-claim"
          :disabled="isSaveDisabled"
        >保存</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top:10px;">
      <el-col span="6">
        <el-row>
          <span style="line-height:25px;text-align:center">已选功能列表</span>
        </el-row>
        <el-row>
          <el-input>
            <el-button slot="append" icon="el-icon-search" @click="doResFilter()"></el-button>
            <el-divider slot="append" direction="vertical"></el-divider>
            <el-button slot="append" icon="el-icon-edit" @click="doResSelect()"></el-button>
          </el-input>
        </el-row>
        <el-table :data="resData" :show-header="false" border style="width: 100%">
          <el-table-column prop="resPath" label="功能路径"></el-table-column>
        </el-table>
      </el-col>
      <el-col span="4"></el-col>
      <el-col span="14"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "power-assign",
  computed: {},
  data() {
    return {
      isSaveDisabled: true,
      resKey: "",
      resData: [
        { resPath: "系统管理/用户管理" },
        { resPath: "系统管理/菜单管理" }
      ]
    };
  },
  methods: {
    doResFilter() {
      debugger;
      alert(3);
    },
    doResSelect() {
      alert(4);
    }
  }
};
</script>

<style lang="scss" scoped>
.power-design {
  padding: 10px;
}
</style>