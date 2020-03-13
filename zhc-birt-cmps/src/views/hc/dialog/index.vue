<template>
  <div style="padding:20px;">
    <dialog-basic></dialog-basic>
    <dialog-content></dialog-content>
    <dialog-content2></dialog-content2>
  </div>
</template>

<script>
import DialogBasic from "./components/basic";
import DialogContent from "./components/content";
import DialogContent2 from "./components/content2";

export default {
  components: { DialogBasic, DialogContent, DialogContent2 }
};
</script>