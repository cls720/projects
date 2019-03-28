<template>
  <div class="developer-main-container">
    <el-container>
      <el-header>
        <el-col :xs="24" :sm="24" :lg="9">
          <div class="chart-wrapper">-》</div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="6">
          <div class="chart-wrapper">EAP开发者平台驾驶舱</div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="9">
          <div class="chart-wrapper">《-</div>
        </el-col>
      </el-header>
      <el-main>
        <el-col :xs="24" :sm="24" :lg="7">
          <div :style="backgroundDiv">
            <bar-chart-ptcz height="200px"></bar-chart-ptcz>
          </div>
          <br>
          <div :style="backgroundDiv">
            <bar-chart-ptcz></bar-chart-ptcz>
          </div>
          <br>
          <div class="chart-wrapper">热门产品</div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="10">
          <div class="chart-wrapper">
            六、实时用户地图（中国地图-》深度省份）
            总用户数，在线用户（点亮）
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="7">
          <div class="chart-wrapper">微服务统计</div>
          <div class="chart-wrapper">用户类型（金字塔）</div>
          <div class="chart-wrapper">实时用户（网格）</div>
        </el-col>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import BarChartPtcz from "./components/BarChartPtcz";

export default {
  name: "DeveloperMain",
  components: {
    BarChartPtcz
  },
  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("@/images/border-02.png") + ")",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%"
      }
    };
  },
  computed: {},
  created() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.developer-main-container {
  padding: 32px;
  background-color: rgb(12, 22, 54);
  min-height: inherit;
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>