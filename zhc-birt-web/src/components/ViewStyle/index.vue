<template>
  <div class="zhc-birt-view-style">
    <vs-image v-if="params.viewStyleId === 'vs-image'" :params="params" />
    <slash-header v-if="params.viewStyleId === 'slash-header'" :params="params" />
  </div>
</template>

<script>
import VsImage from "./style/VsImage";
import SlashHeader from "./SlashHeader";

export default {
  name: "ViewStyle",
  components: { VsImage, SlashHeader },
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
