<template>
  <div style="padding:5px 0px;">
    <el-dropdown @command="handleSort">
      <el-button size="small" icon="el-icon-sort">
        {{sort.title}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="none" icon="el-icon-check">不排序</el-dropdown-item>
        <el-dropdown-item command="field" icon="el-icon-empty" v-for="item in sort.items">
          {{item.title}}
          <i
            class="el-icon-sort-up el-icon--right"
            v-on:click.stop="handleFieldSort(item,0)"
          ></i>
          <i class="el-icon-sort-down el-icon--right" v-on:click.stop="handleFieldSort(item,1)"></i>
        </el-dropdown-item>
        <el-dropdown-item command="add_self" divided>添加自定义排序</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dialog v-el-drag-dialog :visible.sync="dialogAddSelfSortVisible" title="Shipping address"></el-dialog>
  </div>
</template>

<script>
import settings from "../../src/settings/settings.js";
import clickoutside from "../../src/directives/clickoutside.js";
import elDragDialog from "../../src/directives/el-dragDialog";

// import VCheckboxGroup from '../../v-checkbox-group/index'
// import VCheckbox from '../../v-checkbox/index'

export default {
  name: "hc-sort-dropmenu",
  components: {
    // VCheckboxGroup, VCheckbox
  },
  directives: {
    elDragDialog
  },
  data() {
    return {
      dialogAddSelfSortVisible: false,
      sort: {
        title: "排序",
        items: [
          { field: "htHy", title: "所属行业" },
          { field: "cpJlXm", title: "产品经理" },
          { field: "projectName", title: "项目名称" },
          { field: "createMonth", title: "月份" },
          { field: "htMoney", title: "合同金额" }
        ],
        orderBy: [{ name: "htHy", title: "所属行业", type: "asc" }]
      }
    };
  },
  props: {},
  computed: {},
  methods: {
    handleSort(command) {
      if (command == "add_self") {
        this.dialogAddSelfSortVisible = true;
      } else {
        this.$message("click on item " + command);
      }
    },
    handleFieldSort: function(item, type) {
      console.log(JSON.stringify(item) + "," + type);
      var evmousedown = document.createEvent("HTMLEvents");
      evmousedown.initEvent("mousedown", false, true);
      var evmouseup = document.createEvent("HTMLEvents");
      evmouseup.initEvent("mouseup", false, true);
      document.dispatchEvent(evmousedown);
      document.dispatchEvent(evmouseup);
    }
  },
  created() {},
  mounted() {},
  watch: {}
};
</script>