<template>
  <div class="developer-main-container">
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
      <el-main ref="elMain">
        <el-col :xs="24" :sm="24" :lg="6">
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
          >行业销售统计</image-title>
          <div :style="backgroundDiv">
            <pie-chart-hyxs :height="barChartPtczHeight"></pie-chart-hyxs>
          </div>
          <image-title
            :image-url="imageTitle01"
            width="150px"
            height="40px"
            style="margin:5px 0px;"
          >热门产品</image-title>
          <div :style="backgroundDiv">
            <bar-chart-rmcp :height="barChartPtczHeight"></bar-chart-rmcp>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="chart-wrapper">
            六、实时用户地图（中国地图-》深度省份）
            总用户数，在线用户（点亮）
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="6">
          <image-title
            :image-url="imageTitle01"
            width="150px"
            height="40px"
            style="margin:5px 0px;"
          >微服务统计</image-title>
          <div :style="backgroundDiv">
            <composite-chart-wfw :height="barChartPtczHeight"></composite-chart-wfw>
          </div>
          <image-title
            :image-url="imageTitle01"
            width="150px"
            height="40px"
            style="margin:5px 0px;"
          >用户类型</image-title>
          <div :style="backgroundDiv">
            <funnel-chart-yhlx :height="barChartPtczHeight"></funnel-chart-yhlx>
          </div>
          <image-title
            :image-url="imageTitle01"
            width="150px"
            height="40px"
            style="margin:5px 0px;"
          >在线用户</image-title>
          <div :style="backgroundDiv">
            <on-line-user :height="onLineUserHeight"></on-line-user>
          </div>
        </el-col>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ImageTitle from "@/components/ImageTitle";
import TextLabel from "@/components/TextLabel";
import BarChartPtcz from "./components/BarChartPtcz";
import PieChartHyxs from "./components/PieChartHyxs";
import BarChartRmcp from "./components/BarChartRmcp";
import CompositeChartWfw from "./components/CompositeChartWfw";
import FunnelChartYhlx from "./components/FunnelChartYhlx";
import OnLineUser from "./components/OnLineUser";

export default {
  name: "DeveloperMain",
  components: {
    ImageTitle,
    TextLabel,
    BarChartPtcz,
    PieChartHyxs,
    BarChartRmcp,
    CompositeChartWfw,
    FunnelChartYhlx,
    OnLineUser
  },
  props: {
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
    mainHeight() {
      let height = this.screenHeight - 100 - 150;
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84;
      }
      return height;
    },
    barChartPtczHeight() {
      return Math.floor(this.mainHeight / 3) + "px";
    },
    onLineUserHeight() {
      return Math.floor(this.mainHeight / 3);
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
  watch: {
    screenHeight(val) {
      if (!this.timer) {
        this.screenHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  },
  methods: {}
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