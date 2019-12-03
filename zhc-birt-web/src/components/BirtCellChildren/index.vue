<template>
  <div class="zhc-birt-cell-children">
    <template v-for="child in children">
      <el-row v-if="child.controlName=='ElRow'" :gutter="child.gutter" :style="child.style">
        <birt-cell-children v-if="child.children" :children="child.children"/>
      </el-row>
      <el-col v-if="child.controlName=='ElCol'" :span="child.span" :style="child.style">
        <birt-cell-children v-if="child.children" :children="child.children"/>
      </el-col>
      <el-card v-if="child.controlName=='ElCard'" :style="child.style">
        <birt-cell-children v-if="child.children" :children="child.children"/>
      </el-card>

      <image-title v-if="child.controlName=='ImageTitle'" :conf="child"/>
      <text-label
        :ref="child.controlId"
        v-if="child.controlName=='TextLabel'"
        :conf="child"
        :bind-dataset="getParentDataSet(child.dataset)"
      />
      <hc-timeline
        v-if="child.controlName=='HcTimeline'"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />

      <markdown-content
        v-if="child.controlName=='MarkdownEditor'"
        :content="child.content"
        :key="child.controlId"
      />
      <pie-chart
        v-if="child.controlName=='PieChart'"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <line-chart
        v-if="child.controlName=='LineChart'"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <realtime-chart
        v-if="child.controlName=='RealtimeChart'"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
       <radar-chart
        v-if="child.controlName=='RadarChart'"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <bar-percent-chart
        v-if="child.controlName=='BarPercentChart'"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <china-map-chart
        v-if="child.controlName=='ChinaMapChart'"
        :ref="child.controlId"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
    </template>
  </div>
</template>

<script>
import ImageTitle from "@/components/ImageTitle";
import TextLabel from "@/components/TextLabel";
import HcTimeline from "@/components/Hc/Timeline";

import MarkdownContent from "@/components/MarkdownContent";
import PieChart from "@/components/Charts/PieChart.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import RealtimeChart from "@/components/Charts/RealtimeChart.vue";
import RadarChart from "@/components/Charts/RadarChart.vue";
import BarPercentChart from "@/components/Charts/BarPercentChart.vue";
import ChinaMapChart from "@/components/Charts/ChinaMapChart.vue";

export default {
  name: "BirtCellChildren",
  components: {
    ImageTitle,
    TextLabel,
    HcTimeline,
    MarkdownContent,
    PieChart,
    LineChart,
    RealtimeChart,
    RadarChart,
    BarPercentChart,
    ChinaMapChart
  },
  props: {
    children: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    getParentDataSet(datasetId) {
      // if (!datasetId) console.error("未绑定数据集Id");
      if (!datasetId) return {};
      let parent = this.$parent;
      while (parent) {
        if (parent.getDataSetInstance) {
          return parent.getDataSetInstance(datasetId);
        }
        parent = parent.$parent;
      }
    }
  }
};
</script>

<style scoped>
</style>
