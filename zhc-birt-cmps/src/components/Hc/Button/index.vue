<template>
  <el-button
    :size="conf.size"
    :type="conf.type"
    :plain="conf.plain"
    :round="conf.round"
    :circle="conf.circle"
    :loading="conf.loading"
    :disabled="conf.disabled"
    :icon="conf.icon"
    :autofocus="conf.autofocus"
    :native-type="conf.nativeType"
    :style="confStyle"
  >{{expr(title)}}</el-button>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import events from "@/components/mixins/events";

export default {
  name: "hc-button",
  mixins: [events],
  extends: HcCmpt,
  computed: {
    title() {
      return this.conf.title || "";
    },  
    confStyle() {
      return this.conf.style;
    }
  }
};
</script>