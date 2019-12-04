/**
 * 获取页面数据源对象
 */

export default {
  computed: {},
  methods: {
    getParentDataSets() {
      let parent = this.$parent;
      while (parent) {
        if (parent.getDataSets) {
          return parent.getDataSets();
        }
        parent = parent.$parent;
      }
    },
    getParentDataSet(datasetId) {
      if (!datasetId) console.error("未绑定数据集Id");
      let parent = this.$parent;
      while (parent) {
        if (parent.getDataSetInstance) {
          return parent.getDataSetInstance(datasetId);
        }
        parent = parent.$parent;
      }
    }
  }
}
