export const electronicSignatureModel =
{
  controlName: "BirtWorkBook",
  controlId: "BirtWorkBook_0",
  children: [
    {
      controlName: "BirtSheet",
      controlId: "BirtSheet_0",
      name: 'sheet0',//配置页,children为其算法分页，如插入分页符或A4纸数据过长换页
      pageIndex: 0,
      style: "padding:10px;",
      children: [
        {
          controlName: "BirtGridSheet",
          controlId: "BirtFormSheet_01",
          width: 705,
          style: "border-spacing:0px;border-collapse: collapse;margin-left:150px;",
          rows: {
            r1: {
              rowHeight: 5,
              tds: {
                A1: {
                  value: "",
                  style: "",
                  colspan: 8
                }
              }
            },
            r2: {
              rowHeight: 90,
              tds: {
                A2: {
                  value: "",
                  style: ""
                },
                B2: {
                  value: "工作证明",
                  style: "text-align:center;vertical-align:middle;font-size:32px;font-weight:bold",
                  colspan: 7
                }
              }
            },
            r3: {
              rowHeight: 25,
              tds: {
                A3: {
                  value: "",
                  style: ""
                },
                B3: {
                  value: "兹证明",
                  style: "text-align:left;vertical-align:middle;font-size:18px;"
                },
                C3: {
                  value: "张三",
                  style: "text-align:center;border-bottom:1px solid;font-size:18px;font-weight:bold;"
                },
                D3: {
                  value: "是我公司员工，在",
                  style: "font-size:18px;",
                  colspan: 2
                },
                F3: {
                  value: "计算机部",
                  style: "text-align:center;border-bottom:1px solid;font-size:18px;font-weight:bold;",
                  colspan: 2
                },
                H3: {
                  value: "部门"
                }
              }
            },
            r4: {
              rowHeight: 35,
              tds: {
                A4: {
                  value: "任",
                  style: "vertical-align:bottom;"
                },
                B4: {
                  value: "研发工程师",
                  style: "text-align:center;border-bottom:1px solid;font-size:18px;font-weight:bold;vertical-align:bottom;",
                  colspan: 2
                },
                D4: {
                  value: "职务。",
                  style: "font-size:18px;vertical-align:bottom;",
                  colspan: 5
                }
              }
            },
            r5: {
              rowHeight: 20,
              tds: {
                A5: {
                  value: "",
                  style: "",
                  colspan: 8
                }
              }
            },
            r6: {
              rowHeight: 35,
              tds: {
                A6: {
                  value: "",
                  style: ""
                },
                B6: {
                  value: "特此证明。",
                  style: "font-size:18px;",
                  colspan: 7
                }
              }
            },
            r7: {
              rowHeight: 20,
              tds: {
                A7: {
                  value: "",
                  style: "",
                  colspan: 8
                }
              }
            },
            r8: {
              rowHeight: 25,
              tds: {
                A8: {
                  value: "",
                  style: ""
                },
                B8: {
                  value: "本证明仅用于我公司员工的工作，不作为我公司对",
                  style: "font-size:18px;",
                  colspan: 7
                }
              }
            },
            r9: {
              rowHeight: 35,
              tds: {
                A9: {
                  value: "该员工任何形式的担保文件。",
                  style: "",
                  colspan: 8
                }
              }
            },
            r10: {
              rowHeight: 35,
              tds: {
                A10: {
                  value: "",
                  style: "",
                  colspan: 8
                }
              }
            },
            r11: {
              rowHeight: 40,
              tds: {
                A11: {
                  value: "盖章：",
                  style: "font-size:18px;",
                  colspan: 2
                },
                C11: {
                  value: "1",
                  style: "",
                  colspan: 3,
                  viewStyle: {
                    viewStyleId: "gong-zhang",
                    cnName: "中海创科技责任有限公司",
                    style: "position:fixed;top:420px;"
                  },
                },
                F11: {
                  value: "",
                  style: "",
                  colspan: 3,
                  viewStyle: {
                    viewStyleId: "gong-zhang",
                    type: "tuoyuan",
                    cnName: "中海创科技责任有限公司",
                    zhangName: "公司章",
                    style: "position:fixed;top:420px;left:620px;"
                  },
                }
              }
            },
            r12: {
              rowHeight: 30,
              tds: {
                A12: {
                  value: "",
                  style: "",
                  colspan: 8
                }
              }
            },
            r13: {
              rowHeight: 35,
              tds: {
                A13: {
                  value: "日期:",
                  style: "text-align:right;font-size:18px;",
                  colspan: 5
                },
                B13: {
                  value: "2018年3月12日",
                  style: "font-size:18px;padding-left:10px;",
                  colspan: 3
                }
              }
            }
          },
          cols: [{
            colWidth: 40
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }, {
            colWidth: 100
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }]
        }
      ]
    },
  ]
}


