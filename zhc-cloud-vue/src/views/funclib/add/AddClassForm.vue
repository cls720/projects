<template>
  <el-form ref="form" :model="dataset.curRecord" label-width="100px" size="small">
    <el-form-item label="引用类">
      <el-col :span="15">
        <el-autocomplete
          style="width:100%"
          popper-class="my-autocomplete"
          v-model="dataset.curRecord.refClassImport"
          :fetch-suggestions="querySearch"
          placeholder="请输入引用类名"
          @select="handleSelect"
        >
          <el-button
            v-if="isAdd()"
            slot="append"
            icon="el-icon-search"
            @click="refClassImportLookUp"
          ></el-button>
          <el-button v-else slot="append" icon="el-icon-refresh" @click="refClassImportLookUp"></el-button>
          <template slot-scope="{ item }">
            <div class="name">{{ item.refClassImport }}.{{ item.refClassName }}</div>
            <span class="addr">{{ item.classNameCn }}</span>
          </template>
        </el-autocomplete>
      </el-col>
      <el-col :span="9">
        <el-form-item label=" . " label-width="20px" style="margin-bottom:0px;">
          <el-input v-model="dataset.curRecord.refClassName" :disabled="true"></el-input>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-row>
      <el-col :span="12">
        <el-form-item label="类名称">
          <el-input v-model="dataset.curRecord.className"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="类中文名称">
          <el-input v-model="dataset.curRecord.classNameCn"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-table :data="dataset.data" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" class="demo-table-expand">
            <el-form-item label="方法注释">
              <span>{{ props.row.showdoc }}</span>
            </el-form-item>
            <el-form-item label="引用表达式">
              <span>{{props.row.refExpression}}()</span>
            </el-form-item>
            <el-form-item label="调用表达式">
              <span>{{props.row.expression}}()</span>
            </el-form-item>
            <el-form-item label="索引关键字">
              <span>{{ props.row.searchKeyWorld }}</span>
            </el-form-item>
            <el-form-item label="备注">
              <span>{{ props.row.note }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="引用方法">
        <template slot-scope="{row}">
          <el-input
            v-if="row.isNewMethod"
            v-model="row.refMethodName"
            class="edit-input"
            size="small"
          />
          <span v-else>{{row.refMethodName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="方法名称">
        <template slot-scope="{row}">
          <el-input v-model="row.methodName" class="edit-input" size="small" />
        </template>
      </el-table-column>
      <el-table-column label="方法中文名称">
        <template slot-scope="{row}">
          <el-input v-model="row.methodNameCn" class="edit-input" size="small" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
              title="修改"
            ></el-button>
            <el-button
              type="success"
              size="mini"
              icon="el-icon-plus"
              @click="handleAdd(scope.$index, scope.row)"
              title="添加"
            ></el-button>
            <el-button
              :type="canDelete(scope.$index, scope.row) ? 'danger':''"
              size="mini"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)"
              :disabled="!canDelete(scope.$index, scope.row)"
              title="删除"
            ></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="margin-top:18px;">
      <el-col :span="12">
        <el-form-item label="制单人">
          <el-input v-model="dataset.curRecord.operator" :disabled="true"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="制单时间">
          <el-input v-model="dataset.curRecord.writeTime" :disabled="true"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-dialog v-el-drag-dialog :visible.sync="addMethodFormDialogVisible" title="修改方法">
      <add-method-form ref="methodForm" :method-model="getEditRecord()"></add-method-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addMethodFormDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="applyEdit()">确 定</el-button>
      </div>
    </el-dialog>
  </el-form>
</template>

<script>
import Fuse from "fuse.js";
import Pinyin from "js-pinyin";
import { funclibFiles, funclibMethods } from "@/api/funclib";
import { debuglog } from "util";
import AddMethodForm from "./AddMethodForm.vue";
import elDragDialog from "@/directive/el-drag-dialog";
import FunclibModel from "../FunclibModel.js";

export default {
  name: "AddClassForm",
  components: { AddMethodForm },
  directives: { elDragDialog },
  props: {
    classModel: {
      type: Array,
      default: function() {
        return [];
      }
    },
    formState: {
      type: String,
      default: "add"
    }
  },
  data() {
    return {
      classes: [],
      fuse: undefined,
      addMethodFormDialogVisible: false,
      dataset: this.$dataset.createDataStore(FunclibModel)
    };
  },
  watch: {
    addMethodFormDialogVisible() {
      if (
        this.addMethodFormDialogVisible &&
        this.$refs.methodForm.methodModel_data
      ) {
        this.$refs.methodForm.methodModel_data = this.getEditRecord();
      }
    }
  },
  methods: {
    isAdd() {
      return this.formState === "add";
    },
    onSubmit() {},
    refClassImportLookUp() {
      alert("弹出查找");
    },
    refreshRefClassMethods() {
      alert("刷新引用类方法");
    },
    querySearch(queryString, cb) {
      var classes = this.classes;
      var results = [];

      if (queryString && queryString !== "") {
        results = this.fuse.search(queryString);
      } else {
        results = classes;
      }
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return clazz => {
        return (
          (clazz.refClassImport + clazz.refClassName)
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) != -1
        );
      };
    },
    loadAll() {
      let me = this;
      var javaClasses = [];
      funclibFiles("java").then(response => {
        javaClasses = response.dataPack;
        javaClasses.forEach(item => {
          item.classNameCnPinyin = Pinyin.getCamelChars(item.classNameCn);
        });

        me.classes = javaClasses;
        me.initFuse(javaClasses);
      });
    },
    handleSelect(item) {
      // this.dataset.curRecord.refClassImport = item.refClassImport;
      // this.dataset.curRecord.refClassName = item.refClassName;
      // this.dataset.curRecord.className = item.refClassName;
      // this.dataset.curRecord.classNameCn = item.classNameCn;

      let me = this;
      let refClass = item.refClassImport + "." + item.refClassName;
      funclibMethods({ type: "java", refClass: refClass }).then(response => {
        debugger;
        me.dataset.clear();
        let recds = response.dataPack;
        if (!(recds && recds.length > 0)) {
          recds = [{}];
        }
        recds.forEach(r => {
          r.refClassImport = item.refClassImport;
          r.refClassName = item.refClassName;
          r.className = item.refClassName;
          r.classNameCn = item.classNameCn;
        });
        me.dataset.add(recds);
        // me.dataset.setCurRecord(recds[0]);
        // me.dataset.data.splice(0, me.dataset.data.length, ...response.dataPack);
      });
      console.log(item);
    },
    getEditRecord() {
      return { ...this.dataset.curRecord };
    },
    applyEdit() {
      debugger;
      Object.assign(this.dataset.curRecord, {
        ...this.$refs.methodForm.methodModel_data
      });
      this.addMethodFormDialogVisible = false;
    },
    handleEdit(index, row) {
      this.dataset.setCurRecord(row);
      this.addMethodFormDialogVisible = true;
      console.log(index, row);
    },
    handleAdd(index, row) {
      // this.dataset.data.splice(index + 1, 0, { isNewMethod: true });
      this.dataset.data.splice(index + 1, 0, { isNewMethod: true });
    },
    handleDelete(index, row) {
      this.dataset.data.splice(index, 1);
    },
    canDelete(index, row) {
      return row.isNewMethod && this.dataset.data.length > 1;
    },
    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: "classNameCnPinyin",
            weight: 0.3
          },
          {
            name: "classNameCn",
            weight: 0.2
          },
          {
            name: "refClassName",
            weight: 0.3
          },
          {
            name: "refClassImport",
            weight: 0.2
          }
        ]
      });
    }
  },
  mounted() {
    this.loadAll();
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
