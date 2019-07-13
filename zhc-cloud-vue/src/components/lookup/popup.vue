<template>
  <el-row>
    <el-col :span="4" v-if="props.tree">
      <el-tree
        @node-click="nodeClick"
        ref="dirTree"
        :data="treeData"
        :props="{value:props.tree.idField, label:props.tree.labelField}"
        :highlight-current="true"
      ></el-tree>
    </el-col>
    <el-col :span="props.tree?15:19">
      <el-table
        :data="dataset.data"
        @row-click="rowclick"
        @row-dblclick="rowdblclick"
        highlight-current-row
        border
        style="width: 100%"
        v-loading="loading"
        :height="500"
      >
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <template v-for="item in gridFields">
          <el-table-column v-bind="item"></el-table-column>
        </template>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          ref="pagination"
          :current-page="1"
          :page-sizes="[10, 20, 50, 200, 1000]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </el-col>
    <el-col :span="5">
      <el-form label-width="80px" :model="paramForm">
        <el-container>
          <el-main style="height:490px">
            <template v-for="item in queryPanelFields">
              <el-form-item :label="item.label">
                <el-input v-model="paramForm[item.prop]"></el-input>
              </el-form-item>
            </template>
          </el-main>
          <el-footer>
            <el-form-item>
              <el-button type="primary" @click="query">查 询</el-button>
            </el-form-item>
          </el-footer>
        </el-container>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import queryParam from "@/utils/query";
import request from "@/utils/query/request";
import { debuglog } from "util";
export default {
  name: "lookup",
  components: {},
  data() {
    return {
      total: 0,
      treeData: [],
      loading: false,
      dataset: this.$dataset.createDataStore(this.props.grid.model),
      paramForm: {},
      selected: {}
    };
  },
  model: {
    prop: "value",
    event: "valuechange"
  },
  props: {
    props: {
      type: Object,
      default: function() {
        return {};
      }
    },

    value: {
      type: Object
    }
  },

  computed: {
    gridFields() {
      let result = [];

      this.props.grid.fileds.forEach(element => {
        let item = {};
        if (typeof element == "string") {
          item.prop = element;
        }
        item.label = this.dataset.fields[item.prop].desc;
        result.push(item);
      });
      return result;
    },
    queryPanelFields() {
      let result = [];
      this.props.queryFields.forEach(element => {
        let item = {};
        if (typeof element == "string") {
          item.prop = element;
        }
        item.label = this.dataset.fields[item.prop].desc;
        result.push(item);
      });
      return result;
    }
  },
  watch: {},
  methods: {
    nodeClick(data, node) {
      let param = new queryParam.Param();
      param.where.setPage(-1, -1);

      let relevance = this.props.tree.relevance;
      relevance.forEach(element => {
        param.where.addCondition(
          element.target,
          data[element.source],
          null,
          element.operator
        );
      });

      this.dataset.load(param);
    },
    rowclick(row, column, event) {
      this.selected = row;
      this.$set(this, "selected", row);
      // this.$emit("valuechange", row);
    },
    rowdblclick(row, column, event) {
      this.$emit("valuechange", row);
      this.$emit("rowdblclick", row, column, event);
    },
    loadTreeData() {
      request(this.props.tree.filter, this.props.tree.model.modelFile).then(
        response => {
          let data = response.dataPack.rows;
          let treeCfg = this.props.tree;
          data.forEach(element => {
            if (element[treeCfg.pidField] == treeCfg.rootVal) {
              this.treeData.push(element);
              findChildren(element);
            }
          });
          function findChildren(parent) {
            let children = [];
            for (let i = 0; i < data.length; i++) {
              let item = data[i];
              if (item[treeCfg.pidField] == parent[treeCfg.idField]) {
                children.push(item);
                findChildren(item);
              }
            }
            if (children.length > 0) parent.children = children;
          }
        }
      );
    },
    handleSizeChange(val) {
      this.dataset.turnPage(1, val);
    },
    handleCurrentChange(val) {
      this.dataset.turnPage(val, this.$refs.pagination.pageSize);
    },
    query() {
      let param = new queryParam.Param();
      param.returnTotal = true;
      param.createWhereByModel(this.paramForm);
      if (this.props.grid.filter) {
        param.where.addConditions(this.props.grid.filter.where);
      }

      this.dataset.load(param);
    }
  },
  mounted() {
    if (this.props.tree) this.loadTreeData();
    this.dataset.on("beginload", () => {
      this.loading = true;
    });
    this.dataset.on("afterload", () => {
      this.loading = false;
    });
    this.query();
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.pagination {
  margin-top: 10px;
}
</style>

