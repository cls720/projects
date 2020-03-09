<template>
  <div style="padding:20px;">
    <tree-basic></tree-basic>
    <tree-lazy></tree-lazy>
    <tree-filter></tree-filter>
  </div>
</template>

<script>
import TreeBasic from "./components/basic";
import TreeLazy from "./components/lazy";
import TreeFilter from "./components/filter";

export default {
  components: { TreeBasic, TreeLazy, TreeFilter },
  methods: {}
};
</script>