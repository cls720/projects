/**
 * 转换树型数据
 */
import { convertToTreeData } from "@/funclib/DataTree.js";

export default {
  computed: {
    idField() {
      return this.conf.idField;
    },
    parentIdField() {
      return this.conf.parentIdField;
    },
    checkField() {
      return this.conf.checkField || "_checked";
    },
    rootValue() {
      return this.conf.rootValue || -1;
    },
  },
  methods: {
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
  }
}
