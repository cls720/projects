<template>
  <div :class="['el-input el-input-group el-input-group--append', classSize]">
    <input
      :placeholder="placeholder"
      v-model="filterKey"
      class="el-input__inner"
      @keyup.enter="doFilter"
    />
    <div class="el-input-group__append">
      <button type="button" class="el-button el-button--default" @click="doFilter">
        <i class="el-icon-search"></i>
      </button>
      <template v-for="child in conf.children">
        <el-divider direction="vertical" :key="'v'+child.controlId"></el-divider>
        <hc-button
          :ref="child.controlId"
          :key="child.controlId"
          v-if="child.controlName=='HcButton'"
          :conf="child"
        />
      </template>
    </div>
  </div>
</template>

<script>
import events from "@/components/mixins/events";
import fusefilter from "@/components/mixins/fusefilter";

export default {
  name: "hc-input-filter",
  mixins: [events, fusefilter],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    placeholder() {
      return this.conf.placeholder || "请输入关键字";
    },
    size() {
      return this.conf.size;
    },
    classSize() {
      if (this.size) {
        return "el-input--" + this.size;
      }
    }
  },
  methods: {}
};
</script>