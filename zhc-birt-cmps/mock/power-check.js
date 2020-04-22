const resCheckByUser = {
    1001: [
        {
            "resId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "name": "测试菜单",
            "parentId": "-1",
            "type": "dir",
            "resUrl": "",
        },
        {
            "resId": "31418B1A-5253-31A2-77F6-B5F18198ABE2",
            "name": "测试功能",
            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "type": "func",
            "resUrl": "/systemplate/csgn/csgn/funcdir/csgn1.func",
            "daValue": "AccessPlan_BZP",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "AccessPlan_CW": {
                    "name": "财务经理",
                    "value": "AccessPlan_CW",
                }
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "jt_guid",
            assignName: "XXX集团",
            assignKind: ".JT"
        },
        {
            "resId": "23DF68DC-EEA7-41E5-0288-02AB9909CB8F",
            "name": "测试流程",
            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "type": "flow",
            "resUrl": "/systemplate/csgn/csgn/flowdir/cslc.flow",
            assignId: "gw_xsy",
            assignName: "销售员",
            assignKind: ".PTM"
        },
    ],
    1001: [
        {
            "opAdd": false,
            "resUrl": "/amreport/designer/tree/design.do",
            "name": "工程树",
            "daValue": "",
            "opDelete": false,
            "type": "do",
            "resId": "projectTree",
            "parentId": "-2",
            "opEdit": false,
            "opExport": false,
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": 0,
            "resUrl": "",
            "name": "系统管理",
            "daValue": "",
            "opDelete": 0,
            "type": "dir",
            "resId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "parentId": "-1",
            "opEdit": 0,
            "opExport": 0,
            "assignId": "",
            "assignKind": "",
            "assignName": "",
            "assignGuid": "",
            "assignType": ""
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/gnqxgl/func/gnqxgl.func",
            "name": "功能权限管理",
            "daValue": "AccessPlancCgql",
            "opDelete": true,
            "type": "func",
            "resId": "833AE18C-0825-BA78-119B-8B55BB2E4648",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/gnqxgl/func/gnqxgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlancCgql",
                    "isOther": 4
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/dhwh/funcdir/dhwhBsg.func",
            "name": "单号维护",
            "daValue": "AccessPlanWXHKo",
            "opDelete": true,
            "type": "func",
            "resId": "D4A11656-0318-B283-4F9C-17D0974D67C0",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/dhwh/funcdir/dhwhBsg.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlanWXHKo",
                    "isOther": 33
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/cdgl1/func/tjcd.func",
            "name": "添加菜单",
            "daValue": "AccessPlanizQse",
            "opDelete": true,
            "type": "func",
            "resId": "7B87C0D2-0237-C601-1240-AC3769828CC4",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/cdgl1/func/tjcd.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlanizQse",
                    "isOther": 12
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": 0,
            "resUrl": "",
            "name": "PAAS开发平台",
            "daValue": "",
            "opDelete": 0,
            "type": "dir",
            "resId": "0C315B80-E46A-28DA-B564-DED1923AAA9E",
            "parentId": "-1",
            "opEdit": 0,
            "opExport": 0,
            "assignId": "",
            "assignKind": "",
            "assignName": "",
            "assignGuid": "",
            "assignType": ""
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/paaskfpt/yygl/funcdir/yycx.func",
            "name": "应用查询",
            "daValue": "AccessPlan_tTA",
            "opDelete": false,
            "type": "func",
            "resId": "0E5B6FDD-7A46-0740-DEB5-A2BEB2C94D2E",
            "parentId": "0C315B80-E46A-28DA-B564-DED1923AAA9E",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/paaskfpt/yygl/funcdir/yycx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_h8j",
                    "isOther": 79
                },
                "personalScheme": {
                    "funcUrl": "/eaptpl/paaskfpt/yygl/funcdir/yycx.func",
                    "name": "个人",
                    "type": "personalScheme",
                    "value": "AccessPlan_tTA",
                    "isOther": 119
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/paaskfpt/scgl/funcdir/wdsc.func",
            "name": "我的市场",
            "daValue": "AccessPlan_jNu",
            "opDelete": false,
            "type": "func",
            "resId": "449D345D-8F71-B6F0-F400-078085B04B0F",
            "parentId": "0C315B80-E46A-28DA-B564-DED1923AAA9E",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/paaskfpt/scgl/funcdir/wdsc.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_jNu",
                    "isOther": 85
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/paaskfpt/zhgl/funcdir/wdddds.func",
            "name": "我的订单待删",
            "daValue": "AccessPlan_w08",
            "opDelete": false,
            "type": "func",
            "resId": "904A31E2-4787-9EA0-9568-B5DC71C363A4",
            "parentId": "0C315B80-E46A-28DA-B564-DED1923AAA9E",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "others": [
                    {
                        "funcUrl": "/eaptpl/paaskfpt/zhgl/funcdir/wdddds.func",
                        "name": "权限方案",
                        "type": "others",
                        "value": "AccessPlan_w08",
                        "isOther": 123
                    }
                ]
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/paaskfpt/wdsj/funcdir/wdsj.func",
            "name": "我的上架",
            "daValue": "AccessPlan_8TM",
            "opDelete": false,
            "type": "func",
            "resId": "9DB811DD-9AE6-BAB6-3094-621882C2DA25",
            "parentId": "0C315B80-E46A-28DA-B564-DED1923AAA9E",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "personalScheme": {
                    "funcUrl": "/eaptpl/paaskfpt/wdsj/funcdir/wdsj.func",
                    "name": "个人",
                    "type": "personalScheme",
                    "value": "AccessPlan_8TM",
                    "isOther": 54
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/paaskfpt/wdzj/funcdir/zjgl.func",
            "name": "主机管理",
            "daValue": "AccessPlan_KkZ",
            "opDelete": false,
            "type": "func",
            "resId": "A2CFDB57-6780-6E97-7E7A-6652CF18D11C",
            "parentId": "0C315B80-E46A-28DA-B564-DED1923AAA9E",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "personalScheme": {
                    "funcUrl": "/eaptpl/paaskfpt/wdzj/funcdir/zjgl.func",
                    "name": "个人",
                    "type": "personalScheme",
                    "value": "AccessPlan_KkZ",
                    "isOther": 88
                },
                "groupScheme": {
                    "funcUrl": "/eaptpl/paaskfpt/wdzj/funcdir/zjgl.func",
                    "name": "团队",
                    "type": "groupScheme",
                    "value": "AccessPlan_KQF",
                    "isOther": 89
                },
                "businessScheme": {
                    "funcUrl": "/eaptpl/paaskfpt/wdzj/funcdir/zjgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_m8n",
                    "isOther": 97
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": 0,
            "resUrl": "",
            "name": "菜单",
            "daValue": "",
            "opDelete": 0,
            "type": "dir",
            "resId": "75D0CA18-78CE-0E4C-9514-B0CFE44691B5",
            "parentId": "-1",
            "opEdit": 0,
            "opExport": 0,
            "assignId": "",
            "assignKind": "",
            "assignName": "",
            "assignGuid": "",
            "assignType": ""
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/paaskfpt/grzy/funcdir/grzy.func",
            "name": "个人主页",
            "daValue": "AccessPlan_oYa",
            "opDelete": false,
            "type": "func",
            "resId": "0969F596-B601-CDB0-1C95-0AB979C0A09A",
            "parentId": "75D0CA18-78CE-0E4C-9514-B0CFE44691B5",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "others": [
                    {
                        "funcUrl": "/eaptpl/paaskfpt/grzy/funcdir/grzy.func",
                        "name": "默认权限",
                        "type": "others",
                        "value": "AccessPlan_oYa",
                        "isOther": 108
                    }
                ]
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgj/sjdj/funcdir/sjdjfwqxxwh.func",
            "name": "升级登记服务器信息维护",
            "daValue": "AccessPlanruVPS",
            "opDelete": false,
            "type": "func",
            "resId": "0CE7CEBE-FE1B-5D5D-625E-5533EF000AF5",
            "parentId": "75D0CA18-78CE-0E4C-9514-B0CFE44691B5",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/sjdj/funcdir/sjdjfwqxxwh.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlanruVPS",
                    "isOther": 26
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtjk/ycgl/funcdir/ycrzcx.func",
            "name": "异常数据来源",
            "daValue": "AccessPlan_NoI",
            "opDelete": false,
            "type": "func",
            "resId": "1FB35EBD-02BB-B40E-CA6F-DC5B6324EE01",
            "parentId": "75D0CA18-78CE-0E4C-9514-B0CFE44691B5",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtjk/ycgl/funcdir/ycrzcx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_NoI",
                    "isOther": 102
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtjk/ycgl/funcdir/ycrzcx1.func",
            "name": "异常日志查询",
            "daValue": "AccessPlan_1zm",
            "opDelete": false,
            "type": "func",
            "resId": "8CEF8F23-4EA9-9B65-CEBE-88CE17E293CC",
            "parentId": "75D0CA18-78CE-0E4C-9514-B0CFE44691B5",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtjk/ycgl/funcdir/ycrzcx1.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_1zm",
                    "isOther": 41
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgj/yckwh/funcdir/yckwh.func",
            "name": "异常库维护",
            "daValue": "AccessPlan_9JK",
            "opDelete": false,
            "type": "func",
            "resId": "A1F68414-533B-B2A8-26A5-71D1453D3ED5",
            "parentId": "75D0CA18-78CE-0E4C-9514-B0CFE44691B5",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/yckwh/funcdir/yckwh.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_9JK",
                    "isOther": 57
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgj/kjzdhcsgn/tf_zcsjj/funcdir/tf_cxzk.func",
            "name": "tf_查询展开",
            "daValue": "AccessPlanNgjAY",
            "opDelete": false,
            "type": "func",
            "resId": "DDCBE80A-F735-8277-B335-EC2D587A5855",
            "parentId": "75D0CA18-78CE-0E4C-9514-B0CFE44691B5",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/kjzdhcsgn/tf_zcsjj/funcdir/tf_cxzk.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlanNgjAY",
                    "isOther": 17
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtjk/yhrz/funcdir/gnxysjcx.func",
            "name": "功能响应时间查询",
            "daValue": "AccessPlan_5ri",
            "opDelete": false,
            "type": "func",
            "resId": "F6E06D34-C394-76CC-4C54-9ECBECE55762",
            "parentId": "75D0CA18-78CE-0E4C-9514-B0CFE44691B5",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtjk/yhrz/funcdir/gnxysjcx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_5ri",
                    "isOther": 51
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": 0,
            "resUrl": "",
            "name": "模板功能",
            "daValue": "",
            "opDelete": 0,
            "type": "dir",
            "resId": "90DEE50D-3ECF-D3CC-4868-305A19A71A3C",
            "parentId": "-1",
            "opEdit": 0,
            "opExport": 0,
            "assignId": "",
            "assignKind": "",
            "assignName": "",
            "assignGuid": "",
            "assignType": ""
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/rjwhzx/rjzcgl/funcdir/zcmcx.func",
            "name": "注册码查询",
            "daValue": "AccessPlan_m6I",
            "opDelete": false,
            "type": "func",
            "resId": "58000AD9-6C2B-6F68-1D18-77711677C9BD",
            "parentId": "90DEE50D-3ECF-D3CC-4868-305A19A71A3C",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/rjwhzx/rjzcgl/funcdir/zcmcx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_m6I",
                    "isOther": 96
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": 0,
            "resUrl": "",
            "name": "二级目录1",
            "daValue": "",
            "opDelete": 0,
            "type": "dir",
            "resId": "4587C8A0-B1B0-5AA1-DE49-9C79E3B56316",
            "parentId": "083A85BF-0C73-AECA-1A6E-A6B0ABC09ED2",
            "opEdit": 0,
            "opExport": 0,
            "assignId": "",
            "assignKind": "",
            "assignName": "",
            "assignGuid": "",
            "assignType": ""
        },
        {
            "opAdd": 0,
            "resUrl": "",
            "name": "多级目录测试1",
            "daValue": "",
            "opDelete": 0,
            "type": "dir",
            "resId": "083A85BF-0C73-AECA-1A6E-A6B0ABC09ED2",
            "parentId": "-1",
            "opEdit": 0,
            "opExport": 0,
            "assignId": "",
            "assignKind": "",
            "assignName": "",
            "assignGuid": "",
            "assignType": ""
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgj/xxcx/funcdir/xxcx.func",
            "name": "消息查询",
            "daValue": "AccessPlan_Ve9",
            "opDelete": true,
            "type": "func",
            "resId": "79AC0E3D-F155-DCE3-431B-BBE02BA76EBB",
            "parentId": "4587C8A0-B1B0-5AA1-DE49-9C79E3B56316",
            "opEdit": true,
            "opExport": true,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "others": [
                    {
                        "funcUrl": "/eaptpl/ptpz/xtgj/xxcx/funcdir/xxcx.func",
                        "name": "默认权限",
                        "type": "others",
                        "value": "AccessPlan_Ve9",
                        "isOther": 121
                    }
                ]
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgj/sjmngl/funcdir/sjcxCRB.func",
            "name": "模拟数据查询",
            "daValue": "AccessPlanaZsTE",
            "opDelete": false,
            "type": "func",
            "resId": "633099BA-F936-334D-92A2-E40B9AF37997",
            "parentId": "4587C8A0-B1B0-5AA1-DE49-9C79E3B56316",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "others": [
                    {
                        "funcUrl": "/eaptpl/ptpz/xtgj/sjmngl/funcdir/sjcxCRB.func",
                        "name": "权限方案",
                        "type": "others",
                        "value": "AccessPlanaZsTE",
                        "isOther": 3
                    }
                ]
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/bg/taskCenter/main.do",
            "name": "任务中心",
            "daValue": "",
            "opDelete": false,
            "type": "link",
            "resId": "25506545-453C-080C-EC22-2B668409E827",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": false,
            "opExport": false,
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/designer/project/export/download.do",
            "name": "项目导出",
            "daValue": "",
            "opDelete": false,
            "type": "do",
            "resId": "f9c8a59d-f958-11e9-945b-0242ac110003",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": false,
            "opExport": false,
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
            "name": "用户管理",
            "daValue": "AccessPlan_JDs",
            "opDelete": true,
            "type": "func",
            "resId": "3013048F-401A-093C-0170-457BCD047198",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_JDs",
                    "isOther": 84
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/zzjggl/func/zzjg.func",
            "name": "组织机构",
            "daValue": "AccessPlanqDQKE",
            "opDelete": true,
            "type": "func",
            "resId": "458A768E-B779-9DFF-9422-D543F9AAA683",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/zzjggl/func/zzjg.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlanqDQKE",
                    "isOther": 22
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/xlmjwh/funcdir/xlmj.func",
            "name": "下拉枚举",
            "daValue": "AccessPlanZLiVo",
            "opDelete": true,
            "type": "func",
            "resId": "57AE34AE-B397-4DE3-407F-8A4FB3BB5F7F",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/xlmjwh/funcdir/xlmj.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlanZLiVo",
                    "isOther": 35
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/gnqxcz/func/gnqxcz.func",
            "name": "功能权限查找",
            "daValue": "AccessPlanNtBPg",
            "opDelete": true,
            "type": "func",
            "resId": "8008D1F0-E4AE-5DD1-FE19-C41A491C67FE",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/gnqxcz/func/gnqxcz.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlanNtBPg",
                    "isOther": 19
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/cswebservice.func",
            "name": "拉取Web服务",
            "daValue": "AccessPlanjuRVF",
            "opDelete": true,
            "type": "func",
            "resId": "826D4EC3-92A7-74F9-4E83-0C7D6CC21406",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/cswebservice.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlanjuRVF",
                    "isOther": 13
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/gnqxgl/func/gnqxgl.func",
            "name": "功能权限管理",
            "daValue": "AccessPlancCgql",
            "opDelete": true,
            "type": "func",
            "resId": "833AE18C-0825-BA78-119B-8B55BB2E46481",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/gnqxgl/func/gnqxgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlancCgql",
                    "isOther": 4
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/gwgl/func/gwgl.func",
            "name": "岗位管理",
            "daValue": "AccessPlannCmLu",
            "opDelete": true,
            "type": "func",
            "resId": "873AF02E-F158-5A44-9D57-B8CF39B40B5E",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/gwgl/func/gwgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlannCmLu",
                    "isOther": 16
                },
                "others": [
                    {
                        "funcUrl": "/eaptpl/ptpz/xtgn/gwgl/func/gwgl.func",
                        "name": "权限2",
                        "type": "others",
                        "value": "AccessPlan_bgb",
                        "isOther": 63
                    },
                    {
                        "funcUrl": "/eaptpl/ptpz/xtgn/gwgl/func/gwgl.func",
                        "name": "权限1",
                        "type": "others",
                        "value": "AccessPlan_njW",
                        "isOther": 100
                    }
                ]
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/bmgl/func/bmgl.func",
            "name": "部门管理",
            "daValue": "AccessPlanhdWGA",
            "opDelete": true,
            "type": "func",
            "resId": "BC9624A2-D8DF-A878-490B-1DA51000B020",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/bmgl/func/bmgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlanhdWGA",
                    "isOther": 7
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/dhwh/funcdir/dhwhBsg.func",
            "name": "单号维护",
            "daValue": "AccessPlanWXHKo",
            "opDelete": true,
            "type": "func",
            "resId": "D4A11656-0318-B283-4F9C-17D0974D67C01",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/dhwh/funcdir/dhwhBsg.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlanWXHKo",
                    "isOther": 33
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/dyydrdc/funcdir/dyydrdc.func",
            "name": "多语言导入导出",
            "daValue": "AccessPlan_Ae7",
            "opDelete": true,
            "type": "func",
            "resId": "87D07B9F-A3E0-B8A9-C578-1387694CB26A",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/dyydrdc/funcdir/dyydrdc.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_Ae7",
                    "isOther": 60
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgj/xxcx/funcdir/xxcx.func",
            "name": "消息查询",
            "daValue": "AccessPlan_Ve9",
            "opDelete": true,
            "type": "func",
            "resId": "79AC0E3D-F155-DCE3-431B-BBE02BA76EBB1",
            "parentId": "4587C8A0-B1B0-5AA1-DE49-9C79E3B56316",
            "opEdit": true,
            "opExport": true,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "others": [
                    {
                        "funcUrl": "/eaptpl/ptpz/xtgj/xxcx/funcdir/xxcx.func",
                        "name": "默认权限",
                        "type": "others",
                        "value": "AccessPlan_Ve9",
                        "isOther": 121
                    }
                ]
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/xxzx/funcdir/xxzx.func",
            "name": "消息中心",
            "daValue": "AccessPlan_6Qw",
            "opDelete": true,
            "type": "func",
            "resId": "22AC5F05-1EDB-B35D-1A44-1BEB828E6AF2",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/xxzx/funcdir/xxzx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_6Qw",
                    "isOther": 52
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgj/sjdxzs/funcdir/sjdxzs.func",
            "name": "数据读写助手",
            "daValue": "AccessPlaneWOwN",
            "opDelete": false,
            "type": "func",
            "resId": "51136DE0-D949-E6CA-8540-0A205C8C3408",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/sjdxzs/funcdir/sjdxzs.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlaneWOwN",
                    "isOther": 6
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgj/kjzdhcsgn/tf_zcsjj/flowdir/tf_zcsjjzd.flow",
            "name": "tf_主从数据集制单",
            "daValue": "",
            "opDelete": false,
            "type": "func",
            "resId": "E6142474-90BF-D516-5C0B-4D43D8A8BA90",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgj/bbgl/funcdir/bbgl.func",
            "name": "版本管理",
            "daValue": "AccessPlan_PdP",
            "opDelete": true,
            "type": "func",
            "resId": "99FDAFF9-6D67-7634-E6AE-84D28E3D6E55",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/bbgl/funcdir/bbgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_PdP",
                    "isOther": 109
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": 0,
            "resUrl": "",
            "name": "系统工具",
            "daValue": "",
            "opDelete": 0,
            "type": "dir",
            "resId": "383D4EB2-F7F1-202A-DD98-DA2ABB220142",
            "parentId": "-1",
            "opEdit": 0,
            "opExport": 0,
            "assignId": "",
            "assignKind": "",
            "assignName": "",
            "assignGuid": "",
            "assignType": ""
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgj/wdmbgl/funcdir/wdmbgl.func",
            "name": "文档模板管理",
            "daValue": "AccessPlan_4vx",
            "opDelete": true,
            "type": "func",
            "resId": "EF5C640E-847E-DE49-37C9-9B4890E4C81E",
            "parentId": "383D4EB2-F7F1-202A-DD98-DA2ABB220142",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/wdmbgl/funcdir/wdmbgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_4vx",
                    "isOther": 46
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgj/bbgl/funcdir/bbcx.func",
            "name": "版本查询",
            "daValue": "AccessPlan_CQE",
            "opDelete": true,
            "type": "func",
            "resId": "A743B581-DB38-B262-F9DE-5CB28F2B3ED7",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/bbgl/funcdir/bbcx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_CQE",
                    "isOther": 67
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/paaskfpt/yygl/funcdir/yycx.func",
            "name": "应用查询",
            "daValue": "AccessPlan_tTA",
            "opDelete": false,
            "type": "func",
            "resId": "0E5B6FDD-7A46-0740-DEB5-A2BEB2C94D2E",
            "parentId": "0C315B80-E46A-28DA-B564-DED1923AAA9E",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/paaskfpt/yygl/funcdir/yycx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_h8j",
                    "isOther": 79
                },
                "personalScheme": {
                    "funcUrl": "/eaptpl/paaskfpt/yygl/funcdir/yycx.func",
                    "name": "个人",
                    "type": "personalScheme",
                    "value": "AccessPlan_tTA",
                    "isOther": 119
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgj/kjzdhcsgn/tf_zcsjj/flowdir/tf_zcsjjzd.flow",
            "name": "tf_主从数据集制单",
            "daValue": "",
            "opDelete": false,
            "type": "func",
            "resId": "AF859345-0264-8146-0D3F-7C5EBDB4618A",
            "parentId": "083A85BF-0C73-AECA-1A6E-A6B0ABC09ED2",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtjk/dlrz/funcdir/dlrzcx.func",
            "name": "登录日志查询",
            "daValue": "AccessPlan_4Wy",
            "opDelete": false,
            "type": "func",
            "resId": "882241AE-558D-7604-E8D7-5B2F45CF811E",
            "parentId": "083A85BF-0C73-AECA-1A6E-A6B0ABC09ED2",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtjk/dlrz/funcdir/dlrzcx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_4Wy",
                    "isOther": 47
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": 0,
            "resUrl": "",
            "name": "个人中心",
            "daValue": "",
            "opDelete": 0,
            "type": "dir",
            "resId": "40521D47-29B4-1646-6F28-0ED19C35B31B",
            "parentId": "-1",
            "opEdit": 0,
            "opExport": 0,
            "assignId": "",
            "assignKind": "",
            "assignName": "",
            "assignGuid": "",
            "assignType": ""
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ygc/wjrdqy/funcdir/wjrdqy.func",
            "name": "我加入的企业",
            "daValue": "AccessPlan_l83",
            "opDelete": true,
            "type": "func",
            "resId": "C17634E3-BC7A-18B0-8DB6-9438C65329B2",
            "parentId": "40521D47-29B4-1646-6F28-0ED19C35B31B",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ygc/wjrdqy/funcdir/wjrdqy.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_l83",
                    "isOther": 93
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ygc/xxzx/funcdir/xxzx.func",
            "name": "消息中心",
            "daValue": "AccessPlan_oTr",
            "opDelete": true,
            "type": "func",
            "resId": "ef957759-5c34-11ea-adde-005056ba54a4",
            "parentId": "-1",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ygc/xxzx/funcdir/xxzx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_oTr",
                    "isOther": 107
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ygc/yyzx/funcdir/yyzx.func",
            "name": "应用中心",
            "daValue": "AccessPlan_521",
            "opDelete": true,
            "type": "func",
            "resId": "0C16FE1C-528E-5667-CC67-F14E801F66AE",
            "parentId": "-1",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ygc/yyzx/funcdir/yyzx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_521",
                    "isOther": 49
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": 0,
            "resUrl": "",
            "name": "组织与权限",
            "daValue": "",
            "opDelete": 0,
            "type": "dir",
            "resId": "815D3B1F-ABE4-8D32-6D4D-BCCFD4370A64",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": 0,
            "opExport": 0,
            "assignId": "",
            "assignKind": "",
            "assignName": "",
            "assignGuid": "",
            "assignType": ""
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/zzyqx/qxgl/funcdir/qxfp.func",
            "name": "权限分配",
            "daValue": "AccessPlan_FOB",
            "opDelete": true,
            "type": "func",
            "resId": "352FDDFF-E69D-3BA7-FEDA-336A781F2C1C",
            "parentId": "815D3B1F-ABE4-8D32-6D4D-BCCFD4370A64",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/zzyqx/qxgl/funcdir/qxfp.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_FOB",
                    "isOther": 77
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/zzyqx/qxgl/funcdir/qxfc.func",
            "name": "权限反查",
            "daValue": "AccessPlan_0qO",
            "opDelete": true,
            "type": "func",
            "resId": "A0ECDAA1-7CC2-C46A-A406-E4A6E1000400",
            "parentId": "815D3B1F-ABE4-8D32-6D4D-BCCFD4370A64",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/zzyqx/qxgl/funcdir/qxfc.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_0qO",
                    "isOther": 37
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/zzyqx/qxgl/funcdir/qxxg.func",
            "name": "权限修改",
            "daValue": "AccessPlan_eAO",
            "opDelete": true,
            "type": "func",
            "resId": "783C3E72-07D0-5499-5FBE-DE112571EB13",
            "parentId": "815D3B1F-ABE4-8D32-6D4D-BCCFD4370A64",
            "opEdit": true,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/zzyqx/qxgl/funcdir/qxxg.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_eAO",
                    "isOther": 71
                }
            },
            "assignId": "admin",
            "assignKind": ".PSM",
            "assignName": "管理员"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
            "name": "工程树管理",
            "daValue": "AccessPlan_Ose",
            "opDelete": false,
            "type": "func",
            "resId": "D68A12E6-019F-B094-DCC0-9AFA986E9ED0",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "others": [
                    {
                        "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
                        "name": "子项目1",
                        "type": "others",
                        "value": "AccessPlan_8wz",
                        "isOther": 55
                    },
                    {
                        "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
                        "name": "子项目1",
                        "type": "others",
                        "value": "AccessPlan_L3e",
                        "isOther": 92
                    },
                    {
                        "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
                        "name": "默认权限",
                        "type": "others",
                        "value": "AccessPlan_Ose",
                        "isOther": 106
                    },
                    {
                        "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
                        "name": "子项目1",
                        "type": "others",
                        "value": "AccessPlan_QZh",
                        "isOther": 112
                    }
                ],
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_cy2",
                    "isOther": 68
                },
                "groupScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
                    "name": "团队",
                    "type": "groupScheme",
                    "value": "AccessPlan_RiG",
                    "isOther": 114
                },
                "personalScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
                    "name": "个人",
                    "type": "personalScheme",
                    "value": "AccessPlan_yXv",
                    "isOther": 133
                }
            },
            "assignId": "ORGANIZE",
            "assignKind": ".OGNROOT",
            "assignName": "组织机构"
        },
        {
            "opAdd": 0,
            "resUrl": "",
            "name": "二级目录2",
            "daValue": "",
            "opDelete": 0,
            "type": "dir",
            "resId": "8E141CD3-BAC6-66F5-CC96-856424FAC697",
            "parentId": "083A85BF-0C73-AECA-1A6E-A6B0ABC09ED2",
            "opEdit": 0,
            "opExport": 0,
            "assignId": "",
            "assignKind": "",
            "assignName": "",
            "assignGuid": "",
            "assignType": ""
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgn/xxzx/funcdir/xxzx.func",
            "name": "消息中心",
            "daValue": "AccessPlan_6Qw",
            "opDelete": false,
            "type": "func",
            "resId": "C79FDED3-BAC6-A7F2-1C28-07DE57146691",
            "parentId": "8E141CD3-BAC6-66F5-CC96-856424FAC697",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/xxzx/funcdir/xxzx.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_6Qw",
                    "isOther": 52
                }
            },
            "assignId": "ORGANIZE",
            "assignKind": ".OGNROOT",
            "assignName": "组织机构"
        },
        {
            "opAdd": true,
            "resUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
            "name": "用户管理",
            "daValue": "AccessPlan_JDs",
            "opDelete": true,
            "type": "func",
            "resId": "3013048F-401A-093C-0170-457BCD047198a",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": true,
            "opExport": true,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_JDs",
                    "isOther": 84
                }
            },
            "assignId": "ORGANIZE",
            "assignKind": ".OGNROOT",
            "assignName": "组织机构"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
            "name": "用户管理",
            "daValue": "AccessPlan_JDs",
            "opDelete": false,
            "type": "func",
            "resId": "3013048F-401A-093C-0170-457BCD0471981",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_JDs",
                    "isOther": 84
                }
            },
            "assignId": "ORGANIZE",
            "assignKind": ".OGNROOT",
            "assignName": "组织机构"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
            "name": "用户管理",
            "daValue": "AccessPlan_JDs",
            "opDelete": false,
            "type": "func",
            "resId": "3013048F-401A-093C-0170-457BCD0471982",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_JDs",
                    "isOther": 84
                }
            },
            "assignId": ".BJT",
            "assignKind": ".JT",
            "assignName": "B集团"
        },
        {
            "opAdd": false,
            "resUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
            "name": "用户管理",
            "daValue": "AccessPlan_JDs",
            "opDelete": false,
            "type": "func",
            "resId": "3013048F-401A-093C-0170-457BCD047198c",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "opEdit": false,
            "opExport": false,
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            "daPower": {
                "businessScheme": {
                    "funcUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
                    "name": "企业",
                    "type": "businessScheme",
                    "value": "AccessPlan_JDs",
                    "isOther": 84
                }
            },
            "assignId": ".BJT",
            "assignKind": ".JT",
            "assignName": "B集团"
        },
        {
            "opAdd": false,
            "resUrl": "/amreport/designer/tree/design.do",
            "name": "工程树",
            "daValue": "",
            "opDelete": false,
            "type": "do",
            "resId": "projectTree",
            "parentId": "-2",
            "opEdit": false,
            "opExport": false,
            "assignId": "GLY",
            "assignKind": ".PTM",
            "assignName": "管理员"
        }
    ],
    1003: [
        {
            "resId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "name": "测试菜单",
            "parentId": "-1",
            "type": "dir",
            "resUrl": "",
        },
        {
            "resId": "31418B1A-5253-31A2-77F6-B5F18198ABE2",
            "name": "测试功能",
            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "type": "func",
            "resUrl": "/systemplate/csgn/csgn/funcdir/csgn1.func",
            "daValue": "AccessPlan_BZP",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "AccessPlan_CW": {
                    "name": "财务经理",
                    "value": "AccessPlan_CW",
                }
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "jt_guid",
            assignName: "XXX集团",
            assignKind: ".JT"

        },
        {
            "resId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "name": "系统管理",
            "parentId": "-1",
            "type": "dir",
            "resUrl": "",
        },
        {
            "resId": "9964B5C9-E606-2F7C-CF87-53E8F69096EC",
            "name": "编制管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/bzManage/funcdir/bzgl.func",
            "daValue": "AccessPlan_BZG",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "others": [
                    {
                        "name": "财务经理",
                        "value": "AccessPlan_CW"
                    }
                ]
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "gw_jsy",
            assignName: "技术员",
            assignKind: ".PTM"
        },

    ],
    1003: [{ "opAdd": 0, "resUrl": "", "name": "系统管理", "daValue": "", "opDelete": 0, "type": "dir", "resId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13", "parentId": "-1", "opEdit": 0, "opExport": 0, "assignId": "", "assignKind": "", "assignName": "", "assignGuid": "", "assignType": "" }, { "opAdd": false, "resUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func", "name": "工程树管理", "daValue": "AccessPlan_Ose", "opDelete": false, "type": "func", "resId": "D68A12E6-019F-B094-DCC0-9AFA986E9ED0", "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13", "opEdit": false, "opExport": false, "opPower": { "add": { "value": 0 }, "edit": { "value": 0 }, "delete": { "value": 0 }, "export": { "value": 0 } }, "daPower": { "others": [{ "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func", "name": "子项目1", "type": "others", "value": "AccessPlan_8wz", "isOther": 55 }, { "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func", "name": "子项目1", "type": "others", "value": "AccessPlan_L3e", "isOther": 92 }, { "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func", "name": "默认权限", "type": "others", "value": "AccessPlan_Ose", "isOther": 106 }, { "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func", "name": "子项目1", "type": "others", "value": "AccessPlan_QZh", "isOther": 112 }], "businessScheme": { "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func", "name": "企业", "type": "businessScheme", "value": "AccessPlan_cy2", "isOther": 68 }, "groupScheme": { "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func", "name": "团队", "type": "groupScheme", "value": "AccessPlan_RiG", "isOther": 114 }, "personalScheme": { "funcUrl": "/eaptpl/ptpz/xtgj/gcsgl/funcdir/gcsgl.func", "name": "个人", "type": "personalScheme", "value": "AccessPlan_yXv", "isOther": 133 } }, "assignId": "ORGANIZE", "assignKind": ".OGNROOT", "assignName": "组织机构" }, { "opAdd": 0, "resUrl": "", "name": "二级目录2", "daValue": "", "opDelete": 0, "type": "dir", "resId": "8E141CD3-BAC6-66F5-CC96-856424FAC697", "parentId": "083A85BF-0C73-AECA-1A6E-A6B0ABC09ED2", "opEdit": 0, "opExport": 0, "assignId": "", "assignKind": "", "assignName": "", "assignGuid": "", "assignType": "" }, { "opAdd": 0, "resUrl": "", "name": "多级目录测试1", "daValue": "", "opDelete": 0, "type": "dir", "resId": "083A85BF-0C73-AECA-1A6E-A6B0ABC09ED2", "parentId": "-1", "opEdit": 0, "opExport": 0, "assignId": "", "assignKind": "", "assignName": "", "assignGuid": "", "assignType": "" }, { "opAdd": false, "resUrl": "/eaptpl/ptpz/xtgn/xxzx/funcdir/xxzx.func", "name": "消息中心", "daValue": "AccessPlan_6Qw", "opDelete": false, "type": "func", "resId": "C79FDED3-BAC6-A7F2-1C28-07DE57146691", "parentId": "8E141CD3-BAC6-66F5-CC96-856424FAC697", "opEdit": false, "opExport": false, "opPower": { "add": { "value": 0 }, "edit": { "value": 0 }, "delete": { "value": 0 }, "export": { "value": 0 } }, "daPower": { "businessScheme": { "funcUrl": "/eaptpl/ptpz/xtgn/xxzx/funcdir/xxzx.func", "name": "企业", "type": "businessScheme", "value": "AccessPlan_6Qw", "isOther": 52 } }, "assignId": "ORGANIZE", "assignKind": ".OGNROOT", "assignName": "组织机构" }, { "opAdd": true, "resUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func", "name": "用户管理", "daValue": "AccessPlan_JDs", "opDelete": true, "type": "func", "resId": "3013048F-401A-093C-0170-457BCD047198", "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13", "opEdit": true, "opExport": true, "opPower": { "add": { "value": 0 }, "edit": { "value": 0 }, "delete": { "value": 0 }, "export": { "value": 0 } }, "daPower": { "businessScheme": { "funcUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func", "name": "企业", "type": "businessScheme", "value": "AccessPlan_JDs", "isOther": 84 } }, "assignId": "ORGANIZE", "assignKind": ".OGNROOT", "assignName": "组织机构" }, { "opAdd": false, "resUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func", "name": "用户管理", "daValue": "AccessPlan_JDs", "opDelete": false, "type": "func", "resId": "3013048F-401A-093C-0170-457BCD0471981", "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13", "opEdit": false, "opExport": false, "opPower": { "add": { "value": 0 }, "edit": { "value": 0 }, "delete": { "value": 0 }, "export": { "value": 0 } }, "daPower": { "businessScheme": { "funcUrl": "/eaptpl/ptpz/xtgn/UserMangement/funcdir/yhgl.func", "name": "企业", "type": "businessScheme", "value": "AccessPlan_JDs", "isOther": 84 } }, "assignId": "ORGANIZE", "assignKind": ".OGNROOT", "assignName": "组织机构" }],
    1012: [
        {
            "resId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "name": "系统管理",
            "parentId": "-1",
            "type": "dir",
            "resUrl": "",
        },
        {
            "resId": "9964B5C9-E606-2F7C-CF87-53E8F69096EC",
            "name": "编制管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/bzManage/funcdir/bzgl.func",
            "daValue": "AccessPlan_BZG",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "others": [
                    {
                        "name": "财务经理",
                        "value": "AccessPlan_CW"
                    }
                ]
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "gw_jsy",
            assignName: "技术员",
            assignKind: ".PTM"
        },
        {
            "resId": "2F738A4E-3EE1-FF50-0C95-2166A92E5EED",
            "name": "部门管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/deptManage/funcdir/bmgl.func",
            "daValue": "AccessPlan_BMB",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BMP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BMG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BMB"
                },
                "others": [
                    {
                        "name": "财务经理",
                        "value": "AccessPlan_CW"
                    }
                ]
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "jt_guid",
            assignName: "XXX集团",
            assignKind: ".JT"
        },
    ],
    1027: [
        {
            "resId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "name": "系统管理",
            "parentId": "-1",
            "type": "dir",
            "resUrl": "",
        },
        {
            "resId": "E1989F3F-00CC-A7CE-DC77-F77D129CE23E",
            "name": "测试",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "flow",
            "resUrl": "/systemplate/dgcs/dhwh2/flowdir/cs.flow",
        },
        {
            "resId": "D4A11656-0318-B283-4F9C-17D0974D67C02",
            "name": "单号维护",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/dhwh/funcdir/dhwhBsg.func",
            "daValue": "AccessPlan_CW",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "AccessPlan_CW": {
                    "name": "财务经理1",
                    "value": "AccessPlan_CW",
                    "isOther": 1
                }
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "jt_guid",
            assignName: "XXX集团",
            assignKind: ".JT"
        },
    ],
    1033: [
        {
            "resId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "name": "系统管理",
            "parentId": "-1",
            "type": "dir",
            "resUrl": "",
        },
        {
            "resId": "4A3AACDF-781F-3CE7-5AED-252F6A17E4EE",
            "name": "单号维护流程",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "flow",
            "resUrl": "/systemplate/ptpz/xtgn/dhwh/flowdir/lc.flow",
            assignId: "jt_guid",
            assignName: "XXX集团",
            assignKind: ".JT"
        },
        {
            "resId": "8B60A86E-7DB6-C2AC-19BA-0E2A7775C06E",
            "name": "岗位管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/roleManage/funcdir/gwgl.func",
            "daValue": "AccessPlan_BZQ",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "AccessPlan_CW": {
                    "name": "财务经理",
                    "value": "AccessPlan_CW",
                    "isOther": 1
                }
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "gw_xsy",
            assignName: "销售员",
            assignKind: ".PTM"
        },
        {
            "resId": "AA8CE6D9-8DD7-F9D5-D94B-69574B825713",
            "name": "工程树管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
            "daValue": "AccessPlan_BZP",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "AccessPlan_CW": {
                    "name": "财务经理",
                    "value": "AccessPlan_CW",
                    "isOther": 1
                }
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "gw_jsy",
            assignName: "技术员",
            assignKind: ".PTM"
        },
    ]
}

const resCheckByRes = {
    "31418B1A-5253-31A2-77F6-B5F18198ABE2": [
        {
            "resId": "31418B1A-5253-31A2-77F6-B5F18198ABE2",
            "name": "测试功能",
            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "type": "func",
            "resUrl": "/systemplate/csgn/csgn/funcdir/csgn1.func",
            "daValue": "AccessPlan_BZP",
            "opAdd": true,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "AccessPlan_CW": {
                    "name": "财务经理",
                    "value": "AccessPlan_CW",
                }
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "jt_guid",
            assignName: "XXX集团",
            assignKind: ".JT"
        },
        {
            "resId": "31418B1A-5253-31A2-77F6-B5F18198ABE2",
            "name": "测试功能",
            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "type": "func",
            "resUrl": "/systemplate/csgn/csgn/funcdir/csgn1.func",
            "daValue": "AccessPlan_BZP",
            "opAdd": true,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "AccessPlan_CW": {
                    "name": "财务经理",
                    "value": "AccessPlan_CW",
                }
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "gw_xsy",
            assignName: "销售员",
            assignKind: ".PTM"
        },
    ],
    "23DF68DC-EEA7-41E5-0288-02AB9909CB8F": [
        {
            "resId": "23DF68DC-EEA7-41E5-0288-02AB9909CB8F",
            "name": "测试流程",
            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "type": "flow",
            "resUrl": "/systemplate/csgn/csgn/flowdir/cslc.flow",
            assignId: "dpt_xc_guid",
            assignName: "软件市场部",
            assignKind: ".DPT"
        },
        {
            "resId": "23DF68DC-EEA7-41E5-0288-02AB9909CB8F",
            "name": "测试流程",
            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "type": "flow",
            "resUrl": "/systemplate/csgn/csgn/flowdir/cslc.flow",
            assignId: "dpt_xs01_guid",
            assignName: "销售01组",
            assignKind: ".DPT"
        },
    ],
    "2F738A4E-3EE1-FF50-0C95-2166A92E5EED": [
        {
            "resId": "2F738A4E-3EE1-FF50-0C95-2166A92E5EED",
            "name": "部门管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/deptManage/funcdir/bmgl.func",
            "daValue": "AccessPlan_BMG",
            "opAdd": false,
            "opEdit": true,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BMP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BMG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BMB"
                },
                "others": [
                    {
                        "name": "财务经理",
                        "value": "AccessPlan_CW"
                    }
                ]
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "dpt_xs02_guid",
            assignName: "销售02组",
            assignKind: ".DPT"
        },
        {
            "resId": "2F738A4E-3EE1-FF50-0C95-2166A92E5EED",
            "name": "部门管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/deptManage/funcdir/bmgl.func",
            "daValue": "AccessPlan_BMP",
            "opAdd": false,
            "opEdit": false,
            "opDelete": true,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BMP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BMG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BMB"
                },
                "others": [
                    {
                        "name": "财务经理",
                        "value": "AccessPlan_CW"
                    }
                ]
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "dpt_kf01_guid",
            assignName: "开发01组",
            assignKind: ".DPT"
        },
        {
            "resId": "2F738A4E-3EE1-FF50-0C95-2166A92E5EED",
            "name": "部门管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/deptManage/funcdir/bmgl.func",
            "daValue": "AccessPlan_BMB",
            "opAdd": true,
            "opEdit": true,
            "opDelete": true,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BMP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BMG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BMB"
                },
                "others": [
                    {
                        "name": "财务经理",
                        "value": "AccessPlan_CW"
                    }
                ]
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "gw_xsy",
            assignName: "销售员",
            assignKind: ".PTM"
        },
    ]
}

const resCheckByOrg = {
    jt_guid: [
        {
            "resId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "name": "测试菜单",
            "parentId": "-1",
            "type": "dir",
            "resUrl": "",
        },
        {
            "resId": "31418B1A-5253-31A2-77F6-B5F18198ABE2",
            "name": "测试功能",
            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "type": "func",
            "resUrl": "/systemplate/csgn/csgn/funcdir/csgn1.func",
            "daValue": "AccessPlan_BZP",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "AccessPlan_CW": {
                    "name": "财务经理",
                    "value": "AccessPlan_CW",
                }
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "jt_guid",
            assignName: "XXX集团",
            assignKind: ".JT"
        },
        {
            "resId": "23DF68DC-EEA7-41E5-0288-02AB9909CB8F",
            "name": "测试流程",
            "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
            "type": "flow",
            "resUrl": "/systemplate/csgn/csgn/flowdir/cslc.flow",
            assignId: "jt_guid",
            assignName: "XXX集团",
            assignKind: ".JT"
        },
    ],
    gw_jsy: [
        {
            "resId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "name": "系统管理",
            "parentId": "-1",
            "type": "dir",
            "resUrl": "",
        },
        {
            "resId": "9964B5C9-E606-2F7C-CF87-53E8F69096EC",
            "name": "编制管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/bzManage/funcdir/bzgl.func",
            "daValue": "AccessPlan_BZG",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "others": [
                    {
                        "name": "财务经理",
                        "value": "AccessPlan_CW"
                    }
                ]
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "gw_jsy",
            assignName: "技术员",
            assignKind: ".PTM"
        },
        {
            "resId": "9964B5C9-E606-2F7C-CF87-53E8F69096EC",
            "name": "编制管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/bzManage/funcdir/bzgl.func",
            "daValue": "AccessPlan_BZG",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "others": [
                    {
                        "name": "财务经理",
                        "value": "AccessPlan_CW"
                    }
                ]
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "gw_jsy",
            assignName: "技术员",
            assignKind: ".PTM"
        },
        {
            "resId": "2F738A4E-3EE1-FF50-0C95-2166A92E5EED",
            "name": "部门管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/deptManage/funcdir/bmgl.func",
            "daValue": "AccessPlan_BMB",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BMP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BMG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BMB"
                },
                "others": [
                    {
                        "name": "财务经理",
                        "value": "AccessPlan_CW"
                    }
                ]
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "gw_jsy",
            assignName: "技术员",
            assignKind: ".PTM"
        },
    ],
    org_ry_id1001: [
        {
            "resId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "name": "系统管理",
            "parentId": "-1",
            "type": "dir",
            "resUrl": "",
        },
        {
            "resId": "4A3AACDF-781F-3CE7-5AED-252F6A17E4EE",
            "name": "单号维护流程",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "flow",
            "resUrl": "/systemplate/ptpz/xtgn/dhwh/flowdir/lc.flow",
            assignId: "org_ry_id1001",
            assignName: "张三",
            assignKind: ".PSM"
        },
        {
            "resId": "8B60A86E-7DB6-C2AC-19BA-0E2A7775C06E",
            "name": "岗位管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgn/roleManage/funcdir/gwgl.func",
            "daValue": "AccessPlan_BZQ",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "AccessPlan_CW": {
                    "name": "财务经理",
                    "value": "AccessPlan_CW",
                    "isOther": 1
                }
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "org_ry_id1001",
            assignName: "张三",
            assignKind: ".PSM"
        },
        {
            "resId": "AA8CE6D9-8DD7-F9D5-D94B-69574B825713",
            "name": "工程树管理",
            "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
            "type": "func",
            "resUrl": "/systemplate/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
            "daValue": "AccessPlan_BZP",
            "opAdd": false,
            "opEdit": false,
            "opDelete": false,
            "opExport": false,
            "daPower": {
                "personalScheme": {
                    "name": "个人",
                    "value": "AccessPlan_BZP"
                },
                "groupScheme": {
                    "name": "团队",
                    "value": "AccessPlan_BZG"
                },
                "businessScheme": {
                    "name": "企业",
                    "value": "AccessPlan_BZQ"
                },
                "AccessPlan_CW": {
                    "name": "财务经理",
                    "value": "AccessPlan_CW",
                    "isOther": 1
                }
            },
            "opPower": {
                "add": {
                    "value": 0
                },
                "edit": {
                    "value": 0
                },
                "delete": {
                    "value": 0
                },
                "export": {
                    "value": 0
                }
            },
            assignId: "org_ry_id1001",
            assignName: "张三",
            assignKind: ".PSM"
        },
    ]
}

export default [
    {
        url: '/user/check',
        type: 'get',
        response: config => {
            console.log(config.query);
            let param = config.query;
            return {
                status: 200,
                dataPack: { rows: resCheckByUser[param.userId] }
            }
        }
    },
    {
        url: '/res/check',
        type: 'get',
        response: config => {
            console.log(config.query);
            let param = config.query;
            return {
                status: 200,
                dataPack: { rows: resCheckByRes[param.resId] }
            }
        }
    },
    {
        url: '/org/modify',
        type: 'get',
        response: config => {
            console.log(config.query);
            let param = config.query;
            return {
                status: 200,
                dataPack: { rows: resCheckByOrg[param.id] }
            }
        }
    }
]
