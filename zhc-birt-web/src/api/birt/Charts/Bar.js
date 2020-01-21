export const barModel =
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
            gutter: 10,
            children: [{
              controlName: "ElCol",
              controlId: "ElCol_c1",
              span: 16,
              children: [{
                controlName: "ElCard",
                controlId: "ElCard_card1",
                children: [{
                  controlName: "BarChart",
                  controlId: "BarChart_r1",
                  height: 250,
                  datas: [
                    {
                      "week": "周一",
                      "directVisit": "320",
                      "email": "120",
                      "lmga": "220",
                      "spga": "150",
                      "searchEngine": "862",
                      "baidu": "620",
                      "google": "120",
                      "by": "60",
                      "other": "62",
                    },
                    {
                      "week": "周二",
                      "directVisit": "332",
                      "email": "132",
                      "lmga": "182",
                      "spga": "232",
                      "searchEngine": "1018",
                      "baidu": "732",
                      "google": "132",
                      "by": "72",
                      "other": "82",
                    },
                    {
                      "week": "周三",
                      "directVisit": "301",
                      "email": "101",
                      "lmga": "191",
                      "spga": "201",
                      "searchEngine": "964",
                      "baidu": "701",
                      "google": "101",
                      "by": "72",
                      "other": "91",
                    },
                    {
                      "week": "周四",
                      "directVisit": "334",
                      "email": "134",
                      "lmga": "234",
                      "spga": "154",
                      "searchEngine": "1026",
                      "baidu": "734",
                      "google": "134",
                      "by": "74",
                      "other": "84",
                    },
                    {
                      "week": "周五",
                      "directVisit": "390",
                      "email": "90",
                      "lmga": "290",
                      "spga": "190",
                      "searchEngine": "1679",
                      "baidu": "1090",
                      "google": "290",
                      "by": "190",
                      "other": "109",
                    },
                    {
                      "week": "周六",
                      "directVisit": "330",
                      "email": "230",
                      "lmga": "330",
                      "spga": "330",
                      "searchEngine": "1600",
                      "baidu": "1130",
                      "google": "230",
                      "by": "130",
                      "other": "110",
                    },
                    {
                      "week": "周日",
                      "directVisit": "320",
                      "email": "210",
                      "lmga": "310",
                      "spga": "410",
                      "searchEngine": "1570",
                      "baidu": "1120",
                      "google": "220",
                      "by": "110",
                      "other": "120",
                    },
                  ],
                  isGroupData: true,
                  groupBy: "week",
                  calcFields: [{
                    name: 'directVisit',
                    title: '直接访问',
                    summaryType: 'sum'
                  }, {
                    name: 'email',
                    title: '邮件营销',
                    summaryType: 'sum'
                  }, {
                    name: 'lmga',
                    title: '联盟广告',
                    summaryType: 'sum'
                  }, {
                    name: 'spga',
                    title: '视频广告',
                    summaryType: 'sum'
                  }, {
                    name: 'searchEngine',
                    title: '搜索引擎',
                    summaryType: 'sum'
                  }, {
                    name: 'baidu',
                    title: '百度',
                    summaryType: 'sum'
                  }, {
                    name: 'google',
                    title: '谷歌',
                    summaryType: 'sum'
                  }, {
                    name: 'by',
                    title: '必应  ',
                    summaryType: 'sum'
                  }, {
                    name: 'other',
                    title: '其他',
                    summaryType: 'sum'
                  }],
                  option: {
                    grid: {
                      bottom: '10%'
                    },
                    yAxis: {
                      axisLine: {
                        lineStyle: {
                          color: 'red'
                        }
                      }
                    },
                    series: [{}, { stack: '广告' }, { stack: '广告' }, { stack: '广告' }, {}, { barWidth: 5, stack: '搜索引擎' }, { stack: '搜索引擎' }, { stack: '搜索引擎' }, { stack: '搜索引擎' }]
                  }
                }]
              }]
            },
            {
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
          }, {
            controlName: "ElRow",
            controlId: "ElRow_r2",
            style: "margin-top:5px",
            gutter: 10,
            children: [
              {
                controlName: "ElCol",
                controlId: "ElCol_c21",
                span: 16,
                children: [
                  {
                    controlName: "ElCard",
                    controlId: "ElCard_card21",
                    children: [{
                      controlName: "BarChart",
                      controlId: "BarChart_r21",
                      row2col: true,
                      height: 532,
                      datas: [
                        {
                          "sumLength": 160.297099292278,
                          "exCount": 89,
                          "dyjId": "DYJ-0001"
                        },
                        {
                          "sumLength": 118.823999524117,
                          "exCount": 70,
                          "dyjId": "DYJ-0002"
                        },
                        {
                          "sumLength": 120.812099933624,
                          "exCount": 74,
                          "dyjId": "DYJ-0003"
                        },
                        {
                          "sumLength": 97.0707996487617,
                          "exCount": 63,
                          "dyjId": "DYJ-0004"
                        },
                        {
                          "sumLength": 124.749300062656,
                          "exCount": 76,
                          "dyjId": "DYJ-0005"
                        },
                        {
                          "sumLength": 137.756400644779,
                          "exCount": 87,
                          "dyjId": "DYJ-0006"
                        },
                        {
                          "sumLength": 103.598399698734,
                          "exCount": 67,
                          "dyjId": "DYJ-0007"
                        },
                        {
                          "sumLength": 118.974800467491,
                          "exCount": 75,
                          "dyjId": "DYJ-0008"
                        },
                        {
                          "sumLength": 164.078099310398,
                          "exCount": 95,
                          "dyjId": "DYJ-0009"
                        },
                        {
                          "sumLength": 203.757399380207,
                          "exCount": 115,
                          "dyjId": "DYJ-0010"
                        },
                        {
                          "sumLength": 164.703600287437,
                          "exCount": 85,
                          "dyjId": "DYJ-0011"
                        },
                        {
                          "sumLength": 61.2221002578735,
                          "exCount": 31,
                          "dyjId": "DYJ-0012"
                        },
                        {
                          "sumLength": 69.8004001379013,
                          "exCount": 43,
                          "dyjId": "DYJ-0013"
                        },
                        {
                          "sumLength": 91.5255005955696,
                          "exCount": 52,
                          "dyjId": "DYJ-0014"
                        },
                        {
                          "sumLength": 106.544700741768,
                          "exCount": 59,
                          "dyjId": "DYJ-0015"
                        },
                        {
                          "sumLength": 94.8807999491692,
                          "exCount": 53,
                          "dyjId": "DYJ-0016"
                        },
                        {
                          "sumLength": 91.2414993643761,
                          "exCount": 50,
                          "dyjId": "DYJ-0017"
                        },
                        {
                          "sumLength": 104.548400461674,
                          "exCount": 53,
                          "dyjId": "DYJ-0018"
                        },
                        {
                          "sumLength": 105.247099161148,
                          "exCount": 58,
                          "dyjId": "DYJ-0019"
                        },
                        {
                          "sumLength": 169.847000658512,
                          "exCount": 88,
                          "dyjId": "DYJ-0020"
                        },
                        {
                          "sumLength": 185.565299928188,
                          "exCount": 97,
                          "dyjId": "DYJ-0021"
                        },
                        {
                          "sumLength": 183.548800230026,
                          "exCount": 97,
                          "dyjId": "DYJ-0022"
                        },
                        {
                          "sumLength": 263.546499371529,
                          "exCount": 136,
                          "dyjId": "DYJ-0023"
                        },
                        {
                          "sumLength": 267.314499855042,
                          "exCount": 136,
                          "dyjId": "DYJ-0024"
                        },
                        {
                          "sumLength": 213.48810005188,
                          "exCount": 111,
                          "dyjId": "DYJ-0025"
                        },
                        {
                          "sumLength": 219.724299371243,
                          "exCount": 118,
                          "dyjId": "DYJ-0026"
                        },
                        {
                          "sumLength": 178.313400447369,
                          "exCount": 95,
                          "dyjId": "DYJ-0027"
                        },
                        {
                          "sumLength": 161.546300172806,
                          "exCount": 83,
                          "dyjId": "DYJ-0028"
                        },
                        {
                          "sumLength": 230.62540012598,
                          "exCount": 117,
                          "dyjId": "DYJ-0029"
                        },
                        {
                          "sumLength": 140.89880001545,
                          "exCount": 77,
                          "dyjId": "DYJ-0030"
                        }
                      ],
                      isGroupData: true,
                      groupBy: "dyjId",
                      calcFields: [{
                        name: "sumLength",
                        title: '生产码数',
                      }, {
                        name: "exCount",
                        title: '故障次数',
                      }],
                      option: {
                        legend: {
                          left: 'right',
                          orient: 'vertical',
                        },
                        grid: {
                          top: "0%",
                          right: "100",
                          bottom: "5%"
                        },
                        series: [{
                          stack: '总量',
                          label: {
                            normal: {
                              show: true,
                              position: 'insideRight',
                              formatter: function (params) {
                                return params.data.value.toFixed(0) + '码'
                              }
                            }
                          },
                          color: "#56A6D1"
                        }, {
                          stack: '总量',
                          label: {
                            normal: {
                              show: true,
                              position: 'insideRight'
                            }
                          },
                          color: "#E43C59"
                        }]
                      }
                    }]
                  }]
              },
              {
                controlName: "ElCol",
                controlId: "ElCol_c22",
                span: 8,
                children: [
                  {
                    controlName: "ElCard",
                    controlId: "ElCard_card22",
                    children: [
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
                  },
                  {
                    controlName: "ElCard",
                    controlId: "ElCard_card22",
                    style: "margin-top:10px",
                    children: [
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
                      }
                    ]
                  },

                ]
              }
            ]
          }]
        }
      ]
    }
  ]
}

