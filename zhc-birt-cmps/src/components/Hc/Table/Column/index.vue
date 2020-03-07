<template>
  <el-table-column :prop="prop" :label="label" :width="width" :style="confStyle">
    <template v-for="child in conf.children">
      <hc-table-column
        v-if="child.controlName=='HcTableColumn'"
        :key="child.controlId"
        :conf="child"
      ></hc-table-column>
      <hc-table-column-radio v-else-if="child.controlName=='HcTableColumnRadio'" :key="child.controlId" :conf="child"></hc-table-column-radio>
      <hc-table-column-checkbox v-else-if="child.controlName=='HcTableColumnCheckbox'" :key="child.controlId" :conf="child"></hc-table-column-checkbox>
    </template>
  </el-table-column>
</template>

<script>
import HcTableColumnRadio from "./Radio.vue";
import HcTableColumnCheckbox from "./Checkbox.vue";

export default {
  name: "hc-table-column",
  components: { HcTableColumnRadio,HcTableColumnCheckbox },
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    prop() {
      return this.conf.prop || "";
    },
    label() {
      return this.conf.label;
    },
    width() {
      return this.conf.width;
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