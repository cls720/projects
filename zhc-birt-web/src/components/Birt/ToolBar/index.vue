<template>
  <div class="no-print zhc-birt-print-bar">
    <el-pagination
      v-if="totalPage > 1"
      background
      layout="prev, pager, next"
      :page-size="1"
      :pager-count="5"
      :total="totalPage"
      :current-page="currentPage"
      @current-change="onCurrentPageChange"
      style="float:left"
    ></el-pagination>
    <el-button-group>
      <slot></slot>
      <el-button icon="el-icon-printer" @click="doPrint()">打印</el-button>
      <el-dropdown>
        <el-button>
          输出
          <i class="el-icon-download el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="onExprotPdf()">PDF</span>
          </el-dropdown-item>
          <el-dropdown-item>Excel</el-dropdown-item>
          <el-dropdown-item>Word</el-dropdown-item>
          <el-dropdown-item>图片</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-button-group>
  </div>
</template>

<script>
import print from "print-js";
import { exportPdf } from "@/api/html-export.js";

export default {
  name: "birt-tool-bar",
  props: {
    totalPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    doPrint() {
      print("print_div", "html");
    },
    setCurrentPage(pageIndex) {
      this.currentPage = pageIndex;
    },
    onCurrentPageChange(pageIndex) {
      this.$emit("page-change", pageIndex - 1);
    },
    onExprotPdf() {
      console.log(window.location);
      exportPdf(window.location.href)
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          window.open(url);
        })
        .catch(err => {
          console.log(err); // 这里catch到错误timeout
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.zhc-birt-print-bar {
  text-align: right;
  padding: 10px;
}
</style>