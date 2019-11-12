<template>
  <a @click="onClick()">{{value}}</a>
</template>

<script>
import baseView from "@/views/base";

export default {
  name: "LinkBirt",
  extends: baseView,
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
  computed: {},
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.openByPath(this.hrefItem.birtUrl, this.hrefItem.params, {
        title: this.hrefItem.title,
        target: this.hrefItem.target
      });
    },
    getHref() {
      return this.hrefItem.birtUrl;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>