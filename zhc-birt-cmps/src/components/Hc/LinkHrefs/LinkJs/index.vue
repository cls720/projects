<template>
  <el-button type="text" @click="execExpression()">{{value}}</el-button>
</template>

<script>
export default {
  name: "hc-link-js",
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
    execExpression() {
      return this.hrefItem.expression.call();
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>