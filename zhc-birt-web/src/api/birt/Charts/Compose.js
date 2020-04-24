export const composeModel =
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
          controlName: "BirtGridSheet",
          controlId: "BirtGridSheet_0",
          style: "width:100%;border-spacing:0px;border-collapse: collapse;",
          rows: {
            r1: {
              rowHeight: 1,
              tds: {
                A1: {
                  value: "",
                  style: "",
                  colspan: 10
                }
              }
            },
            r2: {
              rowHeight: 250,
              tds: {
                A1: {
                  value: "",
                  style: "",
                  colspan: 10,
                  children: [{
                    controlName: "ElRow",
                    controlId: "ElRow_r3",
                    gutter: 15,
                    children: [{
                      controlName: "ElCol",
                      controlId: "ElCol_c31",
                      span: 8,
                      children: [{
                        controlName: "ElCard",
                        controlId: "ElCard_card31",
                        children: [{
                          controlName: "ComposeChart",
                          controlId: "ComposeChart_line31",
                          height: 250,
                          datas: [
                            {
                              "weakDay": "周一",
                              "mail": 105,
                              "guangao": 220,
                              "vieo": 150,
                              "vist": 320,
                              "search": 820,
                            },
                            {
                              "weakDay": "周二",
                              "mail": 110,
                              "guangao": 230,
                              "vieo": 140,
                              "vist": 360,
                              "search": 860,
                            },
                            {
                              "weakDay": "周三",
                              "mail": 120,
                              "guangao": 256,
                              "vieo": 175,
                              "vist": 280,
                              "search": 750,
                            },
                            {
                              "weakDay": "周四",
                              "mail": 145,
                              "guangao": 290,
                              "vieo": 180,
                              "vist": 342,
                              "search": 837,
                            },
                            {
                              "weakDay": "周五",
                              "mail": 160,
                              "guangao": 365,
                              "vieo": 198,
                              "vist": 420,
                              "search": 960,
                            },
                            {
                              "weakDay": "周六",
                              "mail": 150,
                              "guangao": 330,
                              "vieo": 170,
                              "vist": 398,
                              "search": 869,
                            },
                            {
                              "weakDay": "周日",
                              "mail": 140,
                              "guangao": 260,
                              "vieo": 190,
                              "vist": 384,
                              "search": 920,
                            },
                          ],
                          isGroupData: false,
                          groupBy: "weakDay",
                          calcFields: [{
                            name: 'vieo',
                            title: '视频广告',
                            summaryType: 'sum'
                          }, {
                            name: 'vist',
                            title: '直接访问',
                            summaryType: 'sum'
                          }, {
                            name: 'search',
                            title: '搜索引擎',
                            summaryType: 'sum'
                          }],
                          option: {
                            title: {
                              text: "合成图"
                            },
                            legend: {
                              top: '84%'
                            },
                            series: [{}, { type: "bar", itemStyle: { color: '#67C23A' } }, { areaStyle: {}, itemStyle: { color: '#E6A23C' } }],
                            grid: {
                              left: '3%',
                              right: '4%',
                              bottom: '20%',
                              containLabel: true
                            },
                          }
                        }]
                      }]
                    }, {
                      controlName: "ElCol",
                      controlId: "ElCol_c32",
                      span: 8,
                      children: [{
                        controlName: "ElCard",
                        controlId: "ElCard_card32",
                        children: [
                          {
                            controlName: "ComposeChart",
                            controlId: "ComposeChart_line32",
                            height: 250,
                            datas: [{
                              "weakDay": "周一",
                              "temperature": 26,
                              "humidity": 24,
                            },
                            {
                              "weakDay": "周二",
                              "temperature": 28,
                              "humidity": 27,
                            },
                            {
                              "weakDay": "周三",
                              "temperature": 24,
                              "humidity": 23,
                            },
                            {
                              "weakDay": "周四",
                              "temperature": 30,
                              "humidity": 28,
                            },
                            {
                              "weakDay": "周五",
                              "temperature": 24,
                              "humidity": 22,
                            },
                            {
                              "weakDay": "周六",
                              "temperature": 27,
                              "humidity": 25,
                            },
                            {
                              "weakDay": "周日",
                              "temperature": 26,
                              "humidity": 25,
                            },
                            ],
                            isGroupData: false,
                            groupBy: "weakDay",
                            calcFields: [{
                              name: 'temperature',
                              title: '温度',
                              summaryType: 'sum'
                            }, {
                              name: 'humidity',
                              title: '湿度',
                              summaryType: 'sum'
                            }],
                            option: {
                              title: {
                                text: "标记符合成图"
                              },
                              tooltip: {
                                formatter: "{b} <br/>{a0} : {c0} °C<br/>{a1} : {c1} %rh"
                              },
                              legend: {
                                left: 'right'
                              },
                              grid: {
                                left: '3%',
                                right: '8%',
                                bottom: '3%',
                                containLabel: true
                              },
                              yAxis: {
                                min: 20,
                                max: 40,
                                axisLabel: {
                                  formatter: '{value}°C'
                                }
                              },
                              series: [{
                                type: 'bar',
                                markPoint: {
                                  data: [{
                                    type: 'max',
                                    name: '最大值'
                                  },
                                  {
                                    type: 'min',
                                    name: '最小值'
                                  }
                                  ]
                                },
                                markLine: {
                                  data: [{
                                    type: 'average',
                                    name: '平均值'
                                  }]
                                }
                              }]
                            }
                          }]
                      }]
                    }, {
                      controlName: "ElCol",
                      controlId: "ElCol_c33",
                      span: 8,
                      children: [{
                        controlName: "ElCard",
                        controlId: "ElCard_card33",
                        children: [{
                          controlName: "RealtimeChart",
                          controlId: "ComposeChart_line33",
                          height: 250,
                          datas: [],
                          isGroupData: false,
                          pointCount: 10,
                          groupBy: "nowtime",
                          calcFields: [{
                            name: 'temperature',
                            title: '温度',
                            summaryType: 'sum'
                          }, {
                            name: 'humidity',
                            title: '湿度',
                            summaryType: 'sum'
                          }],
                          option: {
                            title: {
                              text: "实时合成图"
                            },
                            tooltip: {
                              formatter: "{b} <br/>{a0} : {c0} °C<br/>{a1} : {c1} %rh"
                            },
                            legend: {
                              left: 'right'
                            },
                            grid: {
                              left: '3%',
                              right: '8%',
                              bottom: '3%',
                              containLabel: true
                            },
                            yAxis: {
                              min: 0,
                              max: 80,
                              axisLabel: {
                                formatter: '{value}'
                              }
                            },
                            series: [
                              {
                                markPoint: {
                                  data: [{
                                    type: 'max',
                                    name: '最大值'
                                  },
                                  {
                                    type: 'min',
                                    name: '最小值'
                                  }
                                  ]
                                },
                                markLine: {
                                  data: [{
                                    type: 'average',
                                    name: '平均值'
                                  }]
                                },
                                smooth: true,
                                type:'bar',
                                itemStyle:{
                                  color:'#E6A23C'
                                }
                              },{
                               
                               
                              }]
                          },
                          mounted: function () {
                            var me = this;
                            this.mockInterval = setInterval(() => {
                              var recd = { nowtime: me.getNowTime(), temperature: (Math.random() * 5 + 20).toFixed(2), humidity: (Math.random() * 10 + 60).toFixed(2) }
                              me.conf.datas.splice(0, me.conf.datas.length, recd);
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
              }
            },
          },
          cols: [{
            colWidth: 70
          }, {
            colWidth: 70
          }, {
            colWidth: 40
          }, {
            colWidth: 40
          }, {
            colWidth: 140
          }, {
            colWidth: 100
          }, {
            colWidth: 60
          }, {
            colWidth: 85
          }, {
            colWidth: 85
          }, {
            colWidth: 55
          }]
        }
      ]
    }
  ]
}

