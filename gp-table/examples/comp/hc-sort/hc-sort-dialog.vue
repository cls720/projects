<template>
  <div>
    <el-dialog v-el-drag-dialog :visible.sync="show" title="添加自定义排序">
      <el-row>
        <el-col :span="12">
          <el-button size="small" icon="el-icon-plus">添加字段</el-button>
        </el-col>
        <el-col :span="12" style="text-align:right">
          <el-button-group>
            <el-button size="small">
              上移
              <i class="el-icon-arrow-up"></i>
            </el-button>
            <el-button size="small">
              下移
              <i class="el-icon-arrow-down"></i>
            </el-button>
          </el-button-group>
        </el-col>
      </el-row>
      <el-row style="padding:5px 0px">
        <el-table :data="orderMultiFields" style="width: 100%" height="200" >
          <el-table-column label="排序字段">
            <template slot-scope="scope">
              <el-select v-model="scope.row.field" placeholder="请选择">
                <el-option
                  v-for="(item,i) in orderFields"
                  :key="i"
                  :label="item.title"
                  :value="item.field"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="类型" width="200">
            <template slot-scope="scope">
              <el-radio v-model="scope.row.type" label="asc">升级</el-radio>
              <el-radio v-model="scope.row.type" label="desc">降序</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row>
        <el-button size="small" type="success" plain v-for="item in orderMultiFields">
          {{getFieldTitle(item.field)}}
          <span v-if="item.type == 'asc'">
            <i class="el-icon-sort-up"></i>
          </span>
          <span v-else>
            <i class="el-icon-sort-down"></i>
          </span>
        </el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from "../../../libs/src/directives/el-dragDialog";
import JsonUtil from "../../../libs/src/utils/JsonUtil.js";

// import VCheckboxGroup from '../../v-checkbox-group/index'
// import VCheckbox from '../../v-checkbox/index'

export default {
  name: "hc-sort-dialog",
  components: {
    // VCheckboxGroup, VCheckbox
  },
  directives: {
    elDragDialog
  },
  data() {
    return {
      // 是否显示对话框
      show: false,
      orderMultiFields: [
        {
          field: "",
          type: "asc"
        },
        {
          field: "",
          type: "asc"
        }
      ]
    };
  },
  props: {
    // 可排序字段列表
    orderFields: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {},
  methods: {
    getFieldTitle(field) {
      let ja = JsonUtil.findByKeyValue(this.orderFields, "field", field);
      if (ja) {
        return ja.title;
      }
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  created() {},
  mounted() {},
  watch: {}
};
</script>