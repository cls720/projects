<template>
  <div class="tab-view-container">
    <el-row :gutter="10">
      <el-col :xs="10" :sm="8" :md="7" :lg="6" :xl="6">
        <el-card>
          <el-row>
            <el-input placeholder="请输入关键字" v-model="searchKey" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-row>
          <el-row class="row-tool-bar row-align-right">
            <el-button size="small" icon="el-icon-folder-add">添加类</el-button>
            <el-button size="small" icon="el-icon-plus">添加函数</el-button>
          </el-row>
          <el-row :style="{height:funcTreeHeight+'px'}">
            <el-tree :data="funcTreeDatas" :props="treeDefaultProps" @node-click="handleNodeClick"></el-tree>
          </el-row>
          <div class="block">
            <el-pagination
              small
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-size="pageSize"
              layout="total, prev, pager, next"
              :total="totalCount"
            ></el-pagination>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="14" :sm="16" :md="17" :lg="18" :xl="18">
        <el-card>
          <el-row class="row-align-right">
            <el-button type="primary" icon="el-icon-plus">保存</el-button>
          </el-row>
          <el-row>
            <el-tabs v-model="activeTab">
              <el-tab-pane
                label="groovy | java"
                name="groovyjava"
                class="form-scroll-panel"
                :style="{height:funcFormHeight+'px'}"
              >
                <add-class-form
                  v-show="isClassForm"
                  :form-state="classFormState"
                  :class-model="curtClassModel"
                ></add-class-form>
                <add-method-form v-show="!isClassForm"></add-method-form>
              </el-tab-pane>
              <el-tab-pane
                label="js"
                name="js"
                class="form-scroll-panel"
                :style="{height:funcFormHeight+'px'}"
              >
                <add-method-form></add-method-form>
              </el-tab-pane>
              <el-tab-pane label="rn" name="fourth">rn</el-tab-pane>
            </el-tabs>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AddClassForm from "./AddClassForm.vue";
import AddMethodForm from "./AddMethodForm.vue";
import { queryFunclib, queryFunclibClass } from "@/api/funclib";
import { groupToTreeData } from "@/funclib/DataTree.js";
import { debuglog } from "util";

export default {
  name: "FunclibAdd",
  components: { AddClassForm, AddMethodForm },
  data() {
    return {
      loading: false,
      screenHeight: window.innerHeight,
      searchKey: "",
      searchField: "all",
      funcRecdDatas: [],
      funcTreeDatas: [],
      treeDefaultProps: {
        children: "children",
        label: "label"
      },
      activeTab: "groovyjava",
      pageNum: 1,
      pageSize: 200,
      totalCount: 1231,
      isClassForm: true,
      classFormState: "edit",
      curtClassModel: []
    };
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
  computed: {
    mainHeight() {
      // 84固定头部高度
      let height = this.screenHeight - 60;
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84;
      }
      return height;
    },
    funcTreeHeight() {
      return this.mainHeight - 110;
    },
    funcFormHeight() {
      return this.mainHeight - 95;
    }
  },
  methods: {
    onSubmit() {
      let me = this;
      queryFunclib().then(response => {
        debugger;
        let recds = response.dataPack.rows;
        recds.forEach(item => {
          item.classNameLabel = item.classNameCn + " | " + item.className;
          item.methodNameLabel = item.methodNameCn + " | " + item.methodName;
        });
        me.funcRecdDatas = recds;
        let treeRecds = groupToTreeData(recds, {
          groupBy: ["classImport", "className"],
          parentLabelField: "classNameLabel",
          childLabelField: "methodNameLabel"
        });
        me.funcTreeDatas.splice(0, me.funcTreeDatas.length, ...treeRecds);
      });
    },
    getCurtClassModel(classImport, className, methodType) {
      let curtClass = [];
      let me = this;
      this.funcRecdDatas.forEach(recd => {
        if (
          recd.classImport === classImport &&
          recd.className === className &&
          methodType === me.activeTab
        ) {
          curtClass.push(recd);
        }
      });
      return curtClass;
    },
    handleNodeClick(data) {
      debugger;
      if (data.children && data.children.length > 0) {
        this.isClassForm = true;
        let curtClass = this.getCurtClassModel(
          data.classImport,
          data.className,
          data.methodType
        );
        this.curtClassModel.splice(0, this.curtClassModel.length, ...curtClass);
      } else {
        this.isClassForm = false;
      }
      console.log(data);
    },
    handleSizeChange(val) {
      this.pageNum = 1;
      this.pageSize = val;
      this.onSubmit();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.onSubmit(val, this.pageSize);
    }
  },
  mounted() {
    const me = this;
    window.onresize = () => {
      return (() => {
        me.screenHeight = window.innerHeight;
      })();
    };
  },
  created() {
    this.onSubmit();
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.tab-view-container {
  padding: 10px;
  background-color: rgb(240, 242, 245);

  .row-align-right {
    text-align: right;
  }

  .row-tool-bar {
    margin: 6px 0px;
  }

  .row-margin-top {
    margin-top: 8px;
  }

  .form-scroll-panel {
    overflow: auto;
    padding: 0px 10px;
  }
}
</style>
