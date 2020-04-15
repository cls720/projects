<template>
  <el-row>
    <el-col span="4" style="border:1px solid red">
      <div class="navtabs">
        <ul>
          <li>
            <a target="_self" href="javascript:void(0)">基本参数</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>车身</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>发动机</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>电动机</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>变速箱</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>底盘转向</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class="active">车轮制动</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>主/被动安全装备</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>辅助/操控配置</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>外部/防盗配置</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>内部配置</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>座椅配置</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>多媒体配置</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>灯光配置</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>玻璃/后视镜</a>
          </li>
          <li>
            <a target="_self" href="javascript:void(0)" class>空调/冰箱</a>
          </li>
          <li class="bottom">
            <a target="_self" href="javascript:void(0)" class>选装包</a>
          </li>
        </ul>
      </div>
    </el-col>
    <el-col span="20">
      <h1>adsfadf</h1>
    </el-col>
  </el-row>
</template>

<script>
// https://car.autohome.com.cn/config/series/5472.html#pvareaid=3454437
//https://blog.csdn.net/weixin_42490398/article/details/90548327

import HcCmpt from "@/components/Hc/Cmpt";
import events from "@/components/mixins/events";
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";

export default {
  name: "hc-compare",
  extends: HcCmpt,
  mixins: [events, autosize, datasource],

  computed: {
    confStyle() {
      return this.conf.style;
    }
  },
  data() {
    return {
      imageTitle1: {
        controlName: "HcImageTitle",
        controlId: "HcImageTitle_13",
        width: "120px",
        height: "30px",
        imageUrl: "url(" + require("../../../images/button-01.png") + ")",
        title: "集团介绍",
        style:
          "float:left;text-align: center;font-size: 14px;font-weight: bold;color: #FFF;",
        events: {
          click: function() {
            let hcCarousel = this.getRefCompt("HcCarousel_1");
            hcCarousel.setActiveItem(0);
          }
        }
      },
      imageTitle2: {
        controlName: "HcImageTitle",
        controlId: "HcImageTitle_13",
        width: "120px",
        height: "30px",
        imageUrl: "url(" + require("../../../images/button-01.png") + ")",
        title: "分栏2",
        style:
          "float:left;text-align: center;font-size: 14px;font-weight: bold;color: #FFF;",
        events: {
          click: function() {
            let hcCarousel = this.getRefCompt("HcCarousel_1");
            hcCarousel.setActiveItem(0);
          }
        }
      },
      imageTitle3: {
        controlName: "HcImageTitle",
        controlId: "HcImageTitle_13",
        width: "120px",
        height: "30px",
        imageUrl: "url(" + require("../../../images/button-01.png") + ")",
        title: "分栏3",
        style:
          "float:left;text-align: center;font-size: 14px;font-weight: bold;color: #FFF;",
        events: {
          click: function() {
            let hcCarousel = this.getRefCompt("HcCarousel_1");
            hcCarousel.setActiveItem(0);
          }
        }
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.navtabs {
  border: 1px dashed blue;
}
.navtabs ul {
  list-style: none;
  margin: 0 5px;
  padding: 5px 0px;
  background-color: #eef3f9;
}
.navtabs ul li {
  line-height: 30px;
  background: url(//x.autoimg.cn/car/images/csicon20150812.png) no-repeat;
  background-position: 140px -274px;
}
.navtabs ul li > a.active {
  background-position: 0 -229px;
}
.navtabs ul li > a.active:hover {
  background: url(//x.autoimg.cn/car/images/csicon20150812.png) no-repeat;
}
.pzbox {
  width: 1000px;
  margin: 0 auto;
  _overflow: hidden;
  font-size: 12px;
}
.operation {
  display: table;
  height: 100px;
  z-index: 1200;
  overflow: visible;
  background-color: #fff;
}

.tbset {
  width: auto;
  height: 100px;
  border-left: solid 1px #d9e5f3;
  border-bottom: solid 1px #d9e5f3;
}
.btn_delbar {
  height: 16px;
  line-height: 16px;
  padding: 4px;
  text-align: center;
  position: relative;
}
.sys_ow {
  width: 168px;
  color: #993000;
  overflow: hidden;
  text-align: left;
  white-space: nowrap;
}
.carbox {
  width: 156px;
  padding: 0px 10px;
  text-align: center;
  line-height: 15px;
}
.btn_delbar a.btn_del {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: inline-block;
  overflow: hidden;
  background-position: -80px -172px;
}
.conbox {
  position: relative;
  top: -1px;
  z-index: 5;
}
.fdbox {
  width: 202px;
  position: absolute;
  z-index: 1000;
  left: 0px;
  top: 0px;
  background-color: #fff;
}

.video-tips {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  font-size: 14px;
  color: #f3f7ff;
  padding: 18px;
  border-radius: 5px;
  background: #000;
  background: rgba(0, 0, 0, 0.8);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
}
.tbcs:not(:last-child) {
  border-bottom: 0 none;
}
.pztip {
  line-height: normal;
  margin-top: 10px;
  font-weight: bold;
  color: #d60000;
}
.followcon {
  position: absolute;
  z-index: 100;
  display: none;
  width: 127px;
}
.followcon .folul {
  float: left;
  width: 121px;
  margin: 0 5px;
  padding: 5px 0px;
  background-color: #eef3f9;
}

.followcon li.top {
  background-position: 100px -339px;
}

.followcon li {
  float: left;
  width: 121px;
  height: 100%;
  background-position: 100px -274px;
  _overflow: hidden;
}

.followcon li.bottom {
  background-position: -34px -273px;
}
</style>