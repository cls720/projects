<template>
  <div class="time-line-box">
    <el-col :xs="12" :sm="12" :lg="17">
      <el-timeline>
        <el-timeline-item
          v-for="(item, index) in warnings"
          :key="index"
          :type="item.type"
          :size="item.size"
          :timestamp="item.timestamp"
        >
          <span style="color:beige">{{item.content}}</span>
        </el-timeline-item>
      </el-timeline>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="7">
      <image-title class="box-card" :image-url="imageTitle02" width="120px" height="110px">
        <div class="text-title">预警 {{warnCount}} 个</div>
        <div class="text-item">已完成：{{warnOk}} 个</div>
        <div class="text-item">已受理：{{warnOnProcess}} 个</div>
        <div class="text-item">未处理：{{warnUnProcess}} 个</div>
      </image-title>
    </el-col>
  </div>
</template>

<script>
import { parseTime } from "@/utils/index";
import ImageTitle from "@/components/ImageTitle";

export default {
  name: "WarningTimeLine",
  components: { ImageTitle },
  data() {
    return {
      warnCount: 30,
      warnOk: 18,
      warnOnProcess: 8,
      warnUnProcess: 4,
      imageTitle02: "url(" + require("@/images/title-02.png") + ")",
      warnings: [{}]
    };
  },
  mounted() {
    let scope = this;
    let contents = [
      "福州XXX公司运行异常1001",
      "北京XXX公司运行异常1002",
      "天津XXX公司运行异常1003",
      "上海XXX公司运行异常1004",
      "厦门XXX公司运行异常1005",
      "福州XXX公司CPU>90%",
      "北京XXX公司CPU>93%",
      "天津XXX公司CPU>92%",
      "上海XXX公司CPU>96%",
      "厦门XXX公司CPU>98%",
      "福州XXX公司内存<1G",
      "北京XXX公司内存<1G",
      "天津XXX公司内存<1G",
      "上海XXX公司内存<1G",
      "厦门XXX公司内存<1G"
    ];
    setInterval(() => {      
      if (scope.warnings.length > 10) {
        scope.warnings.pop();
      }
      let i = Math.floor(Math.random() * 15);
      scope.warnings.unshift({
        content: contents[i],
        timestamp: new Date().toLocaleTimeString().replace(/^\D*/, ""), //parseTime(new Date()),
        size: i < 5 ? "large" : "normal",
        type: i < 5 ? "danger" : "warning"
      });
    }, 2000);
  }
};
</script>

<style scoped>
.time-line-box {
  overflow: hidden;
  height: 100%;
  padding: 5px;
}

.box-card {
  float: right;
  margin-top: 5px;
  padding: 10px 0px;  
}

.text-title {
  line-height: 30px;
  font-weight: bold;
}

.text-item {
  line-height: 20px;
}
</style>

