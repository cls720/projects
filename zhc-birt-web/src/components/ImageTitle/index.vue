<template>
  <div :class="className" :style="imageStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: "image-title"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "60px"
    },
    imageUrl: {
      type: String,
      default: ""
    },
    textIndent: {
      type: [String, Number],
      default: 10
    }
  },
  data() {
    return {

    };
  },
  computed: {
    imageStyle() {
      return {
        width: this.width,
        height: this.height,
        backgroundImage: this.imageUrl,
        "line-height": this.height,
        "text-indent": this.textIndent + "px"
      };
    }
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
  // border: 1px solid red;
}
</style>
