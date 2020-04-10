<template>
  <div style="padding:20px;">
    <tabs-basic></tabs-basic>
    <tabs-card></tabs-card>
  </div>
</template>

<script>
import TabsBasic from "./components/basic";
import TabsCard from "./components/card";

export default {
  components: { TabsBasic, TabsCard }
};
</script>