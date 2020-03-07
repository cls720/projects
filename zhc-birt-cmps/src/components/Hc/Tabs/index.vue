<template>
  <el-tabs
    v-model="activeTabName"
    :tab-position="tabPosition"
    :type="type"
    :height="autoHeightEx()"
    :style="confStyle"
  >
    <el-tab-pane
      v-for="grandson in conf.children"
      :key="grandson.controlId"
      :label="grandson.label"
      :name="grandson.name"
      :style="tabPaneStyle(grandson)"
    >
      <birt-cell-children :children="grandson.children"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import autosize from "@/components/mixins/autosize";

export default {
  name: "hc-tabs",
  mixins: [autosize],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    tabPosition() {
      return this.conf.tabPosition;
    },
    type() {
      return this.conf.type;
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "100%";
    },
    confStyle() {
      return `${this.autoSizeStyle()};${this.conf.style};`;
    }
  },
  data() {
    return {
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
    },
    tabPaneStyle(grandson) {
      return `${grandson.style}`; //display:block;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
