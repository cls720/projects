<template>
  <el-steps
    :space="space"
    :direction="direction"
    :active="active"
    :process-status="processStatus"
    :finish-status="finishStatus"
    :align-center="alignCenter"
    :simple="simple"
    :style="confStyle"
  >
    <el-step
      v-for="(child,i) in conf.children"
      :key="conf.controlId+i"
      :title="child.title"
      :description="child.description"
      :icon="child.icon"
      :status="child.status"
    ></el-step>
  </el-steps>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import events from "@/components/mixins/events";

export default {
  name: "hc-steps",
  extends: HcCmpt,
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
    space() {
      return this.conf.space;
    },
    direction() {
      return this.conf.direction;
    },
    active: {
      get() {
        return this.conf.active;
      },
      set(stepIndex) {
        this.conf.active = stepIndex;
      }
    },
    processStatus() {
      return this.conf.processStatus;
    },
    finishStatus() {
      return this.conf.finishStatus;
    },
    alignCenter() {
      return this.conf.alignCenter;
    },
    simple() {
      return this.conf.simple;
    },
    confStyle() {
      return this.conf.style;
    }
  }
};
</script>
