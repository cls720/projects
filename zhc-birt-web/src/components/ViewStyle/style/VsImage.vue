<template>
  <img :src="params.imageUrl" :style="getStyle()" />
</template>

<script>
export default {
  name: "VsImage",
  props: {
    params: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    getStyle() {
      return `max-width:${this.params.maxWidth}px;max-height:${this.params.maxHeight}px};${this.params.style}`;
    }
  }
};
</script>

<style scoped>
</style>
