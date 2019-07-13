<template>
  <div>
    <el-dialog width="60%" title="数据查找" :visible.sync="showPopUp">
      <popup ref="popup" v-model="selected" :props="props" @rowdblclick="rowdblclick"></popup>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showPopUp = false">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </div>
    </el-dialog>
    <el-input v-model="selected[viewField]" class="input-with-select" readonly>
      <el-button slot="append" icon="el-icon-search" @click="showPopUp = true"></el-button>
    </el-input>
  </div>
</template>
  
</template>

<script>
import popup from "./popup";
export default {
  name: "vuecomponent",
  components: { popup },
  data() {
    return {
      selected: {},
      showValue: "",
      showPopUp: false
    };
  },
  model: {
    prop: "value",
    event: "valuechange"
  },
  props: {
    props: Object,
    dataFileds: Array, //["",""]
    queryFields: Array,
    dbModel: Object,
    value: {
      type: Object
    }
  },

  computed: {
    viewField() {
      return this.props.viewField;
    }
  },
  watch: {

  },
  methods: {
    returnValue() {
      this.$emit("valuechange", this.selected);
      //this.showValue = this.selected[this.viewField];
      this.showPopUp = false;
    },
    rowdblclick(row, column, event) {
      this.returnValue();
    },
    ok() {
      this.selected = this.$refs.popup.selected;
      this.returnValue();
    }
  },
  mounted() {
    this.selected = this.value;
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
</style>

