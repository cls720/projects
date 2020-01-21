export default {
  data() {
    return {
      tooltip: function () {
        return {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        }
      },
    };
  },
  computed: {
    series() {
      let me = this;
      let series = [];
      this.calcFields.forEach((calcField, i) => {
        if (calcField.createSeriesByData) {
          // let gds = me.groupDatas[i] || [];
          // let sumVal = me.getSeriesSumValue(gds);
          // gds.forEach(recd => {
          //   series.push({
          //     name: calcField.title,
          //     type: this.chartType,
          //     data: [].concat(recd, {
          //       value: sumVal - recd.value
          //     }),
          //     label: {
          //       show: false
          //     }
          //   });
          // });
          series = series.concat(me.createSeriesByData(calcField, i));
        } else {
          series.push({
            name: calcField.title,
            type: this.chartType,
            data: me.groupDatas[i] || [],
            label: {
              show: false
            }
          });
        }
      });
      return series;
    }
  },
  methods: {
    getSeriesSumValue(ary) {
      let sumVal = 0;
      ary.forEach(item => {
        sumVal += item.value;
      });
      return sumVal;
    },
    getDefaultOption() {
      return {
        tooltip: this.tooltip(),
        series: this.series
      };
    },
    /**
     * 根据数据条数创建系列，多组环形图
     * @param {*} calcField 计算字段配置
     * @param {*} i 所在计算字段数组下标
     */
    createSeriesByData(calcField, i) {
      let me = this;
      let series = [];
      let gds = this.groupDatas[i] || [];
      let sumVal = this.getSeriesSumValue(gds);
      gds.forEach(recd => {
        series.push({
          name: calcField.title,
          type: me.chartType,
          data: [].concat(recd, {
            value: sumVal - recd.value
          }),
          label: {
            show: false
          }
        });
      });
      return series;
    }
  }
}
