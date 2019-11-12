export const barModel = {
  "canEdit": true,
  sheets: [{
    pageIndex: 0,
    style: "padding:10px;",
    controlId: "BirtGridSheet_pie1",
    layouts: [{
      style: "",
      tables: [{
        style: "border:1px solid;width:100%;border-spacing:0px;border-collapse: collapse;",
        rows: {
          r1: {
            rowHeight: 60,
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
                  gutter: 15,
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
                        barVal:95,
                        option: {
                          title: {
                            text: "柱形百分比实时图"
                          },
                          grid:{   
                            left:'30%',
                            right:'30%',
                            top:'20%'
                          }
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
      }]
    }]
  }]
}
