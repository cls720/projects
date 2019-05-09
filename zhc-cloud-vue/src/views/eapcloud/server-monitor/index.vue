<template>
  <div class="developer-main-container">
    <el-container>
      <el-header style="padding-top:20px;">
        <el-col :xs="24" :sm="24" :lg="24">
          <text-label width="100%" color="#fff" font-size="24">EAP服务器运行监控</text-label>
        </el-col>
      </el-header>
      <el-main ref="elMain">
        <el-row :gutter="15">
          <el-col :xs="24" :sm="24" :lg="14">
            <div :style="[backgroundDiv,{height:chinaMapServerHeight}]">
              <china-map-jk></china-map-jk>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="10">
            <image-title
              :image-url="imageTitle01"
              width="200px"
              height="40px"
              style="margin:5px 0px;"
            >多宝山--安全生产</image-title>
            <div :style="backgroundDiv">
              <dynamic-chart-cpu></dynamic-chart-cpu>
              <dynamic-chart-memory></dynamic-chart-memory>
              <box-cards></box-cards>
            </div>
            <image-title
              :image-url="imageTitle01"
              width="150px"
              height="40px"
              style="margin:5px 0px;"
            >告警时间轴</image-title>
            <div :style="[backgroundDiv,{height:warningTimeHeight}]">
              <warning-time-line/>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ImageTitle from "@/components/ImageTitle";
import TextLabel from "@/components/TextLabel";
import ChinaMapJk from "./components/ChinaMapJk";
import DynamicChartCpu from "./components/DynamicChartCpu";
import DynamicChartMemory from "./components/DynamicChartMemory";
import BoxCards from "./components/BoxCards";
import WarningTimeLine from "./components/WarningTimeLine";

export default {
  name: "ServerMonitor",
  components: {
    ImageTitle,
    TextLabel,
    ChinaMapJk,
    DynamicChartCpu,
    DynamicChartMemory,
    BoxCards,
    WarningTimeLine
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
        backgroundImage: "url(" + require("@/images/border-01.png") + ")",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%"
      }
    };
  },
  computed: {
    mainHeight() {
      let height = this.screenHeight - 100 - 100;
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84;
      }
      return height;
    },
    chinaMapServerHeight() {
      let height = this.screenHeight - 100;
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84;
      }
      return height + "px";
    },
    warningTimeHeight() {
      return this.mainHeight - 320 + "px";
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
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.developer-main-container {
  background-color: rgb(16, 32, 57);
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