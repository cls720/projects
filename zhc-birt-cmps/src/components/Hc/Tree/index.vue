<template>
  <el-tree
    :data="treeData"
    :empty-text="conf.emptyText"
    :node-key="idField"
    :props="props"
    :render-after-expand="conf.renderAfterExpand"
    :load="conf.load"
    :render-content="conf.renderContent"
    :highlight-current="conf.highlightCurrent"
    :default-expand-all="conf.defaultExpandAll"
    :expand-on-click-node="conf.expandOnClickNode"
    :check-on-click-node="conf.checkOnClickNode"
    :auto-expand-parent="conf.autoExpandParent"
    :default-expanded-keys="conf.defaultExpandedKeys"
    :show-checkbox="conf.showCheckbox"
    :check-strictly="conf.checkStrictly"
    :default-checked-keys="conf.defaultCheckedKeys"
    :current-node-key="conf.currentNodeKey"
    :filter-node-method="conf.filterNodeMethod"
    :accordion="conf.accordion"
    :indent="conf.indent"
    :icon-class="conf.iconClass"
    :lazy="conf.lazy"
    :draggable="conf.draggable"
    :allow-drag="conf.allowDrag"
    :allow-drop="conf.allowDrop"
    :style="confStyle"
    @node-click="nodeClick"
    @node-contextmenu="nodeContextmenu"
    @check-change="checkChange"
    @check="check"
    @current-change="onCurrentChange"
    @node-expand="nodeExpand"
    @node-collapse="nodeCollapse"
    @node-drag-start="nodeDragStart"
    @node-drag-enter="nodeDragEnter"
    @node-drag-leave="nodeDragLeave"
    @node-drag-over="nodeDragOver"
    @node-drag-end="nodeDragEnd"
    @node-drop="nodeDrop"
  >
    <template v-if="conf.children && conf.children.length > 0">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <template v-for="(child,i) in conf.children">
            <span :key="node.nodeKey+i" :style="child.style">{{data[child.labelField]}}</span>
          </template>
        </span>
      </span>
    </template>
  </el-tree>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import events from "@/components/mixins/events";
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";

import { convertToTreeData } from "@/funclib/DataTree.js";

export default {
  name: "hc-tree",
  extends: HcCmpt,
  mixins: [events, autosize, datasource],
  computed: {
    isTreeData() {
      if (this.conf.isTreeData == undefined) {
        return true;
      } else return this.conf.isTreeData;
    },
    // 返回标准树型数据
    treeData() {
      if (this.isTreeData) {
        return this.datas;
      } else {
        return this.getConvertTreeData();
      }
    },
    idField() {
      return this.conf.idField;
    },
    parentIdField() {
      return this.conf.parentIdField;
    },
    labelField() {
      return this.conf.labelField;
    },
    checkField() {
      return this.conf.checkField || "_checked";
    },
    // 绑定判断是否叶节点字段
    leafField() {
      return this.conf.leafField;
    },
    rootValue() {
      return this.conf.rootValue || -1;
    },
    childrenKey() {
      return this.conf.childrenKey || "children";
    },
    props() {
      return {
        label: this.labelField,
        children: this.childrenKey,
        isLeaf: this.leafField
      };
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "100%";
    },
    confStyle() {
      return `${this.autoSizeStyle()};${this.conf.style};`;
    },
    nodeClick() {
      return this.on("nodeClick");
    },
    nodeContextmenu() {
      return this.on("nodeContextmenu");
    },
    checkChange() {
      return this.on("checkChange");
    },
    check() {
      return this.on("check");
    },
    currentChange() {
      return this.on("currentChange");
    },
    nodeExpand() {
      return this.on("nodeExpand");
    },
    nodeCollapse() {
      return this.on("nodeCollapse");
    },
    nodeDragStart() {
      return this.on("nodeDragStart");
    },
    nodeDragEnter() {
      return this.on("nodeDragEnter");
    },
    nodeDragLeave() {
      return this.on("nodeDragLeave");
    },
    nodeDragOver() {
      return this.on("nodeDragOver");
    },
    nodeDragEnd() {
      return this.on("nodeDragEnd");
    },
    nodeDrop() {
      return this.on("nodeDrop");
    }
  },
  data() {
    return {
      elEvents: [
        "nodeClick",
        "nodeContextmenu",
        "checkChange",
        "check",
        "currentChange",
        "nodeExpand",
        "nodeCollapse",
        "nodeDragStart",
        "nodeDragEnter",
        "nodeDragLeave",
        "nodeDragOver",
        "nodeDragEnd",
        "nodeDrop"
      ],
      lastKey: ""
    };
  },
  methods: {
    elTree() {
      if (this.$children && this.$children.length > 0) {
        return this.$children[0];
      } else {
        console.error("找不到eltree实例");
      }
    },
    filter(filterKey) {
      this.elTree().filter(filterKey);
    },
    // 根据配置获取转换后的树型数据
    getConvertTreeData() {
      let cloneDatas = JSON.parse(JSON.stringify(this.datas));
      let treeData = convertToTreeData(cloneDatas, {
        id: this.idField,
        parentId: this.parentIdField,
        rootValue: this.rootValue
      });
      return treeData;
    },
    setDatasChecked(nodeKeys) {
      let me = this;
      this.datas.forEach(recd => {
        // 待改进 idField为函数组合时不适用
        let idValue = recd[me.idField];
        recd[me.checkField] = nodeKeys.indexOf(idValue) >= 0;
      });
    },
    onCurrentChange(data, node) {
      debugger;
      let curtKey = this.elTree().getCurrentKey();
      if (this.lastKey) {
        if (curtKey === this.lastKey) return;
        let cancelNodeChangeFunc = this.conf.cancelNodeChange;
        if (cancelNodeChangeFunc) {
          let isCancel = cancelNodeChangeFunc.call(this, data, node);
          if (isCancel) {
            this.elTree().setCurrentKey(this.lastKey);
            return;
          }
        }
      }
      this.lastKey = curtKey;
      let currentChangeFunc =
        this.conf.events && this.conf.events.currentChange;
      if (currentChangeFunc) {
        currentChangeFunc.call(this, data, node);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
