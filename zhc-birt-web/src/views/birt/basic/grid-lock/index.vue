<template>
  <div>
    <birt-page :layout="layout" :style="pageStyle" />
<!-- 
    <el-container>
      <el-aside width="200px">
        <el-row style="height:50px;border:1px solid red"></el-row>
        <el-row></el-row>
      </el-aside>
      <el-main>
        <el-container>
          <el-header style="height:50px">
            <div style="width:1200px;;border:1px solid red">bbbbbbbbbbbbbbbbbb</div>
          </el-header>
          <el-main style="height:300px;">
            <div style="width:1200px;height:600px;border:1px solid blue">aaaaaaaaaaaaaaaaaaa</div>
          </el-main>
        </el-container>
      </el-main>
    </el-container> -->
  </div>
</template>

<script>
import BirtPage from "@/components/BirtPage";
import SlashHeader from "@/components/ViewStyle/SlashHeader";
import { gridLockModel } from "./gridLock.js";

export default {
  name: "gridLockBirt",
  components: { BirtPage, SlashHeader },
  data() {
    return {
      pageStyle: gridLockModel.style,
      layout: gridLockModel.layout
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  padding: 0px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0px;
}

body > .el-container {
  margin-bottom: 40px;
  padding: 0px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
  padding: 0px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
  padding: 0px;
}
</style>