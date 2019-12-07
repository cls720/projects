import {
  yAxis
} from "@/funclib/LineUtil.js";

export default { 
  data() {
    return {
      tooltip: function () {
        return {
          trigger: this.calcFields.length == 1 ? "item" : "axis",
          formatter: this.calcFields.length == 1 ? "{a} <br/>{b} : {c}" : ""
        }
      },
    };
  },
  computed: {
    row2col() {
      return this.conf.row2col;
    },
    xAxisDatas() {
      let xAxisDatas = [];
      if (this.groupDatas.length > 0) {
        this.groupDatas[0].forEach(recd => {
          xAxisDatas.push(recd[this.groupBy]);
        });
      }
      return xAxisDatas;
    },
    series() {
      let seri = [];
      let yAxisIndex = 0;
      this.calcFields.forEach((field, i) => {
        let item = {
          name: field.title,
          type: this.chartType,
          data: this.groupDatas[i]
        };
        if (yAxisIndex > 0) item.yAxisIndex = yAxisIndex;
        if (field.yAxis) yAxisIndex++;
        seri.push(item);
      });
      return seri;
    }
  },
  methods: {
    getDefaultOption() {
      let retuOption = {
        tooltip: this.tooltip(),
        legend: {},
        series: this.series
      };
      if (!this.row2col) {
        retuOption.xAxis = [{
          type: "category",
          data: this.xAxisDatas
        }]
        retuOption.yAxis = yAxis(this.calcFields);
      } else {
        debugger
        retuOption.yAxis = [{
          type: "category",
          data: this.xAxisDatas
        }];
        retuOption.xAxis = yAxis(this.calcFields);
      }
      return retuOption;
    }
  }
}
