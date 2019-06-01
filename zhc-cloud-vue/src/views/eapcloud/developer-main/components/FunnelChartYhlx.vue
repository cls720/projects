<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "@/components/Charts/mixins/resize";
import { userTypeCount } from "@/api/user-info";
import queryParam from "@/utils/query";
import { getCurentMonth } from "@/utils/DateUtil";
import { convertPieData } from "@/utils/PieUtil.js";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  data() {
    return {
      chart: null,
      allUsers: [],
      curtMonthNewUsers: []
    };
  },
  async mounted() {
    await this.loadData();
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");

      const option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}个"
        },
        legend: {
          data: ["用户数量", "本月新增"],
           textStyle: {
            color: "#008ACD"
          }
        },
        series: [
          {
            name: "用户数量",
            type: "funnel",
            sort: "ascending",
            left: "2%",
            width: "70%",
            top: "20%",
            height: "60%",
            label: {
              normal: {
                formatter: "{b}: {c}个"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                opacity: 0.7
              }
            },
            data: convertPieData(this.allUsers, "userType", "userCount")
          },
          {
            name: "本月新增",
            type: "funnel",
            sort: "ascending",
            left: "2%",
            width: "70%",
            top: "20%",
            height: "60%",
            maxSize: "80%",
            label: {
              normal: {
                position: "inside",
                formatter: "{c}个",
                textStyle: {
                  color: "#fff"
                }
              },
              emphasis: {
                position: "inside",
                formatter: "本月新增：{c}个"
              }
            },
            itemStyle: {
              normal: {
                opacity: 0.5,
                borderColor: "#fff",
                borderWidth: 2
              }
            },
            data: convertPieData(
              this.curtMonthNewUsers,
              "userType",
              "userCount"
            )
          }
        ]
      };

      this.chart.setOption(option);
    },
    async loadData() {
      const me = this;

      await userTypeCount().then(response => {
        console.log(1111);
        const data = response.dataPack;
        me.allUsers = data.rows;
      });
      console.log(2222);
      // let curtMonth = getCurentMonth();
      // let startDate = date.format(curtMonth.start, "yyyy-MM-dd");
      // let endDate = date.format(curtMonth.end, "yyyy-MM-dd h:m:s");
      let where = new queryParam.Where();
      where.between("regTime", "month");
      // where.gteq("regTime", startDate);
      // where.lteq("regTime", endDate);
      await userTypeCount(where).then(response => {
        const data = response.dataPack;
        me.curtMonthNewUsers = data.rows;
      });
    }
  }
};
</script>
