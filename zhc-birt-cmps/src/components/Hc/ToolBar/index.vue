<template>
  <div class="zhc-birt-tool-bar">
    <el-button-group>
      <slot></slot>
      <el-button icon="el-icon-printer" @click="alert('print')">打印</el-button>
      <el-dropdown>
        <el-button>
          输出
          <i class="el-icon-download el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="alert('print pdf')">PDF</span>
          </el-dropdown-item>
          <el-dropdown-item>Excel</el-dropdown-item>
          <el-dropdown-item>Word</el-dropdown-item>
          <el-dropdown-item>图片</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-button-group>
  </div>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";

export default {
  name: "hc-tool-bar",
  extends: HcCmpt, 
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>