<template>
  <div style="padding:20px;">
    <demo01></demo01>
    <demo02></demo02>
    <demo03></demo03>
    <demo04></demo04>
  </div>
</template>

<script>
import Demo01 from "./components/demo-01";
import Demo02 from "./components/demo-02";
import Demo03 from "./components/demo-03";
import Demo04 from "./components/demo-04";

export default {
  components: { Demo01, Demo02, Demo03, Demo04 }
};
</script>