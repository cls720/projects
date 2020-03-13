<template>
  <div class="zhc-birt-work-book">
    <birt-tool-bar
      ref="pageBar"
      v-if="isShowToolBar()"
      :total-page="getTotalPage()"
      @page-change="onPageChange"
    ></birt-tool-bar>
    <template v-if="isInitDataSources()"></template>
    <el-tabs
      v-if="isRenderTabs()"
      v-model="activeTabId"
      :tab-position="tabPosition"
      @tab-click="onTabClick"
    >
      <el-tab-pane
        v-for="sht in sheets"
        :label="sht.name"
        :name="sht.controlId"
        :key="sht.controlId"
      >
        <birt-cell-children
          :key="curtSheet.controlId"
          :children="[getCurtSheetConf()]"
          :style="getCurtSheetStyle()"
        />
      </el-tab-pane>
    </el-tabs>
    <birt-cell-children
      v-else
      :key="curtSheet.controlId"
      :children="[getCurtSheetConf()]"
      :style="getCurtSheetStyle()"
    />
  </div>
</template>

<script>
import events from "@/components/mixins/events";
import DataSourceFactory from "@/components/DataSource/DataSourceFactory";
import WebSocketConection from "@/components/DataSource/WebSocketConection";

export default {
  name: "birt-work-book",
  mixins: [events],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      curtPageIndex: 0,
      screenHeight: window.innerHeight,
      datasource: {},
      dataset: {}
    };
  },
  provide() {
    return { datasource: this.datasource, dataset: this.dataset };
  },
  computed: {
    width() {
      return this.conf.width;
    },
    height() {
      return this.conf.height;
    },
    mainHeight() {
      let height = this.screenHeight - this.$HCBIRT.tabHeight;
      if (this.isShowToolBar()) {
        height -= 60;
      }
      return height;
    },
    activeTabId: {
      get: function() {
        return this.curtSheet.controlId;
      },
      set: function(curtSheetId) {}
    },
    confDataSources() {
      return this.conf && this.conf.dataSources;
    },
    renderType() {
      return (this.conf && this.conf.renderType) || "pages";
    },
    tabPosition() {
      return (this.conf && this.conf.tabPosition) || "right";
    },
    sheets() {
      let sheets = [];
      this.conf.children.forEach(child => {
        if (child.controlName == "BirtSheet") {
          sheets.push(child);
        }
      });
      return sheets;
    },
    curtSheet() {
      if (this.sheets.length > 0) {
        let pageCount = 0;
        for (var i = 0, l = this.sheets.length; i < l; i++) {
          let curtSht = this.sheets[i];
          pageCount += curtSht.children.length;
          if (this.curtPageIndex < pageCount) {
            let sheet = this.sheets[i];
            this.initDataSets(sheet.dataSets);
            return sheet;
          }
        }
      }
      return {};
    }
  },
  watch: {
    screenHeight(val) {
      if (!this.timer) {
        this.screenHeight = val;
        this.timer = true;
        const me = this;
        setTimeout(function() {
          me.timer = false;
        }, 400);
      }
    }
  },
  methods: {
    isShowToolBar() {
      if (this.conf.showToolBar === undefined) {
        return true;
      } else {
        return this.conf.showToolBar;
      }
    },
    isInitDataSources() {
      if (this.confDataSources) {
        this.initDataSources(this.confDataSources);
        return true;
      }
      return false;
    },
    autoWidth() {
      return "100%";
    },
    autoHeight() {
      if (this.height) {
        if (typeof this.height == "function") {
          return this.height.call(this, this.mainHeight);
        } else {
          return this.height;
        }
      } else {
        return this.mainHeight;
      }
    },
    registerResize() {
      const me = this;
      window.onresize = () => {
        return (() => {
          me.screenHeight = window.innerHeight;
        })();
      };
    },
    // 实例化工作薄数据源对象
    initDataSources(dataSources) {
      if (dataSources) {
        let me = this;
        dataSources.forEach(ds => {
          if (!me.datasource[ds.controlId]) {
            ds.dataset = me.dataset;
            me.datasource[ds.controlId] = DataSourceFactory.newInstance(ds);
          }
        });
      }
    },
    // 初始化工作表数据集
    initDataSets(dataSets) {
      if (dataSets) {
        let me = this;
        dataSets.forEach(ds => {
          if (!me.dataset[ds.controlId]) {
            me.dataset[ds.controlId] = DataSourceFactory.newInstance(ds);
          }
        });
      }
    },
    // 根据数据集Id获取数据集对象实例
    getDataSetInstance(datasetId) {
      return this.dataset[datasetId];
    },
    // 获取报表总页数,可按layout维度或sheet维度计算分页
    getTotalPage() {
      return this.conf.totalPage;
    },
    isRenderTabs() {
      return this.renderType === "tabs";
    },
    // 根据当前页，获取当前sheet所对应layout页
    getCurtSheetConf() {
      if (this.curtSheet.children) {
        if (this.curtSheet.pageIndex === undefined) {
          console.error("报表模型数据格式错误,sheet.pageIndex起始页未定义");
        }
        let i = this.curtPageIndex - this.curtSheet.pageIndex;
        return this.curtSheet.children[i];
      }
    },
    // 获取当前报表样式拼装
    getCurtSheetStyle() {
      return (
        (this.curtSheet.style || "") +
        `height:${this.autoHeight()}px;overflow:auto;`
      );
    },
    // 根据下标获取当前sheet对象
    getSheetByIndex(i) {
      if (this.sheets) {
        return this.sheets[i];
      }
    },
    onPageChange(pageIndex) {
      this.curtPageIndex = pageIndex;
    },
    onTabClick(tab, event) {
      let sht = this.getSheetByIndex(tab.index);
      if (sht) {
        this.$refs.pageBar.setCurrentPage(sht.pageIndex + 1);
        this.curtPageIndex = sht.pageIndex;
      }
    },
    getEventId(eventId) {
      if (eventId === "afterLoad") {
        return "afterLoad";
      }
    },
    // 重新加载页面
    reload(param) {
      this.emit(this.getEventId("afterLoad"), param);
    }
  },
  mounted() {
    this.registerResize();
  },
  beforeDestroy() {
    for (var key in this.datasource) {
      let obj = this.datasource[key];
      if (obj instanceof WebSocketConection) {
        obj.close();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
