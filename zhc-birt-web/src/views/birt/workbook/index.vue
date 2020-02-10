<template>
  <birt-work-book
    v-if="birtModel.controlName=='BirtWorkBook'"
    :ref="birtModel.controlId"
    :conf="birtModel"
  />
</template>

<script>
import BirtWorkBook from "@/components/Birt/WorkBook";
import { getBirtModel } from "@/api/birt-model";

export default {
  name: "BirtWorkBookView",
  components: { BirtWorkBook },
  props: {},
  data() {
    return {
      birtModel: function() {
        return {};
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    loadBirtModel(birtUrl, params) {
      let me = this;
      getBirtModel(birtUrl, params).then(response => {
        const data = response.data;
        //Vue.set(me, "birtModel", data);
        // Object.assign(me.birtModel, data);
        me.birtModel = data;
      });
    }
  },
  mounted() {
    this.loadBirtModel(this.$route.path, this.$route.query);
  }
};
</script>

<style lang="scss" scoped>
</style>
