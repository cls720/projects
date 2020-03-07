<template>
  <div style="padding:20px;">
    <tree-basic></tree-basic>
    <tree-lazy></tree-lazy>
  </div>
</template>

<script>
import TreeBasic from "./components/basic";
import TreeLazy from "./components/lazy";

export default {
  components: { TreeBasic, TreeLazy },
  data() {},
  methods: {}
};
</script>