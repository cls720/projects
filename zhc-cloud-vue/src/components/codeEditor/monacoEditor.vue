<template>
  <div :style="style" class="vue-monaco-editor-container" ref="container">
  </div>
</template>
<script>
import { editor as monacoEditor } from "monaco-editor";
import Editor from "./editor.js";
import eventhub from "./eventhub.js";

export default {
  data() {
    return {
      editor: null,
      currentValue: ""
    };
  },
  computed: {
    style() {

      const width = this.width,
        height = this.height,
        fixedWidth = width.toString().endsWith("%") ? width : `${width}px`,
        fixedHeight = height.toString().endsWith("%") ? height : `${height}px`;

      return {
        width: fixedWidth,
        height: fixedHeight
      };
    },
    computedOptions() {
      return {
        value: this.value,
        theme: this.theme,
        language: this.language,
        readOnly: this.readOnly,
        ...this.options
      };
    },
    modelCreateOptions() {
      return {
        theme: this.theme,
        minimap: {
          enabled: true,
          showSlider: "always"
        },
        readOnly: this.readOnly,
        ...this.options
      };
    }
  },
  methods: {
    initMonaco() {
      var me = this;
      this.editorMount();
      this.currentValue = this.value;
      window.Editor = Editor;
      window.editor = this.editor = new Editor(this.$refs.container, {
        uri: this.uri,
        modifiedText: this.value,
        options: this.modelCreateOptions
      });
      // this.editor.$emit("save", this);
      this.editor.createEditor();
      eventhub.$on("save", (editor, e) => {
        me.$emit("save", me.editor);
      });
      this.editorMounted();

      /*  this.editor = monacoEditor.create(this.$refs.container, {
        model: null
      });

      var oldModel = this.editor.getModel();
      var newModel = monacoEditor.createModel(this.value, this.language);
      this.editor.setModel(newModel);
      if (oldModel) {
        oldModel.dispose();
      } */
      // $(".loading.editor").fadeOut({ duration: 300 });
    },
    editorMount() {
      this.$emit("mount");
    },
    editorMounted() {
      const editor = this.editor,
        editorInstance = editor.instance,
        position = this.position;

      this.$emit("mounted", editor);

      editorInstance.focus();

      if (position) {
        editor.position = position;
      }

      editor.onContentChange((e, value) => {
        this.currentValue = value;
        this.$emit("input", this.currentValue);
      });
      editor.onPositionChange(e => {
        this.$emit("position-change", e.position);
      });
      window.addEventListener("resize",function () {
        if (editor) {
            editor.editor.layout();
        }
      });
    },
    refresh(){
      this.editor.editor.layout();
    },
    destroyEditor() {
      this.editor.dispose();
    }
  },
  mounted() {
    this.initMonaco();    
  },
  beforeUpdate() {
    console.log(this.value);
  },
  destroyed() {
    this.destroyEditor();
  },
  watch: {
    computedOptions: {
      handler(options, oldOptions) {
        let oldPosition = 0,
          editor = this.editor,
          editorInstance = this.editor.instance;

        if (options.value !== this.currentValue) {
          oldPosition = editor.position;
          editor.value = options.value;
          editor.position = oldPosition;
        }

        if (options.language !== oldOptions.language) {
          monacoEditor.setModelLanguage(
            editorInstance.getModel(),
            this.language
          );
        }

        if (options.theme !== oldOptions.theme) {
          monacoEditor.setTheme(options.theme);
        }

        editorInstance.updateOptions(options);
      },
      deep: true
    },
    uri() {
      this.initMonaco();
    },
    height: "layout",
    width: "layout"
  },
  props: {
    language: {
      type: String,
      default: "javascript"
    },
    uri: {
      type: String,
      default: ""
    },
    height: {
      type: [String, Number],
      default: "100%"
    },
    width: {
      type: [String, Number],
      default: "100%"
    },
    value: {
      type: String,
      default: ""
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "vs"
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    position: {
      type: [Object],
      default() {
        return null;
      }
    }
  }
};
</script>



// WEBPACK FOOTER //
// src/components/Editor/Editor.vue