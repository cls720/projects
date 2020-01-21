export const tabsModel = {
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
              "gutter": 10,
              "children": [
                {
                  "controlName": "ElCol",
                  "controlId": "ElCol_c1",
                  "span": 8,
                  "children": [
                    {
                      "controlName": "ElCard",
                      "controlId": "ElCard_card1",
                      "children": [
                        {
                          controlName: "HcTabs",
                          controlId: "HcTabs_age",
                          tabPosition: "top",
                          activeTabName: "age",
                          height: 250,
                          children: [
                            {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_age",
                              label: "年龄",
                              name: "age",
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
                                }]
                            }, {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_workage",
                              label: "工龄",
                              name: "workage",
                              children: [{
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
                              }]
                            }]
                        }
                      ]
                    }
                  ]
                },
                {
                  "controlName": "ElCol",
                  "controlId": "ElCol_c2",
                  "span": 8,
                  "children": [
                    {
                      "controlName": "ElCard",
                      "controlId": "ElCard_card2",
                      "children": [
                        {
                          controlName: "HcTabs",
                          controlId: "HcTabs_right",
                          tabPosition: "right",
                          activeTabName: "age",
                          height: 250,
                          children: [
                            {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_right",
                              label: "年龄",
                              name: "age",
                              children: [
                                {
                                  controlName: "BarChart",
                                  controlId: "BarChart_right",
                                  offsetParentWidth: 0,
                                  height: 250,
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
                                      right: "20%",
                                      bottom: "10%"
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
                                }]
                            }, {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_right_workage",
                              label: "工龄",
                              name: "workage",
                              children: [{
                                controlName: "BarChart",
                                controlId: "BarChart_right_workage",
                                offsetParentWidth: 0,
                                height: 250,
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
                                    right: "20%",
                                    bottom: "10%"
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
                              }]
                            }]
                        }
                      ]
                    }
                  ]
                },
                {
                  "controlName": "ElCol",
                  "controlId": "ElCol_c2",
                  "span": 8,
                  "children": [
                    {
                      "controlName": "ElCard",
                      "controlId": "ElCard_card13",
                      "children": [
                        {
                          controlName: "HcTabs",
                          controlId: "HcTabs_13age",
                          tabPosition: "bottom",
                          activeTabName: "age",
                          height: 250,
                          children: [
                            {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_31age",
                              label: "年龄",
                              name: "age",
                              children: [
                                {
                                  controlName: "BarChart",
                                  controlId: "BarChart_31age",
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
                                      top: "20%",
                                      bottom: "10%"
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
                                }]
                            }, {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_31workage",
                              label: "工龄",
                              name: "workage",
                              children: [{
                                controlName: "BarChart",
                                controlId: "BarChart_31workage",
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
                                    top: "20%",
                                    bottom: "10%"
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
                              }]
                            }]
                        }]
                    }
                  ]
                }
              ]
            },
            {
              "controlName": "ElRow",
              "controlId": "ElRow_r2",
              style:"margin-top:10px",
              "gutter": 10,
              "children": [
                {
                  "controlName": "ElCol",
                  "controlId": "ElCol_c21",
                  "span": 8,
                  "children": [
                    {
                      "controlName": "ElCard",
                      "controlId": "ElCard_card21",
                      "children": [
                        {
                          controlName: "HcTabs",
                          controlId: "HcTabs_age21",
                          tabPosition: "left",
                          activeTabName: "age",
                          height: 250,
                          children: [
                            {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_age21",
                              label: "年龄",
                              name: "age",
                              children: [
                                {
                                  controlName: "BarChart",
                                  controlId: "BarChart_age21",
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
                                }]
                            }, {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_workage21",
                              label: "工龄",
                              name: "workage",
                              children: [{
                                controlName: "BarChart",
                                controlId: "BarChart_workage21",
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
                              }]
                            }]
                        }
                      ]
                    }
                  ]
                },
                {
                  "controlName": "ElCol",
                  "controlId": "ElCol_c2",
                  "span": 8,
                  "children": [
                    {
                      "controlName": "ElCard",
                      "controlId": "ElCard_card2",
                      "children": [
                        {
                          controlName: "HcTabs",
                          controlId: "HcTabs_right22",
                          tabPosition: "top",
                          type: "card",
                          activeTabName: "age",
                          height: 250,
                          children: [
                            {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_right22",
                              label: "年龄",
                              name: "age",
                              children: [
                                {
                                  controlName: "BarChart",
                                  controlId: "BarChart_right22",
                                  offsetParentWidth: 0,
                                  height: 200,
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
                                      bottom: "10%"
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
                                }]
                            }, {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_right_workage22",
                              label: "工龄",
                              name: "workage",
                              children: [{
                                controlName: "BarChart",
                                controlId: "BarChart_right_workage22",
                                offsetParentWidth: 0,
                                height: 200,
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
                                    bottom: "10%"
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
                              }]
                            }]
                        }
                      ]
                    }
                  ]
                },
                {
                  "controlName": "ElCol",
                  "controlId": "ElCol_c2",
                  "span": 8,
                  "children": [
                    {
                      "controlName": "ElCard",
                      "controlId": "ElCard_card13",
                      "children": [
                        {
                          controlName: "HcTabs",
                          controlId: "HcTabs_13age23",
                          tabPosition: "bottom",
                          type: "border-card",
                          activeTabName: "age",
                          height: 250,
                          children: [
                            {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_31age23",
                              label: "年龄",
                              name: "age",
                              children: [
                                {
                                  controlName: "BarChart",
                                  controlId: "BarChart_31age23",
                                  offsetParentWidth: 0,
                                  height: 180,
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
                                      top: "20%",
                                      bottom: "10%"
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
                                }]
                            }, {
                              controlName: "HcTabPane",
                              controlId: "HcTabPane_31workage23",
                              label: "工龄",
                              name: "workage",
                              children: [{
                                controlName: "BarChart",
                                controlId: "BarChart_31workage23",
                                offsetParentWidth: 0,
                                height: 180,
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
                                    top: "20%",
                                    bottom: "10%"
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
                              }]
                            }]
                        }]
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    }
  ]
}

