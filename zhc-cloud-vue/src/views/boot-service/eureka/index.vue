<template>
  <div class="tab-view-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item,index) in eurekas"
        :key="item.path"
        :label="item.title"
        :name="item.name"
      >
        <iframe :src="item.path" width="100%" :height="mainHeight+'px'"></iframe>
      </el-tab-pane>
      <el-tab-pane label="hystrix" name="hystrix">
        <span style="padding:10px 0px;">监控频率:</span>
        <el-input-number v-model="deplay" :min="2" label="监控频率">监控频率</el-input-number>
        <span style="padding:10px 0px;">秒</span>
        <el-link :href="linkUrl" target="_blank">调用监控</el-link>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenHeight: window.innerHeight,
      deplay: 3,
      eurekas: [
        {
          title: "eureka-7101",
          name: "7101",
          path: "http://eap.histron.cn:7101"
        },
        {
          title: "eureka-7102",
          name: "7102",
          path: "http://eap.histron.cn:7102"
        },
        {
          title: "eureka-7103",
          name: "7103",
          path: "http://eap.histron.cn:7103"
        }
      ],
      activeName: "7101"
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
      let height = this.screenHeight - 80;
      if (!this.$store.state.tagsView.isTagFullscreen) {
        height -= 84;
      }
      return height;
    },
    linkUrl() {
      return (
        "http://eap.histron.cn:91/hystrix/monitor?stream=http%3A%2F%2Feap.histron.cn%3A91%2Factuator%2Fhystrix.stream&delay=" +
        this.deplay * 1000 +
        "&title=eap5"
      );
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    const me = this;
    window.onresize = () => {
      return (() => {
        me.screenHeight = window.innerHeight;
      })();
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.tab-view-container {
  padding: 10px;
  background-color: rgb(240, 242, 245);
}
</style>