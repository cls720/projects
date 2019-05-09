<template>
  <div class="architecture-diagram-container">
    <el-container>
      <el-header style="padding-top:20px;">
        <el-col :xs="24" :sm="24" :lg="24">
          <text-label
            width="100%"
            color="#fff"
            font-size="24"
          >{{ $t('eapcloud.architectureDiagram') }}</text-label>
        </el-col>
      </el-header>
      <el-main ref="elMain">
        <el-row :gutter="15">
          <el-col :xs="0" :sm="1" :lg="1">&nbsp;</el-col>
          <el-col :xs="24" :sm="22" :lg="22">
            <el-row :style="backgroundDiv" class="saas-box">
              <el-col :lg="3" class="left-main-title">
                EAP SaaS
                <br>软件服务
              </el-col>
              <el-col :lg="24" class="saas-content">协同办公，安全生产，设备管理，移动巡检，DCIM云计算机房，M5，WMS仓储，项目管理</el-col>
            </el-row>
            <el-row :style="backgroundDiv" class="paas-box">
              <el-col :lg="3" class="left-main-title">EAP PaaS<br>平台服务</el-col>
              <el-col :lg="24" class="paas-content">
                <el-row :gutter="10">
                  <el-col :lg="4">
                    <div class="paas-list-box">
                      <h4>开发工具</h4>
                      <ul>
                        <li><a href="">数据库</a></li>
                        <li><a href="">数据集</a></li>
                        <li><a href="">功能</a></li>
                        <li><a href="">工作流</a></li>
                        <li><a href="">页面流</a></li>
                        <li><a href="">逻辑流</a></li>
                        <li><a href="">UI视图</a></li>
                        <li><a href="">BI报表</a></li>
                        <li><a href="">Websocket接口</a></li>
                        <li><a href="">作业调度</a></li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :lg="4">
                    <div class="paas-list-box">
                      <h4>移动平台</h4>
                      <ul>
                        <li><a href="">React Native</a></li>
                        <li><a href="">H5</a></li>
                        <li><a href="">小程序</a></li>
                        <li><a href="">公众号</a></li>
                        <li><a href="">移动App</a></li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :lg="4">
                    <div class="paas-list-box">
                      <h4>模块化构件</h4>
                      <ul>
                        <li><a href="">函数库</a></li>
                        <li><a href="">组件库</a></li>
                        <li><a href="">模板库</a></li>
                        <li><a href="">功能库</a></li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :lg="4">
                    <div class="paas-list-box">
                      <h4>大数据应用</h4>
                      <ul>
                        <li><a href="">数据可视化</a></li>
                        <li><a href="">数据分析</a></li>
                        <li><a href="">ETL数据清洗</a></li>
                        <li><a href="">大数据接口调用</a></li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :lg="4">
                    <div class="paas-list-box">
                      <h4>微服务集成</h4>
                      <ul>
                        <li><a href="">通知体系</a></li>
                        <li><a href="">文件服务</a></li>
                        <li><a href="">搜索服务</a></li>
                        <li><a href="">验证服务</a></li>
                        <li><a href="">数据服务</a></li>
                        <li><a href="">生活服务</a></li>
                        <li><a href="">企业管理</a></li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :lg="4">
                    <div class="paas-list-box">
                      <h4>运维监控</h4>
                      <ul>
                        <li><a href="">容器管理</a></li>
                        <li><a href="">集群管理</a></li>
                        <li><a href="">日志管理</a></li>
                        <li><a href="">异常报警</a></li>
                        <li><a href="">性能分析</a></li>
                      </ul>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <div class="base-tc-list">
                    <h4>中间件</h4>
                    <ul>
                      <li>RabbitMQ</li>
                      <li>ZooKeeper</li>
                    </ul>
                  </div>
                </el-row>
                <el-row>
                  <div class="base-tc-list">
                    <h4>数据库</h4>
                    <ul>
                      <li>mysql集群</li>
                      <li>SqlServer</li>
                      <li>Orecle</li>
                      <li>MongoDB</li>
                      <li>InfluxDB</li>
                    </ul>
                  </div>
                </el-row>
                <el-row>
                  <div class="base-tc-list">
                    <h4>容器层</h4>
                    <ul>
                      <li>docker</li>
                      <li>vmware</li>
                      <li>tomcat</li>
                      <li>linux</li>
                    </ul>
                  </div>
                </el-row>
              </el-col>
            </el-row>
            <el-row :style="backgroundDiv" class="iaas-box">
              <el-col :lg="3" class="left-main-title">
                IaaS
                <br>基础服务
              </el-col>
              <el-col :lg="24" class="iaas-content">
                <el-col :lg="6">
                  <div class="iaas-list">
                    <svg-icon class-name="cloud-icon" icon-class="cloud"/>
                    <span class="iaas-list-desc">阿里云</span>
                  </div>
                </el-col>
                <el-col :lg="6">
                  <div class="iaas-list">
                    <svg-icon class-name="cloud-icon" icon-class="cloud"/>
                    <span class="iaas-list-desc">华为云</span>
                  </div>
                </el-col>
                <el-col :lg="6">
                  <div class="iaas-list">
                    <svg-icon class-name="cloud-icon" icon-class="cloud"/>
                    <span class="iaas-list-desc">浪潮云</span>
                  </div>
                </el-col>
                <el-col :lg="6">
                  <div class="iaas-list">
                    <svg-icon class-name="cloud-icon" icon-class="cloud"/>
                    <span class="iaas-list-desc">私有云</span>
                  </div>
                </el-col>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="0" :sm="1" :lg="1"/>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ImageTitle from '@/components/ImageTitle'
import TextLabel from '@/components/TextLabel'

export default {
  name: 'ArchitectureDiagram',
  components: {
    ImageTitle,
    TextLabel
  },
  /* props: {
    isTagFullscreen: false
  },*/
  data() {
    return {
      screenHeight: window.innerHeight,
      borderTitleLeft: 'url(' + require('@/images/border-title-left.png') + ')',
      borderTitleRight:
        'url(' + require('@/images/border-title-right.png') + ')',
      imageTitle01: 'url(' + require('@/images/title-01.png') + ')',
      backgroundDiv: {
        'backgroundImage': 'url(' + require('@/images/border-01.png') + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        'display': 'table',
        'width': '100%'
      }
    }
  },
  computed: {
    mainHeight() {
      let height = this.screenHeight - 100 - 100
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84
      }
      return height
    },
    chinaMapServerHeight() {
      let height = this.screenHeight - 100
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84
      }
      return height + 'px'
    },
    barChartPtczHeight() {
      return Math.floor((this.mainHeight / 5) * 3) + 'px'
    },
    warningTimeHeight() {
      return Math.floor((this.mainHeight / 5) * 2) + 'px'
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
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.architecture-diagram-container {
  background-color: rgb(16, 32, 57);
  min-height: inherit;
  color: #fff;

  .left-main-title {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    height: 100%;
    line-height: 24px;
    font-weight: bold;
    float:none;
    font-size:16px;
  }

  .saas-box {
    padding: 5px;
    height: 60px;
  }
  .saas-content {
    line-height: 60px;
  }

  .paas-box {
    padding: 5px;
    margin: 10px 0px;
    font-size: 14px;
  }
  .paas-content{
    padding:10px;
  }
  .paas-content ul,.paas-content li{
    list-style: none;
    margin:0;
    padding: 0;
  }
  .paas-content h4{
    font-size:16px;
    margin:0;
    padding: 0;
    color:#409EFF;
    line-height:20px;
  }
  .paas-list-box{
    padding:6px;
    background-color: #E5E5E5;
    text-align: center;
    border-radius: 5px;
  }
  .paas-list-box li a{
    display:inline-block;
    width:100%;
    padding:0 10px;
    height: 25px;
    line-height: 25px;
    background-color: #fff;
    color:#333;
    margin-top: 5px;
    box-shadow: 1px 1px 5px 0px;
    border-radius: 5px;
  }
  .paas-list-box li a:hover{
    background-color: #87C1FF;
    color:#fff;
  }
  .base-tc-list{
    background-color: #e9e9e9;
    padding: 0 20px 0 0;
    display:table;
    margin-top:5px;
    border-radius: 5px;
    width:100%;
  }
  .base-tc-list h4{
    font-size:16px;
    display: table-cell;
    line-height: 36px;
    color: #409EFF;
    padding: 0 20px;
    vertical-align: middle;
    width:10%;
    min-width:80px;
  }
  .base-tc-list ul{
    display:table-cell;
    vertical-align: middle;
  }
  .base-tc-list ul:after{
    content:"";
    display:block;
    clear:both;
  }
  .base-tc-list ul li{
    float: left;
    padding: 0 15px;
    line-height: 26px;
    background-color: #87C1FF;
    color: #fff;
    margin-right: 5px;
    border-radius: 5px;
  }

  .iaas-box {
    padding: 5px;
    height: 60px;
  }
  .iaas-content {
    line-height: 60px;
  }
  .iaas-list{
    position:relative;
    display:table;
    width:100%;
  }
  .cloud-icon{
    font-size:110px;
    color:#fff;
    text-align:center;
    display:table-cell;
    margin:-20px auto;
  }
  .iaas-list-desc{
    position:absolute;
    height:30px;
    line-height:30px;
    width:60px;
    text-align:center;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    color:#333;
    font-weight: bold;
    transform: translateY(12px);
  }
}
</style>
