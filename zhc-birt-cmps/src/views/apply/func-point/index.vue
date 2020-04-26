<template>
  <div style="padding:20px;">
    <birt-work-book :conf="birtModel"></birt-work-book>
  </div>
</template>

<script>
// https://www.cnblogs.com/homehtml/p/11977915.html

export default {
  data() {
    return {
      birtModel: {
        controlName: "BirtWorkBook",
        controlId: "BirtWorkBook_power",
        showToolBar: false,
        totalPage: 1,
        renderType: "pages",
        children: [
          {
            controlName: "BirtSheet",
            controlId: "BirtSheet_0",
            name: "sheet0", //配置页,children为其算法分页，如插入分页符或A4纸数据过长换页
            pageIndex: 0,
            dataSets: [
              {
                controlName: "JsWebSocketDataSet",
                controlId: "dsFuncPoints",
                datas: []
              }
            ],
            children: [
              {
                controlName: "BirtFormSheet",
                controlId: "BirtFormSheet_02",
                children: [
                  {
                    controlName: "ElRow",
                    controlId: "ElRow_l",
                    children: [
                      {
                        controlName: "ElCol",
                        controlId: "ElCol_l4",
                        span: 4,
                        children: [
                          {
                            controlName: "HcMenu",
                            controlId: "HcMenu_basic04",
                            events: {
                              open: function(key, keyPath) {
                                console.log(key, keyPath);
                              },
                              close: function(key, keyPath) {
                                console.log(key, keyPath);
                              }
                            },
                            labelField: "title",
                            datas: [
                              {
                                id: "1",
                                pid: "-1",
                                title: "主题分类一",
                                index: "1",
                                icon: "el-icon-location"
                              },
                              {
                                id: "2",
                                pid: "-1",
                                title: "主题分类二",
                                index: "2",
                                icon: "el-icon-menu"
                              },
                              {
                                id: "3",
                                pid: "-1",
                                title: "主题分类三",
                                index: "3",
                                icon: "el-icon-document"
                              },
                              {
                                id: "4",
                                pid: "-1",
                                title: "主题分类四",
                                index: "4",
                                icon: "el-icon-setting"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        controlName: "ElCol",
                        controlId: "ElCol_r20",
                        span: 20,
                        children: [
                          {
                            controlName: "HcDataList",
                            controlId: "HcDataList_zxyh",
                            datas: [
                              {
                                userCity: "福州",
                                loginTime: "08:00:16",
                                userProvince: "福建",
                                onLineHour: "1.87",
                                onLineTag: 1,
                                userXm: "蒋天佑"
                              },
                              {
                                userCity: "上海",
                                loginTime: "08:01:10",
                                userProvince: "上海",
                                onLineHour: "0.76",
                                onLineTag: 1,
                                userXm: "郑蓉"
                              },
                              {
                                userCity: "广州",
                                loginTime: "08:02:24",
                                userProvince: "广东",
                                onLineHour: "4.37",
                                onLineTag: 1,
                                userXm: "王佳"
                              },
                              {
                                userCity: "上海",
                                loginTime: "08:03:46",
                                userProvince: "上海",
                                onLineHour: "4.78",
                                onLineTag: 1,
                                userXm: "江呈颖"
                              },
                              {
                                userCity: "福州",
                                loginTime: "08:06:36",
                                userProvince: "福建",
                                onLineHour: "4.73",
                                onLineTag: 1,
                                userXm: "王亭芳"
                              },
                              {
                                userCity: "广州",
                                loginTime: "08:07:29",
                                userProvince: "广东",
                                onLineHour: "2.58",
                                onLineTag: 1,
                                userXm: "吴燕琼"
                              },
                              {
                                userCity: "福州",
                                loginTime: "08:07:34",
                                userProvince: "福建",
                                onLineHour: "2.08",
                                onLineTag: 1,
                                userXm: "鲍莹莹"
                              },
                              {
                                userCity: "杭州",
                                loginTime: "08:15:16",
                                userProvince: "浙江",
                                onLineHour: "1.48",
                                onLineTag: 1,
                                userXm: "张书万"
                              },
                              {
                                userCity: "北京",
                                loginTime: "08:16:10",
                                userProvince: "北京",
                                onLineHour: "0.69",
                                onLineTag: 1,
                                userXm: "黄彬"
                              },
                              {
                                userCity: "广州",
                                loginTime: "08:17:42",
                                userProvince: "广东",
                                onLineHour: "1.09",
                                onLineTag: 1,
                                userXm: "薛骁艻"
                              },
                              {
                                userCity: "广州",
                                loginTime: "08:18:27",
                                userProvince: "广东",
                                onLineHour: "4.64",
                                onLineTag: 1,
                                userXm: "高建海"
                              },
                              {
                                userCity: "福州",
                                loginTime: "08:19:24",
                                userProvince: "福建",
                                onLineHour: "4.85",
                                onLineTag: 1,
                                userXm: "王紫云"
                              },
                              {
                                userCity: "成都",
                                loginTime: "08:22:57",
                                userProvince: "四川",
                                onLineHour: "0.65",
                                onLineTag: 1,
                                userXm: "邱加财"
                              },
                              {
                                userCity: "广州",
                                loginTime: "08:23:56",
                                userProvince: "广东",
                                onLineHour: "2.45",
                                onLineTag: 1,
                                userXm: "黄昆火"
                              },
                              {
                                userCity: "厦门",
                                loginTime: "08:24:33",
                                userProvince: "福建",
                                onLineHour: "1.40",
                                onLineTag: 1,
                                userXm: "陈景威"
                              }
                            ],
                            width: "100%",
                            style:
                              "border-spacing:0px;border-collapse: collapse;table-layout:fixed;word-break:break-all;",
                            rows: {
                              r1: {
                                rowHeight: 25,
                                tds: {
                                  A1: {
                                    value: "地区",
                                    style:
                                      "text-align:center;color:#3cc;background-color:#0C1D3B;"
                                  },
                                  B1: {
                                    value: "姓名",
                                    style:
                                      "text-align:center;color:#3cc;background-color:#0C1D3B;"
                                  },
                                  C1: {
                                    value: "登录时间",
                                    style:
                                      "text-align:center;color:#3cc;background-color:#0C1D3B;"
                                  },
                                  D1: {
                                    value: "在线小时",
                                    style:
                                      "text-align:center;color:#3cc;background-color:#0C1D3B;"
                                  }
                                }
                              },
                              r2: {
                                rowHeight: 20,
                                tds: {
                                  A1: {
                                    value: "福州",
                                    style: "text-align:center;font-size:12px;"
                                  },
                                  B1: {
                                    value: "张三",
                                    style: "text-align:center;font-size:12px;"
                                  },
                                  C1: {
                                    value: "08:30:22",
                                    style: "text-align:center;font-size:12px;"
                                  },
                                  D1: {
                                    value: "1.5",
                                    style: "text-align:center;font-size:12px;"
                                  }
                                }
                              },
                              r3: {
                                rowHeight: 20,
                                tds: {
                                  A1: {
                                    value: "${recd.userCity}",
                                    extendArrow: "down",
                                    style: "text-align:center;font-size:12px;"
                                  },
                                  B1: {
                                    value: "${recd.userXm}",
                                    extendArrow: "down",
                                    style: "text-align:center;font-size:12px;"
                                  },
                                  C1: {
                                    value: "${recd.loginTime}",
                                    extendArrow: "down",
                                    style: "text-align:center;font-size:12px;"
                                  },
                                  D1: {
                                    value: "${recd.onLineHour}",
                                    extendArrow: "down",
                                    style: "text-align:center;font-size:12px;"
                                  }
                                }
                              }
                            },
                            cols: [
                              {
                                colWidth: "100"
                              },
                              {
                                colWidth: "100"
                              },
                              {
                                colWidth: "120"
                              },
                              {
                                colWidth: "120"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  methods: {}
};
</script>