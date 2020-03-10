<template>
  <el-checkbox
    v-model="value"
    :label="label"
    :true-label="trueLabel"
    :false-label="falseLabel"
    :disabled="disabled"
    :border="border"
    :size="size"
    :name="name"
    :checked="checked"
    :style="confStyle"
    @change="onChange"
  >{{title}}</el-checkbox>
</template>

<script>
import ref from "@/components/mixins/ref";

export default {
  name: "hc-checkbox",
  mixins: [ref],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    value: {
      get() {
        return this.conf.value;
      },
      set(val) {
        this.conf.value = val;
      }
    },
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
    },
    change() {
      return this.conf.events && this.conf.events.change;
    }
  },
  data() {
    return {};
  },
  methods: {
    onChange(val) {
      if (this.change) {
        this.change.call(this, val);
      }
    }
  }
};
</script>