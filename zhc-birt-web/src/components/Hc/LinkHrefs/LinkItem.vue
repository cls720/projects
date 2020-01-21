<template>
  <hc-link-birt v-if="hrefItem.controlName === 'HcLinkBirt'" :href-item="hrefItem" :value="value"/>
  <hc-link-js v-else-if="hrefItem.controlName === 'HcLinkJs'" :href-item="hrefItem" :value="value"/>
</template>

<script>
import HcLinkBirt from "./LinkBirt";
import HcLinkJs from "./LinkJs";

export default {
  name: "hc-link-item",
  components: { HcLinkBirt, HcLinkJs },
  props: {
    value: {
      type: String,
      default: ""
    },
    hrefItem: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
