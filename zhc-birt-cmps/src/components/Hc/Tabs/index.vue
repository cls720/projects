<template>
  <el-tabs
    v-model="activeTabName"
    :type="conf.type"
    :closable="conf.closable"
    :addable="conf.addable"
    :editable="conf.editable"
    :tab-position="conf.tabPosition"
    :stretch="conf.stretch"
    :before-leave="conf.beforeLeave"
    :height="autoHeightEx()"
    :style="confStyle"
    @tab-click="tabClick"
    @tab-remove="tabRemove"
    @tab-add="tabAdd"
    @edit="edit"
  >
    <el-tab-pane
      v-for="grandson in conf.children"
      :key="grandson.controlId"
      :label="grandson.label"
      :name="grandson.name"
      :disabled="grandson.disabled"
      :closable="grandson.closable"
      :lazy="grandson.lazy"
      :style="grandson.style"
    >
      <birt-cell-children :children="grandson.children" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import autosize from "@/components/mixins/autosize";
import events from "@/components/mixins/events";

export default {
  name: "hc-tabs",
  extends: HcCmpt,
  mixins: [autosize, events],  
  computed: {
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "100%";
    },
    confStyle() {
      return `${this.autoSizeStyle()};${this.conf.style};`;
    },
    tabClick() {
      return this.on("tabClick");
    },
    tabRemove() {
      return this.on("tabRemove");
    },
    tabAdd() {
      return this.on("tabAdd");
    },
    edit() {
      return this.on("edit");
    }
  },
  data() {
    return {
      elEvents: ["tabClick", "tabRemove", "tabAdd", "edit"],
      activeTabName: "" || this.conf.activeTabName
    };
  },
  mounted() {},
  methods: {
    // val是选项项
    setActiveTabName(val) {
      this.activeTabName = val;
    },
    autoHeightEx() {
      let autoHeightEx = this.autoHeight();
      if (typeof autoHeightEx === "number") {
        return autoHeightEx + "px";
      } else {
        return autoHeightEx;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
