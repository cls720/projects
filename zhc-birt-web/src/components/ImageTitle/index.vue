<template>
  <div :class="className" :style="imageStyle">
    <template v-if="conf.children" v-for="child in conf.children">
      <text-label
        :ref="child.controlId"
        v-if="child.controlName=='TextLabel'"
        :conf="child"
        :dataset="getParentDataSet(child.dataset)"
        :dataset-datas="getParentDataSet(child.dataset).datas"
        :currecord="getParentDataSet(child.dataset).cruRecord"
      />
    </template>
    {{title}}
    <slot></slot>
  </div>
</template>

<script>
import TextLabel from "@/components/TextLabel";

export default {
  name: "ImageTitle",
  components: { TextLabel },
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    className() {
      return this.conf.className || "image-title";
    },
    width() {
      return this.conf.width || "100%";
    },
    height() {
      return this.conf.height || "60px";
    },
    imageUrl() {
      return this.conf.imageUrl || "";
    },
    title() {
      return this.conf.title || "";
    },
    imageStyle() {
      return `width:${this.width};height:${this.height};backgroundImage:${this.imageUrl};line-height:${this.height};${this.conf.style}`;
    }
  },
  data() {
    return {};
  },
  methods: {
    getParentDataSet(datasetId) {
      if (!datasetId) return {};
      let parent = this.$parent;
      while (parent) {
        if (parent.getDataSetInstance) {
          return parent.getDataSetInstance(datasetId);
        }
        parent = parent.$parent;
      }
    },
    aaa(child) {
      if(child.controlId=="TextLable_rc41_1111")
      debugger;
      return this.getParentDataSet(child.dataset).curRecord;
    }
  }
};
</script>

<style lang="scss" scoped>
.image-title {
  font-size: 16px;
  color: #ffffff;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
