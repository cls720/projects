export var chartDeepModel = {
  showToolBar: false,
  canEdit: true,
  dataSources: [{
    controlName: "WebSocketConection",
    controlId: "wsc1",
    webSocketUrl: "ws://114.115.217.1/amrept-web/dyj/sktcloud/admin.do",
    target: {
      dyj_WcuFn0RQ: {
        datasetId: "ds1"
      }
    }
  }],
  sheets: [{
    pageIndex: 0,
    style: "backgroundImage:url(" + require("@/images/background-01.png") + ");background-repeat: no-repeat;background-size: 100% 100%;",
    controlId: "BirtGridSheet_pie1",
    dataSets: [{
      controlName: "JsWebSocketDataSet",
      controlId: "ds1",
      datas: []
    }, {
      controlName: "JsWebSocketDataSet",
      controlId: "ds2",
      datas: [{
        timestamp: "16:08:22",
        content: "大圆机1号位断针",
        type: "danger",
      }, {
        timestamp: "16:08:50",
        content: "大圆机2号位断针",
        type: "danger",
      }, {
        timestamp: "16:09:10",
        content: "大圆机DYJ-0001自产完成",
        type: "success",
      }, {
        timestamp: "16:09:10",
        content: "大圆机DYJ-0002,13位张力过大",
        type: "warning",
      }]
    }],
    layouts: [{
      style: "",
      forms: [{
        children: [{
          controlName: "ElRow",
          controlId: "ElRow_r1",
          children: [{
            controlName: "ImageTitle",
            controlId: "ImageTitle_11",
            width: "100%",
            height: "30px",
            imageUrl: "url(" + require("@/images/border-title-01.png") + ")",
            title: "全国大圆机运行监控",
            style: "text-align: center;font-size: 24px;font-weight: bold;color: #32d3eb;"
          }]
        }, {
          controlName: "ElRow",
          controlId: "ElRow_r2",
          gutter: 15,
          style: "margin-top:20px;",
          children: [{
            controlName: "ElCol",
            controlId: "ElCol_c21",
            span: 14,
            children: [{
              controlName: "ChinaMapChart",
              controlId: "ChinaMapChart_21",
              height: function (parentHeight) {
                return parentHeight - 90;
              },
              style: "background-color: rgba(1, 5, 61, 0.2);",
              datas: [{
                province: "福建",
                addr: "长乐长源纺织M1",
                gpsEast: "119.53",
                gpsNorth: "25.97",
                state: 1
              }, {
                province: "福建",
                addr: "长乐长源纺织M2",
                gpsEast: "119.54",
                gpsNorth: "25.98",
                state: 2
              }, {
                province: "福建",
                addr: "长乐长源纺织M3",
                gpsEast: "119.55",
                gpsNorth: "25.99",
                state: 3
              }, {
                province: "福建",
                addr: "长乐长源纺织M4",
                gpsEast: "119.56",
                gpsNorth: "26.00",
                state: 4
              }, {
                province: "福建",
                addr: "长乐长源纺织M5",
                gpsEast: "119.57",
                gpsNorth: "26.01",
                state: 5
              }, {
                province: "福建",
                addr: "莆田XXX纺织M6",
                gpsEast: "119.00",
                gpsNorth: "25.5",
                state: 1
              }, {
                province: "福建",
                addr: "莆田XXX纺织M7",
                gpsEast: "119.01",
                gpsNorth: "25.4",
                state: 2
              }, {
                province: "福建",
                addr: "莆田XXX纺织M8",
                gpsEast: "119.02",
                gpsNorth: "25.3",
                state: 3
              }, {
                province: "福建",
                addr: "泉州XXX纺织M8",
                gpsEast: "118.58",
                gpsNorth: "24.93",
                state: 1
              }, {
                province: "福建",
                addr: "泉州XXX纺织M9",
                gpsEast: "118.56",
                gpsNorth: "24.91",
                state: 1
              }, {
                province: "福建",
                addr: "泉州XXX纺织M10",
                gpsEast: "118.54",
                gpsNorth: "24.90",
                state: 2
              }, {
                province: "福建",
                addr: "泉州XXX纺织M11",
                gpsEast: "118.51",
                gpsNorth: "24.86",
                state: 3
              }, {
                province: "福建",
                addr: "泉州XXX纺织M12",
                gpsEast: "118.49",
                gpsNorth: "24.84",
                state: 4
              }, {
                province: "广东",
                addr: "广东XXX纺织M13",
                gpsEast: "113.280637",
                gpsNorth: "23.125178",
                state: 3
              }, {
                province: "陕西",
                addr: "延安XXX纺织M14",
                gpsEast: "109.47",
                gpsNorth: "36.6",
                state: 1
              }],
              isGroupData: true,
              groupBy: "addr",
              calcFields: [{
                name: 'state',
                title: '正常生产',
                filterExpr: 'this.state === 1',
                gpsAddr: "addr",
                gpsEast: "gpsEast",
                gpsNorth: "gpsNorth",
                summaryType: 'sum'
              }, {
                name: 'state',
                title: '中危生产',
                filterExpr: 'this.state === 2',
                gpsAddr: "addr",
                gpsEast: "gpsEast",
                gpsNorth: "gpsNorth",
                summaryType: 'sum'
              }, {
                name: 'state',
                title: '高危生产',
                filterExpr: 'this.state === 3',
                gpsAddr: "addr",
                gpsEast: "gpsEast",
                gpsNorth: "gpsNorth",
                summaryType: 'sum'
              }, {
                name: 'state',
                title: '故障停机',
                filterExpr: 'this.state === 4',
                gpsAddr: "addr",
                gpsEast: "gpsEast",
                gpsNorth: "gpsNorth",
                summaryType: 'sum'
              }, {
                name: 'state',
                title: '关机状态',
                filterExpr: 'this.state === 5',
                gpsAddr: "addr",
                gpsEast: "gpsEast",
                gpsNorth: "gpsNorth",
                summaryType: 'sum'
              }],
              option: {
                tooltip: {
                  formatter: "{b} <br/>{a}",
                },
                legend: {
                  x: "left",
                  y: "bottom",
                  textStyle: {
                    color: "#fff"
                  },
                  padding: 20
                },
                series: [{
                  itemStyle: {
                    normal: {
                      color: "#6CC142"
                    }
                  },
                  zlevel: 2
                }, {
                  itemStyle: {
                    normal: {
                      color: "#FFF260"
                    }
                  },
                  zlevel: 3
                }, {
                  type: "effectScatter",
                  symbolSize: 15,
                  showEffectOn: "render",
                  rippleEffect: {
                    brushType: "stroke"
                  },
                  hoverAnimation: true,
                  itemStyle: {
                    normal: {
                      color: "#FD6A01",
                      shadowBlur: 10,
                      shadowColor: "#333"
                    }
                  },
                  zlevel: 4
                }, {
                  zlevel: 5
                }, {
                  zlevel: 1
                }]
              },
              events: {
                click: function (param) {
                  if (param.data) { //点击数据

                  } else {
                    this.initProvinceChart(param, function (d) {
                      return d.province == param.name
                    });
                  }
                }
              }
            }]
          }, {
            controlName: "ElCol",
            controlId: "ElCol_r2_c1",
            span: 10,
            children: [{
              controlName: "TextLabel",
              controlId: "TextLabel_11",
              title: "大圆机 DYJ-0001",
              style: "text-indent: 10px;color: #32d3eb;font-size: 16px;background-color: rgba(1, 5, 61, 0.4);"
            }, {
              "controlName": "ElRow",
              "controlId": "ElRow_r2_c1_r1",
              style: "background-color: rgba(1, 5, 61, 0.2);",
              "children": [{
                "controlName": "ElCol",
                "controlId": "ElCol_c21_1_1",
                "span": 4,
                children: [{
                  controlName: "BarPercentChart",
                  controlId: "BarPercentChart_13",
                  height: 100,
                  isGroupData: true,
                  groupBy: "dyjId",
                  calcFields: [{
                    name: 'speed',
                    title: '实时转数'
                  }],
                  dataset: "ds1",
                  minBarVal: 34,
                  maxBarVal: 36,
                  stepBarVals: [{
                      barVal: 34.7,
                      startColor: "#E6A23C",
                      endColor: "rgba(241,207,156,.7)"
                    },
                    {
                      barVal: 35.2,
                      startColor: "#67C23A",
                      endColor: "rgba(165,211,131,.7)"
                    },
                    {
                      barVal: 36,
                      startColor: "#F56C6C",
                      endColor: "rgba(247,142,142,.7)"
                    }
                  ],
                  option: {
                    textStyle: {
                      color: "#fff"
                    },
                    yAxis: [{
                      axisLabel: {
                        show: false
                      }
                    }],
                    series: [{}, {
                      label: {
                        normal: {
                          show: true,
                          position: "bottom",
                          formatter: function (o) {
                            return o.value.toFixed(2) + " 转/分钟";
                          }
                        }
                      },
                    }]
                  }
                }]
              }, {
                "controlName": "ElCol",
                "controlId": "ElCol_c21_1_2",
                "span": 20,
                children: [{
                  controlName: "RealtimeChart",
                  controlId: "LineChart_line33",
                  width: "95%",
                  height: 100,
                  datas: [],
                  dataset: "ds1",
                  isGroupData: true,
                  pointCount: 10,
                  groupBy: "inputDateTime",
                  calcFields: [{
                    name: 'speed',
                    title: '实时转数',
                    summaryType: 'sum'
                  }],
                  option: {
                    textStyle: {
                      color: "rgba(242,242,240,0.5)"
                    },
                    title: {
                      text: "实时转数",
                      textStyle: {
                        color: "rgba(242,242,240,0.3)"
                      }
                    },
                    grid: {
                      left: "0%",
                      right: "8%",
                      bottom: "5%",
                      top: "15%",
                      containLabel: true
                    },
                    tooltip: {
                      trigger: "axis",
                      formatter: "{b} <br/>{a} : {c} 转/分钟",
                      axisPointer: {
                        type: "cross",
                        label: {
                          backgroundColor: "#283b56"
                        }
                      }
                    },
                    xAxis: [{
                      type: "category",
                      axisTick: {
                        show: false
                      },
                      axisLine: {
                        show: true
                      },
                      data: []
                    }],
                    yAxis: [{
                      type: "value",
                      min: 20,
                      max: 60,
                      axisTick: {
                        show: false
                      },
                      axisLine: {
                        show: true
                      },
                      axisLabel: {
                        show: false
                      },
                      splitLine: {
                        show: false
                      }
                    }],
                    legend: {
                      show: false
                    },
                    series: [{
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
                      smooth: true
                    }]
                  }
                }]
              }]
            }, {
              "controlName": "ElRow",
              "controlId": "ElRow_r2_c1_r2",
              style: "background-color: rgba(1, 5, 61, 0.2);",
              "children": [{
                "controlName": "ElCol",
                "controlId": "ElCol_c21_2_1",
                "span": 4,
                children: [{
                  controlName: "BarPercentChart",
                  controlId: "BarPercentChart_2_1",
                  height: 80,
                  isGroupData: true,
                  groupBy: "dyjId",
                  calcFields: [{
                    name: 'temperature',
                    title: '实时温度'
                  }],
                  dataset: "ds1",
                  minBarVal: 20,
                  maxBarVal: 35,
                  stepBarVals: [{
                      barVal: 15,
                      startColor: "#E6A23C",
                      endColor: "rgba(241,207,156,.7)"
                    },
                    {
                      barVal: 35,
                      startColor: "#67C23A",
                      endColor: "rgba(165,211,131,.7)"
                    },
                    {
                      barVal: 45,
                      startColor: "#F56C6C",
                      endColor: "rgba(247,142,142,.7)"
                    }
                  ],
                  option: {
                    textStyle: {
                      color: "#fff"
                    },
                    yAxis: [{
                      axisLabel: {
                        show: false
                      }
                    }],
                    series: [{}, {
                      label: {
                        normal: {
                          show: true,
                          position: "bottom",
                          formatter: function (o) {
                            return o.value.toFixed(2) + " °C";
                          }
                        }
                      },
                    }]
                  }
                }]
              }, {
                "controlName": "ElCol",
                "controlId": "ElCol_c21_2_2",
                "span": 20,
                children: [{
                  controlName: "RealtimeChart",
                  controlId: "LineChart_line_2_2",
                  width: "95%",
                  height: 80,
                  datas: [],
                  dataset: "ds1",
                  isGroupData: true,
                  pointCount: 10,
                  groupBy: "inputDateTime",
                  calcFields: [{
                    name: 'temperature',
                    title: '实时温度',
                    summaryType: 'sum'
                  }],
                  option: {
                    textStyle: {
                      color: "rgba(242,242,240,0.5)"
                    },
                    title: {
                      text: "实时温度",
                      textStyle: {
                        color: "rgba(242,242,240,0.3)"
                      }
                    },
                    grid: {
                      left: "0%",
                      right: "8%",
                      bottom: "5%",
                      top: "15%",
                      containLabel: true
                    },
                    tooltip: {
                      trigger: "axis",
                      formatter: "{b} <br/>{a} : {c} °C",
                      axisPointer: {
                        type: "cross",
                        label: {
                          backgroundColor: "#283b56"
                        }
                      }
                    },
                    xAxis: [{
                      type: "category",
                      axisTick: {
                        show: false
                      },
                      axisLine: {
                        show: true
                      },
                      data: []
                    }],
                    yAxis: [{
                      type: "value",
                      min: 20,
                      max: 35,
                      axisTick: {
                        show: false
                      },
                      axisLine: {
                        show: true
                      },
                      axisLabel: {
                        show: false
                      },
                      splitLine: {
                        show: false
                      }
                    }],
                    legend: {
                      show: false
                    },
                    series: [{
                      markLine: {
                        data: [{
                          type: 'average',
                          name: '平均值'
                        }]
                      },
                      smooth: true
                    }]
                  }
                }]
              }]
            }, {
              "controlName": "ElRow",
              "controlId": "ElRow_r2_c1_r3",
              style: "background-color: rgba(1, 5, 61, 0.2);",
              "children": [{
                "controlName": "ElCol",
                "controlId": "ElCol_c21_3_1",
                "span": 4,
                children: [{
                  controlName: "BarPercentChart",
                  controlId: "BarPercentChart_3_1",
                  height: 80,
                  isGroupData: true,
                  groupBy: "dyjId",
                  calcFields: [{
                    name: 'humidity',
                    title: '实时湿度'
                  }],
                  dataset: "ds1",
                  minBarVal: 60,
                  maxBarVal: 90,
                  stepBarVals: [{
                      barVal: 60,
                      startColor: "#E6A23C",
                      endColor: "rgba(241,207,156,.7)"
                    },
                    {
                      barVal: 75,
                      startColor: "#67C23A",
                      endColor: "rgba(165,211,131,.7)"
                    },
                    {
                      barVal: 90,
                      startColor: "#F56C6C",
                      endColor: "rgba(247,142,142,.7)"
                    }
                  ],
                  option: {
                    textStyle: {
                      color: "#fff"
                    },
                    yAxis: [{
                      axisLabel: {
                        show: false
                      }
                    }],
                    series: [{}, {
                      label: {
                        normal: {
                          show: true,
                          position: "bottom",
                          formatter: function (o) {
                            return o.value.toFixed(2) + " %rh";
                          }
                        }
                      },
                    }]
                  }
                }]
              }, {
                "controlName": "ElCol",
                "controlId": "ElCol_c21_3_2",
                "span": 20,
                children: [{
                  controlName: "RealtimeChart",
                  controlId: "LineChart_line_3_2",
                  width: "95%",
                  height: 80,
                  datas: [],
                  dataset: "ds1",
                  isGroupData: true,
                  pointCount: 10,
                  groupBy: "inputDateTime",
                  calcFields: [{
                    name: 'humidity',
                    title: '实时湿度',
                    summaryType: 'sum'
                  }],
                  option: {
                    textStyle: {
                      color: "rgba(242,242,240,0.5)"
                    },
                    title: {
                      text: "实时湿度",
                      textStyle: {
                        color: "rgba(242,242,240,0.3)"
                      }
                    },
                    grid: {
                      left: "0%",
                      right: "8%",
                      bottom: "5%",
                      top: "15%",
                      containLabel: true
                    },
                    tooltip: {
                      trigger: "axis",
                      formatter: "{b} <br/>{a} : {c} %rh",
                      axisPointer: {
                        type: "cross",
                        label: {
                          backgroundColor: "#283b56"
                        }
                      }
                    },
                    xAxis: [{
                      type: "category",
                      axisTick: {
                        show: false
                      },
                      axisLine: {
                        show: true
                      },
                      data: []
                    }],
                    yAxis: [{
                      type: "value",
                      min: 60,
                      max: 90,
                      axisTick: {
                        show: false
                      },
                      axisLine: {
                        show: true
                      },
                      axisLabel: {
                        show: false
                      },
                      splitLine: {
                        show: false
                      }
                    }],
                    legend: {
                      show: false
                    },
                    series: [{
                      markLine: {
                        data: [{
                          type: 'average',
                          name: '平均值'
                        }]
                      },
                      smooth: true
                    }]
                  }
                }]
              }]
            }, {
              controlName: "ElRow",
              controlId: "ElRow_r2_c1_r4",
              gutter: 10,
              style: "margin-top:5px;",
              children: [{
                controlName: "ElCol",
                controlId: "ElCol_r2_c1_r4_c1",
                span: 6,
                children: [{
                  controlName: "ImageTitle",
                  controlId: "ImageTitle_rc41_1",
                  imageUrl: "url(" + require("@/images/title-02.png") + ")",
                  height: 105,
                  style: "padding: 5px 0px;",
                  children: [{
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_1",
                    title: "连续生产码数",
                    height: "30px",
                    style: "text-align:center;"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "累计：8码",
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "最大：4码",
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "最小：4码",
                    height: "22px",
                    style: "text-align:center"
                  }]
                }]
              }, {
                controlName: "ElCol",
                controlId: "ElCol_r2_c1_r4_c2",
                span: 6,
                children: [{
                  controlName: "ImageTitle",
                  controlId: "ImageTitle_rc41_2",
                  imageUrl: "url(" + require("@/images/title-02.png") + ")",
                  height: 105,
                  style: "padding: 5px 0px;",
                  children: [{
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "大圆机转数",
                    height: "30px",
                    style: "text-align:center;"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "平均：20 转/mi",
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "最大：20 转/mi",
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "最小：20 转/mi",
                    height: "22px",
                    style: "text-align:center"
                  }]
                }]
              }, {
                controlName: "ElCol",
                controlId: "ElCol_r2_c1_r4_c3",
                span: 6,
                children: [{
                  controlName: "ImageTitle",
                  controlId: "ImageTitle_rc41_3",
                  imageUrl: "url(" + require("@/images/title-02.png") + ")",
                  height: 105,
                  style: "padding: 5px 0px;",
                  children: [{
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_3",
                    title: "温度",
                    height: "30px",
                    style: "text-align:center;"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "平均：25 °C",
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "最大：30 °C",
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "最小：20 °C",
                    height: "22px",
                    style: "text-align:center"
                  }]
                }]
              }, {
                controlName: "ElCol",
                controlId: "ElCol_r2_c1_r4_c4",
                span: 6,
                children: [{
                  controlName: "ImageTitle",
                  controlId: "ImageTitle_rc41_4",
                  imageUrl: "url(" + require("@/images/title-02.png") + ")",
                  height: 105,
                  style: "padding: 5px 0px;",
                  children: [{
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_4",
                    title: "湿度",
                    height: "30px",
                    style: "text-align:center;"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "平均：70 %rh",
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "最大：75 %rh",
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    title: "最小：65 %rh",
                    height: "22px",
                    style: "text-align:center"
                  }]
                }]
              }]
            }, {
              controlName: "TextLabel",
              controlId: "TextLabel_11",
              title: "告警时间轴",
              style: "text-indent: 10px;color: #32d3eb;font-size: 16px;background-color: rgba(1, 5, 61, 0.4);margin-top:5px;"
            }, {
              controlName: "ElRow",
              controlId: "ElRow_r2_c1_r5",
              style: "background-color: rgba(1, 5, 61, 0.2);",
              children: [{
                controlName: "HcTimeline",
                controlId: "HcTimeline_1",
                height: function (parentHeight) {
                  return parentHeight - 90 - 60 - 116 - 260;
                },
                style: "padding-top:10px;",
                dataset: "ds2",
                content: "content",
                timestamp: "timestamp",
                type: "type"
              }]
            }]
          }]
        }]
      }]
    }]
  }]
}
