<template>
  <el-input
    ref="input"
    v-model="value"
    :type="conf.type"
    :maxlength="conf.maxlength"
    :minlength="conf.minlength"
    :show-word-limit="conf.showWordLimit"
    :placeholder="conf.placeholder"
    :clearable="conf.clearable"
    :show-password="conf.showPassword"
    :disabled="conf.disabled"
    :size="conf.size"
    :prefix-icon="conf.prefixIcon"
    :suffix-icon="conf.suffixIcon"
    :rows="conf.rows"
    :autosize="conf.autosize"
    :autocomplete="conf.autocomplete"
    :name="conf.name"
    :readonly="conf.readonly"
    :max="conf.max"
    :min="conf.min"
    :step="conf.step"
    :resize="conf.resize"
    :autofocus="conf.autofocus"
    :form="conf.form"
    :label="conf.label"
    :tabindex="conf.tabindex"
    :validate-event="conf.validateEvent"
    :style="confStyle"
    @blur="onBlur"
    @focus="onFocus"
    @input="onInput"
    @change="onChange"
    @clear="onClear"
  ></el-input>
</template>

<script>
import ref from "@/components/mixins/ref";

export default {
  name: "hc-input",
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
    confStyle() {
      return this.conf.style;
    },
    blur: {
      get() {
        return this.conf.events && this.conf.events.blur;
      },
      set(blur) {
        this.conf.blur = blur;
      }
    },
    focus: {
      get() {
        return this.conf.events && this.conf.events.focus;
      },
      set(blur) {
        this.conf.focus = focus;
      }
    },
    change() {
      return this.conf.events && this.conf.events.change;
    },
    input() {
      return this.conf.events && this.conf.events.input;
    },
    clear() {
      return this.conf.events && this.conf.events.clear;
    }
  },
  data() {
    return {};
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    select() {
      this.$refs.input.select();
    },
    onBlur(event) {
      if (this.blur) {
        this.blur.call(this, evevt);
      }
    },
    onFocus(event) {
      if (this.focus) {
        this.focus.call(this, event);
      }
    },
    onChange(val) {
      if (this.change) {
        this.change.call(this, val);
      }
    },
    onInput(val) {
      if (this.input) {
        this.input.call(this, val);
      }
    },
    onClear() {
      if (this.clear) {
        this.clear.call(this);
      }
    }
  }
};
</script>