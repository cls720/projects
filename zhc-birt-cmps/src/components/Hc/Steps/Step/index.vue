<template>
  <el-step
    :title="title"
    :description="description"
    :icon="icon"
    :status="status"
    :style="confStyle"
  ></el-step>
</template>

<script>
import events from "@/components/mixins/events";

export default {
  name: "hc-step",
  mixins: [events],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    title() {
      return this.conf.title;
    },
    description() {
      return this.conf.description;
    },
    icon() {
      return this.conf.icon;
    },
    status() {
      return this.conf.status;
    },
    confStyle() {
      return this.conf.style;
    }
  }
};
</script>