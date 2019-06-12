<template>
  <div class="tab-view-container">
    <el-row :gutter="10">
      <el-col :xs="10" :sm="8" :md="7" :lg="6" :xl="6">
        <el-card>
          <el-row>
            <el-input placeholder="请输入关键字" v-model="searchKey" class="input-with-select">
              <el-select v-model="searchField" slot="prepend" placeholder="请选择">
                <el-option label="所有" value="''"></el-option>
                <el-option label="函数类名" value="className"></el-option>
                <el-option label="索引" value="searchKeyWorld"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-row>
          <el-row class="row-tool-bar row-align-right">
            <el-button size="small" icon="el-icon-folder-add">添加类</el-button>
            <el-button size="small" icon="el-icon-plus">添加函数</el-button>
          </el-row>
          <el-row :style="{height:funcTreeHeight+'px'}">
            <el-tree :data="funcDatas" :props="treeDefaultProps" @node-click="handleNodeClick"></el-tree>
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
            <el-divider></el-divider>
          </el-row>
          <el-row :style="{height:funcFormHeight+'px'}">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.date1"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import queryParam from "@/utils/query";
import { queryUser } from "@/api/user-info";
import { elDateShortCurts } from "@/utils/DateUtil";

export default {
  name: "UserQuery",
  components: {},
  data() {
    return {
      loading: false,
      screenHeight: window.innerHeight,
      searchKey: "",
      searchField: "",
      funcDatas: [
        {
          methodNameCn: "组织机构函数 | OrgFunc",
          children: [
            {
              methodNameCn: "当前操作者 | curtOperator"
            }
          ]
        }
      ],
      treeDefaultProps: {
        children: "children",
        label: "methodNameCn"
      },
      pageNum: 1,
      pageSize: 200,
      totalCount: 1231,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      pickerOptions: {
        shortcuts: elDateShortCurts
      }
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
      return this.mainHeight - 112;
    },
    funcFormHeight() {
      return this.mainHeight - 88;
    }
  },
  methods: {
    onSubmit() {},
    handleNodeClick(data) {
      console.log(data);
    },
    czHandleClick(row) {
      alert(JSON.stringify(row));
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

  .row-align-right{
    text-align: right;
  }

  .row-tool-bar{        
    margin: 6px 0px;    
  }

  .row-margin-top {
    margin-top: 8px;
  }
}
</style>
