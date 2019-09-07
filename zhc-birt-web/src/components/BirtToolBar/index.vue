<template>
  <div class="no-print zhc-birt-print-bar">
    <el-button-group>
      <el-button icon="el-icon-printer" @click="doPrint()">打印</el-button>
      <el-dropdown>
        <el-button>
          输出
          <i class="el-icon-download el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>PDF</el-dropdown-item>
          <el-dropdown-item>Excel</el-dropdown-item>
          <el-dropdown-item>Word</el-dropdown-item>
          <el-dropdown-item>图片</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-button-group>
  </div>
</template>

<script>
import print from "print-js";

export default {
  name: "BirtToolBar",
  data() {
    return {};
  },
  methods: {
    doPrint() {
      print("print_div", "html");
    }
  }
};
</script>

<style lang="scss" scoped>
.zhc-birt-print-bar {
  text-align: right;
  padding: 10px;
}
</style>