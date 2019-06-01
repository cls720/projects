<template>
  <div class="pro-editor" ref="editor" ss="11" :style="{height:height+'px'}">
    <textarea class="form-control" ref="textEditor" :id="id" :name="id"></textarea>
  </div>
</template>
<script>
import * as CodeMirror from "codemirror/lib/codemirror";

import "codemirror/lib/codemirror.css";
//主题
import "codemirror/theme/monokai.css";

//提示
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/hint/html-hint.js";
import "codemirror/addon/hint/css-hint.js";

//高亮
import "codemirror/mode/javascript/javascript";
// import 'mode/groovy/groovy'
//import 'codemirror/mode/clike/clike'
// import 'codemirror/mode/go/go'
import "codemirror/mode/htmlmixed/htmlmixed";
// import 'codemirror/mode/http/http'
// import 'codemirror/mode/php/php'
// import 'codemirror/mode/python/python'
// import 'codemirror/mode/http/http'
//import 'codemirror/mode/sql/sql'
// import 'codemirror/mode/vue/vue'
import "codemirror/mode/xml/xml";
//快捷键
import "codemirror/keymap/sublime.js";
import "codemirror/keymap/emacs.js";
import "codemirror/keymap/vim.js";

export default {
  name: "codeEditor",
  props: {
    id: String,
    content: String,
    height: {
      type: Number,
      default: 500
    },
    mode: {
      type: String,
      default: "javascript"
    }
  },
  data() {
    return {};
  },
  methods: {
    save(editor) {
      this.$emit("save", this);
    },
    setValue(content) {
      this.editor.setValue(content);
    }
  },
  computed: {},
  mounted() {
    //console.log("editorHeight:" + height);
    let myTextarea = document.getElementById(this.id);
    this.editor = CodeMirror.fromTextArea(myTextarea, {
      //括号匹配
      matchBrackets: true,
      //mode: {name: "javascript", globalVars: true},
      mode: this.mode, //编辑器语言
      theme: "monokai", //编辑器主题
      extraKeys: {
        "Ctrl-Space": "autocomplete", //ctrl-space唤起智能提
        "Ctrl-S": this.save
      },
      lineNumbers: true //显示行号
    });
    this.editor.setSize("100%", "100%");
  }
};
</script>
