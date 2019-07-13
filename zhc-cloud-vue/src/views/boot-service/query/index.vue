<template>
  <div class="tab-view-container">
    <el-dialog width="450px" title="类别管理" :visible.sync="dirFromVisible">
      <el-form :model="currDirInfo">
        <el-form-item label="路径" label-width="100px">{{currDirInfo.pathCn}}</el-form-item>
        <el-form-item label="类别名称" label-width="100px">
          <el-input v-model="currDirInfo.svcName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dirFromVisible = false">取 消</el-button>
        <el-button type="primary" @click="dirOk">确 定</el-button>
      </div>
    </el-dialog>

    <el-row>
      <el-col :span="5">
        <el-card class="card" :style="{height:treeHeight+'px'}">
          <el-dropdown @command="dirDetail" trigger="click">
            <el-button type="primary" size="mini">
              添加
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="top">顶级</el-dropdown-item>
              <el-dropdown-item command="same">同级</el-dropdown-item>
              <el-dropdown-item command="child">子级</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button type="primary" size="mini" @click="dirDetail()">修改</el-button>
          <el-button type="primary" size="mini" @click="delDir" style="margin-left: 0;">删除</el-button>
          <el-tree
            @node-click="dirNodeClick"
            ref="dirTree"
            :data="serverDir"
            :props="{value:'svcId', label:'svcName'}"
            :highlight-current="true"
          ></el-tree>
        </el-card>
      </el-col>
      <el-col :span="19">
        <el-card class="card">
          <el-row>
            <el-col :span="22">
              <el-form :inline="true" :model="paramForm">
                <el-form-item label="名称">
                  <el-input v-model="paramForm.svcName" placeholder="名称"></el-input>
                </el-form-item>
                <el-form-item label="关键字">
                  <el-input v-model="paramForm.svcKey" placeholder="关键字"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit()">查询</el-button>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="2" style="text-align:right;">
              <el-button type="primary" @click="add()">添加</el-button>
            </el-col>
          </el-row>
          <el-row :style="{height:mainHeight+'px'}">
            <el-table
              :data="dataset.data"
              :height="gridHeight"
              border
              style="width: 100%"
              v-loading="loading"
            >
              <el-table-column type="index" width="50" label="序号"></el-table-column>
              <el-table-column prop="svcName" label="服务名称">
                <template slot-scope="scope">
                  <a
                    style="color:rgb(64, 120, 192);"
                    :href="'#/boot-service/detail?svcid='+scope.row.svcId"
                  >{{scope.row.svcName}}</a>
                </template>
              </el-table-column>
              <el-table-column prop="svcUrl" label="服务路径"></el-table-column>
              <el-table-column prop="prvdName" label="供应商"></el-table-column>
              <!-- <el-table-column prop="isShow" label="是否显示">
                <template slot-scope="scope">{{scope.row.isShow?'显示':'隐藏'}}</template>
              </el-table-column>
              <el-table-column prop="isEnable" label="是否启用">
                <template slot-scope="scope">{{scope.row.isEnable?'可用':'禁用'}}</template>
              </el-table-column>-->
            </el-table>
          </el-row>
          <div class="block">
            <el-pagination
              ref="pagination"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[10, 20, 50, 200, 1000]"
              :page-size="20"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import enumselector from "@/components/EnumSelector";
import queryParam from "@/utils/query";
import { queryMarketCustomer } from "@/api/market";
import { elDateShortCurts } from "@/utils/DateUtil";
import { debuglog } from "util";
import { serviceModel } from "@/model";
import database from "@/utils/database";
import push from "@/utils/push";
import request from "@/utils/query/request";
import SavePackHelper from "@/utils/savePackHelper";
//import DataSet from "@/model/dataset";
export default {
  name: "ServiceQuery",
  mixins: [push],
  components: { enumselector },
  data() {
    return {
      serverDir: [],
      currDirInfo: {},
      dirFromVisible: false,
      addLevel: "",
      dataset: this.$dataset.createDataStore(serviceModel),
      total: 0,
      screenHeight: window.innerHeight,
      paramForm: {
        FOPERATOR: this.$route.query.operator
      },
      currentPage4: 1,
      creationDatas: [],
      loading: false,
      hyTypes: database.hyTypes,
      enterpriseScale: database.enterpriseScale
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
      let height = this.screenHeight - 60 - 51 - 42;
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84;
      }
      return height;
    },
    gridHeight() {
      return this.mainHeight - 5;
    },
    treeHeight() {
      return this.mainHeight + 60 + 51 + 22;
    }
  },
  methods: {
    add() {
      this.$router.push({
        path: "/boot-service/detail"
      });
    },
    dirOk() {
      let data;
      let savePackHelper = new SavePackHelper(serviceModel.modelFile);
      //添加
      if (this.addLevel) {
        let id = new Date().valueOf(),
          svcPid,
          path;
        if (this.addLevel == "top") {
          svcPid = "-1";
          path = "/" + id;
        } else if (this.addLevel == "same") {
          data = this.$refs.dirTree.currentNode.$parent.$options.propsData.node
            .data;
          svcPid = data.svcId;
          path = data.path + "/" + id;
        } else {
          data = this.$refs.dirTree.currentNode.$options.propsData.node.data;
          svcPid = data.svcId;
          path = data.path + "/" + id;
        }
        let addData = {
          svcId: id,
          svcName: this.currDirInfo.svcName,
          svcPid,
          type: "dir",
          path
        };
        savePackHelper.add(addData);
        console.log(addData);
      } else {
        //修改
        data = this.$refs.dirTree.currentNode.$options.propsData.node.data;
        let modifeData = {
          svcName: this.currDirInfo.svcName
        };
        let old = {
          svcId: data.svcId
        };
        savePackHelper.update(old, modifeData);
      }

      savePackHelper.save();
    },
    delDir() {
      let dirTree = this.$refs.dirTree;
      let data = dirTree.getCurrentNode();
      if (!data) {
        this.$alert("请选择要删除的节点", { type: "warning" });
        return;
      }
      if (data.children && data.children.length > 0) {
        this.$alert("请先删除子节点", { type: "warning" });
        return;
      }
      this.$confirm("确定要删除【" + data.svcName + "】吗？", "确认信息").then(
        () => {
          let savePackHelper = new SavePackHelper(serviceModel.modelFile);
          savePackHelper.remove({
            svcId: data.svcId
          });
          savePackHelper.save();
        }
      );
    },
    dirDetail(level) {
      let me = this;
      let dirTree = this.$refs.dirTree;
      if (level) {
        this.currDirInfo = {};
      } else {
        let data = dirTree.getCurrentNode();
        if (!data) {
          this.$alert("请选择要修改的节点", { type: "warning" });
          return;
        }
        this.currDirInfo = data;
      }

      this.currDirInfo.pathCn = "";
      function initPath(node) {
        if (!node.$parent.$options.propsData.node) return;
        me.currDirInfo.pathCn =
          node.$options.propsData.node.data.svcName +
          " / " +
          me.currDirInfo.pathCn;
        if (node.$parent.$options.propsData.node) {
          initPath(node.$parent);
        }
      }
      if (!level) {
        //修改 路径少显示一级
        initPath(this.$refs.dirTree.currentNode.$parent);
      } else initPath(this.$refs.dirTree.currentNode);

      if (this.currDirInfo.pathCn.length > 2)
        this.currDirInfo.pathCn = this.currDirInfo.pathCn.substring(
          0,
          this.currDirInfo.pathCn.length - 2
        );

      this.addLevel = level;
      if (!dirTree.getCurrentNode()) this.addLevel = "top";

      this.dirFromVisible = true;
    },
    dirNodeClick(data, node) {
      const me = this;
      let param = new queryParam.Param();
      let where = new queryParam.Where();

      param.where = where;
      //where.setPage(-1, -1);
      where.eq("svcPid", data.svcId);
      param.where.eq("type", "service");
      debugger;
      this.dataset.load(param);
    },
    onSubmit() {
      const me = this;
      let param = new queryParam.Param();

      param.returnTotal = true;

      param.createWhereByModel(this.paramForm, serviceModel); // marketModel
      param.where.eq("type", "service");
      this.dataset.load(param);
    },
    handleSizeChange(val) {
      this.dataset.turnPage(1, val);
      //this.onSubmit(1, val);
    },
    handleCurrentChange(val) {
      this.dataset.turnPage(val, this.$refs.pagination.pageSize);
      //this.onSubmit(val, this.$refs.pagination.pageSize);
    },
    initServerDir() {
      //加载类别
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      param.returnTotal = true;
      param.where = where;
      param.where.setPage(-1, -1);
      param.where.eq("type", "dir");
      request(param, this.dataset.modelFile).then(response => {
        let data = response.dataPack.rows;
        data.forEach(element => {
          if (element.svcPid == "-1") {
            this.serverDir.push(element);
            findChildren(element);
          }
        });
        function findChildren(parent) {
          let children = [];
          for (let i = 0; i < data.length; i++) {
            let item = data[i];
            if (item.svcPid == parent.svcId) {
              children.push(item);
              findChildren(item);
            }
          }
          if (children.length > 0) parent.children = children;
        }
      });
    }
  },
  mounted() {
    const me = this;
    window.onresize = () => {
      return (() => {
        me.screenHeight = window.innerHeight;
      })();
    };
    this.dataset.on("beginload", param => {
      this.loading = true;
    });

    this.dataset.on("afterload", response => {
      this.loading = false;
      this.total =
        response.outParameter.factRecordSize == -1
          ? 0
          : response.outParameter.factRecordSize;
      console.log(this.total);
    });
    this.initServerDir();
    this.onSubmit();
  },
  created() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.custom-tree-node {
  .tree-node-operation {
  }
}

.custom-tree-node:hover {
  .tree-node-operation {
    display: initial;
  }
}

.card {
  margin: 0 2px;
}
.tab-view-container {
  padding: 10px;
  background-color: rgb(240, 242, 245);

  .row-margin-top {
    margin-top: 8px;
  }
}
</style>
