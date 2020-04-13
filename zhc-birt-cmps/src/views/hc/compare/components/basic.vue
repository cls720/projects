<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-compare :conf="hcCompare"></hc-compare>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      hcCompare:{
        controlName:"HcCompare",
        controlId:"HcCompare_basic"
      }
    };
  },
  methods: {}
};
</script>