<template>
  <el-container class="zhc-birt-sheet-form">
    <el-main>
      <birt-cell-children v-if="frm.children" :children="frm.children" />
    </el-main>
  </el-container>
</template>

<script>
import BirtCellChildren from "@/components/BirtCellChildren";

export default {
  name: "FormBirt",
  components: { BirtCellChildren },
  props: {
    frm: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>