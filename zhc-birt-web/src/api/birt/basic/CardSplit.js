export const cardSplitModel =
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
          controlName: "BirtFormSheet",
          controlId: "BirtFormSheet_1",
          children: [
            {
              controlName: "ElRow",
              controlId: "ElRow_01",
              children: [
                {
                  controlName: "BirtGridSheet",
                  controlId: "BirtFormSheet_01",
                  style: "border-spacing:0px;border-collapse: collapse;",
                  rows: {
                    r1: {
                      rowHeight: 30,
                      tds: {
                        A1: {
                          value: "卡片分栏条码打印",
                          style: "text-align:left;vertical-align:middle;font-size:24px;font-weight:bold;"
                        }
                      }
                    },
                    r2: {
                      rowHeight: 5,
                      tds: {
                        A2: {
                          value: "",
                          style: "border-bottom: 3px solid rgb(108,202,205)"
                        }
                      }
                    }
                  },
                  cols: [{
                    colWidth: 700
                  }]
                }
              ]
            },
            {
              controlName: "ElRow",
              controlId: "ElRow_02",
              children: [
                {
                  controlName: "ElCol",
                  controlId: "ElCol_21",
                  span: 8,
                  children: [
                    {
                      controlName: "BirtGridSheet",
                      controlId: "BirtFormSheet_02",
                      style: "border-spacing:0px;border-collapse: collapse;",
                      rows: {
                        r3: {
                          rowHeight: 10,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-bottom:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r4: {
                          rowHeight: 35,
                          tds: {
                            A4: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B4: {
                              value: "男士针织内衣",
                              style: "",
                              colspan: 2,
                            },
                            D4: {
                              value: "规格",
                              style: "text-align:right"
                            },
                            E4: {
                              value: "XL",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r5: {
                          rowHeight: 30,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: ""
                            },
                            C5: {
                              value: ""
                            },
                            D5: {
                              value: "颜色",
                              style: "text-align:right",
                              colspan: 1
                            },
                            E4: {
                              value: "白",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r6: {
                          rowHeight: 50,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "",
                              style: "",
                              colspan: 1
                            },
                            D5: {
                              value: "XH-001-002-003",
                              style: "text-align:center",
                              colspan: 2,
                              viewStyle: {
                                id: "barcodeD5",
                                viewStyleId: "bar-code",
                                height: 40
                              }
                            },
                            E4: {
                              value: ""
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r7: {
                          rowHeight: 10,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;border-right:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r8: {
                          rowHeight: 60,
                          tds: {
                            A7: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "HJ-001-002-1001",
                              style: "text-align:center",
                              colspan: 4,
                              viewStyle: {
                                id: "barcodeB5",
                                viewStyleId: "bar-code",
                                width: 1.2,
                                height: 60
                              }
                            },
                            F7: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r9: {
                          rowHeight: 5,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-top:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r10: {
                          rowHeight: 10,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-bottom:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r11: {
                          rowHeight: 35,
                          tds: {
                            A4: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B4: {
                              value: "男士针织内衣",
                              style: "",
                              colspan: 2,
                            },
                            D4: {
                              value: "规格",
                              style: "text-align:right"
                            },
                            E4: {
                              value: "XL",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r12: {
                          rowHeight: 30,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: ""
                            },
                            C5: {
                              value: ""
                            },
                            D5: {
                              value: "颜色",
                              style: "text-align:right",
                              colspan: 1
                            },
                            E4: {
                              value: "灰",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r13: {
                          rowHeight: 50,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "",
                              style: "",
                              colspan: 1
                            },
                            D5: {
                              value: "XH-001-002-004",
                              style: "text-align:center",
                              colspan: 2,
                              viewStyle: {
                                id: "barcoder12D5",
                                viewStyleId: "bar-code",
                                height: 40
                              }
                            },
                            E4: {
                              value: ""
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r14: {
                          rowHeight: 10,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;border-right:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r15: {
                          rowHeight: 60,
                          tds: {
                            A7: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "HJ-001-002-1002",
                              style: "text-align:center",
                              colspan: 4,
                              viewStyle: {
                                id: "barcoder14B5",
                                viewStyleId: "bar-code",
                                width: 1.2,
                                height: 60
                              }
                            },
                            F7: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r16: {
                          rowHeight: 5,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-top:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r17: {
                          rowHeight: 10,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-bottom:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r18: {
                          rowHeight: 35,
                          tds: {
                            A4: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B4: {
                              value: "男士针织内衣",
                              style: "",
                              colspan: 2,
                            },
                            D4: {
                              value: "规格",
                              style: "text-align:right"
                            },
                            E4: {
                              value: "XXL",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r19: {
                          rowHeight: 30,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: ""
                            },
                            C5: {
                              value: ""
                            },
                            D5: {
                              value: "颜色",
                              style: "text-align:right",
                              colspan: 1
                            },
                            E4: {
                              value: "黄",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r20: {
                          rowHeight: 50,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "",
                              style: "",
                              colspan: 1
                            },
                            D5: {
                              value: "XH-001-002-005",
                              style: "text-align:center",
                              colspan: 2,
                              viewStyle: {
                                id: "barcoder20D5",
                                viewStyleId: "bar-code",
                                height: 40
                              }
                            },
                            E4: {
                              value: ""
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r21: {
                          rowHeight: 10,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;border-right:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r22: {
                          rowHeight: 60,
                          tds: {
                            A7: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "HJ-001-002-1003",
                              style: "text-align:center",
                              colspan: 4,
                              viewStyle: {
                                id: "barcoder22B5",
                                viewStyleId: "bar-code",
                                width: 1.2,
                                height: 60
                              }
                            },
                            F7: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r23: {
                          rowHeight: 5,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-top:1px solid;",
                              colspan: 6
                            }
                          }
                        }
                      },
                      cols: [{
                        colWidth: 10
                      }, {
                        colWidth: 50
                      }, {
                        colWidth: 80
                      }, {
                        colWidth: 80
                      }, {
                        colWidth: 50
                      }, {
                        colWidth: 10
                      }]
                    }
                  ]
                },
                {
                  controlName: "ElCol",
                  controlId: "ElCol_21",
                  span: 16,
                  children: [
                    {
                      controlName: "BirtGridSheet",
                      controlId: "BirtFormSheet_03",
                      style: "border-spacing:0px;border-collapse: collapse;",
                      rows: {
                        r3: {
                          rowHeight: 10,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-bottom:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r4: {
                          rowHeight: 35,
                          tds: {
                            A4: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B4: {
                              value: "男士polo衫",
                              style: "",
                              colspan: 2,
                            },
                            D4: {
                              value: "规格",
                              style: "text-align:right"
                            },
                            E4: {
                              value: "XL",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r5: {
                          rowHeight: 30,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: ""
                            },
                            C5: {
                              value: ""
                            },
                            D5: {
                              value: "颜色",
                              style: "text-align:right",
                              colspan: 1
                            },
                            E4: {
                              value: "白",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r6: {
                          rowHeight: 50,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "",
                              style: "",
                              colspan: 1
                            },
                            D5: {
                              value: "XH-002-001-001",
                              style: "text-align:center",
                              colspan: 2,
                              viewStyle: {
                                id: "XH-002-001-001",
                                viewStyleId: "bar-code",
                                height: 40
                              }
                            },
                            E4: {
                              value: ""
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r7: {
                          rowHeight: 10,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;border-right:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r8: {
                          rowHeight: 60,
                          tds: {
                            A7: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "HJ-002-002-1001",
                              style: "text-align:center",
                              colspan: 4,
                              viewStyle: {
                                id: "HJ-002-002-1001",
                                viewStyleId: "bar-code",
                                width: 1.2,
                                height: 60
                              }
                            },
                            F7: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r9: {
                          rowHeight: 5,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-top:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r10: {
                          rowHeight: 10,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-bottom:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r11: {
                          rowHeight: 35,
                          tds: {
                            A4: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B4: {
                              value: "男士polo衫",
                              style: "",
                              colspan: 2,
                            },
                            D4: {
                              value: "规格",
                              style: "text-align:right"
                            },
                            E4: {
                              value: "XL",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r12: {
                          rowHeight: 30,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: ""
                            },
                            C5: {
                              value: ""
                            },
                            D5: {
                              value: "颜色",
                              style: "text-align:right",
                              colspan: 1
                            },
                            E4: {
                              value: "灰",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r13: {
                          rowHeight: 50,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "",
                              style: "",
                              colspan: 1
                            },
                            D5: {
                              value: "XH-002-002-002",
                              style: "text-align:center",
                              colspan: 2,
                              viewStyle: {
                                id: "XH-002-002-002",
                                viewStyleId: "bar-code",
                                height: 40
                              }
                            },
                            E4: {
                              value: ""
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r14: {
                          rowHeight: 10,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;border-right:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r15: {
                          rowHeight: 60,
                          tds: {
                            A7: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "HJ-002-002-1002",
                              style: "text-align:center",
                              colspan: 4,
                              viewStyle: {
                                id: "HJ-002-002-1002",
                                viewStyleId: "bar-code",
                                width: 1.2,
                                height: 60
                              }
                            },
                            F7: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r16: {
                          rowHeight: 5,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-top:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r17: {
                          rowHeight: 10,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-bottom:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r18: {
                          rowHeight: 35,
                          tds: {
                            A4: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B4: {
                              value: "男士polo衫",
                              style: "",
                              colspan: 2,
                            },
                            D4: {
                              value: "规格",
                              style: "text-align:right"
                            },
                            E4: {
                              value: "XXL",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r19: {
                          rowHeight: 30,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: ""
                            },
                            C5: {
                              value: ""
                            },
                            D5: {
                              value: "颜色",
                              style: "text-align:right",
                              colspan: 1
                            },
                            E4: {
                              value: "黄",
                              style: "text-align:center",
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r20: {
                          rowHeight: 50,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "",
                              style: "",
                              colspan: 1
                            },
                            D5: {
                              value: "XH-002-002-003",
                              style: "text-align:center",
                              colspan: 2,
                              viewStyle: {
                                id: "XH-002-002-003",
                                viewStyleId: "bar-code",
                                height: 40
                              }
                            },
                            E4: {
                              value: ""
                            },
                            F4: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r21: {
                          rowHeight: 10,
                          tds: {
                            A5: {
                              value: "",
                              style: "border-left:1px solid;border-right:1px solid;",
                              colspan: 6
                            }
                          }
                        },
                        r22: {
                          rowHeight: 60,
                          tds: {
                            A7: {
                              value: "",
                              style: "border-left:1px solid;"
                            },
                            B5: {
                              value: "HJ-002-002-1003",
                              style: "text-align:center",
                              colspan: 4,
                              viewStyle: {
                                id: "HJ-002-002-1003",
                                viewStyleId: "bar-code",
                                width: 1.2,
                                height: 60
                              }
                            },
                            F7: {
                              value: "",
                              style: "border-right:1px solid;"
                            }
                          }
                        },
                        r23: {
                          rowHeight: 5,
                          tds: {
                            A3: {
                              value: "",
                              style: "border-top:1px solid;",
                              colspan: 6
                            }
                          }
                        }
                      },
                      cols: [{
                        colWidth: 10
                      }, {
                        colWidth: 50
                      }, {
                        colWidth: 80
                      }, {
                        colWidth: 80
                      }, {
                        colWidth: 50
                      }, {
                        colWidth: 10
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
