<template>
  <el-radio
    v-model="value"
    :label="label"
    :disabled="disabled"
    :border="border"
    :size="size"
    :name="name"
    :style="confStyle"
  >{{title}}</el-radio>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import events from "@/components/mixins/events";

export default {
  name: "hc-radio",
  extends: HcCmpt,
  mixins: [events], 
  data() {
    return {};
  },
  computed: {
    title() {
      return this.conf.title || "";
    },
    value: {
      get() {
        return this.conf.value;
      },
      set(val) {
        this.conf.value = val;
      }
    },
    label() {
      return this.conf.label;
    },
    disabled() {
      return this.conf.disabled;
    },
    border() {
      return this.conf.border;
    },
    size() {
      return this.conf.size;
    },
    name() {
      return this.conf.name;
    },
    confStyle() {
      return this.conf.style;
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>