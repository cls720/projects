<template>
  <el-table-column
    :type="conf.type"
    :index="conf.index"
    :column-key="conf.columnKey"
    :label="label"
    :prop="prop"
    :width="width"
    :min-width="conf.minWidth"
    :fixed="conf.fixed"
    :render-header="conf.renderHeader"
    :sortable="conf.sortable"
    :sort-method="conf.sortMethod"
    :sort-by="conf.sortBy"
    :sort-orders="conf.sortOrders"
    :resizable="conf.resizable"
    :formatter="conf.formatter"
    :show-overflow-tooltip="conf.showOverflowTooltip"
    :align="conf.align"
    :header-align="conf.headerAlign"
    :class-name="conf.className"
    :label-class-name="conf.labelClassName"
    :selectable="conf.selectable"
    :reserve-selection="conf.reserveSelection"
    :filters="conf.filters"
    :filter-placement="conf.filterPlacement"
    :filter-multiple="conf.filterMultiple"
    :filter-method="conf.filterMethod && filterMethod"
    :filtered-value="conf.filteredValue"
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
  computed: {
    isSlorScope() {
      return this.conf.slot === "scope";
    }
  },
  data() {
    return {
      filterKeyWord: ""
    };
  },
  methods: {
    filterMethod(keyword, recd) {
      if (this.conf.filterMethod) {
        this.conf.filterMethod.call(this, keyword, recd);
      }
    }
  }
};
</script>