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
      this.datas.forEach(recd => {
        let xItem = recd[this.groupBy];
        if (xAxisDatas.indexOf(xItem) == -1) {
          xAxisDatas.push(xItem);
        }
      })
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
        if (this.stackBy) {
          this.mergeStackBy(item);
        }
        if (this.mergeAreaStyle) {
          this.mergeAreaStyle(item)
        }
        seri.push(item);
      });
      return seri;
    }
  },
  methods: {
    // 合并xAxis轴默认配置
    mergeXAxis(defaultOption) {
      if (this.row2col) {
        defaultOption.xAxis = yAxis(this.calcFields)
      } else {
        defaultOption.xAxis = [{
          type: "category",
          data: this.xAxisDatas
        }]
      }
    },
    // 合并yAxis轴默认配置
    mergeYAxis(defaultOption) {
      if (this.row2col) {
        defaultOption.yAxis = [{
          type: "category",
          data: this.xAxisDatas
        }];
      } else {
        defaultOption.yAxis = yAxis(this.calcFields);
      }
    },
    // 合并angleAxis轴默认配置
    mergeAngleAxis(defaultOption) {
      defaultOption = Object.assign(defaultOption, {
        angleAxis: {
          type: "category",
          data: this.xAxisDatas
        },
        radiusAxis: {
        },
        polar: {
        },
      })
      defaultOption.series.forEach(item => {
        item.coordinateSystem = 'polar';
      })
    },
    // 获取默认配置项
    getDefaultOption() {
      let retuOption = {
        tooltip: this.tooltip(),
        legend: {},
        series: this.series
      };
      if (this.isAngleAxis) {
        this.mergeAngleAxis(retuOption);
      } else {
        this.mergeXAxis(retuOption);
        this.mergeYAxis(retuOption);
      }
      return retuOption;
    }
  }
}
