const res1001 = [
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
]

const res1003 = [
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
]

export default [
    {
        url: '/user/check',
        type: 'get',
        response: config => {
            console.log(JSON.stringify(config));
            return {
                code: 20000,
                data: { rows: res1003 }
            }
        }
    }
]
