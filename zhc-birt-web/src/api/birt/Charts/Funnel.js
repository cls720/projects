export const funnelModel =
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
              controlName: "ElRow",
              controlId: "ElRow_r1",
              gutter: 15,
              children: [{
                controlName: "ElCol",
                controlId: "ElCol_c1",
                span: 12,
                children: [{
                  controlName: "ElCard",
                  controlId: "ElCard_card1",
                  children: [{
                    controlName: "FunnelChart",
                    controlId: "FunnelChart_r1",
                    height: 250,
                    datas: [
                      { value: 100, name: '展现' },
                      { value: 80, name: '点击' },
                      { value: 60, name: '访问' },
                      { value: 40, name: '咨询' },
                      { value: 20, name: '订单' },
                    ],
                    isGroupData: true,
                    groupBy: "name",
                    calcFields: [{
                      name: 'value',
                      title: '数量',
                      summaryType: 'sum'
                    }],
                    option: {
                      title: {
                        text: "基础漏斗图"
                      },
                      legend: {
                        top: 'bottom'
                      },
                      series: [{
                        // sort: 'ascending',
                      }]
                    }
                  }]
                }]
              }, {
                controlName: "ElCol",
                controlId: "ElCol_c2",
                span: 12,
                children: [{
                  controlName: "ElCard",
                  controlId: "ElCard_card2",
                  children: [
                    {
                      controlName: "FunnelChart",
                      controlId: "FunnelChart_r2",
                      height: 250,
                      datas: [
                        { yq: 100, sj: 80, name: '展现' },
                        { yq: 80, sj: 40, name: '点击' },
                        { yq: 60, sj: 30, name: '访问' },
                        { yq: 40, sj: 20, name: '咨询' },
                        { yq: 20, sj: 5, name: '订单' },
                      ],
                      isGroupData: true,
                      groupBy: "name",
                      calcFields: [{
                        name: 'yq',
                        title: '预期',
                        summaryType: 'sum'
                      }, {
                        name: 'sj',
                        title: '实际',
                        summaryType: 'sum'
                      }],
                      option: {
                        title: {
                          text: "对比漏斗图"
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: "{a} <br/>{b} : {c}%"
                        },
                        legend: {
                          top: 'bottom',
                        },
                        series: [
                          {
                            name: '预期',
                            type: 'funnel',
                            left: '10%',
                            width: '60%',
                            label: {
                              normal: {
                                formatter: '{b}预期'
                              },
                              emphasis: {
                                position: 'inside',
                                formatter: '{b}预期: {c}%'
                              }
                            },
                            labelLine: {
                              normal: {
                                show: false
                              }
                            },
                            itemStyle: {
                              normal: {
                                opacity: 0.7
                              }
                            }
                          },
                          {
                            name: '实际',
                            type: 'funnel',
                            left: '10%',
                            width: '60%',
                            maxSize: '80%',
                            label: {
                              normal: {
                                position: 'inside',
                                formatter: '{c}%',
                                textStyle: {
                                  color: '#fff'
                                }
                              },
                              emphasis: {
                                position: 'inside',
                                formatter: '{b}实际: {c}%'
                              }
                            },
                            itemStyle: {
                              normal: {
                                opacity: 0.5,
                                borderColor: '#fff',
                                borderWidth: 2
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }]
              }]
            },
            {
              controlName: "ElRow",
              controlId: "ElRow_r11",
              gutter: 15,
              style: "margin-top:10px",
              children: [{
                controlName: "ElCol",
                controlId: "ElCol_c11",
                span: 12,
                children: [{
                  controlName: "ElCard",
                  controlId: "ElCard_card11",
                  children: [{
                    controlName: "FunnelChart",
                    controlId: "FunnelChart_r11",
                    height: 250,
                    datas: [
                      { value: 100, name: '展现' },
                      { value: 80, name: '点击' },
                      { value: 60, name: '访问' },
                      { value: 40, name: '咨询' },
                      { value: 20, name: '订单' },
                    ],
                    isGroupData: true,
                    groupBy: "name",
                    calcFields: [{
                      name: 'value',
                      title: '数量',
                      summaryType: 'sum'
                    }],
                    option: {
                      title: {
                        text: "基础金字塔"
                      },
                      legend: {
                        top: 'bottom'
                      },
                      series: [{
                        sort: 'ascending',
                      }]
                    }
                  }]
                }]
              }, {
                controlName: "ElCol",
                controlId: "ElCol_c22",
                span: 12,
                children: [{
                  controlName: "ElCard",
                  controlId: "ElCard_card22",
                  children: [
                    {
                      controlName: "FunnelChart",
                      controlId: "FunnelChart_r22",
                      height: 250,
                      datas: [
                        { yq: 100, sj: 80, name: '展现' },
                        { yq: 80, sj: 40, name: '点击' },
                        { yq: 60, sj: 30, name: '访问' },
                        { yq: 40, sj: 20, name: '咨询' },
                        { yq: 20, sj: 5, name: '订单' },
                      ],
                      isGroupData: true,
                      groupBy: "name",
                      calcFields: [{
                        name: 'yq',
                        title: '预期',
                        summaryType: 'sum'
                      }, {
                        name: 'sj',
                        title: '实际',
                        summaryType: 'sum'
                      }],
                      option: {
                        title: {
                          text: "对比金字塔"
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: "{a} <br/>{b} : {c}%"
                        },
                        legend: {
                          top: 'bottom',
                        },
                        series: [
                          {
                            name: '预期',
                            type: 'funnel',
                            sort: 'ascending',
                            left: '10%',
                            width: '60%',
                            label: {
                              normal: {
                                formatter: '{b}预期'
                              },
                              emphasis: {
                                position: 'inside',
                                formatter: '{b}预期: {c}%'
                              }
                            },
                            labelLine: {
                              normal: {
                                show: false
                              }
                            },
                            itemStyle: {
                              normal: {
                                opacity: 0.7
                              }
                            }
                          },
                          {
                            name: '实际',
                            type: 'funnel',
                            sort: 'ascending',
                            left: '10%',
                            width: '60%',
                            maxSize: '80%',
                            label: {
                              normal: {
                                position: 'inside',
                                formatter: '{c}%',
                                textStyle: {
                                  color: '#fff'
                                }
                              },
                              emphasis: {
                                position: 'inside',
                                formatter: '{b}实际: {c}%'
                              }
                            },
                            itemStyle: {
                              normal: {
                                opacity: 0.5,
                                borderColor: '#fff',
                                borderWidth: 2
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }]
              }]
            }, {
              controlName: "ElRow",
              controlId: "ElRow_r2",
              gutter: 15,
              style: "margin-top:10px;",
              children: [{
                controlName: "ElCol",
                controlId: "ElCol_c21",
                span: 12,
                children: [{
                  controlName: "ElCard",
                  controlId: "ElCard_card21",
                  children: [
                    {
                      controlName: "FunnelChart",
                      controlId: "FunnelChart_r21",
                      height: 250,
                      datas: [
                        { yq: 100, sj: 80, name: '展现' },
                        { yq: 80, sj: 40, name: '点击' },
                        { yq: 60, sj: 30, name: '访问' },
                        { yq: 40, sj: 20, name: '咨询' },
                        { yq: 20, sj: 5, name: '订单' },
                      ],
                      isGroupData: true,
                      groupBy: "name",
                      calcFields: [{
                        name: 'yq',
                        title: '预期',
                        summaryType: 'sum'
                      }, {
                        name: 'sj',
                        title: '实际',
                        summaryType: 'sum'
                      }],
                      option: {
                        title: {
                          text: "左右对比金字塔"
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: "{a} <br/>{b} : {c}%"
                        },
                        legend: {
                          top: 'bottom',
                        },
                        series: [
                          {
                            name: '预期',
                            type: 'funnel',
                            left: '10%',
                            width: '40%',
                            sort: 'ascending',
                            funnelAlign: 'right',
                            center: ['25%', '25%'],
                            label: {
                              normal: {
                                position: 'left',
                                formatter: '{b}预期'
                              },
                              emphasis: {
                                position: 'left',
                                formatter: '{b}预期: {c}%'
                              }
                            },
                            labelLine: {
                              normal: {
                                show: false
                              }
                            },
                            itemStyle: {
                              normal: {
                                opacity: 0.7
                              }
                            }
                          },
                          {
                            name: '实际',
                            type: 'funnel',
                            left: '52%',
                            width: '40%',
                            sort: 'ascending',
                            funnelAlign: 'left',
                            center: ['75%', '25%'],
                            maxSize: '80%',
                            label: {
                              normal: {
                                position: 'right',
                                formatter: '{c}%',
                              },
                              emphasis: {
                                position: 'right',
                                formatter: '{b}实际: {c}%'
                              }
                            },
                            itemStyle: {
                              normal: {
                                opacity: 0.5,
                                borderColor: '#fff',
                                borderWidth: 2
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }]
              }, {
                controlName: "ElCol",
                controlId: "ElCol_c22",
                span: 12,
                children: [{
                  controlName: "ElCard",
                  controlId: "ElCard_card22",
                  children: [
                    {
                      controlName: "FunnelChart",
                      controlId: "FunnelChart_r22",
                      height: 250,
                      datas: [
                        { yq: 100, sj: 80, name: '展现' },
                        { yq: 80, sj: 40, name: '点击' },
                        { yq: 60, sj: 30, name: '访问' },
                        { yq: 40, sj: 20, name: '咨询' },
                        { yq: 20, sj: 5, name: '订单' },
                      ],
                      isGroupData: true,
                      groupBy: "name",
                      calcFields: [{
                        name: 'yq',
                        title: '预期',
                        summaryType: 'sum'
                      }, {
                        name: 'sj',
                        title: '实际',
                        summaryType: 'sum'
                      }],
                      option: {
                        title: {
                          text: "上下对比漏斗图"
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: "{a} <br/>{b} : {c}%"
                        },
                        legend: {
                          left: 'right',
                          orient: 'vertical'
                        },
                        series: [
                          {
                            name: '预期',
                            type: 'funnel',
                            left: '10%',
                            top: '15%',
                            height: '40%',
                            funnelAlign: 'left',
                            label: {
                              normal: {
                                formatter: '{b}预期'
                              },
                              emphasis: {
                                position: 'inside',
                                formatter: '{b}预期: {c}%'
                              }
                            },
                            labelLine: {
                              normal: {
                                show: false
                              }
                            },
                            itemStyle: {
                              normal: {
                                opacity: 0.7
                              }
                            }
                          },
                          {
                            name: '实际',
                            type: 'funnel',
                            left: '10%',
                            top: '55%',
                            height: '40%',
                            sort: 'ascending',
                            funnelAlign: 'left',
                            label: {
                              normal: {
                                position: 'right',
                                formatter: '{c}%',
                              },
                              emphasis: {
                                position: 'right',
                                formatter: '{b}实际: {c}%'
                              }
                            },
                            itemStyle: {
                              normal: {
                                opacity: 0.5,
                                borderColor: '#fff',
                                borderWidth: 2
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }]
              }]
            }]
        }
      ]
    }
  ]
}

