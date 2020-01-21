export var bindDatasetModel =
{
  controlName: "BirtWorkBook",
  controlId: "BirtWorkBook_0",
  showToolBar:false,
  children: [
    {
      controlName: "BirtSheet",
      controlId: "BirtSheet_0",
      pageIndex: 0,
      style: "backgroundImage:url(" + require("@/images/background-01.png") + ");background-repeat: no-repeat;background-size: 100% 100%;",
      dataSets: [{
        controlName: "JsWebSocketDataSet",
        controlId: "ds1",
        datas: [{

        }]
      }, {
        controlName: "JsWebSocketDataSet",
        controlId: "dsSpeed",
        datas: [{ "exceptionType": 1, "exCount": 40, "speed": 34.2 }, { "exceptionType": 2, "exCount": 63, "speed": 34.2 }, { "exceptionType": 3, "exCount": 53, "speed": 34.2 }, { "exceptionType": 1, "exCount": 89, "speed": 34.4 }, { "exceptionType": 2, "exCount": 153, "speed": 34.4 }, { "exceptionType": 3, "exCount": 128, "speed": 34.4 }, { "exceptionType": 1, "exCount": 81, "speed": 34.6 }, { "exceptionType": 2, "exCount": 139, "speed": 34.6 }, { "exceptionType": 3, "exCount": 119, "speed": 34.6 }, { "exceptionType": 1, "exCount": 107, "speed": 34.8 }, { "exceptionType": 2, "exCount": 142, "speed": 34.8 }, { "exceptionType": 3, "exCount": 34, "speed": 34.8 }, { "exceptionType": 1, "exCount": 106, "speed": 35.0 }, { "exceptionType": 2, "exCount": 148, "speed": 35.0 }, { "exceptionType": 3, "exCount": 44, "speed": 35.0 }, { "exceptionType": 1, "exCount": 129, "speed": 35.2 }, { "exceptionType": 2, "exCount": 142, "speed": 35.2 }, { "exceptionType": 3, "exCount": 47, "speed": 35.2 }, { "exceptionType": 3, "exCount": 52, "speed": 35.4 }, { "exceptionType": 1, "exCount": 179, "speed": 35.4 }, { "exceptionType": 2, "exCount": 123, "speed": 35.4 }, { "exceptionType": 1, "exCount": 159, "speed": 35.6 }, { "exceptionType": 2, "exCount": 140, "speed": 35.6 }, { "exceptionType": 3, "exCount": 33, "speed": 35.6 }]
      }, {
        controlName: "JsWebSocketDataSet",
        controlId: "dsTemperature",
        datas: [{ "exceptionType": 1, "exCount": 84, "temperature": 5 }, { "exceptionType": 2, "exCount": 110, "temperature": 5 }, { "exceptionType": 3, "exCount": 42, "temperature": 5 }, { "exceptionType": 1, "exCount": 167, "temperature": 10 }, { "exceptionType": 2, "exCount": 207, "temperature": 10 }, { "exceptionType": 3, "exCount": 54, "temperature": 10 }, { "exceptionType": 1, "exCount": 195, "temperature": 15 }, { "exceptionType": 2, "exCount": 228, "temperature": 15 }, { "exceptionType": 3, "exCount": 65, "temperature": 15 }, { "exceptionType": 1, "exCount": 56, "temperature": 20 }, { "exceptionType": 2, "exCount": 55, "temperature": 20 }, { "exceptionType": 3, "exCount": 15, "temperature": 20 }, { "exceptionType": 1, "exCount": 139, "temperature": 25 }, { "exceptionType": 2, "exCount": 127, "temperature": 25 }, { "exceptionType": 3, "exCount": 140, "temperature": 25 }, { "exceptionType": 1, "exCount": 168, "temperature": 30 }, { "exceptionType": 2, "exCount": 187, "temperature": 30 }, { "exceptionType": 3, "exCount": 135, "temperature": 30 }, { "exceptionType": 1, "exCount": 81, "temperature": 35 }, { "exceptionType": 2, "exCount": 136, "temperature": 35 }, { "exceptionType": 3, "exCount": 59, "temperature": 35 }]
      }, {
        controlName: "JsWebSocketDataSet",
        controlId: "dsHumidity",
        datas: [{ "exceptionType": 1, "exCount": 64, "humidity": 40 }, { "exceptionType": 2, "exCount": 80, "humidity": 40 }, { "exceptionType": 3, "exCount": 23, "humidity": 40 }, { "exceptionType": 1, "exCount": 161, "humidity": 45 }, { "exceptionType": 2, "exCount": 205, "humidity": 45 }, { "exceptionType": 3, "exCount": 61, "humidity": 45 }, { "exceptionType": 1, "exCount": 167, "humidity": 50 }, { "exceptionType": 2, "exCount": 218, "humidity": 50 }, { "exceptionType": 3, "exCount": 65, "humidity": 50 }, { "exceptionType": 1, "exCount": 58, "humidity": 55 }, { "exceptionType": 2, "exCount": 60, "humidity": 55 }, { "exceptionType": 3, "exCount": 16, "humidity": 55 }, { "exceptionType": 1, "exCount": 155, "humidity": 60 }, { "exceptionType": 2, "exCount": 207, "humidity": 60 }, { "exceptionType": 3, "exCount": 74, "humidity": 60 }, { "exceptionType": 1, "exCount": 166, "humidity": 65 }, { "exceptionType": 2, "exCount": 189, "humidity": 65 }, { "exceptionType": 3, "exCount": 136, "humidity": 65 }, { "exceptionType": 1, "exCount": 118, "humidity": 70 }, { "exceptionType": 2, "exCount": 90, "humidity": 70 }, { "exceptionType": 3, "exCount": 134, "humidity": 70 }, { "exceptionType": 1, "exCount": 1, "humidity": 75 }, { "exceptionType": 2, "exCount": 1, "humidity": 75 }, { "exceptionType": 3, "exCount": 1, "humidity": 75 }]
      }, {
        controlName: "JsWebSocketDataSet",
        controlId: "dsTension",
        datas: [{ "exceptionType": 1, "tension": 130, "exCount": 142 }, { "exceptionType": 2, "tension": 130, "exCount": 159 }, { "exceptionType": 3, "tension": 130, "exCount": 92 }, { "exceptionType": 1, "tension": 140, "exCount": 142 }, { "exceptionType": 2, "tension": 140, "exCount": 190 }, { "exceptionType": 3, "tension": 140, "exCount": 79 }, { "exceptionType": 1, "tension": 150, "exCount": 146 }, { "exceptionType": 2, "tension": 150, "exCount": 115 }, { "exceptionType": 3, "tension": 150, "exCount": 79 }, { "exceptionType": 1, "tension": 160, "exCount": 154 }, { "exceptionType": 2, "tension": 160, "exCount": 134 }, { "exceptionType": 3, "tension": 160, "exCount": 84 }, { "exceptionType": 1, "tension": 170, "exCount": 148 }, { "exceptionType": 2, "tension": 170, "exCount": 211 }, { "exceptionType": 3, "tension": 170, "exCount": 84 }, { "exceptionType": 1, "tension": 180, "exCount": 158 }, { "exceptionType": 2, "tension": 180, "exCount": 241 }, { "exceptionType": 3, "tension": 180, "exCount": 92 }]
      }],
      children: [
        {
          controlName: "BirtFormSheet",
          controlId: "BirtFormSheet_0",
          children: [{
            controlName: "ElRow",
            controlId: "ElRow_r1",
            children: [{
              controlName: "HcImageTitle",
              controlId: "HcImageTitle_11",
              width: "100%",
              height: "30px",
              imageUrl: "url(" + require("@/images/border-title-01.png") + ")",
              title: "大圆机运行历史数据分析",
              style: "text-align: center;font-size: 24px;font-weight: bold;color: #32d3eb;"
            }]
          },
          {
            controlName: "ElRow",
            controlId: "ElRow_r2",
            gutter: 15,
            style: "margin-top:20px;",
            children: [{
              controlName: "ElCol",
              controlId: "ElCol_r2_c1",
              span: 12,
              children: [
                {
                  controlName: "ElCard",
                  controlId: "ElCard_card1",
                  children: [
                    {
                      controlName: "LineChart",
                      controlId: "LineChart_speed",
                      height: function (parentHeight) {
                        return (parentHeight - 200) / 2;
                      },
                      dataset: "dsSpeed",
                      isGroupData: false,
                      groupBy: "speed",
                      calcFields: [{
                        name: 'exCount',
                        title: '断针',
                        filterExpr: 'this.exceptionType == 1',
                        summaryType: 'sum'
                      }, {
                        name: 'exCount',
                        title: '断线',
                        filterExpr: 'this.exceptionType == 2',
                        summaryType: 'sum'
                      }, {
                        name: 'exCount',
                        title: '缺润滑油',
                        filterExpr: 'this.exceptionType == 3',
                        summaryType: 'sum'
                      }],
                      option: {
                        title: {
                          text: "大圆机转速分析"
                        },
                        legend: {
                          left: 'right'
                        },
                        grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                        },
                      }
                    }]
                }
              ]
            }, {
              controlName: "ElCol",
              controlId: "ElCol_r2_c2",
              span: 12,
              children: [
                {
                  controlName: "ElCard",
                  controlId: "ElCard_card2",
                  children: [
                    {
                      controlName: "LineChart",
                      controlId: "LineChart_temperature",
                      height: function (parentHeight) {
                        return (parentHeight - 200) / 2;
                      },
                      dataset: "dsTemperature",
                      isGroupData: false,
                      groupBy: "temperature",
                      calcFields: [{
                        name: 'exCount',
                        title: '断针',
                        filterExpr: 'this.exceptionType == 1',
                        summaryType: 'sum'
                      }, {
                        name: 'exCount',
                        title: '断线',
                        filterExpr: 'this.exceptionType == 2',
                        summaryType: 'sum'
                      }, {
                        name: 'exCount',
                        title: '缺润滑油',
                        filterExpr: 'this.exceptionType == 3',
                        summaryType: 'sum'
                      }],
                      option: {
                        title: {
                          text: "大圆机温度分析"
                        },
                        legend: {
                          left: 'right'
                        },
                        grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                        },
                      }
                    }]
                }
              ]
            }]
          },
          {
            controlName: "ElRow",
            controlId: "ElRow_r3",
            gutter: 15,
            style: "margin-top:20px;",
            children: [{
              controlName: "ElCol",
              controlId: "ElCol_r3_c1",
              span: 12,
              children: [
                {
                  controlName: "ElCard",
                  controlId: "ElCard_card3",
                  children: [
                    {
                      controlName: "LineChart",
                      controlId: "LineChart_tension",
                      height: function (parentHeight) {
                        return (parentHeight - 200) / 2;
                      },
                      dataset: "dsTension",
                      isGroupData: false,
                      groupBy: "tension",
                      calcFields: [{
                        name: 'exCount',
                        title: '断针',
                        filterExpr: 'this.exceptionType == 1',
                        summaryType: 'sum'
                      }, {
                        name: 'exCount',
                        title: '断线',
                        filterExpr: 'this.exceptionType == 2',
                        summaryType: 'sum'
                      }, {
                        name: 'exCount',
                        title: '缺润滑油',
                        filterExpr: 'this.exceptionType == 3',
                        summaryType: 'sum'
                      }],
                      option: {
                        title: {
                          text: "大圆机线张力分析"
                        },
                        legend: {
                          left: 'right'
                        },
                        grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                        },
                      }
                    }]
                }
              ]
            }, {
              controlName: "ElCol",
              controlId: "ElCol_r2_c2",
              span: 12,
              children: [
                {
                  controlName: "ElCard",
                  controlId: "ElCard_card4",
                  children: [
                    {
                      controlName: "LineChart",
                      controlId: "LineChart_humidity",
                      height: function (parentHeight) {
                        return (parentHeight - 200) / 2;
                      },
                      dataset: "dsHumidity",
                      isGroupData: false,
                      groupBy: "humidity",
                      calcFields: [{
                        name: 'exCount',
                        title: '断针',
                        filterExpr: 'this.exceptionType == 1',
                        summaryType: 'sum'
                      }, {
                        name: 'exCount',
                        title: '断线',
                        filterExpr: 'this.exceptionType == 2',
                        summaryType: 'sum'
                      }, {
                        name: 'exCount',
                        title: '缺润滑油',
                        filterExpr: 'this.exceptionType == 3',
                        summaryType: 'sum'
                      }],
                      option: {
                        title: {
                          text: "大圆机湿度分析"
                        },
                        legend: {
                          left: 'right'
                        },
                        grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                        },
                      }
                    }]
                }
              ]
            }]
          }
          ]
        }
      ]
    }
  ]
}