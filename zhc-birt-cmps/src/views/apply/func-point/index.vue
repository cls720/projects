<template>
  <div style="padding:20px;">
    <birt-work-book :conf="birtModel"></birt-work-book>
  </div>
</template>

<script>
// https://www.cnblogs.com/homehtml/p/11977915.html

import { g1 } from "./point-data";

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
                        style:
                          "border:1px solid blue;position: fixed;left:250px;",
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
                        style: "border:1px solid red;",
                        children: [
                          {
                            controlName: "ElRow",
                            controlId: "ElRow_h",
                            style:
                              "position: fixed;left:480px;margin-right:40px;",
                            children: [
                              {
                                controlName: "HcDataList",
                                controlId: "HcDataList_zxyh0",
                                width: "100%",
                                style:
                                  "border-spacing:0px;border-collapse: collapse;table-layout:fixed;word-break:break-all;",
                                rows: {
                                  r1: {
                                    rowHeight: 60,
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
                          },
                          {
                            controlName: "ElRow",
                            controlId: "ElRow_h",
                            style:
                              "position: relative;left:225px;top:60px;",
                            children: [
                              {
                                controlName: "HcDataList",
                                controlId: "HcDataList_zxyh",
                                datas: g1,
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
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      B1: {
                                        value: "张三",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      C1: {
                                        value: "08:30:22",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      D1: {
                                        value: "1.5",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      }
                                    }
                                  },
                                  r3: {
                                    rowHeight: 20,
                                    tds: {
                                      A1: {
                                        value: "${recd.userCity}",
                                        extendArrow: "down",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      B1: {
                                        value: "${recd.userXm}",
                                        extendArrow: "down",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      C1: {
                                        value: "${recd.loginTime}",
                                        extendArrow: "down",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      D1: {
                                        value: "${recd.onLineHour}",
                                        extendArrow: "down",
                                        style:
                                          "text-align:center;font-size:12px;"
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
                              },
                              {
                                controlName: "HcDataList",
                                controlId: "HcDataList_zxyh2",
                                datas: g1,
                                width: "100%",
                                style:
                                  "border-spacing:0px;border-collapse: collapse;table-layout:fixed;word-break:break-all;",
                                rows: {
                                  r1: {
                                    rowHeight: 25,
                                    tds: {
                                      A1: {
                                        value: "地区2",
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
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      B1: {
                                        value: "张三",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      C1: {
                                        value: "08:30:22",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      D1: {
                                        value: "1.5",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      }
                                    }
                                  },
                                  r3: {
                                    rowHeight: 20,
                                    tds: {
                                      A1: {
                                        value: "${recd.userCity}",
                                        extendArrow: "down",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      B1: {
                                        value: "${recd.userXm}",
                                        extendArrow: "down",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      C1: {
                                        value: "${recd.loginTime}",
                                        extendArrow: "down",
                                        style:
                                          "text-align:center;font-size:12px;"
                                      },
                                      D1: {
                                        value: "${recd.onLineHour}",
                                        extendArrow: "down",
                                        style:
                                          "text-align:center;font-size:12px;"
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
        ]
      }
    };
  },
  methods: {}
};
</script>