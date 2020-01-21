export const gaugeModel =
{
  controlName: "BirtWorkBook",
  controlId: "BirtWorkBook_0",
  children: [
    {
      controlName: "BirtSheet",
      controlId: "BirtSheet_0",
      pageIndex: 0,
      style: "padding:10px;",
      children: [
        {
          controlName: "BirtFormSheet",
          controlId: "BirtFormSheet_0",
          children: [{
            controlName: "ElRow",
            controlId: "ElRow_r1",
            gutter: 15,
            children: [{
              controlName: "ElCol",
              controlId: "ElCol_c1",
              span: 8,
              children: [{
                controlName: "ElCard",
                controlId: "ElCard_card1",
                children: [{
                  controlName: "GaugeChart",
                  controlId: "GaugeChart_r1",
                  height: 250,
                  datas: [
                    {
                      "name": "完成率",
                      "value": 30
                    }
                  ],
                  isGroupData: true,
                  groupBy: "name",
                  calcFields: [{
                    name: 'value',
                    title: '完成率',
                    summaryType: 'sum'
                  }],
                  option: {
                    title: {
                      text: "基础仪表盘"
                    },
                    series: [{
                      radius: '85%',
                      pointer: {
                        show: true,
                        length: '80%'
                      }
                    }]
                  },
                  mounted: function () {
                    var me = this;
                    this.mockInterval = setInterval(() => {
                      me.datas[0].value = Math.floor(Math.random() * 100) + 1;
                    }, 2000)
                  },
                  beforeDestroy: function () {
                    clearInterval(this.mockInterval);
                    this.mockInterval = null;
                  }
                }]
              }]
            }, {
              controlName: "ElCol",
              controlId: "ElCol_c2",
              span: 8,
              children: [{
                controlName: "ElCard",
                controlId: "ElCard_card2",
                children: [{
                  controlName: "GaugeChart",
                  controlId: "GaugeChart_r2",
                  height: 250,
                  datas: [{
                    name: '重点大学',
                    value: 138,
                  }, {
                    name: '普通本科',
                    value: 68
                  }, {
                    name: '研究生博士',
                    value: 15
                  }],
                  isGroupData: true,
                  groupBy: "name",
                  calcFields: [{
                    name: 'value',
                    title: '人数',
                    createSeriesByData: true
                  }],
                  option: {
                    title: {
                      text: "学历分析"
                    },
                    tooltip: {
                      formatter: "{b}: {c}人"
                    },
                    series: [{
                      startAngle: 90,
                      endAngle: -135,
                      min: 0,
                      max: 138,
                      radius: '85%',
                      axisLine: {
                        lineStyle: {
                          color: [[1, {
                            type: 'linear',
                            colorStops: [{
                              offset: 0, color: '#56A6D1' // 0% 处的颜色
                            }, {
                              offset: 1, color: '#1374FE' // 100% 处的颜色
                            }],
                          }]],
                          width: 10
                        }
                      },
                      splitLine: {
                        show: false
                      },
                      axisLabel: {
                        show: false
                      },
                      axisTick: {
                        show: false
                      },
                      pointer: {
                        show: true,
                        width: 4
                      },
                      title: {
                        show: true,
                        offsetCenter: [-32, '-95%']
                      },
                      detail: {
                        show: true,
                        formatter: ' 138(62.4%)',
                        fontSize: 14,
                        offsetCenter: ['100%', '-88%']
                      }
                    },
                    {
                      name: "普通本科",
                      type: 'gauge',
                      startAngle: 90,
                      endAngle: -21,
                      min: 0,
                      max: 68,
                      radius: '65%',
                      axisLine: {
                        lineStyle: {
                          color: [[1, {
                            type: 'linear',
                            colorStops: [{
                              offset: 0, color: '#FF8E3B' // 0% 处的颜色
                            }, {
                              offset: 1, color: '#F07E27' // 100% 处的颜色
                            }],
                          }]],
                          width: 10
                        }
                      },
                      splitLine: {
                        show: false
                      },
                      axisLabel: {
                        show: false
                      },
                      axisTick: {
                        show: false
                      },
                      pointer: {
                        show: true,
                        width: 4
                      },
                      title: {
                        show: true,
                        offsetCenter: [-32, '-95%']
                      },
                      detail: {
                        show: true,
                        formatter: ' 68(30.7%)',
                        fontSize: 14,
                        offsetCenter: ['80%', '-75%']
                      }
                    },
                    {
                      name: "研究生博士",
                      type: 'gauge',
                      startAngle: 90,
                      endAngle: 66,
                      min: 0,
                      max: 15,
                      radius: '45%',
                      axisLine: {
                        lineStyle: {
                          color: [[1, {
                            type: 'linear',
                            colorStops: [{
                              offset: 0, color: '#FA8B71' // 0% 处的颜色
                            }, {
                              offset: 1, color: '#E8461C' // 100% 处的颜色
                            }],
                          }]],
                          width: 10
                        }
                      },
                      splitLine: {
                        show: false
                      },
                      axisLabel: {
                        show: false
                      },
                      axisTick: {
                        show: false
                      },
                      pointer: {
                        show: true,
                        width: 4
                      },
                      title: {
                        show: true,
                        offsetCenter: [-42, '-95%']
                      },
                      detail: {
                        show: true,
                        formatter: ' 15(6.9%)',
                        fontSize: 14,
                        offsetCenter: ['70%', '-60%']
                      }
                    }]
                  }
                }]
              }]
            }, {
              controlName: "ElCol",
              controlId: "ElCol_c2",
              span: 8,
              children: [{
                controlName: "ElCard",
                controlId: "ElCard_card1",
                children: [{
                  controlName: "GaugeChart",
                  controlId: "GaugeChart_r13",
                  height: 250,
                  datas: [{
                    time: "10:10:10",
                    speed: "90",
                    rotationSpeed: "1.8",
                    gas: '0.5',
                    water: '0.6'
                  }],
                  isGroupData: true,
                  groupBy: "time",
                  calcFields: [{
                    name: 'speed',
                    title: '时速'
                  }, {
                    name: 'rotationSpeed',
                    title: '转速'
                  }, {
                    name: 'gas',
                    title: '油表'
                  }, {
                    name: 'water',
                    title: '水表'
                  }],
                  option: {
                    title: {
                      text: "多参数仪表"
                    },
                    series: [
                      {
                        z: 3,
                        min: 0,
                        max: 220,
                        splitNumber: 11,
                        radius: '60%',
                        axisLine: {            // 坐标轴线
                          lineStyle: {       // 属性lineStyle控制线条样式
                            width: 10
                          }
                        },
                        axisTick: {            // 坐标轴小标记
                          length: 5,        // 属性length控制线长
                          lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                          }
                        },
                        splitLine: {           // 分隔线
                          length: 15,         // 属性length控制线长
                          fontSize: 12,
                          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                          }
                        },
                        pointer: {
                          width: 3
                        },
                        title: {

                        },
                        detail: {
                          fontSize: 20,
                          fontWeight: "bold"
                        },
                        data: [{ name: 'km/h' }]
                      }, {
                        center: ['15%', '55%'],    // 默认全局居中
                        radius: '40%',
                        min: 0,
                        max: 7,
                        endAngle: 45,
                        splitNumber: 7,
                        axisLine: {            // 坐标轴线
                          lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                          }
                        },
                        axisTick: {            // 坐标轴小标记
                          length: 5,        // 属性length控制线长
                          lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                          }
                        },
                        splitLine: {           // 分隔线
                          length: 15,         // 属性length控制线长
                          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                          }
                        },
                        pointer: {
                          width: 3
                        },
                        title: {
                          show: false
                        },
                        detail: {
                          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                          fontSize: 20,
                          fontWeight: "bold"
                        }
                      }, {
                        center: ['82%', '50%'],    // 默认全局居中
                        radius: '35%',
                        min: 0,
                        max: 2,
                        startAngle: 135,
                        endAngle: 45,
                        splitNumber: 2,
                        axisLine: {            // 坐标轴线
                          lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                          }
                        },
                        axisTick: {            // 坐标轴小标记
                          splitNumber: 5,
                          length: 10,        // 属性length控制线长
                          lineStyle: {        // 属性lineStyle控制线条样式
                            color: 'auto'
                          }
                        },
                        axisLabel: {
                          formatter: function (v) {
                            switch (v + '') {
                              case '0': return 'E';
                              case '1': return 'Gas';
                              case '2': return 'F';
                            }
                          }
                        },
                        splitLine: {           // 分隔线
                          length: 15,         // 属性length控制线长
                          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                          }
                        },
                        pointer: {
                          width: 2
                        },
                        title: {
                          show: false
                        },
                        detail: {
                          show: false
                        },
                      }, {
                        center: ['82%', '50%'],    // 默认全局居中
                        radius: '40%',
                        min: 0,
                        max: 2,
                        startAngle: 315,
                        endAngle: 225,
                        splitNumber: 2,
                        axisLine: {            // 坐标轴线
                          lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                          }
                        },
                        axisTick: {            // 坐标轴小标记
                          show: false
                        },
                        axisLabel: {
                          formatter: function (v) {
                            switch (v + '') {
                              case '0': return 'H';
                              case '1': return 'Water';
                              case '2': return 'C';
                            }
                          }
                        },
                        splitLine: {           // 分隔线
                          length: 15,         // 属性length控制线长
                          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                          }
                        },
                        pointer: {
                          width: 2
                        },
                        title: {
                          show: false
                        },
                        detail: {
                          show: false
                        }
                      }
                    ]
                  },
                  mounted: function () {
                    var me = this;
                    this.mockInterval = setInterval(() => {
                      me.conf.barVal = Math.floor(Math.random() * 100) + 1;
                    }, 2000)
                  },
                  beforeDestroy: function () {
                    clearInterval(this.mockInterval);
                    this.mockInterval = null;
                  }
                }]
              }]
            }]
          }]
        }
      ]
    }
  ]
}

