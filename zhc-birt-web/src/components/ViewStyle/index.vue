<template>
  <div class="zhc-birt-view-style">
    <vs-image v-if="params.viewStyleId === 'vs-image'" :params="params" />
  </div>
</template>

<script>
import VsImage from "./style/VsImage";

export default {
  name: "ViewStyle",
  components: { VsImage },
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
