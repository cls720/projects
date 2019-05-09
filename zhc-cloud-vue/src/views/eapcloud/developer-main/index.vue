<template>
  <div class="developer-main-container">
    <el-container>
      <el-header style="padding-top:30px;">
        <el-col :xs="24" :sm="24" :lg="9">
          <image-title :image-url="borderTitleLeft" width="100%" height="30px" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="6">
          <text-label width="100%" color="#fff" font-size="24">EAP开发者平台驾驶舱</text-label>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="9">
          <image-title :image-url="borderTitleRight" width="100%" height="30px" />
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
            >平台创作统计</image-title>
            <div :style="backgroundDiv">
              <bar-chart-ptcz :height="barChartPtczHeight" />
            </div>
            <image-title
              :image-url="imageTitle01"
              width="150px"
              height="40px"
              style="margin:5px 0px;"
            >行业销售统计</image-title>
            <div :style="backgroundDiv">
              <pie-chart-hyxs :height="barChartPtczHeight" />
            </div>
            <image-title
              :image-url="imageTitle01"
              width="150px"
              height="40px"
              style="margin:5px 0px;"
            >热门产品</image-title>
            <div :style="backgroundDiv">
              <bar-chart-rmcp :height="barChartPtczHeight" />
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
                  <span class="china-map-online-count">({{ zxyhProvinceCount }})</span>
                </span>
              </div>
              <china-map-zxyh
                ref="chinaMapZxyh1"
                :height="chinaMapServerHeight"
                :store-zxyh="storeZxyh"
                :in-line-users="inLineUsers"
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
            >微服务统计</image-title>
            <div :style="backgroundDiv">
              <composite-chart-wfw :height="barChartPtczHeight" />
            </div>
            <image-title
              :image-url="imageTitle01"
              width="150px"
              height="40px"
              style="margin:5px 0px;"
            >用户类型</image-title>
            <div :style="backgroundDiv">
              <funnel-chart-yhlx :height="barChartPtczHeight" />
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
              <on-line-user :height="onLineUserHeight" :store-zxyh="storeZxyh" />
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ImageTitle from '@/components/ImageTitle'
import TextLabel from '@/components/TextLabel'
import BarChartPtcz from './components/BarChartPtcz'
import PieChartHyxs from './components/PieChartHyxs'
import BarChartRmcp from './components/BarChartRmcp'
import ChinaMapZxyh from './components/ChinaMapZxyh'
import CompositeChartWfw from './components/CompositeChartWfw'
import FunnelChartYhlx from './components/FunnelChartYhlx'
import OnLineUser from './components/OnLineUser'
import { randomCity } from '@/utils/MockUtil.js'

export default {
  name: 'DeveloperMain',
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
    isTagFullscreen: false
  },
  data() {
    return {
      screenHeight: window.innerHeight,
      borderTitleLeft: 'url(' + require('@/images/border-title-left.png') + ')',
      borderTitleRight:
        'url(' + require('@/images/border-title-right.png') + ')',
      imageTitle01: 'url(' + require('@/images/title-01.png') + ')',
      backgroundDiv: {
        backgroundImage: 'url(' + require('@/images/border-02.png') + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%'
      },
      isDeepProvince: false,
      curtProvinceText: '',
      storeZxyh: [
        {
          userCity: '福州',
          userName: '1001',
          userXm: '张三',
          loginTime: '08:32',
          onLineHour: (Math.random() * 10).toFixed(2)
        },
        {
          userCity: '福州',
          userName: '1005',
          userXm: '李四',
          loginTime: '08:32',
          onLineHour: (Math.random() * 10).toFixed(2)
        },
        {
          userCity: '北京',
          userName: '1008',
          userXm: '王五',
          loginTime: '08:32',
          onLineHour: (Math.random() * 10).toFixed(2)
        },
        {
          userCity: '福州',
          userName: '1010',
          userXm: '赵六',
          loginTime: '08:32',
          onLineHour: (Math.random() * 10).toFixed(2)
        },
        {
          userCity: '福州',
          userName: '1011',
          userXm: '张省心',
          loginTime: '08:32',
          onLineHour: (Math.random() * 10).toFixed(2)
        },
        {
          userCity: '北京',
          userName: '1012',
          userXm: '王小号',
          loginTime: '08:32',
          onLineHour: (Math.random() * 10).toFixed(2)
        }
      ],
      inLineUsers: []
    }
  },
  computed: {
    mainHeight() {
      let height = this.screenHeight - 100 - 150
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84
      }
      return height
    },
    barChartPtczHeight() {
      return Math.floor(this.mainHeight / 3) + 'px'
    },
    onLineUserHeight() {
      return Math.floor(this.mainHeight / 3)
    },
    chinaMapServerHeight() {
      let height = this.screenHeight - 100 - 94
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84
      }
      return height + 'px'
    },
    // 中国在线用户数
    zxyhChinaCount() {
      return this.storeZxyh.length
    },
    // 当前深度省份在线用户数
    zxyhProvinceCount() {
      return this.storeZxyh.filter(
        x => x.userProvince === this.curtProvinceText
      ).length
    }
  },
  watch: {
    screenHeight(val) {
      if (!this.timer) {
        this.screenHeight = val
        this.timer = true
        const that = this
        setTimeout(function() {
          that.timer = false
        }, 400)
      }
    }
  },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        that.screenHeight = window.innerHeight
      })()
    }

    setInterval(() => {
      that.inLineUsers = [
        {
          userProvince: '福建',
          userCity: randomCity(),
          userName: '1001',
          userXm: '张三' + Math.floor(Math.random() * 100 + 1),
          loginTime: '08:32',
          onLineHour: (Math.random() * 10).toFixed(2)
        },
        {
          userProvince: '福建',
          userCity: randomCity(),
          userName: '1005',
          userXm: '李四' + Math.floor(Math.random() * 100 + 1),
          loginTime: '08:32',
          onLineHour: (Math.random() * 10).toFixed(2)
        }
      ]
      that.storeZxyh = [...this.storeZxyh, ...this.inLineUsers]
    }, 4000)
  },
  methods: {
    backToChina() {
      this.$refs.chinaMapZxyh1.doChartDblckick()
    },
    onDeepProvince(pNameText) {
      this.isDeepProvince = pNameText !== '中国'
      this.curtProvinceText = pNameText
    }
  }
}
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
