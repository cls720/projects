<template>
  <div class="zhc-birt-cell-children">
    <template v-for="child in children">
      <birt-grid-sheet
        v-if="child.controlName=='BirtGridSheet'"
        :ref="child.controlId"
        :conf="child"
      />
      <birt-form-sheet
        v-if="child.controlName=='BirtFormSheet'"
        :ref="child.controlId"
        :conf="child"
      />

      <el-row v-if="child.controlName=='ElRow'" :gutter="child.gutter" :style="child.style">
        <birt-cell-children v-if="child.children" :children="child.children"/>
      </el-row>
      <el-col v-if="child.controlName=='ElCol'" :span="child.span" :style="child.style">
        <birt-cell-children v-if="child.children" :children="child.children"/>
      </el-col>
      <el-card v-if="child.controlName=='ElCard'" :style="child.style">
        <birt-cell-children v-if="child.children" :children="child.children"/>
      </el-card>

      <hc-image-title v-if="child.controlName=='HcImageTitle'" :ref="child.controlId" :conf="child"/>
      <hc-text-label
        v-if="child.controlName=='HcTextLabel'"
        :ref="child.controlId"
        :conf="child"
        :bind-dataset="getParentDataSet(child.dataset)"
      />
      <hc-carousel v-if="child.controlName=='HcCarousel'" :ref="child.controlId" :conf="child"/>
      <hc-timeline
        v-if="child.controlName=='HcTimeline'"
        :ref="child.controlId"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <hc-loop-scroll
        v-if="child.controlName=='HcLoopScroll'"
        :ref="child.controlId"
        :conf="child"
      />
      <hc-tabs v-if="child.controlName=='HcTabs'" :ref="child.controlId" :conf="child"/>
      <hc-video v-if="child.controlName=='HcVideo'" :ref="child.controlId" :conf="child"/>
      <hc-data-list
        v-if="child.controlName=='HcDataList'"
        :ref="child.controlId"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />

      <pie-chart
        v-if="child.controlName=='PieChart'"
        :ref="child.controlId"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <bar-chart
        v-if="child.controlName=='BarChart'"
        :ref="child.controlId"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <bar-percent-chart
        v-if="child.controlName=='BarPercentChart'"
        :ref="child.controlId"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <line-chart
        v-if="child.controlName=='LineChart'"
        :ref="child.controlId"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <realtime-chart
        v-if="child.controlName=='RealtimeChart'"
        :ref="child.controlId"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <radar-chart
        v-if="child.controlName=='RadarChart'"
        :ref="child.controlId"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <funnel-chart
        v-if="child.controlName=='FunnelChart'"
        :ref="child.controlId"
        :conf="child"
        :dataset-datas="getParentDataSet(child.dataset).datas"
      />
      <gauge-chart
        v-if="child.controlName=='GaugeChart'"
        :ref="child.controlId"
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
import BirtGridSheet from "@/components/Birt/GridSheet";
import BirtFormSheet from "@/components/Birt/FormSheet";

import HcImageTitle from "@/components/Hc/ImageTitle";
import HcTextLabel from "@/components/Hc/TextLabel";
import HcTimeline from "@/components/Hc/Timeline";
import HcCarousel from "@/components/Hc/Carousel";
import HcLoopScroll from "@/components/Hc/LoopScroll";
import HcTabs from "@/components/Hc/Tabs";
import HcVideo from "@/components/Hc/Video";
import HcDataList from "@/components/Hc/DataList";

import PieChart from "@/components/Charts/PieChart.vue";
import BarChart from "@/components/Charts/BarChart.vue";
import BarPercentChart from "@/components/Charts/BarPercentChart.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import RealtimeChart from "@/components/Charts/RealtimeChart.vue";
import RadarChart from "@/components/Charts/RadarChart.vue";
import FunnelChart from "@/components/Charts/FunnelChart.vue";
import GaugeChart from "@/components/Charts/GaugeChart.vue";
import ChinaMapChart from "@/components/Charts/ChinaMapChart.vue";

export default {
  name: "BirtCellChildren",
  components: {
    BirtGridSheet,
    BirtFormSheet,
    HcImageTitle,
    HcTextLabel,
    HcTimeline,
    HcCarousel,
    HcLoopScroll,
    HcTabs,
    HcVideo,
    HcDataList,
    PieChart,
    BarChart,
    BarPercentChart,
    LineChart,
    RealtimeChart,
    RadarChart,
    FunnelChart,
    GaugeChart,
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
