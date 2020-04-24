<template>
  <el-menu
    :mode="conf.mode"
    :collapse="conf.collapse"
    :background-color="conf.backgroundColor"
    :text-color="conf.textColor"
    :active-text-color="conf.activeTextColor"
    :default-active="conf.defaultActive"
    :default-openeds="conf.defaultOpeneds"
    :unique-opened="conf.uniqueOpened"
    :menu-trigger="conf.menuTrigger"
    :router="conf.router"
    :collapse-transition="conf.collapseTransition"
    :style="confStyle"
    @select="select"
    @open="open"
    @close="close"
  >
    <template v-for="(child,i) in menuChildren()">
      <hc-menu-child :key="conf.controlId+i" :conf="child"></hc-menu-child>
    </template>
  </el-menu>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import events from "@/components/mixins/events";
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";
import treedata from "@/components/mixins/treedata";

import { randomString } from "@/funclib/StringUtil.js";

export default {
  name: "hc-menu",
  mixins: [events, autosize, datasource, treedata],
  extends: HcCmpt,
  computed: {
    confStyle() {
      return this.conf.style;
    },
    select() {
      return this.on("select");
    },
    open() {
      return this.on("open");
    },
    close() {
      return this.on("close");
    }
  },
  data() {
    return {
      elEvents: ["select", "open", "close"]
    };
  },
  methods: {
    elMenu() {
      if (this.$children && this.$children.length > 0) {
        return this.$children[0];
      } else {
        console.error("找不到elmenu实例");
      }
    },
    menuChildren() {
      let menus = [].concat(this.conf.children || []);
      let treeData = this.getConvertTreeData();
      this.addSubMenu(menus, treeData);
      return menus;
    },
    addSubMenu(menu, data) {
      if (data && data.length > 0) {
        let me = this;
        data.forEach(recd => {
          let menuItem = {};
          Object.assign(menuItem, recd);
          menuItem.title = recd[this.labelField];
          if (recd.children && recd.children.length > 0) {
            menuItem.controlName = "HcSubMenu";
            menuItem.controlId = "HcSubMenu" + randomString(6);
            menuItem.children = [];
            me.addSubMenu(menuItem.children, recd.children);
          } else {
            menuItem.controlName = "HcMenuItem";
            menuItem.controlId = "HcMenuItem" + randomString(6);
          }
          menu.push(menuItem);
        });
      }
    }
  }
};
</script>