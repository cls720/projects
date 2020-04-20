<template>
  <el-row>
    <el-col :span="4">
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
    <el-col :span="20">
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
}
.navtabs ul {
  list-style: none;
  margin: 0 5px;
  padding: 5px 0px;
  background-color: #eef3f9;
}

.navtabs a {
  display: block;
  height: 25px;
  line-height: 25px;
  margin: 2px 0;
  text-align: center;
  padding-right: 25px;
}

.navtabs a:hover {
  color: #5c6962;
  background-color: #cfe0f4;
}
.navtabs a.active {
  /* color: #fff; */
  color: #333;
  font-weight: bold;
  margin: 0 0 0 -4px;
}
</style>