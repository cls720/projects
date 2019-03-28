<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar class="sidebar-container" v-show="show"/>
    <div class="main-container" :style="tagFullscreenStyle">
      <navbar v-show="show"/>
      <tags-view v-show="show" @tagFullscreenChange="onTagFullscreenChange"/>
      <app-main :style="appMainFullscreenStyle"/>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  mixins: [ResizeMixin],
  data() {
    return {
      show: true,
      tagFullscreenStyle: "",
      appMainFullscreenStyle:""
    };
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("closeSideBar", { withoutAnimation: false });
    },
    onTagFullscreenChange(isTagFullscreen) {
      console.log("$emit->tagfc change:" + isTagFullscreen);
      this.show = !isTagFullscreen;
      this.tagFullscreenStyle = this.show ? "" : "margin-left: 0px;";
      this.appMainFullscreenStyle = this.show ? "" : "min-height: calc(100vh);"
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
