<template>
  <!--
    <el-link id="toBottom" href="#bottom" >到底部</el-link>
    <el-input v-model="input" placeholder="请输入内容"/> <el-button type="primary" @click="websocketSend">发送</el-button>
    -->
  <div v-html="htmlContext"/>
</template>

<style>
#toBottom{
  display: none;
}
#bottom{
  height: 20px;
  margin: 20px;
  border: 1px solid balck;
}
</style>

<script>
export default {
  name: 'DebugMsg',
  data() {
    return {
      websocket: null,
      htmlContext: '',
      input: ''
    }
  },
  created() {
    // 页面刚进入时开启长连接
    this.initWebSocket()
  },
  destroyed: function() {
    // 页面销毁时关闭长连接
    this.websocketclose()
  },

  methods: {
    websocketSend() {
      this.websocket.send(this.input)
    },
    initWebSocket() {
      // 初始化weosocket
      console.log('初始化weosocket')
      // 此处换成EAP5正式地址即可
      const wsuri =
        'ws://192.168.1.183:5001/amrept-web/ptcsxm/websocket/8AONG71F7ABB7E3CE18F1575DC72IUXB.do?ptcsxm.pro/cs.dir/test23220.dir/test001.modeldir/jobdir.jobdir/skt001.skt' // ws地址
      // const wsuri="ws://192.168.100.95:8080/headerWebSocket"
      this.websocket = new WebSocket(wsuri)
      this.websocket.onopen = this.websocketonopen

      this.websocket.onerror = this.websocketonerror

      this.websocket.onmessage = this.websocketonmessage
      this.websocket.onclose = this.websocketclose
    },

    websocketonopen() {
      console.log('WebSocket连接成功')
    },
    websocketonerror(e) {
      // 错误
      console.log('WebSocket连接发生错误')
    },
    websocketonmessage(e) {
      // 数据接收
      // 打印在页面上
      this.htmlContext +=
        '<p>' + this.getNowFormatDate() + '：' + e.data + '</p>'
    },

    websocketsend(agentData) {
      // 数据发送
      this.websocket.send(agentData)
    },

    websocketclose(e) {
      // 关闭
      console.log('connection closed (' + e.code + ')')
    },
    getNowFormatDate() {
      const date = new Date()
      const seperator1 = '-'
      const seperator2 = ':'
      const month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      const strDate =
        date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      const strHours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const strMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const strSeconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      const currentdate =
        date.getFullYear() +
        seperator1 +
        month +
        seperator1 +
        strDate +
        ' ' +
        strHours +
        seperator2 +
        strMinutes +
        seperator2 +
        strSeconds
      return currentdate
    }
  }
}
</script>
