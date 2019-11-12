<template>
  <div :class="className" :style="imageStyle">
    <template v-if="conf.children" v-for="child in conf.children">
      <text-label v-if="child.controlName=='TextLabel'" :conf="child" />
    </template>
    {{title}}
    <slot></slot>
  </div>
</template>

<script>
import TextLabel from "@/components/TextLabel";

export default {
  name: "ImageTitle",
  components: { TextLabel },
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    className() {
      return this.conf.className || "image-title";
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "60px";
    },
    imageUrl() {
      return this.conf.imageUrl || "";
    },
    title() {
      return this.conf.title || "";
    },
    imageStyle() {
      return `width:${this.width};height:${this.height};backgroundImage:${this.imageUrl};line-height:${this.height};${this.conf.style}`;
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.image-title {
  font-size: 16px;
  color: #ffffff;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
