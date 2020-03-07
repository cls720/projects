<template>
  <el-checkbox
    v-model="checkValue"
    :label="label"
    :true-label="trueLabel"
    :false-label="falseLabel"
    :disabled="disabled"
    :border="border"
    :size="size"
    :name="name"
    :checked="checked"
    :style="confStyle"
  >{{title}}</el-checkbox>
</template>

<script>
import events from "@/components/mixins/events";

export default {
  name: "hc-checkbox",
  mixins: [events],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      checkValue: ""
    };
  },
  computed: {
    title() {
      return this.conf.title || "";
    },
    label() {
      return this.conf.label;
    },
    trueLabel() {
      return this.conf.trueLabel;
    },
    falseLabel() {
      return this.conf.falseLabel;
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
    checked() {
      return this.conf.checked;
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