<template>
  <el-table-column :label="label" :style="confStyle">
    <el-checkbox slot="header" :checked="checkAll" @change="doCheckAllChange">{{label}}</el-checkbox>    
    <template slot-scope="{row}">  
        <div  v-if="isArray(row)" >
          <el-checkbox                
              v-for="(da,i) in getBindArray(row)"
              :key="da.value + i"
              v-model="row[prop]"             
            >{{da.name}}</el-checkbox>
        </div>
      <el-checkbox v-else-if="isShow(row)" v-model="row[prop]">{{label}}</el-checkbox>
      <span v-else>—</span>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "hc-table-column-checkbox",
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  inject: ["tableRows"],
  computed: {
    prop() {
      return this.conf.prop || "";
    },   
    radioValue() {
      return this.conf.radioValue || "";
    },
    label() {
      return this.conf.label;
    },
    width() {
      return this.conf.width;
    },
    confStyle() {
      return this.conf.style;
    }
  },
  data() {
    return {
      checkAll: false
    };
  },
  methods: {
    // 是否显示
    isShow(row) {
      if (this.conf.isShow === undefined) {
        return true;
      } else if (typeof this.conf.isShow === "function") {
        return this.conf.isShow.call(this, row);
      }
      return this.conf.isShow;
    },
    // 判断同列是否数组选项
    isArray(row) {      
      return Array.isArray(this.getBindVar(row,this.radioValue));
    },
    // 根据表达式获取绑定变量, a.b.c
    getBindVar(row, key) {
      let field = key.split(".");
      let retuModel;
      field.forEach(key => {
        if (retuModel) {
          retuModel = retuModel[key];
        } else {
          retuModel = row[key];
        }
      });
      return retuModel;
    },
    // 获取绑定数组变量
    getBindArray(row){
      return this.getBindVar(row, this.radioValue)
    },
    doCheckAllChange(val) {
      this.setRowCheckAll(this.tableRows, val)
    },
    /**
     * 设置所有行选中值
     */
    setRowCheckAll(rows, checked){              
      rows.forEach(row => {
        row[this.prop] = checked;
        if (row.children){
          this.setRowCheckAll(row.children,checked);
        }
      });
    }
  }
};
</script>