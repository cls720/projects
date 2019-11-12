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
          let gds = me.groupDatas[i] || [];
          let sumVal = me.getSeriesSumValue(gds);
          gds.forEach(recd => {
            series.push({
              name: calcField.title,
              type: this.chartType,
              data: [].concat(recd, {
                value: sumVal - recd.value
              }),
              label: {
                show: false
              }
            });
          });
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
    }
  }
}
