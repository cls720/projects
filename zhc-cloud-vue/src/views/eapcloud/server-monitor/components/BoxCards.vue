<template>
  <el-row class="card-container" :gutter="10">
    <el-col :xs="6" :sm="6" :lg="6">
      <image-title class="box-card" :image-url="imageTitle02" width="100%" height="100px">
        <div class="text-title">Docker</div>
        <div class="text-item">容器：{{data0.dockerCount}}个</div>
        <div class="text-item">启用：{{data0.dockerUsed}}个</div>
      </image-title>
    </el-col>
    <el-col :xs="6" :sm="6" :lg="6">
      <image-title class="box-card" :image-url="imageTitle02" width="100%" height="100px">
        <div class="text-title">CPU/{{timeStep}}分钟</div>
        <div class="text-item">核数：{{data0.cpuCount}}核</div>
        <div class="text-item">ud%：{{data0.cpuUsed}}%</div>
      </image-title>
    </el-col>
    <el-col :xs="6" :sm="6" :lg="6">
      <image-title class="box-card" :image-url="imageTitle02" width="100%" height="100px">
        <div class="text-title">内存/{{timeStep}}分钟</div>
        <div class="text-item">内存：{{data0.memoryCount}}G</div>
        <div class="text-item">占用：{{data0.memoryUsed}}G</div>
      </image-title>
    </el-col>
    <el-col :xs="6" :sm="6" :lg="6">
      <image-title class="box-card" :image-url="imageTitle02" width="100%" height="100px">
        <div class="text-title">响应时间</div>
        <div class="text-item">平均：{{data0.reponseAvg}}秒</div>
        <div class="text-item">最大：{{data0.reponseMax}}秒</div>
      </image-title>
    </el-col>
  </el-row>
</template>

<script>
import ImageTitle from "@/components/ImageTitle";

export default {
  name: "DockerCount",
  components: { ImageTitle },
  data() {
    return {
      imageTitle02: "url(" + require("@/images/title-02.png") + ")",
      timeStep: 5,
      data0: {
        dockerCount: 8,
        dockerUsed: 4,
        cpuCount: 20,
        cpuUsed: 30,
        memoryCount: 32,
        memoryUsed: 4,
        reponseAvg: 3,
        reponseMax: 10
      }
    };
  },
  mounted() {}
};
</script>

<style scoped>
.card-container {
  padding: 10px 10px;
}

.box-card {
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

