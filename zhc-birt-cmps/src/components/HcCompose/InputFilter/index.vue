<template>
  <hc-input ref="keyinput" :conf="inputConf">
    <template v-for="child in conf.children">
      <el-divider slot="append" direction="vertical" :key="'v'+child.controlId"></el-divider>
      <hc-button
        slot="append"
        :ref="child.controlId"
        :key="child.controlId"
        v-if="child.controlName=='HcButton'"
        :conf="child"
      />
    </template>
  </hc-input>
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
    size() {
      return this.conf.size;
    },
    // 触发查询动作 enter 回车, keyup 按键
    fireAction() {
      return this.conf.fireAction || "enter";
    },
    inputConf() {
      let iconf = {
        controlName: "HcInput",
        controlName: "HcInput_key",
        placeholder: "请输入关键字",
        size: this.size,
        events: {},
        children: [
          {
            controlName: "HcButton",
            controlId: "HcButton_search",
            slot: "append",
            size: this.size,
            icon: "el-icon-search",
            events: {
              click: this.doFilter
            }
          }
        ]
      };
      if (this.fireAction == "enter") {
        iconf.events.change = this.doFilter;
      } else if (this.fireAction == "keyup") {
        iconf.events.input = this.doFilter;
      }
      return iconf;
    },
    filterKey() {
      return this.$refs.keyinput.value;
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>