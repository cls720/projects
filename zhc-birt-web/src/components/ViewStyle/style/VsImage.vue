<template>
  <img
    :src="params.imageUrl"
    :style="{'max-width':params.maxWidth+'px','max-height':params.maxHeight+'px'}"
  />
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
  }
};
</script>

<style scoped>
</style>
