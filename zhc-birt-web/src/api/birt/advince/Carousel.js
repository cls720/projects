export const carouselModel =
{
  "controlName": "BirtWorkBook",
  "controlId": "BirtWorkBook_tab",
  showToolBar: false,
  "children": [
    {
      "controlName": "BirtSheet",
      "controlId": "BirtSheet_0",
      "pageIndex": 0,
      "style": "padding:10px;",
      "children": [
        {
          "controlName": "BirtFormSheet",
          "controlId": "BirtFormSheet_0",
          "children": [
            {
              "controlName": "ElRow",
              "controlId": "ElRow_r1",
              "gutter": 15,
              "children": [
                {
                  "controlName": "ElCol",
                  "controlId": "ElCol_c1",
                  "span": 8,
                  "children": [
                    {
                      "controlName": "ElCard",
                      "controlId": "ElCard_card2",
                      style: "background-color:#CCC",
                      "children": [
                        {
                          controlName: "HcCarousel",
                          controlId: "HcCarousel_1",
                          autoplay: true,
                          interval: 3000,
                          // arrow: "never",
                          height: 250,
                          children: [
                            {
                              "controlName": "GaugeChart",
                              "controlId": "GaugeChart_r1",
                              "height": 250,
                              "datas": [
                                {
                                  "name": "完成率",
                                  "value": 30
                                }
                              ],
                              "isGroupData": true,
                              "groupBy": "name",
                              "calcFields": [
                                {
                                  "name": "value",
                                  "title": "完成率",
                                  "summaryType": "sum"
                                }
                              ],
                              "option": {
                                "title": {
                                  "text": "基础仪表盘"
                                },
                                "series": [
                                  {
                                    "radius": "85%",
                                    "pointer": {
                                      "show": true,
                                      "length": "80%"
                                    }
                                  }
                                ]
                              }
                            }
                            ,
                            {
                              "controlName": "GaugeChart",
                              "controlId": "GaugeChart_r2",
                              "height": 250,
                              "datas": [
                                {
                                  "name": "重点大学",
                                  "value": 138
                                },
                                {
                                  "name": "普通本科",
                                  "value": 68
                                },
                                {
                                  "name": "研究生博士",
                                  "value": 15
                                }
                              ],
                              "isGroupData": true,
                              "groupBy": "name",
                              "calcFields": [
                                {
                                  "name": "value",
                                  "title": "人数",
                                  "createSeriesByData": true
                                }
                              ],
                              "option": {
                                "title": {
                                  "text": "学历分析"
                                },
                                "tooltip": {
                                  "formatter": "{b}: {c}人"
                                },
                                "series": [
                                  {
                                    "startAngle": 90,
                                    "endAngle": -135,
                                    "min": 0,
                                    "max": 138,
                                    "radius": "85%",
                                    "axisLine": {
                                      "lineStyle": {
                                        "color": [
                                          [
                                            1,
                                            {
                                              "type": "linear",
                                              "colorStops": [
                                                {
                                                  "offset": 0,
                                                  "color": "#56A6D1"
                                                },
                                                {
                                                  "offset": 1,
                                                  "color": "#1374FE"
                                                }
                                              ]
                                            }
                                          ]
                                        ],
                                        "width": 10
                                      }
                                    },
                                    "splitLine": {
                                      "show": false
                                    },
                                    "axisLabel": {
                                      "show": false
                                    },
                                    "axisTick": {
                                      "show": false
                                    },
                                    "pointer": {
                                      "show": true,
                                      "width": 4
                                    },
                                    "title": {
                                      "show": true,
                                      "offsetCenter": [
                                        -32,
                                        "-95%"
                                      ]
                                    },
                                    "detail": {
                                      "show": true,
                                      "formatter": " 138(62.4%)",
                                      "fontSize": 14,
                                      "offsetCenter": [
                                        "100%",
                                        "-88%"
                                      ]
                                    }
                                  },
                                  {
                                    "name": "普通本科",
                                    "type": "gauge",
                                    "startAngle": 90,
                                    "endAngle": -21,
                                    "min": 0,
                                    "max": 68,
                                    "radius": "65%",
                                    "axisLine": {
                                      "lineStyle": {
                                        "color": [
                                          [
                                            1,
                                            {
                                              "type": "linear",
                                              "colorStops": [
                                                {
                                                  "offset": 0,
                                                  "color": "#FF8E3B"
                                                },
                                                {
                                                  "offset": 1,
                                                  "color": "#F07E27"
                                                }
                                              ]
                                            }
                                          ]
                                        ],
                                        "width": 10
                                      }
                                    },
                                    "splitLine": {
                                      "show": false
                                    },
                                    "axisLabel": {
                                      "show": false
                                    },
                                    "axisTick": {
                                      "show": false
                                    },
                                    "pointer": {
                                      "show": true,
                                      "width": 4
                                    },
                                    "title": {
                                      "show": true,
                                      "offsetCenter": [
                                        -32,
                                        "-95%"
                                      ]
                                    },
                                    "detail": {
                                      "show": true,
                                      "formatter": " 68(30.7%)",
                                      "fontSize": 14,
                                      "offsetCenter": [
                                        "80%",
                                        "-75%"
                                      ]
                                    }
                                  },
                                  {
                                    "name": "研究生博士",
                                    "type": "gauge",
                                    "startAngle": 90,
                                    "endAngle": 66,
                                    "min": 0,
                                    "max": 15,
                                    "radius": "45%",
                                    "axisLine": {
                                      "lineStyle": {
                                        "color": [
                                          [
                                            1,
                                            {
                                              "type": "linear",
                                              "colorStops": [
                                                {
                                                  "offset": 0,
                                                  "color": "#FA8B71"
                                                },
                                                {
                                                  "offset": 1,
                                                  "color": "#E8461C"
                                                }
                                              ]
                                            }
                                          ]
                                        ],
                                        "width": 10
                                      }
                                    },
                                    "splitLine": {
                                      "show": false
                                    },
                                    "axisLabel": {
                                      "show": false
                                    },
                                    "axisTick": {
                                      "show": false
                                    },
                                    "pointer": {
                                      "show": true,
                                      "width": 4
                                    },
                                    "title": {
                                      "show": true,
                                      "offsetCenter": [
                                        -42,
                                        "-95%"
                                      ]
                                    },
                                    "detail": {
                                      "show": true,
                                      "formatter": " 15(6.9%)",
                                      "fontSize": 14,
                                      "offsetCenter": [
                                        "70%",
                                        "-60%"
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "controlName": "GaugeChart",
                              "controlId": "GaugeChart_r13",
                              "height": 250,
                              "datas": [
                                {
                                  "time": "10:10:10",
                                  "speed": "90",
                                  "rotationSpeed": "1.8",
                                  "gas": "0.5",
                                  "water": "0.6"
                                }
                              ],
                              "isGroupData": true,
                              "groupBy": "time",
                              "calcFields": [
                                {
                                  "name": "speed",
                                  "title": "时速"
                                },
                                {
                                  "name": "rotationSpeed",
                                  "title": "转速"
                                },
                                {
                                  "name": "gas",
                                  "title": "油表"
                                },
                                {
                                  "name": "water",
                                  "title": "水表"
                                }
                              ],
                              "option": {
                                "title": {
                                  "text": "多参数仪表"
                                },
                                "series": [
                                  {
                                    "z": 3,
                                    "min": 0,
                                    "max": 220,
                                    "splitNumber": 11,
                                    "radius": "60%",
                                    "axisLine": {
                                      "lineStyle": {
                                        "width": 10
                                      }
                                    },
                                    "axisTick": {
                                      "length": 5,
                                      "lineStyle": {
                                        "color": "auto"
                                      }
                                    },
                                    "splitLine": {
                                      "length": 15,
                                      "fontSize": 12,
                                      "lineStyle": {
                                        "color": "auto"
                                      }
                                    },
                                    "pointer": {
                                      "width": 3
                                    },
                                    "title": {},
                                    "detail": {
                                      "fontSize": 20,
                                      "fontWeight": "bold"
                                    },
                                    "data": [
                                      {
                                        "name": "km/h"
                                      }
                                    ]
                                  },
                                  {
                                    "center": [
                                      "15%",
                                      "55%"
                                    ],
                                    "radius": "40%",
                                    "min": 0,
                                    "max": 7,
                                    "endAngle": 45,
                                    "splitNumber": 7,
                                    "axisLine": {
                                      "lineStyle": {
                                        "width": 8
                                      }
                                    },
                                    "axisTick": {
                                      "length": 5,
                                      "lineStyle": {
                                        "color": "auto"
                                      }
                                    },
                                    "splitLine": {
                                      "length": 15,
                                      "lineStyle": {
                                        "color": "auto"
                                      }
                                    },
                                    "pointer": {
                                      "width": 3
                                    },
                                    "title": {
                                      "show": false
                                    },
                                    "detail": {
                                      "fontSize": 20,
                                      "fontWeight": "bold"
                                    }
                                  },
                                  {
                                    "center": [
                                      "82%",
                                      "50%"
                                    ],
                                    "radius": "35%",
                                    "min": 0,
                                    "max": 2,
                                    "startAngle": 135,
                                    "endAngle": 45,
                                    "splitNumber": 2,
                                    "axisLine": {
                                      "lineStyle": {
                                        "width": 8
                                      }
                                    },
                                    "axisTick": {
                                      "splitNumber": 5,
                                      "length": 10,
                                      "lineStyle": {
                                        "color": "auto"
                                      }
                                    },
                                    "axisLabel": {},
                                    "splitLine": {
                                      "length": 15,
                                      "lineStyle": {
                                        "color": "auto"
                                      }
                                    },
                                    "pointer": {
                                      "width": 2
                                    },
                                    "title": {
                                      "show": false
                                    },
                                    "detail": {
                                      "show": false
                                    }
                                  },
                                  {
                                    "center": [
                                      "82%",
                                      "50%"
                                    ],
                                    "radius": "40%",
                                    "min": 0,
                                    "max": 2,
                                    "startAngle": 315,
                                    "endAngle": 225,
                                    "splitNumber": 2,
                                    "axisLine": {
                                      "lineStyle": {
                                        "width": 8
                                      }
                                    },
                                    "axisTick": {
                                      "show": false
                                    },
                                    "axisLabel": {},
                                    "splitLine": {
                                      "length": 15,
                                      "lineStyle": {
                                        "color": "auto"
                                      }
                                    },
                                    "pointer": {
                                      "width": 2
                                    },
                                    "title": {
                                      "show": false
                                    },
                                    "detail": {
                                      "show": false
                                    }
                                  }
                                ]
                              }
                            }],
                        }]
                    },

                  ]
                },
                {
                  "controlName": "ElCol",
                  "controlId": "ElCol_c2",
                  "span": 16,
                  "children": [
                    {
                      "controlName": "ElCard",
                      "controlId": "ElCard_card3",
                      style: "background-color:#CCC",
                      "children": [
                        {
                          controlName: "HcCarousel",
                          controlId: "HcCarousel_3",
                          autoplay: true,
                          interval: 3000,
                          direction: 'vertical',
                          // arrow: "never",
                          height: 250,
                          children: [
                            {
                              controlName: "BarChart",
                              controlId: "BarChart_age",
                              offsetParentWidth: 0,
                              height: 225,
                              datas: [{
                                "name": "20~25",
                                "value": 23
                              },
                              {
                                "name": "26~30",
                                "value": 65
                              },
                              {
                                "name": "31~35",
                                "value": 62
                              },
                              {
                                "name": "36~40",
                                "value": 53
                              },
                              {
                                "name": "40以上",
                                "value": 18
                              }
                              ],
                              isGroupData: true,
                              groupBy: "name",
                              calcFields: [{
                                name: 'value',
                                title: '年龄'
                              }],
                              option: {
                                legend: {
                                  show: false
                                },
                                grid: {
                                  top: "10%",
                                  bottom: "20%"
                                },
                                series: [{
                                  barWidth: 25,
                                  itemStyle: {
                                    color: {
                                      type: 'linear',
                                      colorStops: [{
                                        offset: 0, color: '#56A6D1' // 0% 处的颜色
                                      }, {
                                        offset: 1, color: '#1374FE' // 100% 处的颜色
                                      }],

                                    }
                                  },
                                  emphasis: {
                                    itemStyle: {
                                      color: {
                                        type: 'linear',
                                        colorStops: [{
                                          offset: 0, color: '#86DB98' // 0% 处的颜色
                                        }, {
                                          offset: 1, color: '#67C23A' // 100% 处的颜色
                                        }],
                                        borderWidth: 3,
                                        barBorderRadius: [5, 5, 0, 0]
                                      }
                                    }
                                  },
                                }]
                              }
                            },
                            {
                              controlName: "BarChart",
                              controlId: "BarChart_workage",
                              offsetParentWidth: 0,
                              height: 225,
                              datas: [{
                                "name": "1~3年",
                                "value": 53
                              },
                              {
                                "name": "4~6年",
                                "value": 68
                              },
                              {
                                "name": "7~10年",
                                "value": 72
                              },
                              {
                                "name": "10年以上",
                                "value": 28
                              }
                              ],
                              isGroupData: true,
                              groupBy: "name",
                              calcFields: [{
                                name: 'value',
                                title: '工龄'
                              }],
                              option: {
                                legend: {
                                  show: false
                                },
                                grid: {
                                  top: "10%",
                                  bottom: "20%"
                                },
                                series: [{
                                  barWidth: 25,
                                  itemStyle: {
                                    color: {
                                      type: 'linear',
                                      colorStops: [{
                                        offset: 0, color: '#FCC46A' // 0% 处的颜色
                                      }, {
                                        offset: 1, color: '#F28029' // 100% 处的颜色
                                      }],

                                    }
                                  },
                                  emphasis: {
                                    itemStyle: {
                                      color: {
                                        type: 'linear',
                                        colorStops: [{
                                          offset: 0, color: '#86DB98' // 0% 处的颜色
                                        }, {
                                          offset: 1, color: '#67C23A' // 100% 处的颜色
                                        }],
                                        borderWidth: 3,
                                        barBorderRadius: [5, 5, 0, 0]
                                      }
                                    }
                                  },
                                }]
                              }
                            },
                            {
                              controlName: "BarChart",
                              controlId: "BarChart_gwlx",
                              height: 240,
                              datas: [
                                {
                                  gwType: "jsl",
                                  gwTypeName: "技术类",
                                  gwid: 'jszj',
                                  gwname: '技术总监',
                                  count: 1
                                },
                                {
                                  gwType: "jsl",
                                  gwTypeName: "技术类",
                                  gwid: 'kfjl',
                                  gwname: '开发经理',
                                  count: 12
                                },
                                {
                                  gwType: "jsl",
                                  gwTypeName: "技术类",
                                  gwid: 'kfzg',
                                  gwname: '开发主管',
                                  count: 28
                                },
                                {
                                  gwType: "jsl",
                                  gwTypeName: "技术类",
                                  gwid: 'jsy',
                                  gwname: '技术员',
                                  count: 65
                                },
                                {
                                  gwType: "zyl",
                                  gwTypeName: "经营类",
                                  gwid: 'cwjl',
                                  gwname: '财务经理',
                                  count: 1
                                },
                                {
                                  gwType: "zyl",
                                  gwTypeName: "经营类",
                                  gwid: 'cwzy',
                                  gwname: '财务专员',
                                  count: 5
                                },
                                {
                                  gwType: "zyl",
                                  gwTypeName: "经营类",
                                  gwid: 'xsjl',
                                  gwname: '销售经理',
                                  count: 38
                                },
                                {
                                  gwType: "zyl",
                                  gwTypeName: "经营类",
                                  gwid: 'xsy',
                                  gwname: '销售员',
                                  count: 86
                                },
                                {
                                  gwType: "gll",
                                  gwTypeName: "管理类",
                                  gwid: 'zjb',
                                  gwname: '总经办',
                                  count: 10
                                },
                                {
                                  gwType: "gll",
                                  gwTypeName: "管理类",
                                  gwid: 'ms',
                                  gwname: '秘书',
                                  count: 18
                                },
                                {
                                  gwType: "fwl",
                                  gwTypeName: "服务类",
                                  gwid: 'zxkf',
                                  gwname: '在线客服',
                                  count: 16
                                },
                                {
                                  gwType: "fwl",
                                  gwTypeName: "服务类",
                                  gwid: 'hqbz',
                                  gwname: '后勤保障',
                                  count: 12
                                },
                              ],
                              isGroupData: false,
                              groupBy: "gwTypeName",
                              stackBy: "gwTypeName",
                              calcFields: [{
                                name: "count",
                                title: '技术总监',
                                filterExpr: "this.gwid == 'jszj'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '开发经理',
                                filterExpr: "this.gwid == 'kfjl'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '开发主管',
                                filterExpr: "this.gwid == 'kfzg'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '技术员',
                                filterExpr: "this.gwid == 'jsy'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '财务经理',
                                filterExpr: "this.gwid == 'cwjl'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '财务专员',
                                filterExpr: "this.gwid == 'cwzy'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '销售经理',
                                filterExpr: "this.gwid == 'xsjl'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '销售员',
                                filterExpr: "this.gwid == 'xsy'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '总经办',
                                filterExpr: "this.gwid == 'zjb'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '秘书',
                                filterExpr: "this.gwid == 'ms'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '在线客服',
                                filterExpr: "this.gwid == 'zxkf'",
                                summaryType: 'sum'
                              }, {
                                name: "count",
                                title: '后勤保障',
                                filterExpr: "this.gwid == 'hqbz'",
                                summaryType: 'sum'
                              }],
                              option: {
                                tooltip: {
                                  trigger: "item",
                                  formatter: "{b}<br>{a}:{c}"
                                },
                                grid: {
                                  top: '10%',
                                  bottom: '10%'
                                },
                                legend: {
                                  show: false
                                }, series: [{
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }, {
                                  label: {
                                    show: true,
                                    position: 'insideRight'
                                  },
                                }]
                              }
                            },
                            {
                              controlName: "BarChart",
                              controlId: "BarChart_zwfb",
                              height: 240,
                              isAngleAxis: true,
                              datas: [
                                {
                                  zwid: "ptyf",
                                  zwname: "平台研发",
                                  incount: 20,
                                  outcount: 38
                                },
                                {
                                  zwid: "cpkf",
                                  zwname: "应用开发",
                                  incount: 5,
                                  outcount: 48
                                },
                                {
                                  zwid: "jgcs",
                                  zwname: "架构测试",
                                  incount: 8,
                                  outcount: 23
                                },
                                {
                                  zwid: "cpxs",
                                  zwname: "产品销售",
                                  incount: 6,
                                  outcount: 65
                                },
                                {
                                  zwid: "cpss",
                                  zwname: "产品实施",
                                  incount: 3,
                                  outcount: 20
                                },
                                {
                                  zwid: "shfw",
                                  zwname: "服务保障",
                                  incount: 3,
                                  outcount: 15
                                },
                                {
                                  zwid: "xzgl",
                                  zwname: "综合管理",
                                  incount: 10,
                                  outcount: 12
                                },
                              ],
                              isGroupData: true,
                              groupBy: "zwname",
                              calcFields: [{
                                name: "incount",
                                title: '对内人数',
                              }, {
                                name: "outcount",
                                title: '对外人数',
                              }],
                              option: {
                                legend: {
                                  right: '0',
                                },
                                polar: {
                                  radius: '65%'
                                },
                                series: [{ stack: 'count' }, { stack: 'count' }]
                              }
                            }
                          ]
                        }
                      ]
                    },
                  ]
                }
              ]
            },
            {
              "controlName": "ElRow",
              "controlId": "ElRow_r2",
              style: "margin-top:10px",
              "children": [
                {
                  "controlName": "ElCard",
                  "controlId": "ElCard_card1",
                  style: "background-color:#CCC",
                  "children": [
                    {
                      controlName: "HcCarousel",
                      controlId: "HcCarousel_2",
                      autoplay: true,
                      interval: 3000,
                      type: 'card',
                      // arrow: "never",
                      height: 250,
                      children: [
                        {
                          "controlName": "GaugeChart",
                          "controlId": "GaugeChart_r31",
                          "height": 250,
                          style: "background-color:#EEE",
                          "datas": [
                            {
                              "name": "完成率",
                              "value": 30
                            }
                          ],
                          "isGroupData": true,
                          "groupBy": "name",
                          "calcFields": [
                            {
                              "name": "value",
                              "title": "完成率",
                              "summaryType": "sum"
                            }
                          ],
                          "option": {
                            "title": {
                              "text": "基础仪表盘"
                            },
                            "series": [
                              {
                                "radius": "85%",
                                "pointer": {
                                  "show": true,
                                  "length": "80%"
                                }
                              }
                            ]
                          }
                        }
                        ,
                        {
                          "controlName": "GaugeChart",
                          "controlId": "GaugeChart_r32",
                          "height": 250,
                          style: "background-color:#EEE",
                          "datas": [
                            {
                              "name": "重点大学",
                              "value": 138
                            },
                            {
                              "name": "普通本科",
                              "value": 68
                            },
                            {
                              "name": "研究生博士",
                              "value": 15
                            }
                          ],
                          "isGroupData": true,
                          "groupBy": "name",
                          "calcFields": [
                            {
                              "name": "value",
                              "title": "人数",
                              "createSeriesByData": true
                            }
                          ],
                          "option": {
                            "title": {
                              "text": "学历分析"
                            },
                            "tooltip": {
                              "formatter": "{b}: {c}人"
                            },
                            "series": [
                              {
                                "startAngle": 90,
                                "endAngle": -135,
                                "min": 0,
                                "max": 138,
                                "radius": "85%",
                                "axisLine": {
                                  "lineStyle": {
                                    "color": [
                                      [
                                        1,
                                        {
                                          "type": "linear",
                                          "colorStops": [
                                            {
                                              "offset": 0,
                                              "color": "#56A6D1"
                                            },
                                            {
                                              "offset": 1,
                                              "color": "#1374FE"
                                            }
                                          ]
                                        }
                                      ]
                                    ],
                                    "width": 10
                                  }
                                },
                                "splitLine": {
                                  "show": false
                                },
                                "axisLabel": {
                                  "show": false
                                },
                                "axisTick": {
                                  "show": false
                                },
                                "pointer": {
                                  "show": true,
                                  "width": 4
                                },
                                "title": {
                                  "show": true,
                                  "offsetCenter": [
                                    -32,
                                    "-95%"
                                  ]
                                },
                                "detail": {
                                  "show": true,
                                  "formatter": " 138(62.4%)",
                                  "fontSize": 14,
                                  "offsetCenter": [
                                    "100%",
                                    "-88%"
                                  ]
                                }
                              },
                              {
                                "name": "普通本科",
                                "type": "gauge",
                                "startAngle": 90,
                                "endAngle": -21,
                                "min": 0,
                                "max": 68,
                                "radius": "65%",
                                "axisLine": {
                                  "lineStyle": {
                                    "color": [
                                      [
                                        1,
                                        {
                                          "type": "linear",
                                          "colorStops": [
                                            {
                                              "offset": 0,
                                              "color": "#FF8E3B"
                                            },
                                            {
                                              "offset": 1,
                                              "color": "#F07E27"
                                            }
                                          ]
                                        }
                                      ]
                                    ],
                                    "width": 10
                                  }
                                },
                                "splitLine": {
                                  "show": false
                                },
                                "axisLabel": {
                                  "show": false
                                },
                                "axisTick": {
                                  "show": false
                                },
                                "pointer": {
                                  "show": true,
                                  "width": 4
                                },
                                "title": {
                                  "show": true,
                                  "offsetCenter": [
                                    -32,
                                    "-95%"
                                  ]
                                },
                                "detail": {
                                  "show": true,
                                  "formatter": " 68(30.7%)",
                                  "fontSize": 14,
                                  "offsetCenter": [
                                    "80%",
                                    "-75%"
                                  ]
                                }
                              },
                              {
                                "name": "研究生博士",
                                "type": "gauge",
                                "startAngle": 90,
                                "endAngle": 66,
                                "min": 0,
                                "max": 15,
                                "radius": "45%",
                                "axisLine": {
                                  "lineStyle": {
                                    "color": [
                                      [
                                        1,
                                        {
                                          "type": "linear",
                                          "colorStops": [
                                            {
                                              "offset": 0,
                                              "color": "#FA8B71"
                                            },
                                            {
                                              "offset": 1,
                                              "color": "#E8461C"
                                            }
                                          ]
                                        }
                                      ]
                                    ],
                                    "width": 10
                                  }
                                },
                                "splitLine": {
                                  "show": false
                                },
                                "axisLabel": {
                                  "show": false
                                },
                                "axisTick": {
                                  "show": false
                                },
                                "pointer": {
                                  "show": true,
                                  "width": 4
                                },
                                "title": {
                                  "show": true,
                                  "offsetCenter": [
                                    -42,
                                    "-95%"
                                  ]
                                },
                                "detail": {
                                  "show": true,
                                  "formatter": " 15(6.9%)",
                                  "fontSize": 14,
                                  "offsetCenter": [
                                    "70%",
                                    "-60%"
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "controlName": "GaugeChart",
                          "controlId": "GaugeChart_r33",
                          "height": 250,
                          style: "background-color:#EEE",
                          "datas": [
                            {
                              "time": "10:10:10",
                              "speed": "90",
                              "rotationSpeed": "1.8",
                              "gas": "0.5",
                              "water": "0.6"
                            }
                          ],
                          "isGroupData": true,
                          "groupBy": "time",
                          "calcFields": [
                            {
                              "name": "speed",
                              "title": "时速"
                            },
                            {
                              "name": "rotationSpeed",
                              "title": "转速"
                            },
                            {
                              "name": "gas",
                              "title": "油表"
                            },
                            {
                              "name": "water",
                              "title": "水表"
                            }
                          ],
                          "option": {
                            "title": {
                              "text": "多参数仪表"
                            },
                            "series": [
                              {
                                "z": 3,
                                "min": 0,
                                "max": 220,
                                "splitNumber": 11,
                                "radius": "60%",
                                "axisLine": {
                                  "lineStyle": {
                                    "width": 10
                                  }
                                },
                                "axisTick": {
                                  "length": 5,
                                  "lineStyle": {
                                    "color": "auto"
                                  }
                                },
                                "splitLine": {
                                  "length": 15,
                                  "fontSize": 12,
                                  "lineStyle": {
                                    "color": "auto"
                                  }
                                },
                                "pointer": {
                                  "width": 3
                                },
                                "title": {},
                                "detail": {
                                  "fontSize": 20,
                                  "fontWeight": "bold"
                                },
                                "data": [
                                  {
                                    "name": "km/h"
                                  }
                                ]
                              },
                              {
                                "center": [
                                  "15%",
                                  "55%"
                                ],
                                "radius": "40%",
                                "min": 0,
                                "max": 7,
                                "endAngle": 45,
                                "splitNumber": 7,
                                "axisLine": {
                                  "lineStyle": {
                                    "width": 8
                                  }
                                },
                                "axisTick": {
                                  "length": 5,
                                  "lineStyle": {
                                    "color": "auto"
                                  }
                                },
                                "splitLine": {
                                  "length": 15,
                                  "lineStyle": {
                                    "color": "auto"
                                  }
                                },
                                "pointer": {
                                  "width": 3
                                },
                                "title": {
                                  "show": false
                                },
                                "detail": {
                                  "fontSize": 20,
                                  "fontWeight": "bold"
                                }
                              },
                              {
                                "center": [
                                  "82%",
                                  "50%"
                                ],
                                "radius": "35%",
                                "min": 0,
                                "max": 2,
                                "startAngle": 135,
                                "endAngle": 45,
                                "splitNumber": 2,
                                "axisLine": {
                                  "lineStyle": {
                                    "width": 8
                                  }
                                },
                                "axisTick": {
                                  "splitNumber": 5,
                                  "length": 10,
                                  "lineStyle": {
                                    "color": "auto"
                                  }
                                },
                                "axisLabel": {},
                                "splitLine": {
                                  "length": 15,
                                  "lineStyle": {
                                    "color": "auto"
                                  }
                                },
                                "pointer": {
                                  "width": 2
                                },
                                "title": {
                                  "show": false
                                },
                                "detail": {
                                  "show": false
                                }
                              },
                              {
                                "center": [
                                  "82%",
                                  "50%"
                                ],
                                "radius": "40%",
                                "min": 0,
                                "max": 2,
                                "startAngle": 315,
                                "endAngle": 225,
                                "splitNumber": 2,
                                "axisLine": {
                                  "lineStyle": {
                                    "width": 8
                                  }
                                },
                                "axisTick": {
                                  "show": false
                                },
                                "axisLabel": {},
                                "splitLine": {
                                  "length": 15,
                                  "lineStyle": {
                                    "color": "auto"
                                  }
                                },
                                "pointer": {
                                  "width": 2
                                },
                                "title": {
                                  "show": false
                                },
                                "detail": {
                                  "show": false
                                }
                              }
                            ]
                          }
                        }],
                    }]

                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
