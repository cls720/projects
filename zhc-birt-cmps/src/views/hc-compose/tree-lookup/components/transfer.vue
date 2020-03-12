<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <el-row>
      <el-col span="10">
        <hc-input-filter :conf="hcInputFilter1"></hc-input-filter>
        <hc-tree ref="treeLeft" :conf="hcTreeConf1"></hc-tree>
      </el-col>
      <el-col span="4" style="text-align:center;line-height:50px;padding-top:50px;">
        <div>
          <hc-button :conf="btnToAllRight"></hc-button>
        </div>
        <div>
          <hc-button :conf="btnToRight"></hc-button>
        </div>
        <div>
          <hc-button :conf="btnToLeft"></hc-button>
        </div>
        <div>
          <hc-button :conf="btnToAllLeft"></hc-button>
        </div>
      </el-col>
      <el-col span="10">
        <hc-input-filter :conf="hcInputFilter2"></hc-input-filter>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { resources } from "../resources";

export default {
  data() {
    return {
      hcInputFilter1: {
        controlName: "HcInputFilter",
        controlId: "HcInputFilter_1",
        fireAction: "keyup",
        events: {
          filterChange: function(filterKey, datas) {
            alert("fiterChange." + filterKey);
          }
        }
      },
      hcInputFilter2: {
        controlName: "HcInputFilter",
        controlId: "HcInputFilter_1",
        fireAction: "keyup",
        events: {
          filterChange: function(filterKey, datas) {
            alert("fiterChange." + filterKey);
          }
        }
      },
      btnToRight: {
        controlName: "HcButton",
        controlId: "HcButton_r",
        icon: "el-icon-arrow-right",
        events: {
          click: function(e) {
            alert("click:" + e);
          }
        }
      },
      btnToAllRight: {
        controlName: "HcButton",
        controlId: "HcButton_allr",
        icon: "el-icon-d-arrow-right",
        events: {
          click: this.doAllToRight
        }
      },
      btnToLeft: {
        controlName: "HcButton",
        controlId: "HcButton_l",
        icon: "el-icon-arrow-left",
        events: {
          click: function(e) {
            alert("click:" + e);
          }
        }
      },
      btnToAllLeft: {
        controlName: "HcButton",
        controlId: "HcButton_alll",
        icon: "el-icon-d-arrow-left",
        events: {
          click: function(e) {
            alert("click:" + e);
          }
        }
      },
      hcTreeConf1: {
        controlName: "HcTree",
        controlId: "HcTree_left",
        datas: resources,
        isTreeData: false,
        idField: "resId",
        parentIdField: "parentId",
        labelField: "name",
        showCheckbox: true,
        defaultExpandAll: true,
        filterNodeMethod: function(value, data) {
          debugger;
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        },
        events: {}
      }
    };
  },
  methods: {
    doAllToRight(a, b, c) {
      debugger;
      this.$refs.treeLeft;
    }
  }
};
</script>