export var chartDeepModel = {
  showToolBar: false,
  canEdit: true,
  dataSources: [{
    controlName: "WebSocketConection",
    controlId: "wsc1",
    webSocketUrl: "ws://114.115.217.1/amrept-web/dyj/sktcloud/admin1.do",
    target: {
      dyj_WcuFn0RQ: {
        datasetId: "ds1"
      },
      dyj_OJs1oQ55: {
        datasetId: "dsChina"
      },
      dyj_wtRqUmpQ: {
        datasetId: "dsAvg"
      },
      dyj_aF7kMgt3: {
        datasetId: "dsWarning"
      },
      dyj_oawkevs: {
        datasetId: "dsWarningStat"
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
      controlId: "dsChina",
      datas: [{
        "gpsEast": 119.56,
        "gpsNorth": 26,
        "runProvince": "福建",
        "runAddr": "长乐",
        "dyjId": "DYJ-0001",
        "company": "长源纺织",
        "id": 1,
        "runCity": "福州",
        "state_BSIs": 1
      },
      {
        "gpsEast": 119.6,
        "gpsNorth": 26.1,
        "runProvince": "福建",
        "runAddr": "长乐",
        "dyjId": "DYJ-0002",
        "company": "长源纺织",
        "id": 2,
        "runCity": "福州",
        "state_BSIs": 2
      },
      {
        "gpsEast": 119.8,
        "gpsNorth": 26.3,
        "runProvince": "福建",
        "runAddr": "长乐",
        "dyjId": "DYJ-0003",
        "company": "长源纺织",
        "id": 3,
        "runCity": "福州",
        "state_BSIs": 3
      },
      {
        "gpsEast": 119.1,
        "gpsNorth": 26.9,
        "runProvince": "福建",
        "runAddr": "长乐",
        "dyjId": "DYJ-0004",
        "company": "长源纺织",
        "id": 4,
        "runCity": "福州",
        "state_BSIs": 4
      },
      {
        "gpsEast": 118.623,
        "gpsNorth": 24.7304,
        "runProvince": "福建",
        "runAddr": "石狮",
        "dyjId": "DYJ-0005",
        "company": "联邦三禾(福建)股份有限公司",
        "id": 5,
        "runCity": "泉州",
        "state_BSIs": 0
      },
      {
        "gpsEast": 118.052,
        "gpsNorth": 24.5803,
        "runProvince": "福建",
        "runAddr": "集美",
        "dyjId": "DYJ-0006",
        "company": "华懋(厦门)织造染整有限公司",
        "id": 6,
        "runCity": "厦门",
        "state_BSIs": 1
      },
      {
        "gpsEast": 118.89,
        "gpsNorth": 25.2755,
        "runProvince": "福建",
        "runAddr": "仙游",
        "dyjId": "DYJ-0007",
        "company": "莆田和森纺织有限公司",
        "id": 7,
        "runCity": "莆田",
        "state_BSIs": 1
      },
      {
        "gpsEast": 117.539,
        "gpsNorth": 26.7712,
        "runProvince": "福建",
        "runAddr": "将乐",
        "dyjId": "DYJ-0008",
        "company": "福建祥源纺织有限公司",
        "id": 8,
        "runCity": "三明",
        "state_BSIs": 2
      },
      {
        "gpsEast": 117.78,
        "gpsNorth": 36.8806,
        "runProvince": "山东",
        "runAddr": "邹平",
        "dyjId": "DYJ-0009",
        "company": "山东魏桥创业集团有限公司",
        "id": 9,
        "runCity": "滨州",
        "state_BSIs": 3
      },
      {
        "gpsEast": 116.672,
        "gpsNorth": 35.4421,
        "runProvince": "山东",
        "runAddr": "济宁高新区",
        "dyjId": "DYJ-0010",
        "company": "山东如意科技集团有限公司",
        "id": 10,
        "runCity": "济宁",
        "state_BSIs": 4
      },
      {
        "gpsEast": 117.964,
        "gpsNorth": 36.6752,
        "runProvince": "山东",
        "runAddr": "高新技术开发区",
        "dyjId": "DYJ-0011",
        "company": "鲁泰纺织股份有限公司",
        "id": 11,
        "runCity": "淄博",
        "state_BSIs": 0
      },
      {
        "gpsEast": 120.413,
        "gpsNorth": 31.8525,
        "runProvince": "江苏",
        "runAddr": "周庄",
        "dyjId": "DYJ-0012",
        "company": "江苏三房巷集团有限公司",
        "id": 12,
        "runCity": "江阴",
        "state_BSIs": 1
      },
      {
        "gpsEast": 120.657,
        "gpsNorth": 31.814,
        "runProvince": "江苏",
        "runAddr": "塘桥",
        "dyjId": "DYJ-0013",
        "company": "江苏华芳集团有限公司",
        "id": 13,
        "runCity": "张家港",
        "state_BSIs": 1
      },
      {
        "gpsEast": 120.567,
        "gpsNorth": 31.9898,
        "runProvince": "江苏",
        "runAddr": "大新",
        "dyjId": "DYJ-0014",
        "company": "张家港市大新毛纺有限公司",
        "id": 14,
        "runCity": "张家港",
        "state_BSIs": 2
      },
      {
        "gpsEast": 113.616,
        "gpsNorth": 23.0905,
        "runProvince": "广东",
        "runAddr": "麻涌",
        "dyjId": "DYJ-0015",
        "company": "东莞德永佳纺织制衣有限公司",
        "id": 15,
        "runCity": "东莞",
        "state_BSIs": 2
      },
      {
        "gpsEast": 120.405,
        "gpsNorth": 30.1339,
        "runProvince": "浙江",
        "runAddr": "柯桥",
        "dyjId": "DYJ-0016",
        "company": "浙江永通染织集团有限公司",
        "id": 16,
        "runCity": "绍兴",
        "state_BSIs": 3
      },
      {
        "gpsEast": 121.66,
        "gpsNorth": 29.8919,
        "runProvince": "浙江",
        "runAddr": "鄞州",
        "dyjId": "DYJ-0017",
        "company": "宁波海天纺织有限公司",
        "id": 17,
        "runCity": "宁波",
        "state_BSIs": 3
      },
      {
        "gpsEast": 102.717,
        "gpsNorth": 25.026,
        "runProvince": "云南",
        "runAddr": "五华",
        "dyjId": "DYJ-0018",
        "company": "云南纺织（集团）股份有限公司",
        "id": 18,
        "runCity": "昆明",
        "state_BSIs": 4
      },
      {
        "gpsEast": 112.571,
        "gpsNorth": 32.9807,
        "runProvince": "河南",
        "runAddr": "新能源经济技术开发区",
        "dyjId": "DYJ-0019",
        "company": "南阳纺织集团有限公司",
        "id": 19,
        "runCity": "南阳",
        "state_BSIs": 4
      },
      {
        "gpsEast": 115.665,
        "gpsNorth": 38.5694,
        "runProvince": "河北",
        "runAddr": "蠡县",
        "dyjId": "DYJ-0020",
        "company": "河北启发纺织集团公司",
        "id": 20,
        "runCity": "保定",
        "state_BSIs": 0
      },
      {
        "gpsEast": 112.502,
        "gpsNorth": 35.4895,
        "runProvince": "山西",
        "runAddr": "阳城",
        "dyjId": "DYJ-0021",
        "company": "山西绿洲纺织有限责任公司",
        "id": 21,
        "runCity": "晋城",
        "state_BSIs": 0
      },
      {
        "gpsEast": 114.491,
        "gpsNorth": 29.9362,
        "runProvince": "湖北",
        "runAddr": "咸安",
        "dyjId": "DYJ-0022",
        "company": "湖北精华纺织集团有限公司",
        "id": 22,
        "runCity": "咸宁",
        "state_BSIs": 1
      },
      {
        "gpsEast": 110.047,
        "gpsNorth": 40.5787,
        "runProvince": "内蒙古自治区",
        "runAddr": "东河",
        "dyjId": "DYJ-0023",
        "company": "内蒙古鹿王羊绒有限公司",
        "id": 23,
        "runCity": "包头",
        "state_BSIs": 2
      },
      {
        "gpsEast": 128.326,
        "gpsNorth": 45.4505,
        "runProvince": "黑龙江",
        "runAddr": "延寿",
        "dyjId": "DYJ-0024",
        "company": "黑龙江省延寿县继嘉亚麻纺织有限公司",
        "id": 24,
        "runCity": "哈尔滨",
        "state_BSIs": 1
      },
      {
        "gpsEast": 118.092,
        "gpsNorth": 31.0564,
        "runProvince": "安徽",
        "runAddr": "繁昌",
        "dyjId": "DYJ-0025",
        "company": "安徽中天纺织科技股份有限公司",
        "id": 25,
        "runCity": "芜湖",
        "state_BSIs": 3
      },
      {
        "gpsEast": 114.521,
        "gpsNorth": 38.0617,
        "runProvince": "河北",
        "runAddr": "长安",
        "dyjId": "DYJ-0026",
        "company": "石家庄常山纺织集团有限责任公司",
        "id": 26,
        "runCity": "石家庄",
        "state_BSIs": 1
      },
      {
        "gpsEast": 108.734,
        "gpsNorth": 34.3447,
        "runProvince": "陕西",
        "runAddr": "渭城",
        "dyjId": "DYJ-0027",
        "company": "陕西八方纺织有限责任公司",
        "id": 27,
        "runCity": "咸阳",
        "state_BSIs": 2
      },
      {
        "gpsEast": 104.95,
        "gpsNorth": 29.1802,
        "runProvince": "四川",
        "runAddr": "富顺",
        "dyjId": "DYJ-0028",
        "company": "富顺县裕仁纺织有限公司",
        "id": 28,
        "runCity": "自贡",
        "state_BSIs": 2
      },
      {
        "gpsEast": 117.235,
        "gpsNorth": 39.1078,
        "runProvince": "天津",
        "runAddr": "武清",
        "dyjId": "DYJ-0029",
        "company": "天津市天元纺织有限公司",
        "id": 29,
        "runCity": "天津",
        "state_BSIs": 3
      },
      {
        "gpsEast": 118.579,
        "gpsNorth": 24.8311,
        "runProvince": "福建",
        "runAddr": "晋江",
        "dyjId": "DYJ-0030",
        "company": "福建凤竹纺织科技股份有限公司",
        "id": 30,
        "runCity": "泉州",
        "state_BSIs": 4
      },
      {
        "gpsEast": 118.526,
        "gpsNorth": 24.9298,
        "runProvince": "福建",
        "runAddr": "鲤城",
        "dyjId": "DYJ-0031",
        "company": "泉州海天材料科技股份有限公司",
        "id": 31,
        "runCity": "泉州",
        "state_BSIs": 0
      },
      {
        "gpsEast": 118.166,
        "gpsNorth": 26.6911,
        "runProvince": "福建",
        "runAddr": "安丰桥",
        "dyjId": "DYJ-0032",
        "company": "福建南纺股份有限公司",
        "id": 32,
        "runCity": "南平",
        "state_BSIs": 1
      },
      {
        "gpsEast": 118.666,
        "gpsNorth": 24.5908,
        "runProvince": "福建",
        "runAddr": "长汀",
        "dyjId": "DYJ-0033",
        "company": "福建鸿程纺织有限公司",
        "id": 33,
        "runCity": "龙岩",
        "state_BSIs": 1
      },
      {
        "gpsEast": 119.371,
        "gpsNorth": 26.0715,
        "runProvince": "福建",
        "runAddr": "福兴投资区",
        "dyjId": "DYJ-0034",
        "company": "福州福华纺织印染有限公司",
        "id": 34,
        "runCity": "福州",
        "state_BSIs": 2
      }
      ],
      datas: []
    }, {
      controlName: "JsWebSocketDataSet",
      controlId: "dsAvg",
      datas: []
    }, {
      controlName: "JsWebSocketDataSet",
      controlId: "dsWarning",
      datas: [{
        "exceptionType": 0,
        "messageType": "warring",
        "exceptionTime": "2019-11-20 11:16:51",
        "dyjId": "DYJ-0013",
        "exceptionState": 0,
        "id": 79193,
        "exceptionMessage": "大圆机DYJ-0013所在车间温度超过40℃"
      },
      {
        "exceptionType": 3,
        "messageType": "danger",
        "exceptionTime": "2019-11-20 11:17:11",
        "dyjId": "DYJ-0017",
        "exceptionState": 2,
        "id": 79194,
        "exceptionMessage": "大圆机DYJ-0017缺少润滑油"
      },
      {
        "exceptionType": 3,
        "messageType": "danger",
        "exceptionTime": "2019-11-20 11:17:21",
        "dyjId": "DYJ-0017",
        "exceptionState": 2,
        "id": 79195,
        "exceptionMessage": "大圆机DYJ-0017缺少润滑油"
      },
      {
        "exceptionType": 0,
        "messageType": "warring",
        "exceptionTime": "2019-11-20 11:17:41",
        "dyjId": "DYJ-0011",
        "exceptionState": 0,
        "id": 79196,
        "exceptionMessage": "大圆机DYJ-0011所在车间温度超过40℃"
      },
      {
        "exceptionType": 1,
        "messageType": "danger",
        "exceptionTime": "2019-11-20 11:17:41",
        "dyjId": "DYJ-0018",
        "exceptionState": 2,
        "id": 79197,
        "exceptionMessage": "大圆机DYJ-0018发生坏针异常"
      },
      {
        "exceptionType": 0,
        "messageType": "warring",
        "exceptionTime": "2019-11-20 11:17:51",
        "dyjId": "DYJ-0013",
        "exceptionState": 0,
        "id": 79198,
        "exceptionMessage": "大圆机DYJ-0013所在车间温度超过40℃"
      },
      ],
      datas: []
    }, {
      controlName: "JsWebSocketDataSet",
      controlId: "dsWarningStat",
      datas: []
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
            span: 13,
            children: [{
              controlName: "ElRow",
              controlId: "ElRow_r2_dyj",
              style: "position: absolute;z-index:3;",
              children: [{
                controlName: "TextLabel",
                controlId: "TextLabel_dyj",
                title: "大圆机设备：",
                height: "50px",
                style: "text-indent: 20px;color: #32d3eb;font-size: 18px;display:inline;padding-left:10px;cursor: pointer;",
                events: {
                  click: function () {
                    alert(1)
                  }
                }
              }, {
                controlName: "TextLabel",
                controlId: "TextLabel_china",
                title: "中国",
                height: "50px",
                style: "text-indent: 20px;color: #32d3eb;font-size: 18px;display:inline;",
                events: {
                  click: function (scope, a, b) {
                    let comptChinaMap = this.getRefCompt("ChinaMapChart_21");
                    if (comptChinaMap && comptChinaMap.isDeepProvince) {
                      comptChinaMap.initChinaChart();
                      document.querySelector("#TextLabel_province").innerText = "";
                      document.querySelector("#TextLabel_provincecount").innerText = "";
                      this.$el.style.cursor = "";
                    }
                  }
                }
              }, {
                controlName: "TextLabel",
                controlId: "TextLabel_chinacount",
                dataset: "dsChina",
                title: function () {
                  debugger
                  return " (" + this.bindDataset.datas.length + ")";
                },
                height: "50px",
                style: "color: #FD6A01;font-size: 18px;display:inline;",
              }, {
                controlName: "TextLabel",
                controlId: "TextLabel_province",
                title: "",
                height: "50px",
                style: "color: #32d3eb;font-size: 18px;display:inline;",
              }, {
                controlName: "TextLabel",
                controlId: "TextLabel_provincecount",
                title: "",
                height: "50px",
                style: "color: #FD6A01;font-size: 18px;display:inline;",
              }]
            }, {
              controlName: "ChinaMapChart",
              controlId: "ChinaMapChart_21",
              height: function (parentHeight) {
                return parentHeight - 90;
              },
              style: "background-color: rgba(1, 5, 61, 0.2);",
              isGroupData: true,
              dataset: "dsChina",
              groupBy: "runAddr",
              calcFields: [{
                name: 'state_BSIs',
                title: '正常生产',
                filterExpr: 'this.state_BSIs == 1',
                gpsAddr: "runAddr",
                gpsEast: "gpsEast",
                gpsNorth: "gpsNorth",
                summaryType: 'sum'
              }, {
                name: 'state_BSIs',
                title: '中危生产',
                filterExpr: 'this.state_BSIs == 2',
                gpsAddr: "runAddr",
                gpsEast: "gpsEast",
                gpsNorth: "gpsNorth",
                summaryType: 'sum'
              }, {
                name: 'state_BSIs',
                title: '高危生产',
                filterExpr: 'this.state_BSIs == 3',
                gpsAddr: "runAddr",
                gpsEast: "gpsEast",
                gpsNorth: "gpsNorth",
                summaryType: 'sum'
              }, {
                name: 'state_BSIs',
                title: '故障停机',
                filterExpr: 'this.state_BSIs == 4',
                gpsAddr: "runAddr",
                gpsEast: "gpsEast",
                gpsNorth: "gpsNorth",
                summaryType: 'sum'
              }, {
                name: 'state_BSIs',
                title: '关机状态',
                filterExpr: 'this.state_BSIs == 0',
                gpsAddr: "runAddr",
                gpsEast: "gpsEast",
                gpsNorth: "gpsNorth",
                summaryType: 'sum'
              }],
              option: {
                tooltip: {
                  formatter: function (param) {
                    var recd = param.data;
                    var hint = recd.runProvince + "/";
                    if (recd.runProvince != recd.runCity) {
                      hint += recd.runCity + "/";
                    }
                    hint += recd.runAddr + "<br/>" + recd.company + "<br/><font size=4>" + param.seriesName +
                      "</font>";
                    return hint;
                  }
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
                  type: "effectScatter",
                  symbolSize: 15,
                  showEffectOn: "render",
                  rippleEffect: {
                    brushType: "stroke"
                  },
                  hoverAnimation: true,
                  itemStyle: {
                    normal: {
                      color: "#C23531",
                      shadowBlur: 10,
                      shadowColor: "#F56C6C"
                    }
                  },
                  zlevel: 5
                }, {
                  itemStyle: {
                    normal: {
                      color: "#626464"
                    }
                  },
                  zlevel: 1
                }]
              },
              events: {
                click: function (param) {
                  if (param.data) { //点击数据                    
                    var recd = param.data;
                    var hint = recd.runProvince + "/";
                    if (recd.runProvince != recd.runCity) {
                      hint += recd.runCity + "/";
                    }
                    hint += recd.runAddr + "/" + recd.company + " " + recd.dyjId;
                    document.querySelector("#TextLabel_11").innerText = hint;                    
                    // 发送过滤条件 
                    let val = {
                      "am_websocket": {
                        "dataId": "dyj_WcuFn0RQ",
                        "queryCdions": {
                          "join": "and",
                          "items": [{
                            "sign": "eq",
                            "name": "dyjId",
                            "dataType": "string",
                            "value": recd.dyjId,
                            "enable": true
                          }]
                        }
                      }
                    }
                    // 过滤当前生产数据
                    this.datasource.wsc1.webSocket.send(JSON.stringify(val));
                    // 过滤5分钟统计数据
                    val.am_websocket.dataId = "dyj_wtRqUmpQ"
                    this.datasource.wsc1.webSocket.send(JSON.stringify(val));
                  } else if (!this.isDeepProvince) {
                    this.initProvinceChart(param, function (d) {
                      return d.runProvince == param.name
                    });
                    document.querySelector("#TextLabel_province").innerText = " / " + this.chartType;                    
                    let count = this.dataset.dsChina.datas.filter(
                      x => x.runProvince === param.name
                    ).length;
                    document.querySelector("#TextLabel_provincecount").innerText = "(" + count + ")";
                    document.querySelector("#TextLabel_china").style.cursor = "pointer";
                  }
                },
                dblclick: function () {
                  this.initChinaChart();
                  document.querySelector("#TextLabel_province").innerText = "";
                  document.querySelector("#TextLabel_provincecount").innerText = "";
                  document.querySelector("#TextLabel_china").style.cursor = "";
                }
              }
            }]
          }, {
            controlName: "ElCol",
            controlId: "ElCol_r2_c1",
            span: 11,
            children: [{
              controlName: "TextLabel",
              controlId: "TextLabel_11",
              title: "大圆机",
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
                  minBarVal: 0,
                  maxBarVal: 60,
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
                  groupBy: "inputTime",
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
                  minBarVal: 0,
                  maxBarVal: 50,
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
                    barVal: 50,
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
                  groupBy: "inputTime",
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
                      min: 0,
                      max: 50,
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
                  minBarVal: 30,
                  maxBarVal: 80,
                  stepBarVals: [{
                    barVal: 45,
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
                  groupBy: "inputTime",
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
                      min: 30,
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
              gutter: 5,
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
                    title: "累计生产码数",
                    height: "30px",
                    style: "text-align:center;"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_1111",
                    dataset: "ds1",
                    title: function (curRecord) {
                      if (!curRecord.sumProductionlength) debugger;
                      return curRecord.sumProductionlength;
                    },
                    height: "66px",
                    style: "text-align:center;line-height:50px;font-size:24px;font-weight:bold;color:#FD6A01;"
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
                    dataset: "dsAvg",
                    title: function (curRecord) {
                      return "平均：" + (curRecord.avgSpeed || "") + "转/mi";
                    },
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    dataset: "dsAvg",
                    title: function (curRecord) {
                      return "最大：" + (curRecord.maxSpeed || "") + "转/mi";
                    },
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    dataset: "dsAvg",
                    title: function (curRecord) {
                      return "最小：" + (curRecord.minSpeed || "") + "转/mi";
                    },
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
                    dataset: "dsAvg",
                    title: function (curRecord) {
                      return "平均：" + (curRecord.avgTemperature || "") + " °C";
                    },
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    dataset: "dsAvg",
                    title: function (curRecord) {
                      return "最大：" + (curRecord.maxTemperature || "") + " °C";
                    },
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    dataset: "dsAvg",
                    title: function (curRecord) {
                      return "最小：" + (curRecord.minTemperautre || "") + " °C";
                    },
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
                    dataset: "dsAvg",
                    title: function (curRecord) {
                      return "平均：" + (curRecord.avgHumidity || "") + " %rh";
                    },
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    dataset: "dsAvg",
                    title: function (curRecord) {
                      return "最大：" + (curRecord.maxHumidity || "") + " %rh";
                    },
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc41_2",
                    dataset: "dsAvg",
                    title: function (curRecord) {
                      return "最小：" + (curRecord.minHumidity || "") + " %rh";
                    },
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
                controlName: "ElCol",
                controlId: "ElCol_r2_c1_r4_c4_1",
                span: 17,
                children: [{
                  controlName: "HcTimeline",
                  controlId: "HcTimeline_1",
                  height: function (parentHeight) {
                    return parentHeight - 90 - 60 - 116 - 260;
                  },
                  style: "padding-top:10px;",
                  dataset: "dsWarning",
                  content: "exceptionMessage",
                  timestamp: "exceptionTime",
                  type: "messageType"
                }]
              },
              {
                controlName: "ElCol",
                controlId: "ElCol_r2_c1_r4_c4_2",
                span: 7,
                children: [{
                  controlName: "ImageTitle",
                  controlId: "ImageTitle_rc41_4",
                  imageUrl: "url(" + require("@/images/title-02.png") + ")",
                  height: 120,
                  style: "padding: 5px 0px;",
                  children: [{
                    controlName: "TextLabel",
                    controlId: "TextLable_rc51_1",
                    dataset: "dsWarningStat",
                    title: function (curRecord) {
                      return "今日预警 " + (curRecord.stateall || "") + " 个";
                    },
                    height: "40px",
                    style: "color: #FD6A01;font-size:18px;font-weight:bold;text-align:center"
                  },
                  {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc51_2",
                    dataset: "dsWarningStat",
                    title: function (curRecord) {
                      return "已完成：" + (curRecord.state0 || "") + " 个";
                    },
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc51_1",
                    dataset: "dsWarningStat",
                    title: function (curRecord) {
                      return "已受理：" + (curRecord.state1 || "") + " 个";
                    },
                    height: "22px",
                    style: "text-align:center"
                  }, {
                    controlName: "TextLabel",
                    controlId: "TextLable_rc51_1",
                    dataset: "dsWarningStat",
                    title: function (curRecord) {
                      return "未处理：" + (curRecord.state2 || "") + " 个";
                    },
                    height: "22px",
                    style: "text-align:center"
                  }
                  ]
                }]
              }
              ]
            }]
          }]
        }]
      }]
    }]
  }]
}
