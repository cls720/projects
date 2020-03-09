<template>
  <el-radio-group
    v-model="value"
    :disabled="disabled"
    :size="size"
    :text-color="textColor"
    :fill="fill"
    :style="confStyle"
    @change="onChange"
  >
    <template v-for="(child,i) in conf.children">
      <el-radio
        v-if="child.controlName=='HcRadio'"
        :key="conf.controlId+i"
        :label="child.label"
        :disabled="child.disabled"
        :border="child.border"
        :size="child.size"
        :name="child.name"
      >{{child.title}}</el-radio>
      <el-radio-button
        v-else-if="child.controlName=='HcRadioButton'"
        :key="conf.controlId+i"
        :label="child.label"
        :disabled="child.disabled"
        :name="child.name"
      ></el-radio-button>
    </template>
  </el-radio-group>
</template>

<script>
export default {
  name: "hc-radio-group",
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
    disabled() {
      return this.conf.disabled;
    },
    size() {
      return this.conf.size;
    },
    textColor() {
      return this.conf.textColor;
    },
    fill() {
      return this.conf.fill;
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