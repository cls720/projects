var orgData = [
    {
        label: "XXX集团",
        id: "jt_guid",
        pid: "-1",
        kind: ".JT"
    },
    {
        label: "XXX科技公司",
        id: "org_kjgs_guid",
        pid: "jt_guid",
        kind: ".ORG"
    },
    {
        label: "软件市场部",
        id: "dpt_xc_guid",
        pid: "org_kjgs_guid",
        kind: ".DPT"
    },
    {
        label: "销售01组",
        id: "dpt_xs01_guid",
        pid: "dpt_xc_guid",
        kind: ".DPT"
    },
    {
        label: "销售02组",
        id: "dpt_xs02_guid",
        pid: "dpt_xc_guid",
        kind: ".DPT"
    },
    {
        label: "销售03组",
        id: "dpt_xs03_guid",
        pid: "dpt_xc_guid",
        kind: ".DPT"
    },
    {
        label: "软件开发部",
        id: "dpt_kf_guid",
        pid: "org_kjgs_guid",
        kind: ".DPT"
    },
    {
        label: "开发01组",
        id: "dpt_kf01_guid",
        pid: "dpt_kf_guid",
        kind: ".DPT"
    },
    {
        label: "开发02组",
        id: "dpt_kf02_guid",
        pid: "dpt_kf_guid",
        kind: ".DPT"
    },
    {
        label: "开发03组",
        id: "dpt_kf03_guid",
        pid: "dpt_kf_guid",
        kind: ".DPT"
    },
    {
        label: "开发04组",
        id: "dpt_kf04_guid",
        pid: "dpt_kf_guid",
        kind: ".DPT"
    },
    {
        label: "软件售后部",
        id: "dpt_sh_guid",
        pid: "org_kjgs_guid",
        kind: ".DPT"
    },
    {
        label: "售后01组",
        id: "dpt_sh01_guid",
        pid: "dpt_sh_guid",
        kind: ".DPT"
    },
    {
        label: "售后02组",
        id: "dpt_sh02_guid",
        pid: "dpt_sh_guid",
        kind: ".DPT"
    }
]

var ptmData = [
    { label: "岗位", id: "gw_id", pid: "-1", kind: "DIR" },
    { label: "销售员", id: "gw_xsy", pid: "gw_id", kind: ".PTM" },
    { label: "销售组长", id: "gw_xszz", pid: "gw_id", kind: ".PTM" },
    { label: "销售经理", id: "gw_xsjl", pid: "gw_id", kind: ".PTM" },
    { label: "技术员", id: "gw_jsy", pid: "gw_id", kind: ".PTM" },
    { label: "研发工程师", id: "gw_yfgcs", pid: "gw_id", kind: ".PTM" },
    { label: "架构师", id: "gw_jgs", pid: "gw_id", kind: ".PTM" },
    { label: "售后服务员", id: "gw_shfwy", pid: "gw_id", kind: ".PTM" },
    { label: "客服经理", id: "gw_kfjl", pid: "gw_id", kind: ".PTM" },
]

var ryData = [
    { label: "人员", id: "ry_id", pid: "-1", kind: "DIR" },
    { label: "张三 1001", id: "org_ry_id1001", pid: "ry_id", kind: ".PSM" },
    { label: "李四 1003", id: "org_ry_id1003", pid: "ry_id", kind: ".PSM" },
    { label: "王五 1012", id: "org_ry_id1012", pid: "ry_id", kind: ".PSM" },
    { label: "赵六 1027", id: "org_ry_id1027", pid: "ry_id", kind: "DIR" },
    { label: "软件市场部/销售员", id: "org_ry_id1027_1", pid: "org_ry_id1027", kind: ".PSM" },
    { label: "软件售后部/服务员", id: "org_ry_id1027_2", pid: "org_ry_id1027", kind: ".PSM" },
    { label: "朱七 1033", id: "org_ry_id1033", pid: "ry_id", kind: "DIR" },
    { label: "软件开发部/技术员", id: "org_ry_id1033_1", pid: "org_ry_id1033", kind: ".PSM" },
    { label: "软件开发部/架构师", id: "org_ry_id1033_2", pid: "org_ry_id1033", kind: ".PSM" },
]

var allData = orgData.concat(ptmData).concat(ryData);


var resources = [
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
        "daValue": "",
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
        }
    },
    {
        "resId": "23DF68DC-EEA7-41E5-0288-02AB9909CB8F",
        "name": "测试流程",
        "parentId": "19B9866D-B3CF-A37A-2345-A97BB34A7169",
        "type": "flow",
        "resUrl": "/systemplate/csgn/csgn/flowdir/cslc.flow",
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
        "daValue": "",
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
        }
    },
    {
        "resId": "2F738A4E-3EE1-FF50-0C95-2166A92E5EED",
        "name": "部门管理",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/deptManage/funcdir/bmgl.func",
        "daValue": "",
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
        }
    },
    {
        "resId": "E1989F3F-00CC-A7CE-DC77-F77D129CE23E",
        "name": "测试",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "flow",
        "resUrl": "/systemplate/dgcs/dhwh2/flowdir/cs.flow",
        
    },
    {
        "resId": "D4A11656-0318-B283-4F9C-17D0974D67C0",
        "name": "单号维护",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/dhwh/funcdir/dhwhBsg.func",
        "daValue": "",
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
        }
    },
    {
        "resId": "D4B13E05-932E-C3D4-A78F-4EFEFE85851E",
        "name": "单号维护2",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/dgcs/dhwh2/funcdir/dhwhBsgOAk.func",
        "daValue": "",
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
        }
    },
    {
        "resId": "4A3AACDF-781F-3CE7-5AED-252F6A17E4EE",
        "name": "单号维护流程",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "flow",
        "resUrl": "/systemplate/ptpz/xtgn/dhwh/flowdir/lc.flow",
        
    },
    {
        "resId": "8B60A86E-7DB6-C2AC-19BA-0E2A7775C06E",
        "name": "岗位管理",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/roleManage/funcdir/gwgl.func",
        "daValue": "",
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
        }
    },
    {
        "resId": "AA8CE6D9-8DD7-F9D5-D94B-69574B825713",
        "name": "工程树管理",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
        "daValue": "",
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
        }
    },
    {
        "resId": "8008D1F0-E4AE-5DD1-FE19-C41A491C67FE",
        "name": "功能权限查找",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/gnqxcz/func/gnqxcz.func",
        "daValue": "",
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
        }
    },
    {
        "resId": "833AE18C-0825-BA78-119B-8B55BB2E4648",
        "name": "功能权限管理",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/authority/funcdir/authority.func",
        "daValue": "",
        "opAdd": false,
        "opEdit": false,
        "opDelete": false,
        "opExport": false
    },
    {
        "resId": "E665996A-B2FC-E9F1-F0C9-375BD6EB0E99",
        "name": "功能权限管理(新)(单选)",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/authority2/funcdir/qxgl.func",
        "daValue": "",
        "opAdd": false,
        "opEdit": false,
        "opDelete": false,
        "opExport": false
    },
    {
        "resId": "90EB5D7A-420F-AFC5-FD50-44DEC8A483BA",
        "name": "功能权限管理(新)(多选)",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/authority2/funcdir/dx.func",
        "daValue": "",
        "opAdd": false,
        "opEdit": false,
        "opDelete": false,
        "opExport": false
    },
    {
        "resId": "93E08EAD-CB5B-4BC6-A5D6-F2AE89761370",
        "name": "任务中心",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "link",
        "resUrl": "/bg/taskCenter/main.do",
       
    },
    {
        "resId": "7B87C0D2-0237-C601-1240-AC3769828CC4",
        "name": "添加菜单",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/cdgl1/func/tjcd.func",
        "daValue": "",
        "opAdd": false,
        "opEdit": false,
        "opDelete": false,
        "opExport": false
    },
    {
        "resId": "135EC9F0-3792-EFDC-AAB8-7AC0E212C77D",
        "name": "用户管理",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/UserMangement/funcdir/yhgl.func",
        "daValue": "",
        "opAdd": false,
        "opEdit": false,
        "opDelete": false,
        "opExport": false
    },
    {
        "resId": "C18FCA1F-045D-8DB7-4CEB-6D3F28FA0A0E",
        "name": "用户管理(不含编制)",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/UserMangement/funcdir/yhgl2.func",
        "daValue": "",
        "opAdd": false,
        "opEdit": false,
        "opDelete": false,
        "opExport": false
    },
    {
        "resId": "EEAEF109-737A-4738-43AC-B7EF19FE0701",
        "name": "组织机构",
        "parentId": "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
        "type": "func",
        "resUrl": "/systemplate/ptpz/xtgn/zzjggl/func/zzjg.func",
        "daValue": "",
        "opAdd": false,
        "opEdit": false,
        "opDelete": false,
        "opExport": false
    }
]

var birtModel = {
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
                    controlId: "dsOrg",
                    datas: allData
                },
                {
                    controlName: "JsWebSocketDataSet",
                    controlId: "dsRes",
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
                            controlId: "ElRow_r1",
                            gutter: 10,
                            children: [
                                {
                                    controlName: "ElCol",
                                    controlId: "ElCol_r1_c1",
                                    span: 20,
                                    children: [
                                        {
                                            controlName: "HcSteps",
                                            controlId: "HcSteps_1",
                                            simple: true,
                                            active: 3,
                                            style: "color:black;",
                                            children: [
                                                {
                                                    controlName: "HcStep",
                                                    controlId: "HcStep_1",
                                                    title: "选择分配对象",
                                                    icon: "el-icon-user",
                                                    status: "process"
                                                },
                                                {
                                                    controlName: "HcStep",
                                                    controlId: "HcStep_2",
                                                    title: "选择预分配功能",
                                                    icon: "el-icon-s-order",
                                                    status: "process"
                                                },
                                                {
                                                    controlName: "HcStep",
                                                    controlId: "HcStep_3",
                                                    title: "分配数据权限、操作权限",
                                                    icon: "el-icon-key",
                                                    status: "process",
                                                    style: "color:red"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    controlName: "ElCol",
                                    controlId: "ElCol_r1_c2",
                                    span: 4,
                                    children: [
                                        {
                                            controlName: "HcButton",
                                            controlId: "HcButton_save",
                                            title: "保存",
                                            type: "primary",
                                            icon: "el-icon-s-claim",
                                            disabled: false,
                                            style: "width:95%;font-size:16px;",
                                            events: {
                                                click: function () {
                                                    debugger;
                                                    let orgData = this.getWorkBook().dataset.dsOrg.datas.filter(
                                                        function (recd) {
                                                            return recd._checked;
                                                        }
                                                    );
                                                    let chkClearorg = this.getRefCompt(
                                                        "HcCheckbox_clearorg"
                                                    ).conf.value;
                                                    let chkClearres = this.getRefCompt(
                                                        "HcCheckbox_clearres"
                                                    ).conf.value;

                                                    const h = this.$createElement;
                                                    let message = [
                                                        h(
                                                            "span",
                                                            {
                                                                style: "line-height:30px;font-size:16px;"
                                                            },
                                                            "是否确认保存?"
                                                        )
                                                    ];
                                                    if (chkClearorg) {
                                                        message.push(h("br", null, ""));
                                                        message.push(h("i", "确定"));
                                                        message.push(
                                                            h(
                                                                "i",
                                                                { style: "color: red" },
                                                                "分配对象“清空添加”"
                                                            )
                                                        );
                                                        message.push(
                                                            h(
                                                                "i",
                                                                "，即将清空已选组织人员的所有权限，重新分配当前权限"
                                                            )
                                                        );
                                                    }
                                                    if (
                                                        this.getRefCompt("HcCheckbox_clearres").conf
                                                            .value
                                                    ) {
                                                        message.push(h("br", null, ""));
                                                        message.push(h("i", "确定"));
                                                        message.push(
                                                            h(
                                                                "i",
                                                                { style: "color: red" },
                                                                "分配功能“清空添加"
                                                            )
                                                        );
                                                        message.push(
                                                            h(
                                                                "i",
                                                                "，即将清空已选功能菜单的所有权限，重新分配当前权限"
                                                            )
                                                        );
                                                    }
                                                    this.$msgbox({
                                                        title: "保存确认",
                                                        message: h("p", null, message),
                                                        showCancelButton: true,
                                                        confirmButtonText: "保存",
                                                        cancelButtonText: "取消",
                                                        beforeClose: (action, instance, done) => {
                                                            if (action === "confirm") {
                                                                instance.confirmButtonLoading = true;
                                                                instance.confirmButtonText = "执行中...";
                                                                setTimeout(() => {
                                                                    done();
                                                                    setTimeout(() => {
                                                                        instance.confirmButtonLoading = false;
                                                                    }, 300);
                                                                }, 3000);
                                                            } else {
                                                                done();
                                                            }
                                                        }
                                                    }).then(action => {
                                                        this.$message({
                                                            type: "info",
                                                            message: "保存成功"
                                                        });
                                                    });
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            controlName: "ElRow",
                            controlId: "ElRow_r2",
                            gutter: 10,
                            style: "margin-top:20px;",
                            children: [
                                {
                                    controlName: "ElCol",
                                    controlId: "ElCol_r2_c1",
                                    span: 6,
                                    children: [
                                        {
                                            controlName: "HcInputFilter",
                                            controlId: "HcInputFilter_org",
                                            size: "medium",
                                            events: {
                                                filterChange: function (filterKey, datas) {
                                                    debugger;
                                                    this.getRefCompt("HcTree_org").filter(
                                                        filterKey
                                                    );
                                                }
                                            }
                                        },
                                        {
                                            controlName: "ElRow",
                                            controlId: "ElRow_org_toolbar",
                                            style: "margin-top:10px",
                                            children: [
                                                {
                                                    controlName: "ElCol",
                                                    controlId: "ElCol_ct_1",
                                                    span: 8,
                                                    style: "line-height:30px",
                                                    children: [
                                                        {
                                                            controlName: "HcCheckbox",
                                                            controlId: "HcCheckbox_clearorg",
                                                            border: true,
                                                            size: "small",
                                                            style:
                                                                "width:90px;color:red;background-color: #DCDFE6;",
                                                            title: "清空添加",
                                                            events: {
                                                                change: function (val) {
                                                                    if (val) {
                                                                        this.$message({
                                                                            dangerouslyUseHTMLString: true,
                                                                            message:
                                                                                "<font color='red' size=4>您已选择“清空添加”，即将清空“已选分配对象”原有的所有权限，<br><br>重新分配当前权限，请<strong>慎用</strong></font>",
                                                                            type: "warning",
                                                                            showClose: true,
                                                                            duration: 0,
                                                                            offset: 200
                                                                        });
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    controlName: "ElCol",
                                                    controlId: "ElCol_ct_2",
                                                    span: 16,
                                                    style: "text-align:right;",
                                                    children: [
                                                        {
                                                            controlName: "HcRadioGroup",
                                                            controlId: "HcRadioGroup_1",
                                                            value: "0",
                                                            size: "small",
                                                            children: [
                                                                {
                                                                    controlName: "HcRadioButton",
                                                                    controlId: "HcRadioButton_1",
                                                                    label: "1",
                                                                    title: "已选"
                                                                },
                                                                {
                                                                    controlName: "HcRadioButton",
                                                                    controlId: "HcRadioButton_2",
                                                                    label: "2",
                                                                    title: "未选"
                                                                },
                                                                {
                                                                    controlName: "HcRadioButton",
                                                                    controlId: "HcRadioButton_0",
                                                                    label: "0",
                                                                    title: "全部"
                                                                }
                                                            ],
                                                            events: {
                                                                change: function (val) {
                                                                    debugger;
                                                                    this.getRefCompt("HcTree_org").filter(
                                                                        val
                                                                    );
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            controlName: "HcTree",
                                            controlId: "HcTree_org",
                                            dataset: "dsOrg",
                                            isTreeData: false,
                                            idField: "id",
                                            parentIdField: "pid",
                                            labelField: "label",
                                            showCheckbox: true,
                                            filterNodeMethod: function (value, data, node) {
                                                debugger;
                                                if (!value || value === "0") return true;
                                                if (value === "1") return node.checked;
                                                if (value === "2") return !node.checked;
                                                let key =
                                                    node.label +
                                                    "_" +
                                                    pinyin.getCamelChars(node.label);
                                                return key.indexOf(value.toUpperCase()) !== -1;
                                            },
                                            height: function (parentHeight) {
                                                debugger;
                                                return parentHeight - 210;
                                            },
                                            style:
                                                "margin-top:10px;overflow: auto;border:1px solid rgb(235, 238, 245)",
                                            events: {
                                                checkChange: function (data, checked, node) {
                                                    debugger;
                                                    let checkNodes = this.$refs.eltree.getCheckedNodes(
                                                        false,
                                                        true
                                                    );
                                                    let keys = [];
                                                    checkNodes.forEach(recd => {
                                                        keys.push(recd.id);
                                                    });
                                                    this.setDatasChecked(keys);
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    controlName: "ElCol",
                                    controlId: "ElCol_r2_c2",
                                    span: 18,
                                    children: [
                                        {
                                            controlName: "HcTable",
                                            controlId: "HcTable_res",
                                            dataset: "dsRes",
                                            rowKey: "resId",
                                            idField: "resId",
                                            parentIdField: "parentId",
                                            defaultExpandAll: true,
                                            height: function (parentHeight) {
                                                debugger;
                                                return parentHeight - 120;
                                            },
                                            children: [
                                                {
                                                    controlName: "HcTableColumn",
                                                    controlId: "HcTableColumn_0",
                                                    prop: "name",
                                                    label: "功能名称",
                                                    minWidth: 300,
                                                    children: [
                                                        {
                                                            controlName: "HcInputFilter",
                                                            controlId: "HcInputFilter_res",
                                                            slot: "header",
                                                            size: "small",
                                                            placeholder: "功能名称",
                                                            events: {
                                                                filterChange: function (filterKey, datas) {
                                                                    debugger;
                                                                    let hcTable = this.getRefCompt(
                                                                        "HcTable_res"
                                                                    );
                                                                    if (filterKey) {
                                                                        hcTable.$set(
                                                                            hcTable.filterConf,
                                                                            "name",
                                                                            function filterRecd(recd) {
                                                                                debugger;
                                                                                return (
                                                                                    recd.name.indexOf(filterKey) >=
                                                                                    0
                                                                                );
                                                                            }
                                                                        );
                                                                    } else {
                                                                        hcTable.$delete(
                                                                            hcTable.filterConf,
                                                                            "name"
                                                                        );
                                                                    }
                                                                }
                                                            },
                                                            children: [
                                                                {
                                                                    controlName: "HcButton",
                                                                    controlId: "HcButton_opendialog",
                                                                    title: "",
                                                                    icon: "el-icon-edit",
                                                                    events: {
                                                                        click: function () {
                                                                            debugger;
                                                                            let resKeys = [];
                                                                            this.getWorkBook().dataset.dsRes.datas.forEach(
                                                                                recd => {
                                                                                    if (recd.type != "dir")
                                                                                        resKeys.push(recd.resId);
                                                                                }
                                                                            );
                                                                            this.getRefCompt(
                                                                                "HcDialog_res"
                                                                            ).doOpen({
                                                                                resIds: resKeys
                                                                            });
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            controlName: "ElRow",
                                                            controlId: "ElRow_ck_type",
                                                            slot: "header",
                                                            style: "margin-top:10px;",
                                                            children: [
                                                                {
                                                                    controlName: "ElCol",
                                                                    controlId: "ElCol_ck",
                                                                    span: 8,
                                                                    children: [
                                                                        {
                                                                            controlName: "HcCheckbox",
                                                                            controlId: "HcCheckbox_clearres",
                                                                            size: "small",
                                                                            style:
                                                                                "width:90px;margin-top:5px;color:red;",
                                                                            title: "清空添加",
                                                                            events: {
                                                                                change: function (val) {
                                                                                    if (val) {
                                                                                        this.$message({
                                                                                            dangerouslyUseHTMLString: true,
                                                                                            message:
                                                                                                "<font color='red' size=4>您已选择“清空添加”，即将清空“已选功能菜单”原有的所有权限，<br><br>重新分配当前权限，请<strong>慎用</strong></font>",
                                                                                            type: "warning",
                                                                                            showClose: true,
                                                                                            duration: 0,
                                                                                            offset: 200
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    controlName: "ElCol",
                                                                    controlId: "ElCol_type",
                                                                    span: 16,
                                                                    style: "text-align:right",
                                                                    children: [
                                                                        {
                                                                            controlName: "HcRadioGroup",
                                                                            controlId: "HcRadioGroup_1",
                                                                            value: "all",
                                                                            size: "small",
                                                                            children: [
                                                                                {
                                                                                    controlName: "HcRadioButton",
                                                                                    controlId: "HcRadioButton_func",
                                                                                    label: "func",
                                                                                    title: "功能"
                                                                                },
                                                                                {
                                                                                    controlName: "HcRadioButton",
                                                                                    controlId: "HcRadioButton_flow",
                                                                                    label: "flow",
                                                                                    title: "流程"
                                                                                },
                                                                                {
                                                                                    controlName: "HcRadioButton",
                                                                                    controlId: "HcRadioButton_all",
                                                                                    label: "all",
                                                                                    title: "全部"
                                                                                }
                                                                            ],
                                                                            events: {
                                                                                change: function (filterKey) {
                                                                                    let hcTable = this.getRefCompt(
                                                                                        "HcTable_res"
                                                                                    );
                                                                                    if (filterKey != "all") {
                                                                                        hcTable.$set(
                                                                                            hcTable.filterConf,
                                                                                            "type",
                                                                                            function filterRecd(recd) {
                                                                                                debugger;
                                                                                                return (
                                                                                                    recd.type === filterKey
                                                                                                );
                                                                                            }
                                                                                        );
                                                                                    } else {
                                                                                        hcTable.$delete(
                                                                                            hcTable.filterConf,
                                                                                            "type"
                                                                                        );
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    controlName: "HcTableColumn",
                                                    controlId: "HcTableColumn_2",
                                                    label: "数据权限分配",
                                                    children: [
                                                        {
                                                            controlName: "HcTableColumnRadio",
                                                            controlId: "HcTableColumn_2_1",
                                                            isShow: function (row) {
                                                                if (row.daPower) {
                                                                    return true;
                                                                } else {
                                                                    return false;
                                                                }
                                                            },
                                                            prop: "daValue",
                                                            radioValue: "daPower.personalScheme.value",
                                                            label: "个人",
                                                            width: 75
                                                        },
                                                        {
                                                            controlName: "HcTableColumnRadio",
                                                            controlId: "HcTableColumn_2_2",
                                                            isShow: function (row) {
                                                                if (row.daPower) {
                                                                    return true;
                                                                } else {
                                                                    return false;
                                                                }
                                                            },
                                                            prop: "daValue",
                                                            radioValue: "daPower.groupScheme.value",
                                                            label: "团队",
                                                            width: 75
                                                        },
                                                        {
                                                            controlName: "HcTableColumnRadio",
                                                            controlId: "HcTableColumn_2_3",
                                                            isShow: function (row) {
                                                                if (row.daPower) {
                                                                    return true;
                                                                } else {
                                                                    return false;
                                                                }
                                                            },
                                                            prop: "daValue",
                                                            radioValue: "daPower.businessScheme.value",
                                                            label: "企业",
                                                            width: 75
                                                        },
                                                        {
                                                            controlName: "HcTableColumnRadio",
                                                            controlId: "HcTableColumn_2_4",
                                                            isShow: function (row) {
                                                                if (row.daPower && row.daPower.others) {
                                                                    return true;
                                                                } else {
                                                                    return false;
                                                                }
                                                            },
                                                            showCheckAll: false,
                                                            prop: "daValue",
                                                            radioValue: "daPower.others",
                                                            label: "其它",
                                                            width: 90
                                                        }
                                                    ]
                                                },
                                                {
                                                    controlName: "HcTableColumn",
                                                    controlId: "HcTableColumn_3",
                                                    label: "操作权限分配",
                                                    width: 200,
                                                    children: [
                                                        {
                                                            controlName: "HcTableColumnCheckbox",
                                                            controlId: "HcTableColumn_3_1",
                                                            isShow: function (row) {
                                                                if (row.opPower) {
                                                                    return true;
                                                                } else {
                                                                    return false;
                                                                }
                                                            },
                                                            prop: "opAdd",
                                                            label: "添加",
                                                            width: 75
                                                        },
                                                        {
                                                            controlName: "HcTableColumnCheckbox",
                                                            controlId: "HcTableColumn_3_2",
                                                            isShow: function (row) {
                                                                if (row.opPower) {
                                                                    return true;
                                                                } else {
                                                                    return false;
                                                                }
                                                            },
                                                            prop: "opEdit",
                                                            label: "修改",
                                                            width: 75
                                                        },
                                                        {
                                                            controlName: "HcTableColumnCheckbox",
                                                            controlId: "HcTableColumn_3_3",
                                                            isShow: function (row) {
                                                                if (row.opPower) {
                                                                    return true;
                                                                } else {
                                                                    return false;
                                                                }
                                                            },
                                                            prop: "opDelete",
                                                            label: "删除",
                                                            width: 75
                                                        },
                                                        {
                                                            controlName: "HcTableColumnCheckbox",
                                                            controlId: "HcTableColumn_3_4",
                                                            isShow: function (row) {
                                                                if (row.opPower) {
                                                                    return true;
                                                                } else {
                                                                    return false;
                                                                }
                                                            },
                                                            prop: "opExport",
                                                            label: "导出",
                                                            width: 75
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            controlName: "HcDialog",
                            controlId: "HcDialog_res",
                            visible: false,
                            title: "选择资源树",
                            footer: ["cancel", "confirm"],
                            events: {
                                confirm: function () {
                                    {
                                        let retuData = this.getContent().dataset.dsRes.datas.filter(
                                            function (recd) {
                                                return recd._checked;
                                            }
                                        );
                                        debugger;
                                        this.getWorkBook().dataset.dsRes.setData(retuData);
                                    }
                                }
                            },
                            children: [
                                {
                                    controlName: "BirtWorkBook",
                                    controlId: "BirtWorkBook_0",
                                    showToolBar: false,
                                    totalPage: 1,
                                    renderType: "pages",
                                    height: 300,
                                    children: [
                                        {
                                            controlName: "BirtSheet",
                                            controlId: "BirtSheet_0",
                                            name: "sheet0", //配置页,children为其算法分页，如插入分页符或A4纸数据过长换页
                                            pageIndex: 0,
                                            dataSets: [
                                                {
                                                    controlName: "JsWebSocketDataSet",
                                                    controlId: "dsRes",
                                                    datas: resources
                                                }
                                            ],
                                            children: [
                                                {
                                                    controlName: "BirtFormSheet",
                                                    controlId: "BirtFormSheet_02",
                                                    children: [
                                                        {
                                                            controlName: "HcInputFilter",
                                                            controlId: "HcInputFilter_diaog_res",
                                                            size: "medium",
                                                            events: {
                                                                filterChange: function (filterKey, datas) {
                                                                    debugger;
                                                                    this.getRefCompt("HcTree_res").filter(
                                                                        filterKey
                                                                    );
                                                                }
                                                            }
                                                        },
                                                        {
                                                            controlName: "ElRow",
                                                            controlId: "ElRow_org_toolbar",
                                                            style: "margin-top:10px;text-align:right;",
                                                            children: [
                                                                {
                                                                    controlName: "HcRadioGroup",
                                                                    controlId: "HcRadioGroup_1",
                                                                    value: "0",
                                                                    size: "small",
                                                                    children: [
                                                                        {
                                                                            controlName: "HcRadioButton",
                                                                            controlId: "HcRadioButton_1",
                                                                            label: "1",
                                                                            title: "已选"
                                                                        },
                                                                        {
                                                                            controlName: "HcRadioButton",
                                                                            controlId: "HcRadioButton_2",
                                                                            label: "2",
                                                                            title: "未选"
                                                                        },
                                                                        {
                                                                            controlName: "HcRadioButton",
                                                                            controlId: "HcRadioButton_0",
                                                                            label: "0",
                                                                            title: "全部"
                                                                        }
                                                                    ],
                                                                    events: {
                                                                        change: function (val) {
                                                                            this.getRefCompt(
                                                                                "HcTree_res"
                                                                            ).filter(val);
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            controlName: "HcTree",
                                                            controlId: "HcTree_res",
                                                            dataset: "dsRes",
                                                            isTreeData: false,
                                                            idField: "resId",
                                                            parentIdField: "parentId",
                                                            labelField: "name",
                                                            showCheckbox: true,
                                                            defaultExpandAll: true,
                                                            filterNodeMethod: function (
                                                                value,
                                                                data,
                                                                node
                                                            ) {
                                                                debugger;
                                                                if (!value || value === "0") return true;
                                                                if (value === "1") return node.checked;
                                                                if (value === "2") return !node.checked;
                                                                let key =
                                                                    node.label +
                                                                    "_" +
                                                                    pinyin.getCamelChars(node.label);
                                                                return (
                                                                    key.indexOf(value.toUpperCase()) !== -1
                                                                );
                                                            },
                                                            events: {
                                                                checkChange: function (
                                                                    data,
                                                                    checked,
                                                                    node
                                                                ) {
                                                                    debugger;
                                                                    let checkNodes = this.$refs.eltree.getCheckedNodes(
                                                                        false,
                                                                        true
                                                                    );
                                                                    let keys = [];
                                                                    checkNodes.forEach(recd => {
                                                                        keys.push(recd.resId);
                                                                    });
                                                                    this.setDatasChecked(keys);
                                                                }
                                                            },
                                                            mounted: function () {
                                                                this.getRefCompt("BirtWorkBook_0").on(
                                                                    "afterLoad",
                                                                    doPageAfterLoad
                                                                );
                                                                let me = this;
                                                                function doPageAfterLoad(param) {
                                                                    debugger;
                                                                    me.$refs.eltree.setCheckedKeys(
                                                                        param.resIds
                                                                    );
                                                                }
                                                            }
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