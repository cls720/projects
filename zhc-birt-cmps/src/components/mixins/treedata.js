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
    // 标签显示字段
    labelField() {
      return this.conf.labelField;
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
      // 判断是否需要转换树型数据
      if (this.parentIdField) {
        let cloneDatas = JSON.parse(JSON.stringify(this.datas));
        let treeData = convertToTreeData(cloneDatas, {
          id: this.idField,
          parentId: this.parentIdField,
          rootValue: this.rootValue
        });
        return treeData;
      } else {
        return this.datas;
      }
    },
  }
}
