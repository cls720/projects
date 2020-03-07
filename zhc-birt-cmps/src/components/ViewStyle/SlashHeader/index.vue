<template>
  <div :id="renderTo" :style="{width:width+'px',height:height+'px'}"></div>
</template>

<script>
import SlashHeader from "./slashHeader.js";

export default {
  name: "SlashHeader",
  props: {
    params: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    renderTo() {
      return this.params.id || "slashHeader1";
    },
    width() {
      return this.params.width || 200;
    },
    height() {
      return this.params.height || 50;
    },
    headerArr() {
      return this.params.headerArr || [];
    },
    proportion() {
      return this.params.proportion || [];
    },
    initialPoint() {
      return this.params.initialPoint || "top";
    }
  },
  mounted() {
    var setting = {
      renderTo: $("#" + this.renderTo),
      headerArr: this.headerArr,
      proportion: this.proportion,
      initialPoint: this.initialPoint,
      lineColor: this.params.lineColor,
      strokeWidth: this.params.strokeWidth || 1,
      fontClass: this.params.fontClass
    };
    SlashHeader.draw(setting);
  }
};
</script>
<style scoped>
</style>
