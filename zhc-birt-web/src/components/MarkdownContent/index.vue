<template>
  <div>
    <markdown-editor v-show="false" ref="markdownEditor" v-model="mdContent" />
    <div class="" v-html="getHtml()" />
  </div>
</template>

<script>
import MarkdownEditor from "@/components/MarkdownEditor";
// tui-editor-contents
export default {
  name: "MarddownContent",
  components: { MarkdownEditor },
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      mdContent: this.content
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getHtml() {      
      if (this.$refs.markdownEditor) {
        return this.$refs.markdownEditor.getHtml();
      } else {
        return "";
      }
    }
  }
};
</script>
