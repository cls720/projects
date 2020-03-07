<template>
  <el-carousel
    :ref="getElCarouselRefId()"
    :height="autoHeightEx()"
    :autoplay="autoplay"
    :interval="interval"
    :arrow="arrow"
    :type="type"
    :direction="direction"
    :style="confStyle"
  >
    <el-carousel-item
      v-for="grandson in conf.children"
      :key="grandson.controlId"
      style="display:block"
    >
      <birt-cell-children :children="[grandson]"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import autosize from "@/components/mixins/autosize";

export default {
  name: "hc-carousel",
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
    autoplay() {
      if (this.conf.autoplay == undefined) {
        return true;
      } else return this.conf.autoplay;
    },
    interval() {
      return this.conf.interval;
    },
    arrow() {
      return this.conf.arrow;
    },
    type() {
      return this.conf.type;
    },
    direction() {
      return this.conf.direction;
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "100%";
    },
    confStyle() {
      return `overflow:hidden;${this.autoSizeStyle()};${this.conf.style};`;
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getElCarouselRefId() {
      return "el_" + this.conf.controlId;
    },
    // val是数据下标或项name值
    setActiveItem(val) {
      this.$refs[this.getElCarouselRefId()].setActiveItem(val);
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
.el-carousel__container {
  height: 100%;
}
</style>
