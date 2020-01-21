export const pieModel =
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
                    controlId: "ElRow_r1",
                    gutter: 10,
                    children: [{
                      controlName: "ElCol",
                      controlId: "ElCol_c1",
                      span: 8,
                      children: [{
                        controlName: "ElCard",
                        controlId: "ElCard_card1",
                        children: [{
                          controlName: "PieChart",
                          controlId: "PieChart_p1",
                          height: 250,
                          datas: [{
                            "sailArea": "华北",
                            "sailValue": 20372,
                          },
                          {
                            "sailArea": "华东",
                            "sailValue": 10922,
                          },
                          {
                            "sailArea": "华中",
                            "sailValue": 10776,
                          },
                          {
                            "sailArea": "华南",
                            "sailValue": 30776,
                          },
                          {
                            "sailArea": "酉北",
                            "sailValue": 6800,
                          },
                          {
                            "sailArea": "东北",
                            "sailValue": 9000,
                          },
                          {
                            "sailArea": "酉南",
                            "sailValue": 8600,
                          },
                          ],
                          isGroupData: false,
                          groupBy: "sailArea",
                          calcFields: [{
                            name: 'sailValue',
                            title: '销售金额',
                            summaryType: 'sum'
                          }],
                          visualMap: {
                            show: true,
                            calcField: "sailValue",
                            schemeId: "_blue",
                            min: 1000,
                            max: 30000
                          },
                          option: {
                            title: {
                              text: "各地区销售分析"
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
                        controlId: "ElCard_card1",
                        children: [{
                          controlName: "PieChart",
                          controlId: "PieChart_p2",
                          height: 250,
                          datas: [{
                            "userCity": "福州",
                            "userCount": 20372,
                          },
                          {
                            "userCity": "厦门",
                            "userCount": 10922,
                          },
                          {
                            "userCity": "泉州",
                            "userCount": 10776,
                          },
                          {
                            "userCity": "龙岩",
                            "userCount": 8600,
                          },
                          {
                            "userCity": "南平",
                            "userCount": 7500,
                          },
                          {
                            "userCity": "三明",
                            "userCount": 6800,
                          },
                          {
                            "userCity": "其它",
                            "userCount": 5800,
                          },
                          ],
                          isGroupData: true,
                          groupBy: "userCity",
                          calcFields: [{
                            name: 'userCount',
                            title: '用户数量'
                          }],
                          option: {
                            title: {
                              text: "福建各城市用户占比分析"
                            },
                            series: [{
                              name: "用户数量",
                              radius: ['50%', '70%'],
                              label: {
                                normal: {
                                  show: false,
                                  position: 'center'
                                },
                                emphasis: {
                                  show: true,
                                  textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                  }
                                }
                              },
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
                          controlName: "PieChart",
                          controlId: "PieChart_p3",
                          height: 250,
                          datas: [{
                            name: "直接访问",
                            value: 335,
                          },
                          {
                            value: 310,
                            name: '邮件营销'
                          },
                          {
                            value: 274,
                            name: '联盟广告'
                          },
                          {
                            value: 235,
                            name: '视频广告'
                          },
                          {
                            value: 400,
                            name: '搜索引擎'
                          }
                          ],
                          isGroupData: true,
                          groupBy: "name",
                          calcFields: [{
                            name: 'value',
                            title: '访问来源'
                          }],
                          option: {
                            title: {
                              text: "访问来源"
                            },
                            series: [{
                              roseType: 'radius',
                              label: {
                                show: true
                              }
                            }]
                          }
                        }]
                      }]
                    }]
                  }]
                }
              }
            },
            r3: {
              rowHeight: 250,
              tds: {
                A1: {
                  value: "",
                  style: "",
                  colspan: 10,
                  children: [{
                    controlName: "ElRow",
                    controlId: "ElRow_r3",
                    gutter: 10,
                    children: [{
                      controlName: "ElCol",
                      controlId: "ElCol_c31",
                      span: 8,
                      children: [{
                        controlName: "ElCard",
                        controlId: "ElCard_card31",
                        children: [{
                          controlName: "PieChart",
                          controlId: "PieChart_p31",
                          height: 250,
                          datas: [{
                            "sailArea": "华北",
                            "province": "北京",
                            "sailValue": 20372,
                          },
                          {
                            "sailArea": "华北",
                            "province": "天津",
                            "sailValue": 11000,
                          },
                          {
                            "sailArea": "华东",
                            "province": "上海",
                            "sailValue": 28000,
                          },
                          {
                            "sailArea": "华东",
                            "province": "江苏",
                            "sailValue": 16000,
                          },
                          {
                            "sailArea": "华东",
                            "province": "浙江",
                            "sailValue": 19000,
                          },
                          {
                            "sailArea": "华中",
                            "province": "湖北",
                            "sailValue": 8000,
                          },
                          {
                            "sailArea": "华中",
                            "province": "湖南",
                            "sailValue": 9000,
                          },
                          {
                            "sailArea": "华南",
                            "province": "广东",
                            "sailValue": 15000,
                          },
                          {
                            "sailArea": "华南",
                            "province": "福建",
                            "sailValue": 30000,
                          }
                          ],
                          isGroupData: false,
                          groupBy: "sailArea",
                          calcFields: [{
                            name: 'sailValue',
                            title: '销售金额',
                            summaryType: 'sum'
                          }, {
                            groupBy: "province",
                            name: 'sailValue',
                            title: '销售金额',
                            summaryType: 'sum'
                          }],
                          option: {
                            title: {
                              text: "各地区销售分析"
                            },

                            series: [{
                              radius: [0, '45%'],
                              label: {
                                normal: {
                                  position: 'inner'
                                }
                              },
                              labelLine: {
                                normal: {
                                  show: false
                                }
                              },
                            }, {
                              radius: ['50%', '75%'],
                              label: {
                                normal: {
                                  position: 'inner'
                                }
                              },
                              labelLine: {
                                normal: {
                                  show: false
                                }
                              },
                            }]
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
                        children: [{
                          controlName: "PieChart",
                          controlId: "PieChart_p32",
                          height: 250,
                          datas: [{
                            "sailArea": "华北",
                            "province": "北京",
                            "sailValue": 20372,
                          },
                          {
                            "sailArea": "华北",
                            "province": "天津",
                            "sailValue": 11000,
                          },
                          {
                            "sailArea": "华东",
                            "province": "上海",
                            "sailValue": 28000,
                          },
                          {
                            "sailArea": "华东",
                            "province": "江苏",
                            "sailValue": 16000,
                          },
                          {
                            "sailArea": "华东",
                            "province": "浙江",
                            "sailValue": 19000,
                          },
                          {
                            "sailArea": "华中",
                            "province": "湖北",
                            "sailValue": 8000,
                          },
                          {
                            "sailArea": "华中",
                            "province": "湖南",
                            "sailValue": 9000,
                          },
                          {
                            "sailArea": "华南",
                            "province": "广东",
                            "sailValue": 15000,
                          },
                          {
                            "sailArea": "华南",
                            "province": "福建",
                            "sailValue": 30000,
                          }
                          ],
                          isGroupData: false,
                          groupBy: "sailArea",
                          calcFields: [{
                            name: 'sailValue',
                            title: '销售金额',
                            summaryType: 'sum'
                          }, {
                            groupBy: "province",
                            name: 'sailValue',
                            title: '销售金额',
                            summaryType: 'sum'
                          }],
                          option: {
                            title: {
                              text: "各地区销售分析"
                            },
                            series: [{
                              radius: [30, 80],
                              center: ['25%', '50%'],
                              roseType: 'radius',
                              label: {
                                normal: {
                                  formatter: '区域',
                                  show: true,
                                  position: 'center'
                                }
                              },
                            }, {
                              radius: [30, 80],
                              center: ['75%', '50%'],
                              roseType: 'area',
                              label: {
                                normal: {
                                  formatter: '城市',
                                  show: true,
                                  position: 'center'
                                }
                              },
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
                        controlId: "ElCard_card31",
                        children: [{
                          controlName: "PieChart",
                          controlId: "PieChart_p33",
                          height: 250,
                          datas: [{
                            name: "直接访问",
                            value: 335,
                          },
                          {
                            value: 310,
                            name: '邮件营销'
                          },
                          {
                            value: 274,
                            name: '联盟广告'
                          },
                          {
                            value: 235,
                            name: '视频广告'
                          },
                          {
                            value: 400,
                            name: '搜索引擎'
                          }
                          ],
                          isGroupData: true,
                          groupBy: "name",
                          calcFields: [{
                            name: 'value',
                            title: '访问来源',
                            createSeriesByData: true
                          }],
                          option: {
                            title: {
                              text: "访问来源"
                            },
                            series: [
                              {
                                radius: ['25%', '40%'],
                                center: ['15%', '35%'],
                                label: {
                                  normal: {
                                    show: false,
                                    formatter: '{b}\r\n{d}%',
                                    position: 'center',
                                  }
                                },
                                data: [{
                                  label: {
                                    show: true,
                                  },
                                  itemStyle: {
                                    color: '#DD5044'
                                  },
                                },
                                {
                                  name: '其它',
                                  itemStyle: {
                                    color: '#aaa'
                                  }
                                }
                                ]
                              },
                              {
                                radius: ['25%', '40%'],
                                center: ['50%', '35%'],
                                label: {
                                  normal: {
                                    show: false,
                                    formatter: '{b}\r\n{d}%',
                                    position: 'center',
                                  }
                                },
                                data: [{
                                  label: {
                                    show: true,
                                  },
                                  itemStyle: {
                                    color: '#DD5044'
                                  },
                                },
                                {
                                  name: '其它',
                                  itemStyle: {
                                    color: '#aaa'
                                  }
                                }
                                ]
                              },
                              {
                                radius: ['25%', '40%'],
                                center: ['85%', '35%'],
                                label: {
                                  normal: {
                                    show: false,
                                    formatter: '{b}\r\n{d}%',
                                    position: 'center',
                                  }
                                },
                                data: [{
                                  label: {
                                    show: true,
                                  },
                                  itemStyle: {
                                    color: '#DD5044'
                                  },
                                },
                                {
                                  name: '其它',
                                  itemStyle: {
                                    color: '#aaa'
                                  }
                                }
                                ]
                              },
                              {
                                radius: ['25%', '40%'],
                                center: ['35%', '75%'],
                                label: {
                                  normal: {
                                    show: false,
                                    formatter: '{b}\r\n{d}%',
                                    position: 'center',
                                  }
                                },
                                data: [{
                                  label: {
                                    show: true,
                                  },
                                  itemStyle: {
                                    color: '#DD5044'
                                  },
                                },
                                {
                                  name: '其它',
                                  itemStyle: {
                                    color: '#aaa'
                                  }
                                }
                                ]
                              },
                              {
                                radius: ['25%', '40%'],
                                center: ['70%', '75%'],
                                label: {
                                  normal: {
                                    show: false,
                                    formatter: '{b}\r\n{d}%',
                                    position: 'center',
                                  }
                                },
                                data: [{
                                  label: {
                                    show: true,
                                  },
                                  itemStyle: {
                                    color: '#DD5044'
                                  },
                                },
                                {
                                  name: '其它',
                                  itemStyle: {
                                    color: '#aaa'
                                  }
                                }
                                ]
                              }]
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