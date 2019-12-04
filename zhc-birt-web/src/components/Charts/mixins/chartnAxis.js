export default {
  data() {
    return {
      tooltip: function () {
        return {}
      },
    };
  },
  computed: {
    series() {
      let me = this;
      let series = [];
      let seriesItem = { type: this.chartType, data: [] }
      this.datas.forEach(recd => {
        let seriesDataItem = { value: [], name: recd[me.groupBy] };
        me.calcFields.forEach(calcField => {
          seriesDataItem.value.push(recd[calcField.name])
        })
        seriesItem.data.push(seriesDataItem);
      })
      series.push(seriesItem);
      return series;
    }
  },
  methods: {
    getDefaultOption() {
      return {
        tooltip: this.tooltip(),
        series: this.series
      };
    }
  }
}
