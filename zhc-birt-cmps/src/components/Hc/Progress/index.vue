<template>
  <el-progress 
    :type="type"
    :percentage="100" 
    :format="format" 
    :status="status" 
    :text-inside="textInside" 
    :stroke-width="strokeWidth"
    :color="color"
    :show-text="showText"
    :stroke-linecap="strokeLinecap"
  >
  </el-progress>
</template>

<script>

export default {
  name: "hc-progress",
  components: {
  },
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    percentage() {
      return this.conf.percentage;
    },
    format() {
      return this.conf.format;
    },
    status() {
      return this.conf.status;
    },
    textInside() {
      return this.conf.textInside;
    },
    strokeWidth() {
      return this.conf.strokeWidth;
    },
    color(){
       return this.conf.color;
    },
    type(){
       return this.conf.type;
    },
    showText(){
       return this.conf.showText;
    },
    strokeLinecap(){
       return this.conf.strokeLinecap;
    },
    confStyle() {
      return `${this.autoSizeStyle()};${this.conf.style};`;
    }
  },
  data() {
    return {
     
    };
  },
  mounted() {},
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
</style>
