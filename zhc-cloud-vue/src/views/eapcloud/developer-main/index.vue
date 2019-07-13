<template>
  <div class="developer-main-container">
    <el-container>
      <el-header style="padding-top:30px;">
        <el-col :xs="24" :sm="24" :lg="9">
          <image-title :image-url="borderTitleLeft" width="100%" height="30px"/>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="6">
          <text-label width="100%" color="#fff" font-size="24">EAP开发者平台驾驶舱</text-label>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="9">
          <image-title :image-url="borderTitleRight" width="100%" height="30px"/>
        </el-col>
      </el-header>
      <el-main ref="elMain">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :lg="6">
            <image-title
              :image-url="imageTitle01"
              width="150px"
              height="40px"
              style="margin:5px 0px;"
            >
              <a href="#/market/market-stat" style="color:#fff">平台市场统计</a>
            </image-title>
            <div :style="backgroundDiv">
              <bar-chart-ptcz :height="barChartPtczHeight"/>
            </div>
            <image-title
              :image-url="imageTitle01"
              width="150px"
              height="40px"
              style="margin:5px 0px;"
            >行业销售统计</image-title>
            <div :style="backgroundDiv">
              <pie-chart-hyxs :height="barChartPtczHeight"/>
            </div>
            <image-title
              :image-url="imageTitle01"
              width="150px"
              height="40px"
              style="margin:5px 0px;"
            >热门产品</image-title>
            <div :style="backgroundDiv">
              <bar-chart-rmcp :height="barChartPtczHeight"/>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="12">
            <div :style="backgroundDiv" style="margin-top:30px;">
              <div class="china-map-title">
                <a href="#/user/user-online-stat" style="color:#fff">在线用户：</a>
                <a v-if="isDeepProvince" @click="backToChina()">中国</a>
                <span v-else>中国</span>

                <span class="china-map-online-count">({{ zxyhChinaCount }})</span>
                <span v-if="isDeepProvince">
                  / {{ curtProvinceText }}
                  <span
                    class="china-map-online-count"
                  >({{ zxyhProvinceCount }})</span>
                </span>
              </div>
              <china-map-zxyh
                ref="chinaMapZxyh1"
                :height="chinaMapServerHeight"
                :store-zxyh="storeZxyh"
                :in-line-users="inLineUsers"
                :out-line-users="outLineUsers"
                width="100%"
                @deepProvince="onDeepProvince"
              />
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="6">
            <image-title
              :image-url="imageTitle01"
              width="150px"
              height="40px"
              style="margin:5px 0px;"
            >
              <a href="#/boot-service/stat" style="color:#fff">微服务统计</a>
            </image-title>
            <div :style="backgroundDiv">
              <composite-chart-wfw :height="barChartPtczHeight"/>
            </div>
            <image-title
              :image-url="imageTitle01"
              width="150px"
              height="40px"
              style="margin:5px 0px;"
            >
              <a href="#/user/user-type-stat" style="color:#fff">用户类型</a>
            </image-title>
            <div :style="backgroundDiv">
              <funnel-chart-yhlx :height="barChartPtczHeight"/>
            </div>
            <image-title
              :image-url="imageTitle01"
              width="150px"
              height="40px"
              style="margin:5px 0px;"
            >
              <a href="#/user/user-online-stat" style="color:#fff">在线用户</a>
            </image-title>
            <div :style="backgroundDiv">
              <on-line-user :height="onLineUserHeight" :store-zxyh="storeZxyh"/>
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
import BarChartPtcz from "./components/BarChartPtcz";
import PieChartHyxs from "./components/PieChartHyxs";
import BarChartRmcp from "./components/BarChartRmcp";
import ChinaMapZxyh from "./components/ChinaMapZxyh";
import CompositeChartWfw from "./components/CompositeChartWfw";
import FunnelChartYhlx from "./components/FunnelChartYhlx";
import OnLineUser from "./components/OnLineUser";
import queryParam from "@/utils/query";
import { randomCity } from "@/utils/MockUtil.js";
import { onLine, inLine, outLine } from "@/api/log-login";
import { debuglog } from "util";

export default {
  name: "DeveloperMain",
  components: {
    ImageTitle,
    TextLabel,
    BarChartPtcz,
    PieChartHyxs,
    BarChartRmcp,
    ChinaMapZxyh,
    CompositeChartWfw,
    FunnelChartYhlx,
    OnLineUser
  },
  props: {
    isTagFullscreen: false,   
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
      },
      isDeepProvince: false,
      curtProvinceText: "",
      storeZxyh: [],
      inLineUsers: [],
      outLineUsers: []
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
    },
    chinaMapServerHeight() {
      let height = this.screenHeight - 100 - 94;
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84;
      }
      return height + "px";
    },
    // 中国在线用户数
    zxyhChinaCount() {
      return this.storeZxyh.length;
    },
    // 当前深度省份在线用户数
    zxyhProvinceCount() {
      return this.storeZxyh.filter(
        x => x.userProvince === this.curtProvinceText
      ).length;
    }
  },
  watch: {
    screenHeight(val) {
      if (!this.timer) {
        this.screenHeight = val;
        this.timer = true;
        const me = this;
        setTimeout(function() {
          me.timer = false;
        }, 400);
      }
    }
  },
  mounted() {
    const me = this;
    window.onresize = () => {
      return (() => {
        me.screenHeight = window.innerHeight;
      })();
    };

    // 获取在线用户数据
    this.queryInLineUser();
    this.inLineInterval = setInterval(() => {
      this.queryInLineUser(4);
    }, 4000);
    this.outLineInterval = setInterval(() => {
      this.queryOutLineUser(6);
    }, 6000);    
  },
  methods: {
    backToChina() {
      this.$refs.chinaMapZxyh1.doChartDblckick();
    },
    onDeepProvince(pNameText) {
      this.isDeepProvince = pNameText !== "中国";
      this.curtProvinceText = pNameText;
    },
    /**
     * lastSeconds 查询近几秒登录数据，不传查所有在线数据
     */
    queryInLineUser(lastSeconds) {
      const me = this;
      // inLine(lastSeconds).then(response => {
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      if (lastSeconds) {
        inLine(where).then(response => {
          const data = response.dataPack;
          me.storeZxyh = [...this.storeZxyh, ...data.rows];
          me.showUserInterval(data.rows, true);
        });
      } else {
        onLine(where).then(response => {
          const data = response.dataPack;
          me.storeZxyh = data.rows;
        });
      }
    },
    queryOutLineUser(lastSeconds) {
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();

      outLine(where).then(response => {
        const data = response.dataPack;
        if (data.rows && data.rows.length > 0) {
          data.rows.forEach(item => {
            for (var i = this.storeZxyh.length - 1; i >= 0; i--) {
              if (item.userName === this.storeZxyh[i].userName) {
                this.storeZxyh.splice(i, 1);
                break;
              }
            }
          });
          me.showUserInterval(data.rows, false, 1);
        }
      });
    },
    showUserInterval(showUsers, isInLine, showCount) {
      showCount = showCount || 2;
      let i = 0;
      let l = showUsers.length;
      let showInterval = setInterval(() => {
        let step = Math.floor(Math.random() * showCount + 1);
        if (i < showUsers.length) {
          if (isInLine) {
            this.inLineUsers = showUsers.slice(i, i + step);
          } else {
            this.outLineUsers = showUsers.slice(i, i + step);
          }
        } else if (i === showUsers.length) {
          setTimeout(() => {
            if (isInLine) {
              this.inLineUsers = [];
            } else {
              this.outLineUsers = [];
            }
          }, 3000);
        } else {
          clearInterval(showInterval);
        }
        i += step;
      }, 2000);
    }
  },
  beforeDestroy() {    
    clearInterval(this.inLineInterval);
    clearInterval(this.outLineInterval);
  }
};
// "min-height": "calc(10vh)"
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.developer-main-container {
  background-color: rgb(12, 22, 54);
  min-height: inherit;

  .china-map-title {
    font-size: 20px;
    color: #fff;
    padding: 20px;
  }

  .china-map-online-count {
    color: #e6a23c;
  }
}
</style>
