<template>
  <div id="app">
    <hc-text-label :conf="hcTextLabelConf"></hc-text-label>
    <hc-image-title :conf="hcImageTitleConf"></hc-image-title>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      hcTextLabelConf: {
        title: "HcTextLabel Component"
      },
      hcImageTitleConf: {
        controlName: "HcImageTitle",
        controlId: "HcImageTitle_11",
        width: "100%",
        height: "30px",
        imageUrl: "url(" + require("@/images/border-title-01.png") + ")",
        title: "全国大圆机运行监控",
        style:
          "text-align: center;font-size: 24px;font-weight: bold;color: #32d3eb;",
        children: [
          {
            controlName: "HcTextLabel",
            title: "a"
          },
          {
            controlName: "HcTextLabel",
            title: "b"
          }
        ]
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
