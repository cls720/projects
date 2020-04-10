<template>
  <div>
    <div class="fixed l1">
      <hc-image-title :conf="imageTitle1"></hc-image-title>
    </div>
    <div class="auto r1">自动充满</div>
  </div>
</template>

<script>
//https://blog.csdn.net/weixin_42490398/article/details/90548327

import HcCmpt from "@/components/Hc/Cmpt";
import events from "@/components/mixins/events";
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";

export default {
  name: "hc-compare",
  extends: HcCmpt,
  mixins: [events, autosize, datasource],

  computed: {
    confStyle() {
      return this.conf.style;
    }
  },
  data() {
    return {
      imageTitle1: {
        controlName: "HcImageTitle",
        controlId: "HcImageTitle_13",
        width: "120px",
        height: "30px",
        imageUrl: "url(" + require("../../../images/button-01.png") + ")",
        title: "集团介绍",
        style:
          "float:left;text-align: center;font-size: 14px;font-weight: bold;color: #FFF;",
        events: {
          click: function() {
            let hcCarousel = this.getRefCompt("HcCarousel_1");
            hcCarousel.setActiveItem(0);
          }
        }
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
.fixed {
  width: 200px;
  height: 100px;
  background: blueviolet;
}
.auto {
  background: goldenrod;
  height: 100px;
}

.l1 {
  float: left;
}
.r1 {
  width: 100%;
  padding-left: 200px;
  box-sizing: border-box;
}
</style>