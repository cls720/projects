<template>
  <div style="padding:20px;">
    <radio-group-basic></radio-group-basic>
    <radio-group-button></radio-group-button>
  </div>
</template>

<script>
import RadioGroupBasic from "./components/basic";
import RadioGroupButton from "./components/button";

export default {
  components: { RadioGroupBasic, RadioGroupButton },
};
</script>