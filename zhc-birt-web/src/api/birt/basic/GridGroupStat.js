export const gridGroupStatModel =
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
          width: 605,
          style: "border-spacing:0px;border-collapse: collapse;",
          rows: {
            r1: {
              rowHeight: 5,
              tds: {
                A2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                B2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                C2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                D2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                E2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                F2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                G2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                H2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                I2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                J2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                K2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                L2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                M2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                N2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                },
                O2: {
                  value: "",
                  style: "border-top: 3px solid rgb(108,202,205)"
                }
              }
            },
            r2: {
              rowHeight: 45,
              tds: {
                A1: {
                  value: "企业员工考勤统计表",
                  style: "text-align:left;vertical-align:middle;font-size:24px;font-weight:bold;",
                  colspan: 15
                }
              }
            },
            r3: {
              rowHeight: 35,
              tds: {
                A4: {
                  value: "企业名称",
                  style: "border-right:1px solid white;text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);",
                  rowspan: 2
                },
                B4: {
                  value: "部门",
                  style: "border-right:1px solid white;text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);",
                  rowspan: 2
                },
                C4: {
                  value: "员工",
                  style: "border-right:1px solid white;text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);",
                  rowspan: 2
                },
                D4: {
                  value: "基础制度",
                  style: "border-right:1px solid white;border-bottom:1px solid white;text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);",
                  colspan: 4
                },
                H4: {
                  value: "报备请假(天)",
                  style: "border-right:1px solid white;text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);",
                  rowspan: 2
                },
                I4: {
                  value: "已录请假(天)",
                  style: "border-right:1px solid white;border-bottom:1px solid white;text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);",
                  colspan: 5,
                },
                N4: {
                  value: "未录请假(天)",
                  style: "border-right:1px solid white;text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);",
                  rowspan: 2
                },
                O4: {
                  value: "加班",
                  style: "border-right:1px solid white;text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);",
                  rowspan: 2
                }
              }
            },
            r4: {
              rowHeight: 35,
              tds: {
                D5: {
                  value: "迟到",
                  style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                },
                E5: {
                  value: "早退",
                  style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                },
                F5: {
                  value: "旷工",
                  style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                },
                G5: {
                  value: "总计",
                  style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                },
                I5: {
                  value: "特假",
                  style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                },
                J5: {
                  value: "补休假",
                  style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                },
                K5: {
                  value: "事假",
                  style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                },
                L5: {
                  value: "病假",
                  style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                },
                M5: {
                  value: "总计",
                  style: "text-align:center;background-color:rgb(108,202,205);color:rgb(255,255,255);border-top-color:rgb(108,202,205);font-family:Microsoft YaHei UI;border-right-color:rgb(255,255,255);"
                }
              }
            },
            r5: {
              rowHeight: 30,
              tds: {
                A5: {
                  value: "太阳科技公司",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                B5: {
                  value: "计算机部",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C5: {
                  value: "00001/张三",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                E5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                F5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                G5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                H5: {
                  value: "4",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                I5: {
                  value: "2",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                J5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                K5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                L5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                M5: {
                  value: "4",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                N5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                O5: {
                  value: "2",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                }
              }
            },
            r6: {
              rowHeight: 30,
              tds: {
                A5: {
                  value: "太阳科技公司",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                B5: {
                  value: "计算机部",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C5: {
                  value: "00002/李四",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                E5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                F5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                G5: {
                  value: "2",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                H5: {
                  value: "2",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                I5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                J5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                K5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                L5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                M5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                N5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  conditionExprs: [{
                    applyItems: [{
                      controlName: "ConditionApplyColor",
                      applyScheme: "applyCell",
                      color: "red"
                    }, {
                      controlName: "ConditionApplyBackgroundColor",
                      applyScheme: "applyRow",
                      backgroundColor: "#F7D8D8"
                    }],
                    expr: function () {
                      return 3 > 0
                    }
                  }],
                  colspan: 1
                },
                O5: {
                  value: "2",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                }
              }
            },
            r7: {
              rowHeight: 30,
              tds: {
                A5: {
                  value: "太阳科技公司",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                B5: {
                  value: "计算机部",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C5: {
                  value: "00003/王五",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                E5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                F5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                G5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                H5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                I5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                J5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                K5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                L5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                M5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                N5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                O5: {
                  value: "5",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                }
              }
            },
            r8: {
              rowHeight: 30,
              tds: {
                A5: {
                  value: "太阳科技公司",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                B5: {
                  value: "计算机部",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C5: {
                  value: "00004/赵六",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                E5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                F5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                G5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                H5: {
                  value: "3",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                I5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                J5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                K5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                L5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                M5: {
                  value: "3",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                N5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                O5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                }
              }
            },
            r9: {
              rowHeight: 30,
              tds: {
                A5: {
                  value: "太阳科技公司",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                B5: {
                  value: "计算机部",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                C5: {
                  value: "00005/朱七",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                },
                D5: {
                  value: "3",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                E5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                F5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                G5: {
                  value: "3",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                H5: {
                  value: "5",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                I5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                J5: {
                  value: "1",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                K5: {
                  value: "3",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                L5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                M5: {
                  value: "5",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                N5: {
                  value: "0",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                O5: {
                  value: "3",
                  style: "text-align:center;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                }
              }
            },
            r10: {
              rowHeight: 3,
              tds: {
                A2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                B2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                C2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                D2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                E2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                F2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                G2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                H2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                I2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                J2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                K2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                L2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                M2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                N2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                },
                O2: {
                  value: "",
                  style: "border-top: 1px solid rgb(108,202,205)"
                }
              }
            },
            r11: {
              rowHeight: 30,
              tds: {
                A5: {
                  value: "汇总：",
                  style: "text-align:right;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 3
                },
                D5: {
                  value: "4",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                E5: {
                  value: "1",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                F5: {
                  value: "0",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                G5: {
                  value: "5",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                H5: {
                  value: "14",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                I5: {
                  value: "5",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                J5: {
                  value: "4",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                K5: {
                  value: "5",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                L5: {
                  value: "0",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                M5: {
                  value: "13",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                N5: {
                  value: "1",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                },
                O5: {
                  value: "12",
                  style: "text-align:center;font-weight:bold;font-size: 9pt;vertical-align: middle;    font-family: SimSun;",
                  colspan: 1
                }
              }
            }
          },
          cols: [{
            colWidth: 120
          }, {
            colWidth: 120
          }, {
            colWidth: 80
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }, {
            colWidth: 70
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }, {
            colWidth: 60
          }, {
            colWidth: 70
          }, {
            colWidth: 60
          }]
        }
      ]
    }
  ]
}

