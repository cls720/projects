<template>
  <div class="developer-main-container" @tagFullscreenChange="onTagFullscreenChange">
    <el-container>
      <el-header style="padding-top:30px;">
        <el-col :xs="24" :sm="24" :lg="9">
          <image-title width="100%" height="30px" :image-url="borderTitleLeft"></image-title>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="6">
          <text-label width="100%" color="#fff" font-size="24">EAP开发者平台驾驶舱</text-label>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="9">
          <image-title width="100%" height="30px" :image-url="borderTitleRight"></image-title>
        </el-col>
      </el-header>
      <el-main>
        <el-col :xs="24" :sm="24" :lg="7">
          <image-title
            :image-url="imageTitle01"
            width="150px"
            height="40px"
            style="margin:5px 0px;"
          >平台创作统计</image-title>
          <div :style="backgroundDiv">
            <bar-chart-ptcz :height="barChartPtczHeight"></bar-chart-ptcz>
          </div>
          <image-title
            :image-url="imageTitle01"
            width="150px"
            height="40px"
            style="margin:5px 0px;"
          >行业统计</image-title>
          <div :style="backgroundDiv">
            <bar-chart-ptcz :height="barChartPtczHeight"></bar-chart-ptcz>
          </div>
          <image-title
            :image-url="imageTitle01"
            width="150px"
            height="40px"
            style="margin:5px 0px;"
          >热门产品</image-title>
          <div :style="backgroundDiv">
            <bar-chart-ptcz :height="barChartPtczHeight"></bar-chart-ptcz>
          </div>
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
import ImageTitle from "@/components/ImageTitle";
import TextLabel from "@/components/TextLabel";
import BarChartPtcz from "./components/BarChartPtcz";

export default {
  name: "DeveloperMain",
  components: {
    ImageTitle,
    TextLabel,
    BarChartPtcz
  },
  props:{
    isTagFullscreen: false
  },
  data() {
    return {
      screenHeight: window.innerHeight,
      borderTitleLeft: "url(" + require("@/images/border-title-left.png") + ")",
      borderTitleRight:
        "url(" + require("@/images/border-title-right.png") + ")",
      imageTitle01: "url(" + require("@/images/title-01.png") + ")",
      backgroundDiv: {
        backgroundImage: "url(" + require("@/images/border-02.png") + ")",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%"
      }
    };
  },
  computed: {
    barChartPtczHeight() {
      let height = this.screenHeight - 100 - 150;
      height = Math.floor(height / 3);
      return height + "px";
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        that.screenHeight = window.innerHeight;
      })();
    };
  },
  methods: {
    onTagFullscreenChange(isTagFullscreen) {
      console.log("eap:" + isTagFullscreen);
      this.isTagFullscreen = isTagFullscreen;      
    }
  }
};
// "min-height": "calc(10vh)"
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.developer-main-container {
  background-color: rgb(12, 22, 54);
  min-height: inherit;
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }

  .text-indent-10 {
    text-indent: 10px;
  }
}

.textIndent10 {
  text-indent: 10px;
}
</style>