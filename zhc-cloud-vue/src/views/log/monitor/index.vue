<template>
  <div class="monitor">
    <el-row class="toolbar">
      <el-col :span="18">
        <el-form :inline="true" :model="monitor" label-width="120px">
          <el-form-item label="监控地址：">
            <el-input v-model="monitor.address" placeholder="监控地址"></el-input>
          </el-form-item>
          <el-form-item label="IP：">
            <el-input v-model="monitor.ip" placeholder="空值时默认监控当前IP"></el-input>
          </el-form-item>
          <el-form-item label="用户名：">
            <el-input v-model="monitor.userid" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="initWebSocket()">确定</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6" class="toolbarleft">
        <el-form :inline="true" :model="monitor">
          <el-form-item>
            <el-switch
              v-model="monitor.enable"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="启动"
              @change="switchChange"
              inactive-text="停止"
            ></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="clear()">清空</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <monacoEditor
        ref="editor"
        :options="editorOptions"
        theme="vs-dark"
        :uri="language"
        language="shell"
        :height="height"
      ></monacoEditor>
    </el-row>
  </div>
</template>
<script>
//import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import monacoEditor from "@/components/codeEditor/monacoEditor";
import { debuglog } from "util";

export default {
  components: { monacoEditor },
  data() {
    return {
      editorOptions: {
        lineNumbers: "off",
        minimap:{enabled:false}
      },
      monitor: {
        address:
          "ws://192.168.1.183:5001/amrept-web/ptcsxm/websocket/8AONG71F7ABB7E3CE18F1575DC72IUXB.do?ptcsxm.pro/cs.dir/test23220.dir/test001.modeldir/jobdir.jobdir/skt001.skt",
        enable: false
      }
    };
  },
  computed: {
    language() {
      return new Date().valueOf() + ".sh";
    },
    height() {
      return window.innerHeight - 80;
    }
  },
  mounted() {
    this.monaco = this.$refs.editor.editor.editor;
    // this.monaco = monaco.editor.create(document.getElementById("monaco"), {
    //   theme: "vs-dark",
    //   language: "shell",
    //   uri:".js"
    // });
  },
  methods: {
    initWebSocket() {
      // 初始化weosocket
      // 此处换成EAP5正式地址即可

      // const wsuri="ws://192.168.100.95:8080/headerWebSocket"
      if (this.websocket) {
        this.addLogInfo("正在关闭上次连接...");
        this.websocket.close();
        this.monitor.enable = false;
        delete this.websocket;
      } else {
        this.websocket = new WebSocket(this.monitor.address);
        this.websocket.onopen = this.websocketonopen;
        this.websocket.onerror = this.websocketonerror;
        this.websocket.onmessage = this.websocketonmessage;
        this.websocket.onclose = this.websocketclose;
        this.monitor.enable = true;
      }
    },
    websocketonopen() {
      this.addLogInfo(this.websocket.url + "连接成功");
    },
    websocketonerror(e) {
      // 错误
      this.addLogInfo("WebSocket连接发生错误");
    },
    websocketonmessage(e) {
      if (this.monitor.enable) this.addLogInfo(e.data);
    },

    websocketclose(e) {
      // 关闭
      this.addLogInfo("连接已关闭 (" + e.code + ")");
      if (!this.websocket) {
        this.websocket = new WebSocket(this.monitor.address);
        this.websocket.onopen = this.websocketonopen;
        this.websocket.onerror = this.websocketonerror;
        this.websocket.onmessage = this.websocketonmessage;
        this.websocket.onclose = this.websocketclose;
        this.monitor.enable = true;
      }
    },
    switchChange(val) {
      //   if (val && !this.websocket) {
      //     this.addLogInfo("WebSocket未创建无法启动");
      //     this.monitor.enable = false;
      //     return false;
      //   }
      //   if (val) {
      //     this.websocket.open();
      //   } else {
      //     this.websocket.close();
      //   }
    },
    onSubmit() {},
    addLogInfo(text) {
      let value = this.monaco.getValue();
      this.monaco.setValue(value + text + "\n");
      let position = new monaco.Position(1000, 1);
      this.monaco.focus();
      this.monaco.setPosition(position);
      this.monaco.revealLineInCenter(position.lineNumber);
    },
    clear() {
      this.monaco.setValue("");
    }
  },
  created() {}
};
</script>
<style rel="stylesheet/scss" lang="scss">
.monitor {
  padding: 10px;
  toolbar {
    toolbarleft {
    }
  }
}
</style>
