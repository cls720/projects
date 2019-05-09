<template>
  <div :class="className" :style="textStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "30px"
    },
    color: {
      type: String,
      default: ""
    },
    fontSize: {
      type: [Number, String],
      default: 16
    },
    textAlign: {
      type: String,
      default: "center"
    }
  },
  data() {
    return {
      textStyle: {
        width: this.width,
        height: this.height,
        "line-height": this.height,
        color: this.color,
        "font-size": this.fontSize + "px",
        "text-align": this.textAlign
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
