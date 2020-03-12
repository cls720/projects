<template>
  <div style="padding:20px;">
    <dialog-basic></dialog-basic>
    <dialog-content></dialog-content>
  </div>
</template>

<script>
import DialogBasic from "./components/basic";
import DialogContent from "./components/content";

export default {
  components: { DialogBasic, DialogContent }
};
</script>