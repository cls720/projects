<template>
  <div class="main">
    <div class="main-banner">
      <div class="main-banner-title">
        <span>
          <i style="font-size:20px" class="icon iconfont icon-table"></i>&nbsp;zhc-birt-cmps
        </span>
        <span class="main-banner-title-items"></span>
      </div>
    </div>

    <div class="main-wrapper" style="width:100%;margin:0px;">
      <el-row>
        <el-col :span="4">
          <!--左侧菜单-->
          <div class="main-wrapper-sidebar" style="width:100%">
            <ul class="menu-root">
              <li>
                <template v-for="(route,i) in getRoutes()">
                  <a
                    class="main-wrapper-sidebar-link"
                    href="javascript:javascript:void(0);"
                    :key="route.path"
                  >{{route.meta.title}}</a>
                  <ul v-if="route.children" class="menu-sub" :key="'ul'+i">
                    <li v-for="child in route.children" :key="child.path">
                      <router-link :to="child.path">{{child.meta.title}}</router-link>
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="20">
          <!--主体内容 Start-->
          <div style="width:100%;min-height:calc(100vh - 165px);">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="main-footer">
      <div>
        <span>
          <i class="iconfont icon-github"></i>
          <a href="https://github.com/huangshuwei/vue-easytable">GitHub</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          Created by
          <a href="https://github.com/huangshuwei">huangsw</a>
        </span>
      </div>
    </div>

    <!--回到顶部-->
    <div>
      <div class="main-back-top" v-show="showBackTop">
        <i @click="goBackTop()" class="icon iconfont icon-huidaodingbu-copy main-back-top-icon"></i>
      </div>
    </div>

    <!--目录-->
    <div>
      <catolog :catalog-data="catalogData"></catolog>
    </div>
  </div>
</template>



<script>
import catolog from "./catalog.vue";
import { constantRoutes } from "@/router/index.js";

export default {
  name: "App",
  components: { catolog },
  data() {
    return {
      showBackTop: false,
      catalogData: [],
      showHide: false // 是否显示内置组件
    };
  },
  methods: {
    goBackTop() {
      window.scroll(0, 0);
    },
    handleScroll() {
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop ||
        window.scrollY;
      this.showBackTop = scrollTop > 600 ? true : false;
    },
    anchorLink(to) {
      let query = to.query;

      if (query && query.anchor) {
        this.$nextTick(x => {
          let anchor = this.$el.querySelector("#" + query.anchor);

          if (anchor && anchor.offsetTop) {
            window.scroll(0, anchor.offsetTop);
          }
        });
      }

      this.$nextTick(x => {
        let anchorLinkArr = this.$el.querySelectorAll(".anchor-link"),
          catalogData = [];

        console.log(anchorLinkArr);

        if (anchorLinkArr && anchorLinkArr.length > 0) {
          for (var i = 0, len = anchorLinkArr.length; i < len; i++) {
            catalogData.push({
              id: anchorLinkArr[i].id,
              label: anchorLinkArr[i].getAttribute("label")
            });
          }
        }

        this.catalogData = catalogData;
      });
    },

    // select、checkbox、dropdown 等组件都是内置的，showHide=1 则开启
    enableHideComp(to) {
      let query = to.query;

      if (query.showHide && query.showHide == 1) {
        this.showHide = true;
      }
    },

    setFavicon() {
      var link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      // link.href = require("./../images/favicon.ico");
      document.getElementsByTagName("head")[0].appendChild(link);
    },
    getRoutes() {
      debugger;
      return constantRoutes;
    }
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);

    this.setFavicon();
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    $route(to, from) {
      this.anchorLink(to);

      // 显示内置组件
      this.enableHideComp(to);
    }
  }
};
</script>
<style scoped>
</style>

