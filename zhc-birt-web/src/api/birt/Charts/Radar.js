export const radarModel =
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
                      controlName: "RadarChart",
                      controlId: "RadarChart_r1",
                      height: 250,
                      datas: [
                        {
                          "name": "目标平均分",
                          "yuwen": "130",
                          "suxie": "125",
                          "yinyu": "113",
                          "wule": "69",
                          "huaxie": "88",
                          "shenwu": "85",
                        },
                        {
                          "name": "实际平均分",
                          "yuwen": "110",
                          "suxie": "135",
                          "yinyu": "123",
                          "wule": "80",
                          "huaxie": "92",
                          "shenwu": "95",
                        },
                      ],
                      isGroupData: true,
                      groupBy: "name",
                      calcFields: [{
                        name: 'yuwen',
                        title: '语文',
                        summaryType: 'sum'
                      }, {
                        name: 'suxie',
                        title: '数学',
                        summaryType: 'sum'
                      }, {
                        name: 'yinyu',
                        title: '英语',
                        summaryType: 'sum'
                      }, {
                        name: 'wule',
                        title: '物理',
                        summaryType: 'sum'
                      }, {
                        name: 'huaxie',
                        title: '化学',
                        summaryType: 'sum'
                      }, {
                        name: 'shenwu',
                        title: '生物',
                        summaryType: 'sum'
                      }],
                      option: {
                        title: {
                          text: "基础雷达图"
                        },
                        legend: {
                          left: 'right',
                          orient: 'vertical',
                        },
                        radar: {
                          indicator: [{ max: 150 }, { max: 150 }, { max: 150 }, { max: 100 }, { max: 100 }, { max: 100 }]
                        }
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
                      controlName: "RadarChart",
                      controlId: "RadarChart_r2",
                      height: 250,
                      datas: [{
                        name: '最佳结束值',
                        speed: 34.8,
                        temperature: 29,
                        tension: 165,
                        humidity: 68
                      }, {
                        name: '最佳起始值',
                        speed: 34.4,
                        temperature: 23,
                        tension: 150,
                        humidity: 50
                      }],
                      isGroupData: true,
                      groupBy: "name",
                      calcFields: [{
                        name: 'speed',
                        title: '转速'
                      }, {
                        name: 'temperature',
                        title: '温度'
                      }, {
                        name: 'tension',
                        title: '张力'
                      }, {
                        name: 'humidity',
                        title: '湿度'
                      }],
                      option: {
                        title: {
                          text: "最佳参数分析"
                        },
                        legend: {
                          left: 'right',
                          orient: 'vertical',
                        },
                        radar: {
                          radius: '75%',
                          name: {
                            textStyle: {
                              color: '#fff',
                              backgroundColor: '#999',
                              borderRadius: 3,
                              padding: [3, 5]
                            }
                          },
                          indicator: [{ min: 34, max: 36 }, { min: 10, max: 50 }, { min: 100, max: 200 }, { min: 40, max: 80 }]
                        },
                        series: [{
                          name: "最佳生产参数",
                          data: [{
                            label: {
                              normal: {
                                show: true,
                                formatter: function (params) {
                                  return params.value;
                                }
                              }
                            },
                            areaStyle: {
                              normal: {
                                color: 'rgba(12, 255, 255, 0.5)'
                              }
                            }
                          }, {
                            label: {
                              normal: {
                                show: true,
                                formatter: function (params) {
                                  return params.value;
                                }
                              }
                            }, areaStyle: {
                              normal: {
                                color: 'rgba(255, 255, 255,1)'
                              }
                            }
                          }]
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
                      controlName: "BarPercentChart",
                      controlId: "BarPercentChart_13",
                      height: 250,
                      datas: [],
                      isGroupData: true,
                      groupBy: "name",
                      calcFields: [{
                        name: 'value',
                        title: '访问来源'
                      }],
                      barVal: 95,
                      option: {
                        title: {
                          text: "柱形百分比实时图"
                        },
                        grid: {
                          left: '30%',
                          right: '30%',
                          top: '20%'
                        }
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
  ]
}

