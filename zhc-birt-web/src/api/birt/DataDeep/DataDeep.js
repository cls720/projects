export const dataDeepModel = {
  canEdit: true,
  sheets: [{
    pageIndex: 0,
    style: "padding:10px;",
    controlId: "BirtGridSheet_gl",
    layouts: [{
      tables: [{
        width: 705,
        style: "border-spacing:0px;border-collapse: collapse;",
        rows: {
          r1: {
            rowHeight: 40,
            tds: {
              A1: {
                value: "合同订单列表",
                style: "text-align:left;vertical-align:middle;font-size:24px;font-weight:bold;",
                colspan: 8
              }
            }
          },
          r2: {
            rowHeight: 5,
            tds: {
              A2: {
                value: "",
                style: "border-bottom: 3px solid rgb(108,202,205)"
              },
              B2: {
                value: "",
                style: "border-bottom: 3px solid rgb(108,202,205)"
              },
              C2: {
                value: "",
                style: "border-bottom: 3px solid rgb(108,202,205)"
              },
              D2: {
                value: "",
                style: "border-bottom: 3px solid rgb(108,202,205)"
              },
              E2: {
                value: "",
                style: "border-bottom: 3px solid rgb(108,202,205)"
              },
              F2: {
                value: "",
                style: "border-bottom: 3px solid rgb(108,202,205)"
              },
              G2: {
                value: "",
                style: "border-bottom: 3px solid rgb(108,202,205)"
              },
              H2: {
                value: "",
                style: "border-bottom: 3px solid rgb(108,202,205)"
              }
            }
          },
          r3: {
            rowHeight: 20,
            tds: {
              A3: {
                value: "",
                style: ""
              },
              B3: {
                value: "",
                style: ""
              },
              C3: {
                value: "",
                style: ""
              },
              D3: {
                value: "",
                style: ""
              },
              E3: {
                value: "",
                style: ""
              },
              F3: {
                value: "",
                style: ""
              },
              G3: {
                value: "",
                style: ""
              },
              H3: {
                value: "",
                style: ""
              }
            }
          },
          r4: {
            rowHeight: 45,
            tds: {
              A4: {
                value: "订单编号",
                style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;font-size:16px;border-right-color:rgb(255,255,255);"
              },
              B4: {
                value: "订单日期",
                style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;font-size:16px;border-right-color:rgb(255,255,255);"
              },
              C4: {
                value: "客户名称",
                style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;font-size:16px;border-right-color:rgb(255,255,255);"
              },
              D4: {
                value: "责任人",
                style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;font-size:16px;border-right-color:rgb(255,255,255);"
              },
              E4: {
                value: "是否付款",
                style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;font-size:16px;border-right-color:rgb(255,255,255);"
              },
              F4: {
                value: "交付风险",
                style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;font-size:16px;border-right-color:rgb(255,255,255);"
              },
              G4: {
                value: "订单金额",
                style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;font-size:16px;border-right-color:rgb(255,255,255);"
              },
              H4: {
                value: "导出明细",
                style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;font-size:16px;border-right-color:rgb(255,255,255);"
              }
            }
          },
          r5: {
            rowHeight: 40,
            tds: {
              A5: {
                value: "HTDD-160108-1001",
                style: "text-align:center;color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;text-decoration:underline;",
                hrefs: [{
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_1234",
                  title: "订单明细",
                  birtUrl: "/birt/advince/data-deep/order-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160108-1001"
                  }
                }, {
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_5678",
                  title: "BOM清单",
                  birtUrl: "/birt/advince/data-deep/bom-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160108-1001"
                  }
                }]
              },
              B5: {
                value: "2016-01-08",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
              },
              C5: {
                value: "福建奥库运动用品",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
              },
              D5: {
                value: "张三",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              E5: {
                value: "已付",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              F5: {
                value: "正常",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              G5: {
                value: "36000",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              H5: {
                value: "导出",
                style: "text-align:center;color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;",
                hrefs: [{
                  controlName: "LinkJs",
                  controlId: "LinkJs_1234",
                  title: "导出",
                  params: {
                    orderId: "HTDD-160108-1001"
                  },
                  expression: function () {
                    alert("开发中...")
                  }
                }]
              }
            }
          },
          r6: {
            rowHeight: 40,
            tds: {
              A5: {
                value: "HTDD-160110-1002",
                style: "text-align:center;background-color:rgb(243,243,243);color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;text-decoration:underline;",                
                hrefs: [{
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_1235",
                  title: "订单明细",
                  birtUrl: "/birt/advince/data-deep/order-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160110-1002"
                  }
                }, {
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_5679",
                  title: "BOM清单",
                  birtUrl: "/birt/advince/data-deep/bom-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160110-1002"
                  }
                }]
              },
              B5: {
                value: "2016-01-10",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
              },
              C5: {
                value: "福州威尼时装",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
              },
              D5: {
                value: "李四",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              E5: {
                value: "已付",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              F5: {
                value: "低危",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              G5: {
                value: "45000",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              H5: {
                value: "导出",
                style: "text-align:center;background-color:rgb(243,243,243);color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;",
                hrefs: [{
                  controlName: "LinkJs",
                  controlId: "LinkJs_1234",
                  title: "导出",
                  params: {
                    orderId: "HTDD-160110-1002"
                  },
                  expression: function () {
                    alert("开发中...")
                  }
                }]
              }
            }
          },
          r7: {
            rowHeight: 40,
            tds: {
              A5: {
                value: "HTDD-160110-1003",
                style: "text-align:center;color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;text-decoration:underline;",
                hrefs: [{
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_1234",
                  title: "订单明细",
                  birtUrl: "/birt/advince/data-deep/order-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160110-1003"
                  }
                }, {
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_5678",
                  title: "BOM清单",
                  birtUrl: "/birt/advince/data-deep/bom-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160110-1003"
                  }
                }]
              },
              B5: {
                value: "2016-01-10",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
              },
              C5: {
                value: "福州汉邦尚品",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
              },
              D5: {
                value: "王五",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              E5: {
                value: "未付",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              F5: {
                value: "正常",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              G5: {
                value: "54000",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              H5: {
                value: "导出",
                style: "text-align:center;color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;",
                hrefs: [{
                  controlName: "LinkJs",
                  controlId: "LinkJs_1234",
                  title: "导出",
                  params: {
                    orderId: "HTDD-160110-1003"
                  },
                  expression: function () {
                    alert("开发中...")
                  }
                }]
              }
            }
          },
          r8: {
            rowHeight: 40,
            tds: {
              A5: {
                value: "HTDD-160115-1004",
                style: "text-align:center;background-color:rgb(243,243,243);color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;text-decoration:underline;",
                hrefs: [{
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_1236",
                  title: "订单明细",
                  birtUrl: "/birt/advince/data-deep/order-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160115-1004"
                  }
                }, {
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_5676",
                  title: "BOM清单",
                  birtUrl: "/birt/advince/data-deep/bom-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160115-1004"
                  }
                }]
              },
              B5: {
                value: "2016-01-15",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
              },
              C5: {
                value: "长乐易尚服饰",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
              },
              D5: {
                value: "赵六",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              E5: {
                value: "已付",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              F5: {
                value: "正常",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              G5: {
                value: "24000",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              H5: {
                value: "导出",
                style: "text-align:center;background-color:rgb(243,243,243);color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;",
                hrefs: [{
                  controlName: "LinkJs",
                  controlId: "LinkJs_1234",
                  title: "导出",
                  params: {
                    orderId: "HTDD-160115-1004"
                  },
                  expression: function () {
                    alert("开发中...")
                  }
                }]
              }
            }
          },
          r9: {
            rowHeight: 40,
            tds: {
              A5: {
                value: "HTDD-160116-1005",
                style: "text-align:center;color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;text-decoration:underline;",
                hrefs: [{
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_1234",
                  title: "订单明细",
                  birtUrl: "/birt/advince/data-deep/order-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160116-1005"
                  }
                }, {
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_5678",
                  title: "BOM清单",
                  birtUrl: "/birt/advince/data-deep/bom-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160116-1005"
                  }
                }]
              },
              B5: {
                value: "2016-01-16",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
              },
              C5: {
                value: "福州密斯特西",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
              },
              D5: {
                value: "张三",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              E5: {
                value: "已付",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              F5: {
                value: "正常",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              G5: {
                value: "32000",
                style: "text-align:center;color:rgb(68,68,68);font-family:Microsoft YaHei UI",
                colspan: 1
              },
              H5: {
                value: "导出",
                style: "text-align:center;color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;",
                hrefs: [{
                  controlName: "LinkJs",
                  controlId: "LinkJs_1234",
                  title: "导出",
                  params: {
                    orderId: "HTDD-160116-1005"
                  },
                  expression: function () {
                    alert("开发中...")
                  }
                }]
              }
            }
          },
          r10: {
            rowHeight: 40,
            tds: {
              A5: {
                value: "HTDD-160120-1006",                
                style: "text-align:center;background-color:rgb(243,243,243);color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;text-decoration:underline;",
                hrefs: [{
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_1236",
                  title: "订单明细",
                  birtUrl: "/birt/advince/data-deep/order-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160120-1006"
                  }
                }, {
                  controlName: "LinkBirt",
                  controlId: "LinkBirt_5676",
                  title: "BOM清单",
                  birtUrl: "/birt/advince/data-deep/bom-detail",
                  target: "_self",
                  request: "get",
                  params: {
                    orderId: "HTDD-160120-1006"
                  }
                }]
              },
              B5: {
                value: "2016-01-20",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
              },
              C5: {
                value: "歌莱雅(香港)国际服饰",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
              },
              D5: {
                value: "赵六",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              E5: {
                value: "已付",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              F5: {
                value: "正常",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              G5: {
                value: "68000",
                style: "text-align:center;background-color:rgb(243,243,243);color:rgb(68,68,68);font-family:Microsoft YaHei UI;font-size:16px;",
                colspan: 1
              },
              H5: {
                value: "导出",
                style: "text-align:center;background-color:rgb(243,243,243);color:blue;cursor: pointer;font-family:Microsoft YaHei UI;font-size:16px;",
                hrefs: [{
                  controlName: "LinkJs",
                  controlId: "LinkJs_1234",
                  title: "导出",
                  params: {
                    orderId: "HTDD-160120-1006"
                  },
                  expression: function () {
                    alert("开发中...")
                  }
                }]
              }
            }
          },
          r11: {
            rowHeight: 3,
            tds: {
              A10: {
                value: "",
                style: "border-bottom: 1px solid rgb(108,202,205)"
              },
              B10: {
                value: "",
                style: "border-bottom: 1px solid rgb(108,202,205)"
              },
              C10: {
                value: "",
                style: "border-bottom: 1px solid rgb(108,202,205)"
              },
              D10: {
                value: "",
                style: "border-bottom: 1px solid rgb(108,202,205)"
              },
              E10: {
                value: "",
                style: "border-bottom: 1px solid rgb(108,202,205)"
              },
              F10: {
                value: "",
                style: "border-bottom: 1px solid rgb(108,202,205)"
              },
              G10: {
                value: "",
                style: "border-bottom: 1px solid rgb(108,202,205)"
              },
              H10: {
                value: "",
                style: "border-bottom: 1px solid rgb(108,202,205)"
              }
            }
          },
          r12: {
            rowHeight: 28,
            tds: {
              A11: {
                value: "",
                style: ""
              },
              B11: {
                value: "",
                style: ""
              },
              C11: {
                value: "",
                style: ""
              },
              D11: {
                value: "",
                style: "text-align:center;font-weight:bold",
              },
              E11: {
                value: "",
                style: "text-align:center;font-weight:bold",
              },
              F11: {
                value: "汇总：",
                style: "text-align:center;font-weight:bold",
              },
              G11: {
                value: "257000",
                style: "text-align:center;font-weight:bold",
              },
              H11: {
                value: "",
                style: "text-align:center;font-weight:bold",
              }
            }
          }
        },
        cols: [{
          colWidth: 200
        }, {
          colWidth: 120
        }, {
          colWidth: 160
        }, {
          colWidth: 120
        }, {
          colWidth: 100
        }, {
          colWidth: 120
        }, {
          colWidth: 100
        }, {
          colWidth: 120
        }]
      }]
    }]
  }]
}
