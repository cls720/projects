<template>
  <el-dropdown v-if="hrefs.length > 1">
    <span class="el-dropdown-link" :style="tdObj.style">{{tdObj.value}}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="link in hrefs" :key="link.controlId" style="min-width:120px;">
        <hc-link-item :href-item="link" :value="link.title" />
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <hc-link-item
    v-else-if="hrefs.length == 1"
    :href-item="hrefs[0]"
    :value="tdObj.value"
    :key="hrefs[0].controlId"
    :style="tdObj.style"
  />
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import HcLinkItem from "./LinkItem";

export default {
  name: "hc-link-hrefs",
  extends: HcCmpt,
  components: { HcLinkItem },
  props: {
    tdObj: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    hrefs() {
      return this.tdObj.hrefs;
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>
