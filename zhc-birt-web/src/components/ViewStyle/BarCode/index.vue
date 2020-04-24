<template>
  <svg :id="renderTo" />
</template>

<script>
/*
JsBarcode("#imgcode", "123", {
    format: "CODE39", //选择要使用的条形码类型 pharmacode
    width: 3, //设置条之间的宽度
    height: 100, //高度
    displayValue: true, //是否在条形码下方显示文字
    text: "456", //覆盖显示的文本
    fontOptions: "bold italic", //使文字加粗体或变斜体
    font: "fantasy", //设置文本的字体
    textAlign: "left", //设置文本的水平对齐方式
    textPosition: "top", //设置文本的垂直位置
    textMargin: 5, //设置条形码和文本之间的间距
    fontSize: 15, //设置文本的大小
    background: "#eee", //设置条形码的背景
    lineColor: "#2196f3", //设置条和文本的颜色。
    margin: 15 //设置条形码周围的空白边距
});
*/
import JsBarcode from "jsbarcode";

export default {
  name: "BarCode",
  props: {
    value: {
      type: [String, Number],
      required: true,
      default: ""
    },
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
      return this.params.id || "barcode1";
    }
  },
  data() {
    return {};
  },
  mounted() {
    let p = {
      width: 1,
      height: 60,
      fontSize:12,
      margin:0
    };
    Object.assign(p, this.params);
    JsBarcode("#" + this.renderTo, this.value, p);
  }
};
</script>

<style lang="scss" scoped>
</style>