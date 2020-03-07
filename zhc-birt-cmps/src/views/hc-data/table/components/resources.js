export const resources = [
    {
        resId: "9964B5C9-E606-2F7C-CF87-53E8F69096EC",
        name: "编制管理",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/bzManage/funcdir/bzgl.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
        daPower: {
            personalScheme: { name: "个人", value: "AccessPlan_BZP" },
            groupScheme: { name: "团队", value: "AccessPlan_BZG" },
            businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
            others: [{
                name: "财务经理",
                value: "AccessPlan_CW"
            }]

        },
        opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
        }
    },
    {
        resId: "2F738A4E-3EE1-FF50-0C95-2166A92E5EED",
        name: "部门管理",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/deptManage/funcdir/bmgl.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
        daPower: {
            personalScheme: { name: "个人", value: "AccessPlan_BMP" },
            groupScheme: { name: "团队", value: "AccessPlan_BMG" },
            businessScheme: { name: "企业", value: "AccessPlan_BMB" },
            others: [{
                name: "财务经理",
                value: "AccessPlan_CW"
            }]
        },
        opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
        }
    },
    {
        resId: "E1989F3F-00CC-A7CE-DC77-F77D129CE23E",
        name: "测试",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "flow",
        resUrl: "/systemplate/dgcs/dhwh2/flowdir/cs.flow",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,

    },
    {
        resId: "19B9866D-B3CF-A37A-2345-A97BB34A7169",
        name: "测试菜单",
        parentId: "-1",
        type: "dir",
        resUrl: "",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "31418B1A-5253-31A2-77F6-B5F18198ABE2",
        name: "测试功能",
        parentId: "19B9866D-B3CF-A37A-2345-A97BB34A7169",
        type: "func",
        resUrl: "/systemplate/csgn/csgn/funcdir/csgn1.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
        daPower: {
            personalScheme: { name: "个人", value: "AccessPlan_BZP" },
            groupScheme: { name: "团队", value: "AccessPlan_BZG" },
            businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
            AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
            }
        },
        opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
        }
    },
    {
        resId: "23DF68DC-EEA7-41E5-0288-02AB9909CB8F",
        name: "测试流程",
        parentId: "19B9866D-B3CF-A37A-2345-A97BB34A7169",
        type: "flow",
        resUrl: "/systemplate/csgn/csgn/flowdir/cslc.flow",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "D4A11656-0318-B283-4F9C-17D0974D67C0",
        name: "单号维护",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/dhwh/funcdir/dhwhBsg.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
        daPower: {
            personalScheme: { name: "个人", value: "AccessPlan_BZP" },
            groupScheme: { name: "团队", value: "AccessPlan_BZG" },
            businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
            AccessPlan_CW: {
                name: "财务经理1",
                value: "AccessPlan_CW",
                isOther: 1
            }
        },
        opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
        }
    },
    {
        resId: "D4B13E05-932E-C3D4-A78F-4EFEFE85851E",
        name: "单号维护2",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/dgcs/dhwh2/funcdir/dhwhBsgOAk.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
        daPower: {
            personalScheme: { name: "个人", value: "AccessPlan_BZP" },
            groupScheme: { name: "团队", value: "AccessPlan_BZG" },
            businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
            AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
            }
        },
        opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
        }
    },
    {
        resId: "4A3AACDF-781F-3CE7-5AED-252F6A17E4EE",
        name: "单号维护流程",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "flow",
        resUrl: "/systemplate/ptpz/xtgn/dhwh/flowdir/lc.flow",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "8B60A86E-7DB6-C2AC-19BA-0E2A7775C06E",
        name: "岗位管理",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/roleManage/funcdir/gwgl.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
        daPower: {
            personalScheme: { name: "个人", value: "AccessPlan_BZP" },
            groupScheme: { name: "团队", value: "AccessPlan_BZG" },
            businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
            AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
            }
        },
        opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
        }
    },
    {
        resId: "projectTree",
        name: "工程树",
        parentId: "-2",
        type: "do",
        resUrl: "/amreport/designer/tree/design.do",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "AA8CE6D9-8DD7-F9D5-D94B-69574B825713",
        name: "工程树管理",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
        daPower: {
            personalScheme: { name: "个人", value: "AccessPlan_BZP" },
            groupScheme: { name: "团队", value: "AccessPlan_BZG" },
            businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
            AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
            }
        },
        opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
        }
    },
    {
        resId: "8008D1F0-E4AE-5DD1-FE19-C41A491C67FE",
        name: "功能权限查找",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/gnqxcz/func/gnqxcz.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
        daPower: {
            personalScheme: { name: "个人", value: "AccessPlan_BZP" },
            groupScheme: { name: "团队", value: "AccessPlan_BZG" },
            businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
            AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
            }
        },
        opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
        }
    },
    {
        resId: "833AE18C-0825-BA78-119B-8B55BB2E4648",
        name: "功能权限管理",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/authority/funcdir/authority.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "E665996A-B2FC-E9F1-F0C9-375BD6EB0E99",
        name: "功能权限管理(新)(单选)",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/authority2/funcdir/qxgl.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "90EB5D7A-420F-AFC5-FD50-44DEC8A483BA",
        name: "功能权限管理(新)(多选)",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/authority2/funcdir/dx.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "93E08EAD-CB5B-4BC6-A5D6-F2AE89761370",
        name: "任务中心",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "link",
        resUrl: "/bg/taskCenter/main.do",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "7B87C0D2-0237-C601-1240-AC3769828CC4",
        name: "添加菜单",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/cdgl1/func/tjcd.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        name: "系统管理",
        parentId: "-1",
        type: "dir",
        resUrl: "",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "135EC9F0-3792-EFDC-AAB8-7AC0E212C77D",
        name: "用户管理",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "C18FCA1F-045D-8DB7-4CEB-6D3F28FA0A0E",
        name: "用户管理(不含编制)",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/UserMangement/funcdir/yhgl2.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    },
    {
        resId: "EEAEF109-737A-4738-43AC-B7EF19FE0701",
        name: "组织机构",
        parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        type: "func",
        resUrl: "/systemplate/ptpz/xtgn/zzjggl/func/zzjg.func",
        daValue: "",
        opAdd: false, opEdit: false, opDelete: false, opExport: false,
    }
]