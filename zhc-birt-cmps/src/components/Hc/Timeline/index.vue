<template>
  <el-timeline :reverse="reverse" :style="confStyle">
    <el-timeline-item
      v-for="(item, index) in datasetDatas"
      :key="index"
      :timestamp="getRecordTimestamp(item)"
      :type="getRecordType(item)"
      :color="getRecordColor(item)"
      :size="getRecordSize(item)"
      :icon="getRecordIcon(item)"
    >
      <span style="color:beige">{{getRecordContent(item)}}</span>
    </el-timeline-item>
  </el-timeline>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import autosize from "@/components/mixins/autosize";

export default {
  name: "hc-timeline",
  extends: HcCmpt,
  mixins: [autosize],
  props: {
    datasetDatas: {
      type: Array,
      default: function() {
        return [];
      }
    },
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    content() {
      if (!this.conf.content) {
        console.error("消息内容字段未绑定");
      }
      return this.conf.content;
    },
    timestamp() {
      if (!this.conf.timestamp) {
        console.error("时间轴字段未绑定");
      }
      return this.conf.timestamp;
    },
    type() {
      if (!this.conf.type) {
        console.error("警告类型字段未绑定");
      }
      return this.conf.type;
    },
    reverse() {
      if (this.conf.reverse == undefined) {
        return true;
      } else return this.conf.reverse;
    },
    placement() {
      return this.conf.placement;
    },
    color() {
      return this.conf.color;
    },
    icon() {
      return this.conf.icon;
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "100px";
    },
    confStyle() {
      return `overflow:hidden;${this.autoSizeStyle()};${this.conf.style};`;
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 获取记录内容值
    getRecordContent(recd) {
      return recd[this.content];
    },
    // 获取记录时间值
    getRecordTimestamp(recd) {
      return recd[this.timestamp];
    },
    // 获取记录消息类型值
    getRecordType(recd) {
      return recd[this.type];
    },
    // 获取记录颜色值
    getRecordColor(recd) {
      return recd[this.color];
    },
    // 获取记录图标大小值
    getRecordSize(recd) {
      let type = this.getRecordType(recd);
      if (type == "warning" || type == "danger") {
        return "large";
      } else {
        return "normal";
      }
    },
    // 获取记录图标值
    getRecordIcon(recd) {
      return recd[this.icon];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
