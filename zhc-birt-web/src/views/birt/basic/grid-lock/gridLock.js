export const gridLockModel = {
  style: "padding:10px;",
  layout: {
    rows: [{
      cols: [{
        span: 5,
        style:"float:left",
        tables: [{
          width: 240,
          style: "border-spacing:0px;border-collapse: collapse;",
          rows: {
            r1: {
              rowHeight: 30,
              tds: {
                A1: {
                  value: "区域|数据　　|分类统计",
                  style: "background-color:rgb(108,202,205);color:rgb(255,255,255);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  viewStyle: {
                    viewStyleId: "slash-header",
                    headerArr: ["区域", "数据　　", "分类统计"],
                    proportion: ["30%", "40%", "30%"],
                    initialPoint: "top",
                    width: 238,
                    height: 58,
                    lineColor: '#FFF',
                    strokeWidth: 1,
                    fontClass: ''
                  },
                  colspan: 2,
                  rowspan: 2
                }
              }
            },
            r2: {
              rowHeight: 30,
              tds: {

              }
            }
          },
          cols: [{
            colWidth: 120
          }, {
            colWidth: 120
          }]
        }]
      }, {
        span: 19,
        tables: [{
          width:1000,
          style: "border-spacing:0px;border-collapse: collapse;",
          rows: {
            r1: {
              rowHeight: 30,
              tds: {
                A1: {
                  value: "用户个数",
                  style: "border-bottom:1px solid #fff;border-right:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 5
                },
                E1: {
                  value: "用户活跃度",
                  style: "border-bottom:1px solid #fff;border-right:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 3
                },
                G: {
                  value: "用户创作",
                  style: "border-bottom:1px solid #fff;border-right:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 4
                }
              }
            },
            r2: {
              rowHeight: 30,
              tds: {
                A2: {
                  value: "注册用户",
                  style: "border-right:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "普通开发者",
                  style: "border-right:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "VIP开发者",
                  style: "border-right:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "合作开发者",
                  style: "border-right:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "小计",
                  style: "border-right:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "在线用户",
                  style: "border-right:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "在线小时",
                  style: "border-right:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "小计",
                  style: "border-right:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "组件",
                  style: "border-right:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "模块",
                  style: "border-right:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "项目",
                  style: "border-right:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "小计",
                  style: "border-right:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            }
          },
          cols: [{
            colWidth: 90
          }, {
            colWidth: 90
          }, {
            colWidth: 90
          }, {
            colWidth: 90
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }]
        }]
      }]
    }, {
      cols: [{
        span: 5,
        tables: [{
          width: 240,
          style: "border-spacing:0px;border-collapse: collapse;",
          rows: {
            r1: {
              rowHeight: 25,
              tds: {
                A1: {
                  value: "福建",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  rowspan: 9
                },
                B1: {
                  value: "福州",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r2: {
              rowHeight: 25,
              tds: {
                B2: {
                  value: "厦门",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r3: {
              rowHeight: 25,
              tds: {
                B3: {
                  value: "泉州",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r4: {
              rowHeight: 25,
              tds: {
                B4: {
                  value: "漳州",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r5: {
              rowHeight: 25,
              tds: {
                B5: {
                  value: "龙岩",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r6: {
              rowHeight: 25,
              tds: {
                B6: {
                  value: "宁德",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r7: {
              rowHeight: 25,
              tds: {
                B7: {
                  value: "南平",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r8: {
              rowHeight: 25,
              tds: {
                B8: {
                  value: "三明",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r9: {
              rowHeight: 25,
              tds: {
                B9: {
                  value: "莆田",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r10: {
              rowHeight: 25,
              tds: {
                A1: {
                  value: "广东",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  rowspan: 6
                },
                B1: {
                  value: "广州",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r11: {
              rowHeight: 25,
              tds: {
                B2: {
                  value: "深圳",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r12: {
              rowHeight: 25,
              tds: {
                B3: {
                  value: "东莞",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r13: {
              rowHeight: 25,
              tds: {
                B4: {
                  value: "佛山",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r14: {
              rowHeight: 25,
              tds: {
                B5: {
                  value: "中山",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r15: {
              rowHeight: 25,
              tds: {
                B6: {
                  value: "惠州",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r16: {
              rowHeight: 25,
              tds: {
                A1: {
                  value: "浙江",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  rowspan: 7
                },
                B1: {
                  value: "杭州",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r17: {
              rowHeight: 25,
              tds: {
                B2: {
                  value: "嘉兴",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r18: {
              rowHeight: 25,
              tds: {
                B3: {
                  value: "宁波",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r19: {
              rowHeight: 25,
              tds: {
                B4: {
                  value: "温州",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r20: {
              rowHeight: 25,
              tds: {
                B5: {
                  value: "台州",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r21: {
              rowHeight: 25,
              tds: {
                B6: {
                  value: "金华",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r22: {
              rowHeight: 25,
              tds: {
                B7: {
                  value: "绍兴",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r23: {
              rowHeight: 25,
              tds: {
                A1: {
                  value: "北京",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  rowspan: 1
                },
                B1: {
                  value: "北京",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
            r24: {
              rowHeight: 25,
              tds: {
                A1: {
                  value: "上海",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  rowspan: 1
                },
                B1: {
                  value: "上海",
                  style: "background-color:rgb(108,202,205);border:1px solid #fff;color:#fff;text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                }
              }
            },
          },
          cols: [{
            colWidth: 120
          }, {
            colWidth: 120
          }]
        }]
      }, {
        span: 19,
        tables: [{
          width:1000,
          style: "border-spacing:0px;border-collapse: collapse;",
          rows: {
            r1:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r2:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r3:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r4:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r5:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r6:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r7:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r8:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r9:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r10:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r11:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r12:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r13:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r14:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r15:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r16:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r17:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r18:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r19:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r20:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r21:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r22:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r23:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            },
            r24:{
              rowHeight: 25,
              tds: {
                A2: {
                  value: "300",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;"
                },
                B2: {
                  value: "218",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C2: {
                  value: "41",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D2: {
                  value: "29",
                  style: "border:1px solid #fff;background-color:rgb(195,237,233);color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                E2: {
                  value: "588",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                F2: {
                  value: "1523",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                G2: {
                  value: "6843",
                  style: "border:1px solid #fff;background-color:#DAF2EF;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                H2: {
                  value: "4.49",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                I2: {
                  value: "30",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                J2: {
                  value: "50",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                K2: {
                  value: "10",
                  style: "border:1px solid #fff;background-color:#EAF9F7;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                L2: {
                  value: "90",
                  style: "border:1px solid #fff;color:rgb(28,123,140);text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
              }
            }
          },
          cols: [{
            colWidth: 90
          }, {
            colWidth: 90
          }, {
            colWidth: 90
          }, {
            colWidth: 90
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }, {
            colWidth: 80
          }]
        }]
      }]
    }]
  }
}
