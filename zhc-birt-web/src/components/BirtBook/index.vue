<template>
  <div class="zhc-birt-book">
    <birt-tool-bar
      ref="pageBar"
      v-if="isShowToolBar()"
      :total-page="getTotalPage()"
      :birt-model="birtModel"
      @page-change="onPageChange"
    >
      <el-button v-if="birtModel.canEdit" icon="el-icon-edit" @click="doEdit()">编辑</el-button>
    </birt-tool-bar>
    <el-tabs
      v-if="isRenderTabs()"
      v-model="activeTabId"
      :tab-position="tabPosition"
      @tab-click="onTabClick"
    >
      <el-tab-pane
        v-for="(sht,index) in birtModel.sheets"
        :label="sht.name"
        :name="sht.controlId"
        :key="sht.controlId"
      >
        <birt-sheet
          :key="curtSheet.controlId"
          :layout="getCurtSheetLayout()"
          :style="getCurtSheetStyle()"
        />
      </el-tab-pane>
    </el-tabs>
    <birt-sheet
      v-else
      :key="curtSheet.controlId"
      :layout="getCurtSheetLayout()"
      :style="getCurtSheetStyle()"
    />
    <el-dialog v-el-drag-dialog :visible.sync="editDialogVisible" top="40px" title="修改报表数据模型">
      <el-input type="textarea" :rows="20" v-model="birtModelStr"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelEdit()">取 消</el-button>
        <el-button type="primary" @click="applyEdit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BirtToolBar from "@/components/BirtToolBar";
import BirtSheet from "@/components/BirtSheet";
import DataSourceFactory from "@/components/DataSource/DataSourceFactory";
import WebSocketConection from "@/components/DataSource/WebSocketConection";
import elDragDialog from "@/directive/el-drag-dialog";
import { getBirtModel } from "@/api/birt-model";

export default {
  name: "BirtBook",
  components: { BirtToolBar, BirtSheet },
  directives: { elDragDialog },
  props: {},
  data() {
    return {
      curtPageIndex: 0,
      screenHeight: window.innerHeight,
      editDialogVisible: false,
      birtModel: function() {
        return {};
      },
      birtModelStr: "",
      datasource: {},
      dataset: {}
    };
  },
  provide() {
    return { datasource: this.datasource, dataset: this.dataset };
  },
  computed: {
    mainHeight() {
      let height = this.screenHeight;
      if (this.isShowToolBar()) {
        height -= 60;
      }
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84;
      }
      return height;
    },
    activeTabId: {
      get: function() {
        return this.curtSheet.controlId;
      },
      set: function(curtSheetId) {}
    },
    renderType() {
      return (this.birtModel && this.birtModel.renderType) || "pages";
    },
    tabPosition() {
      return (this.birtModel && this.birtModel.tabPosition) || "right";
    },
    curtSheet() {
      if (this.birtModel.sheets) {
        let pageCount = 0;
        for (var i = 0, l = this.birtModel.sheets.length; i < l; i++) {
          let curtSht = this.birtModel.sheets[i];
          let layouts = curtSht.layouts;
          if (!layouts) {
            console.error("报表模型数据格式错误,sheet.layouts未定义");
            return;
          }
          pageCount += curtSht.layouts.length;
          if (this.curtPageIndex < pageCount) {
            let sheet = this.birtModel.sheets[i];
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
    },
    birtModel() {
      if (this.birtModelStr == "") {
        this.birtModelStr = JSON.stringify(this.birtModel);
      }
    }
  },
  methods: {
    isShowToolBar() {
      if (this.birtModel.showToolBar === undefined) {
        return true;
      } else {
        return this.birtModel.showToolBar;
      }
    },
    autoWidth() {
      return "100%";
    },
    autoHeight() {
      return this.mainHeight;
    },
    loadBirtModel(birtUrl, params) {
      let me = this;
      getBirtModel(birtUrl, params).then(response => {
        const data = response.data;
        me.birtModel = data;
        me.initDataSources(me.birtModel.dataSources);
      });
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
      return this.birtModel.totalPage;
    },
    isRenderTabs() {
      return this.renderType === "tabs";
    },
    // 根据当前页，获取当前sheet所对应layout页
    getCurtSheetLayout() {
      if (this.curtSheet.layouts) {
        if (this.curtSheet.pageIndex === undefined) {
          console.error("报表模型数据格式错误,sheet.pageIndex起始页未定义");
        }
        let i = this.curtPageIndex - this.curtSheet.pageIndex;
        return this.curtSheet.layouts[i];
      }
    },
    // 获取当前报表样式拼装
    getCurtSheetStyle() {
      return (this.curtSheet.style || "") + `height:${this.mainHeight}px;`;
    },
    // 根据下标获取当前sheet对象
    getSheetByIndex(i) {
      if (this.birtModel.sheets) {
        return this.birtModel.sheets[i];
      }
    },
    doEdit() {
      this.editDialogVisible = true;
    },
    cancelEdit() {
      this.editDialogVisible = false;
      this.birtModelStr = JSON.stringify(this.birtModel);
    },
    applyEdit() {
      this.editDialogVisible = false;
      this.birtModel = JSON.parse(this.birtModelStr);
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
    }
  },
  mounted() {
    this.registerResize();
    this.loadBirtModel(this.$route.path, this.$route.query);   
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
