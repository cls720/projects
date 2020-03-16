<template>
  <el-tree
    :data="treeData"
    :node-key="idField"
    :props="props"
    :default-expanded-keys="conf.defaultExpandedKeys"
    :default-expand-all="conf.defaultExpandAll"
    :filter-node-method="conf.filterNodeMethod"
    :show-checkbox="conf.showCheckbox"
    :default-checked-keys="conf.defaultCheckedKeys"
    :load="conf.load"
    :lazy="conf.lazy"
    :style="confStyle"
    @node-click="nodeClick"
    @check-change="onCheckChange"
    @check="onCheck"
    ref="eltree"
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
import events from "@/components/mixins/events";
import autosize from "@/components/mixins/autosize";
import datasource from "@/components/mixins/datasource";

import { convertToTreeData } from "@/funclib/DataTree.js";

export default {
  name: "hc-tree",
  mixins: [events, autosize, datasource],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
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
      debugger
      return `${this.autoSizeStyle()};${this.conf.style};`;
    },
    nodeClick() {
      return (this.conf.events && this.conf.events.nodeClick) || (() => {});
    },
    checkChange() {
      return (this.conf.events && this.conf.events.checkChange) || (() => {});
    }
  },
  methods: {
    isPropEvent(eventName) {
      return ["nodeClick", "checkChange"].indexOf(eventName) >= 0;
    },
    filter(filterKey) {
      debugger;
      this.$refs.eltree.filter(filterKey);
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
    onCheckChange(data, checked, childHasChecked) {
      let checkChangeFunc = this.conf.events && this.conf.events.checkChange;
      if (checkChangeFunc) {
        checkChangeFunc.call(this, data, checked, childHasChecked);
      }
    },
    onCheck(data, joinNodes) {
      let checkFunc = this.conf.events && this.conf.events.check;
      if (checkFunc) {
        checkFunc.call(this, data, joinNodes);
      }
    },
    setDatasChecked(nodeKeys) {
      let me = this;
      this.datas.forEach(recd => {
        // 待改进 idField为函数组合时不适用
        let idValue = recd[me.idField];
        recd[me.checkField] = nodeKeys.indexOf(idValue) >= 0;
      });
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
