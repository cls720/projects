<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :width="width"
    :min-width="minWidth"
    :sortable="sortable"
    :style="confStyle"
  >
    <template v-for="child in conf.children">
      <hc-table-column
        v-if="child.controlName=='HcTableColumn'"
        :key="child.controlId"
        :conf="child"
      ></hc-table-column>
      <hc-table-column-radio
        v-else-if="child.controlName=='HcTableColumnRadio'"
        :key="child.controlId"
        :conf="child"
      ></hc-table-column-radio>
      <hc-table-column-checkbox
        v-else-if="child.controlName=='HcTableColumnCheckbox'"
        :key="child.controlId"
        :conf="child"
      ></hc-table-column-checkbox>
      <birt-cell-children
        v-else-if="child.slot=='header'"
        slot="header"
        :key="child.controlId"
        :children="[child]"
      />
    </template>
  </el-table-column>
</template>

<script>
import HcTableColumnRadio from "./Radio.vue";
import HcTableColumnCheckbox from "./Checkbox.vue";
import column from "../mixins/column";

export default {
  name: "hc-table-column",
  mixins: [column],
  components: { HcTableColumnRadio, HcTableColumnCheckbox },
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {},
  data() {
    return {};
  },
  methods: {}
};
</script>