<template>
  <el-select
    v-model="selectValue"
    :multiple="multiple"
    collapse-tags
    placeholder="请选择"
    @change="change"
  >
    <el-option
      v-for="item in data"
      :key="item.optionName"
      :label="item.optionValue"
      :value="item.optionName"
    ></el-option>
  </el-select>
</template>
<script>
import queryParam from "@/utils/query";
import { queryEnmu } from "@/api/enum";

export default {
  name: "EnumSelector",
  components: {},
  data() {
    return {
      data: [],
      selectValue: null
    };
  },
  model: {
    prop: "value",
    event: "valuechange"
  },
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    etype: String,
    value: {}
  },

  computed: {},
  watch: {},
  methods: {
    change(val) {
      this.$emit("valuechange", val);
      this.$emit("change", val);
    }
  },
  mounted() {
    let param = new queryParam.Param();
    let where = new queryParam.Where();
    where.eq("groupName", this.etype);
    where.setPage(-1, -1);
    param.where = where;
    queryEnmu(param)
      .then(response => {
        const data = response.dataPack;
        if (data.rows.length > 0) this.data = data.rows;
      })
      .catch(err => {});
  }
};
</script>
<style scoped>
</style>

