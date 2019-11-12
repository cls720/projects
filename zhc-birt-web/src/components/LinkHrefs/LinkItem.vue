<template>
  <link-birt v-if="hrefItem.controlName === 'LinkBirt'" :href-item="hrefItem" :value="value" />
  <link-js v-else-if="hrefItem.controlName === 'LinkJs'" :href-item="hrefItem" :value="value" />
</template>

<script>
import LinkBirt from "./LinkBirt";
import LinkJs from "./LinkJs";

export default {
  name: "LinkItem",
  components: { LinkBirt, LinkJs },
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
