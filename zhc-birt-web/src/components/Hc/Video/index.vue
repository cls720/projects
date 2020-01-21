<template>
	<video width="320" height="240" loop autoplay muted :style="confStyle">
		<source :src="videoUrl" :type="videoType"></source>
	</video>
</template>

<script>
import autosize from "@/components/mixins/autosize";

export default {
  name: "hc-video",
  mixins: [autosize],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    videoUrl() {
      return this.conf.videoUrl || "";
    },
    videoType(){
      let vUrl = this.videoUrl;
      let fExt = vUrl.substring(vUrl.lastIndexOf(".")+1)
      return `video/${fExt}`;
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || 300;
    },
    confStyle() {
      return `${this.autoSizeStyle()};${this.conf.style};`;
    }
  },
  data() {
    return {};
  },
  mounted() {} 
};
</script>

<style lang="scss" scoped>

</style>
