<template>
  <div class="zhc-birt-view-style">
    <vs-image v-if="viewStyleId === 'vs-image'" :params="params" />
    <slash-header v-if="viewStyleId === 'slash-header'" :params="params" />
    <bar-code v-if="viewStyleId === 'bar-code'" :params="params" :value="tdObj.value" />
    <gong-zhang v-if="viewStyleId === 'gong-zhang'" :params="params" :value="tdObj.value" />
  </div>
</template>

<script>
import VsImage from "./style/VsImage";
import SlashHeader from "./SlashHeader";
import BarCode from "./BarCode";
import GongZhang from "./GongZhang";

export default {
  name: "ViewStyle",
  components: { VsImage, SlashHeader, BarCode, GongZhang },
  props: {
    tdObj: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    params() {
      return this.tdObj.viewStyle;
    },
    viewStyleId() {
      return this.params.viewStyleId;
    }
  }
};
</script>

<style scoped>
</style>
