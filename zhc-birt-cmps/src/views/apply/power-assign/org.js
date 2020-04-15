export const orgData = [
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

export const ptmData = [
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

export const ryData = [
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

export const allData = [
    {
        "kind": ".OGNROOT",
        "pid": "-1",
        "id": "0009F370-6801-4DDE-AC26-061BC66D61B3",
        "label": "组织机构",
        "nodeType": "org",
        "orgId": "ORGANIZE"
    },
    {
        "kind": ".ORG",
        "pid": "58f6cc3e-ce30-11e8-96b5-005056ba54a4",
        "id": "0482bd0a-d2e4-11e8-96b5-005056ba54a4",
        "label": "L公司",
        "nodeType": "org",
        "orgId": ".CLJT.LGS"
    },
    {
        "kind": ".DPT",
        "pid": "0482bd0a-d2e4-11e8-96b5-005056ba54a4",
        "id": "0dc9ab18-d2e4-11e8-96b5-005056ba54a4",
        "label": "L部门1",
        "nodeType": "org",
        "orgId": ".CLJT.LGS.LBM1"
    },
    {
        "kind": ".ORG",
        "pid": "86f93ba4-c325-11e8-96b5-005056ba54a4",
        "id": "1cb95675-c34c-11e8-96b5-005056ba54a4",
        "label": "L公司",
        "nodeType": "org",
        "orgId": ".WLDJT.WGS.WBM1.LGS"
    },
    {
        "kind": ".DPT",
        "pid": "0009F370-6801-4DDE-AC26-061BC66D61B3",
        "id": "4dbc3f48-1b2c-11e9-b189-005056ba54a4",
        "label": "PAAS开发平台",
        "nodeType": "org",
        "orgId": ".PAASKFPT"
    },
    {
        "kind": ".JT",
        "pid": "0009F370-6801-4DDE-AC26-061BC66D61B3",
        "id": "4f209031-c289-11e8-96b5-005056ba54a4",
        "label": "B集团",
        "nodeType": "org",
        "orgId": ".BJT"
    },
    {
        "kind": ".DPT",
        "pid": "0009F370-6801-4DDE-AC26-061BC66D61B3",
        "id": "5384059b-ecf0-11e8-bd99-005056ba54a4",
        "label": "计算机部",
        "nodeType": "org",
        "orgId": ".JSJB"
    },
    {
        "kind": ".JT",
        "pid": "0009F370-6801-4DDE-AC26-061BC66D61B3",
        "id": "5440bc61-1a68-11e9-b189-005056ba54a4",
        "label": "dfsa",
        "nodeType": "org",
        "orgId": ".DFSA"
    },
    {
        "kind": ".JT",
        "pid": "0009F370-6801-4DDE-AC26-061BC66D61B3",
        "id": "58f6cc3e-ce30-11e8-96b5-005056ba54a4",
        "label": "CL集团",
        "nodeType": "org",
        "orgId": ".CLJT"
    },
    {
        "kind": ".ORG",
        "pid": "4f209031-c289-11e8-96b5-005056ba54a4",
        "id": "6056f280-02c7-11e9-903d-005056ba54a4",
        "label": "B公司",
        "nodeType": "org",
        "orgId": ".BJT.BGS"
    },
    {
        "kind": ".DPT",
        "pid": "6056f280-02c7-11e9-903d-005056ba54a4",
        "id": "6813e2a1-02c7-11e9-903d-005056ba54a4",
        "label": "B部门",
        "nodeType": "org",
        "orgId": ".BJT.BGS.BBM"
    },
    {
        "kind": ".ORG",
        "pid": "ad4e898b-e387-11e8-bd99-005056ba54a4",
        "id": "7ac2efad-1a68-11e9-b189-005056ba54a4",
        "label": "asdhbzdfn",
        "nodeType": "org",
        "orgId": ".ZXCBXCB.ASDHBZDFN"
    },
    {
        "kind": ".JT",
        "pid": "0009F370-6801-4DDE-AC26-061BC66D61B3",
        "id": "86f93ba4-c325-11e8-96b5-005056ba54a4",
        "label": "WLD集团",
        "nodeType": "org",
        "orgId": ".WLDJT"
    },
    {
        "kind": ".ORG",
        "pid": "7ac2efad-1a68-11e9-b189-005056ba54a4",
        "id": "9709dca5-1a68-11e9-b189-005056ba54a4",
        "label": "ahh",
        "nodeType": "org",
        "orgId": ".ZXCBXCB.ASDHBZDFN.AHH"
    },
    {
        "kind": ".DPT",
        "pid": "c8a5dbb1-c325-11e8-96b5-005056ba54a4",
        "id": "a87dc5b6-c330-11e8-96b5-005056ba54a4",
        "label": "W部门3",
        "nodeType": "org",
        "orgId": ".WLDJT.WGS.WBM3"
    },
    {
        "kind": ".JT",
        "pid": "0009F370-6801-4DDE-AC26-061BC66D61B3",
        "id": "ad4e898b-e387-11e8-bd99-005056ba54a4",
        "label": "zxcbxcb",
        "nodeType": "org",
        "orgId": ".ZXCBXCB"
    },
    {
        "kind": ".DPT",
        "pid": "9709dca5-1a68-11e9-b189-005056ba54a4",
        "id": "b8e38602-1a68-11e9-b189-005056ba54a4",
        "label": "xzbad",
        "nodeType": "org",
        "orgId": ".ZXCBXCB.ASDHBZDFN.AHH.XZBAD"
    },
    {
        "kind": ".ORG",
        "pid": "86f93ba4-c325-11e8-96b5-005056ba54a4",
        "id": "bcf65b67-c34c-11e8-96b5-005056ba54a4",
        "label": "D公司",
        "nodeType": "org",
        "orgId": ".WLDJT.DGS"
    },
    {
        "kind": ".DPT",
        "pid": "bcf65b67-c34c-11e8-96b5-005056ba54a4",
        "id": "c1cf2494-cbf3-11e8-96b5-005056ba54a4",
        "label": "D部门2",
        "nodeType": "org",
        "orgId": ".WLDJT.DGS.DBM2"
    },
    {
        "kind": ".DPT",
        "pid": "c8a5dbb1-c325-11e8-96b5-005056ba54a4",
        "id": "c4ba2b09-c326-11e8-96b5-005056ba54a4",
        "label": "W部门1",
        "nodeType": "org",
        "orgId": ".WLDJT.WGS.WBM1"
    },
    {
        "kind": ".JT",
        "pid": "0009F370-6801-4DDE-AC26-061BC66D61B3",
        "id": "c6dfbfad-c288-11e8-96b5-005056ba54a4",
        "label": "A集团",
        "nodeType": "org",
        "orgId": ".AJT"
    },
    {
        "kind": ".ORG",
        "pid": "86f93ba4-c325-11e8-96b5-005056ba54a4",
        "id": "c8a5dbb1-c325-11e8-96b5-005056ba54a4",
        "label": "W公司",
        "nodeType": "org",
        "orgId": ".WLDJT.WGS"
    },
    {
        "kind": ".DPT",
        "pid": "c8a5dbb1-c325-11e8-96b5-005056ba54a4",
        "id": "cdb12774-c34c-11e8-96b5-005056ba54a4",
        "label": "D部门1",
        "nodeType": "org",
        "orgId": ".WLDJT.DGS.DBM1"
    },
    {
        "kind": ".DPT",
        "pid": "c8a5dbb1-c325-11e8-96b5-005056ba54a4",
        "id": "cf7cf457-c326-11e8-96b5-005056ba54a4",
        "label": "W部门2修改23245",
        "nodeType": "org",
        "orgId": ".WLDJT.WGS.WBM2"
    },
    {
        "kind": ".ORG",
        "pid": "c6dfbfad-c288-11e8-96b5-005056ba54a4",
        "id": "e9ffe044-c288-11e8-96b5-005056ba54a4",
        "label": "AA公司",
        "nodeType": "org",
        "orgId": ".AJT.AAGS"
    },
    {
        "kind": ".DPT",
        "pid": "c8a5dbb1-c325-11e8-96b5-005056ba54a4",
        "id": "f68fc775-d2e1-11e8-96b5-005056ba54a4",
        "label": "部门4修改2",
        "nodeType": "org",
        "orgId": ".WLDJT.WGS.BM4"
    },
    {
        "kind": "DIR",
        "roleKey": "",
        "pid": "-1",
        "id": "rootPtmNode",
        "label": "岗位",
        "nodeType": "dir"
    },
    {
        "kind": ".PTM",
        "roleKey": "HQRY",
        "pid": "DC188E90-414C-7497-1F79-A2AAC05C21CE",
        "id": "0D4CF4D8-DA97-6444-0B52-4234E2528FF8",
        "label": "后勤人员",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "5",
        "pid": "rootPtmNode",
        "id": "0E432F6D-9ED9-6B86-59A8-B9F577AE3043",
        "label": "5",
        "nodeType": "role"
    },
    {
        "kind": ".WG",
        "roleKey": "CC",
        "pid": "rootPtmNode",
        "id": "1AE5CDEA-E6BF-38B7-DABE-5E484C899AC2",
        "label": "cc",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "6",
        "pid": "rootPtmNode",
        "id": "27D6433F-D9AC-E3D3-4044-138D9FDCA6B6",
        "label": "6",
        "nodeType": "role"
    },
    {
        "kind": ".WG",
        "roleKey": "CSTD222",
        "pid": "rootPtmNode",
        "id": "3A8B3F96-2766-E8ED-DB96-F73EAD579312",
        "label": "测试团队222",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "LB",
        "pid": "DC188E90-414C-7497-1F79-A2AAC05C21CE",
        "id": "3E8BACC9-F34E-CF14-6BAE-C15B1EDF9AD1",
        "label": "老板",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "BJRY",
        "pid": "DC188E90-414C-7497-1F79-A2AAC05C21CE",
        "id": "577D232C-1F90-9B02-1970-C015F2192550",
        "label": "保洁人员",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "98",
        "pid": "rootPtmNode",
        "id": "587FBFBB-4554-30B3-C109-6F2643071E09",
        "label": "98",
        "nodeType": "role"
    },
    {
        "kind": ".WG",
        "roleKey": "BB",
        "pid": "rootPtmNode",
        "id": "5C3697A2-A863-9C75-61BD-6E14FE3008F3",
        "label": "bb",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "GLY",
        "pid": "rootPtmNode",
        "id": "6A12D851-DB60-983F-565A-697A8244BFAF",
        "label": "管理员",
        "nodeType": "role"
    },
    {
        "kind": ".WG",
        "roleKey": "AA",
        "pid": "rootPtmNode",
        "id": "6DED29E3-9E41-765A-17B0-2B081CB8F818",
        "label": "aa",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "HZRY",
        "pid": "DC188E90-414C-7497-1F79-A2AAC05C21CE",
        "id": "794CF203-A964-6951-9431-10751901980B",
        "label": "行政人员",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "WLDGW1",
        "pid": "rootPtmNode",
        "id": "799FB5AD-D2E3-544F-B244-5946954DD710",
        "label": "WLD岗位1",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "EAPGUEST",
        "pid": "rootPtmNode",
        "id": "80CCFB2C-CCC8-1967-A0C0-6926A447AEAD",
        "label": "EAP注册会员",
        "nodeType": "role"
    },
    {
        "kind": ".WG",
        "roleKey": "CSTD3",
        "pid": "rootPtmNode",
        "id": "999C4B40-A606-E392-11B8-6C1D438FF96F",
        "label": "测试团队3",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "WLDGW2",
        "pid": "rootPtmNode",
        "id": "9D821B5B-1B4D-6B20-C6F3-3C3A3E20D8AE",
        "label": "WLD岗位2修改",
        "nodeType": "role"
    },
    {
        "kind": ".DIR",
        "roleKey": "WLDJTGWML",
        "pid": "rootPtmNode",
        "id": "9E799230-942C-2125-DA05-9D12A021BFAB",
        "label": "WLD集团岗位目录",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "11",
        "pid": "rootPtmNode",
        "id": "A4DFF451-FB91-AF69-4311-28AF4F1EE789",
        "label": "11",
        "nodeType": "role"
    },
    {
        "kind": ".WG",
        "roleKey": "CSTD",
        "pid": "DC188E90-414C-7497-1F79-A2AAC05C21CE",
        "id": "AA6F470B-617D-C83B-5BDC-1EFF480FA76B",
        "label": "测试团队",
        "nodeType": "role"
    },
    {
        "kind": ".WG",
        "roleKey": "CSTD1",
        "pid": "rootPtmNode",
        "id": "D1F2B7D2-AAD1-73DA-1E3F-CB79D832849A",
        "label": "测试团队1",
        "nodeType": "role"
    },
    {
        "kind": ".DIR",
        "roleKey": "AJTGW",
        "pid": "rootPtmNode",
        "id": "DC188E90-414C-7497-1F79-A2AAC05C21CE",
        "label": "A集团岗位目录",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "JSY",
        "pid": "DC188E90-414C-7497-1F79-A2AAC05C21CE",
        "id": "DF372AE6-225A-8CBD-FD70-A3D3D4289CE8",
        "label": "技术员",
        "nodeType": "role"
    },
    {
        "kind": ".PTM",
        "roleKey": "14",
        "pid": "rootPtmNode",
        "id": "E768AD7D-A4E9-5209-68ED-66E1A682B93C",
        "label": "14",
        "nodeType": "role"
    },
    {
        "kind": "DIR",
        "pid": "-1",
        "id": "userDirRootNode",
        "label": "人员",
        "nodeType": "dir",
        "userName": ""
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "e64d64b9-d181-11e7-94f7-005056ba50c2",
        "label": "管理员",
        "nodeType": "dir",
        "userName": "admin"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "97C4457F-8173-EC75-8FC1-3ED62EEB557F",
        "label": "xzcbxcba",
        "nodeType": "dir",
        "userName": "cxv"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "C26A47D3-CFAD-A4C5-55F5-1F03F01B9A58",
        "label": "test11",
        "nodeType": "dir",
        "userName": "test1"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "F30C5E31-AB1E-0813-5E03-D80A217B36E3",
        "label": "li",
        "nodeType": "dir",
        "userName": "10439"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "cacfa0b5-2a57-421f-9d5c-abda1db52067",
        "label": "test1111",
        "nodeType": "dir",
        "userName": "test1111"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "A6927117-296F-4397-8F89-2709B8A2BFF7",
        "label": "tset1",
        "nodeType": "dir",
        "userName": "20355"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "DA9F678E-92C7-D572-26C8-C76AEF155D41",
        "label": "陈新",
        "nodeType": "dir",
        "userName": "00001"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "6701c6c1-2788-419f-a9d3-fc8ca4247130",
        "label": "test3",
        "nodeType": "dir",
        "userName": "test3"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "883AA180-4F0A-FE07-80AA-2F0B7131199B",
        "label": "1234",
        "nodeType": "dir",
        "userName": "1234"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "02c940f8-d117-4ba6-a6e6-c356e6c7f3be",
        "label": "aaaacbawe",
        "nodeType": "dir",
        "userName": "aaaacbawe"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "dd5919b4-99e7-4990-8ea9-0d0d4aed4b9f",
        "label": "-_1a45A6-_",
        "nodeType": "dir",
        "userName": "-_1a45A6-_"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "a2e58b24-e2cd-424c-9e47-543f2fcbf15c",
        "label": "test21",
        "nodeType": "dir",
        "userName": "test2"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "7D917F71-4211-7B3A-FC28-4A74E1480D48",
        "label": "B名称",
        "nodeType": "dir",
        "userName": "B"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "3b758a1b-07a1-4a09-9f56-d6fa50d319ee",
        "label": "asdklgji",
        "nodeType": "dir",
        "userName": "asdklgji"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "64b09b64-574e-4f58-88cb-7c71386e9a0d",
        "label": "asdfhjlk",
        "nodeType": "dir",
        "userName": "asdfhjlk"
    },
    {
        "kind": "DIR",
        "pid": "userDirRootNode",
        "id": "6dabd96c-cff0-4b4c-9142-069266dc122c",
        "label": "aweadv",
        "nodeType": "dir",
        "userName": "aweadv"
    },
    {
        "kind": ".PSM",
        "pid": "A8327DA2-97D2-226F-CCA1-3B6BA925545D",
        "id": "08A88437-5E97-BA1C-8877-BE6544F7EC73",
        "label": "789",
        "nodeType": "user",
        "userName": "702"
    },
    {
        "kind": ".PSM",
        "pid": "883AA180-4F0A-FE07-80AA-2F0B7131199B",
        "id": "0B240344-7BC6-615E-D638-27682A76A98E",
        "label": "测试编制1",
        "nodeType": "user",
        "userName": "1234"
    },
    {
        "kind": ".PSM",
        "pid": "D4E06F88-1AB9-79AD-03E9-EB508D461BEA",
        "id": "0F7E63BC-5C22-9966-E12E-F58B8DDC33E5",
        "label": "李梅",
        "nodeType": "user",
        "userName": "LM"
    },
    {
        "kind": ".PSM",
        "pid": "393267C8-D380-B6F1-5A45-EEEA3694D7B4",
        "id": "10BC9C24-4CDE-704E-9EE0-5FA2A3369360",
        "label": "444",
        "nodeType": "user",
        "userName": "333"
    },
    {
        "kind": ".PSM",
        "pid": "e64d64b9-d181-11e7-94f7-005056ba50c2",
        "id": "16757F3B-E062-C750-034E-CB89252BDF98",
        "label": "管理员岗位3",
        "nodeType": "user",
        "userName": "admin"
    },
    {
        "kind": ".PSM",
        "pid": "C26A47D3-CFAD-A4C5-55F5-1F03F01B9A58",
        "id": "1D00D0B5-7FAD-236E-45B4-04150292EA00",
        "label": "testbz12",
        "nodeType": "user",
        "userName": "test1"
    },
    {
        "kind": ".PSM",
        "pid": "5F14C9FD-95CF-8004-D390-B34AB7876976",
        "id": "1E64BBF5-6908-C3E0-C137-4CF02C7FBDFB",
        "label": "121",
        "nodeType": "user",
        "userName": "12112"
    },
    {
        "kind": ".PSM",
        "pid": "A00358F1-9049-FCBC-D20B-8F17A6C1CAF8",
        "id": "21E1CE3C-F1E1-EA2A-E8D9-81BBB5D62D79",
        "label": "1234",
        "nodeType": "user",
        "userName": "602"
    },
    {
        "kind": ".PSM",
        "pid": "3F5B79CB-F9F3-4136-CA22-E9B4D2A2ECF1",
        "id": "2D6A5E5E-7F65-26CF-F619-F64C7FC9962E",
        "label": "zxcb",
        "nodeType": "user",
        "userName": "1sdfxc"
    },
    {
        "kind": ".PSM",
        "pid": "FDF0D804-917A-1580-D696-296969430AFE",
        "id": "2DE782A6-76D9-B7C9-7E04-78904198FA7B",
        "label": "李小狼老板",
        "nodeType": "user",
        "userName": "LXL2"
    },
    {
        "kind": ".PSM",
        "pid": "e64d64b9-d181-11e7-94f7-005056ba50c2",
        "id": "30EC88FB-ADD8-451F-AA66-FD791E621816",
        "label": "管理员岗位1",
        "nodeType": "user",
        "userName": "admin"
    },
    {
        "kind": ".PSM",
        "pid": "FAB253B2-B8C4-AC06-7405-0D64EFCBA771",
        "id": "31365097-65BB-7DEB-B719-F6FD00A403A5",
        "label": "ascbv",
        "nodeType": "user",
        "userName": "12rxcvc"
    },
    {
        "kind": ".PSM",
        "pid": "FAB253B2-B8C4-AC06-7405-0D64EFCBA771",
        "id": "36F9B5EE-3886-EF42-3EF9-C3195C9B5FE4",
        "label": "xcbvadsf",
        "nodeType": "user",
        "userName": "12rxcvc"
    },
    {
        "kind": ".PSM",
        "pid": "36126FB1-3E1E-B5CF-699B-A803805F5CD9",
        "id": "389CCBB0-F341-F2EB-3294-9A8FEAE1339E",
        "label": "额801",
        "nodeType": "user",
        "userName": "1111"
    },
    {
        "kind": ".PSM",
        "pid": "F6145412-C4C0-C1F9-27C4-61798C3FCA7D",
        "id": "3CB347A8-2DEE-DBBD-255E-BD1D1385B8BE",
        "label": "D编制001",
        "nodeType": "user",
        "userName": "D001"
    },
    {
        "kind": ".PSM",
        "pid": "F30C5E31-AB1E-0813-5E03-D80A217B36E3",
        "id": "3F2B21CD-656B-2CA5-ADC5-40C55207B51F",
        "label": "技术员",
        "nodeType": "user",
        "userName": "10439"
    },
    {
        "kind": ".PSM",
        "pid": "EC6E7C08-2D65-534F-0401-C3891D05AF6C",
        "id": "44E46CD9-3E52-4949-44C6-A749B91C1611",
        "label": "zxc",
        "nodeType": "user",
        "userName": "1254"
    },
    {
        "kind": ".PSM",
        "pid": "5B8FF15E-FFD4-131E-3690-2A058D95DD0A",
        "id": "45E67AEE-8E20-BBB0-A965-4A823EA21A80",
        "label": "额701",
        "nodeType": "user",
        "userName": "e7"
    },
    {
        "kind": ".PSM",
        "pid": "A35D3F12-253D-C464-47C4-0F1DC129C177",
        "id": "4696D2D9-438F-02B0-CD39-43863C419695",
        "label": "00",
        "nodeType": "user",
        "userName": "000"
    },
    {
        "kind": ".PSM",
        "pid": "A00358F1-9049-FCBC-D20B-8F17A6C1CAF8",
        "id": "500F968A-218B-187B-8B0F-02E071B8CEFC",
        "label": "12345",
        "nodeType": "user",
        "userName": "602"
    },
    {
        "kind": ".PSM",
        "pid": "D01B2E4E-0825-F7E4-D2A5-1361421C8D9B",
        "id": "59E84E19-2FD6-566A-1800-5ABBBC86CE15",
        "label": "导入编制001",
        "nodeType": "user",
        "userName": "DR0926001xg"
    },
    {
        "kind": ".PSM",
        "pid": "3BB724D4-95FB-BFE2-8904-960E268E067B",
        "id": "5F4BDAA6-22E4-C6C9-02FA-833518F34E8F",
        "label": "321",
        "nodeType": "user",
        "userName": "502"
    },
    {
        "kind": ".PSM",
        "pid": "A7324B5F-850F-3A7D-16AD-1928124AAEE6",
        "id": "61D53CB2-588B-6985-4C16-FA21477BFEFB",
        "label": "zxcv",
        "nodeType": "user",
        "userName": "sdvxz"
    },
    {
        "kind": ".PSM",
        "pid": "75A78E3E-A5F2-12F3-CD93-0F15846617C9",
        "id": "62D8ECCF-E654-A2CE-4AC2-C70AE931FD56",
        "label": "asbddfnea",
        "nodeType": "user",
        "userName": "asdf"
    },
    {
        "kind": ".PSM",
        "pid": "72CB367A-3680-DB16-074A-4A59354D45D3",
        "id": "62FD7C36-3949-3C7E-3166-2EBE76A22C07",
        "label": "钮祜禄",
        "nodeType": "user",
        "userName": "NHL"
    },
    {
        "kind": ".PSM",
        "pid": "FA3FE8A6-433B-AFE4-20D0-E66F3C426335",
        "id": "6458F7F9-ACD0-7DD2-EC0C-6944A2B2EE7B",
        "label": "567",
        "nodeType": "user",
        "userName": "678"
    },
    {
        "kind": ".PSM",
        "pid": "A7324B5F-850F-3A7D-16AD-1928124AAEE6",
        "id": "64EC0E3A-0CBD-CC4F-41FE-205D032E9B1C",
        "label": "xcbb",
        "nodeType": "user",
        "userName": "sdvxz"
    },
    {
        "kind": ".PSM",
        "pid": "DD2472E5-20D0-AD22-5ED9-3DE43448C4D1",
        "id": "72931C3D-6CD6-C2E0-6C20-05E6EE9416D9",
        "label": "LBZ1",
        "nodeType": "user",
        "userName": "L1"
    },
    {
        "kind": ".PSM",
        "pid": "EC6E7C08-2D65-534F-0401-C3891D05AF6C",
        "id": "754D12B3-E41F-6914-E01F-EC9943075537",
        "label": "zxcb",
        "nodeType": "user",
        "userName": "1254"
    },
    {
        "kind": ".PSM",
        "pid": "e64d64b9-d181-11e7-94f7-005056ba50c2",
        "id": "76B91E37-639B-751B-8741-2132C520FF9A",
        "label": "管理员岗位2",
        "nodeType": "user",
        "userName": "admin"
    },
    {
        "kind": ".PSM",
        "pid": "A00358F1-9049-FCBC-D20B-8F17A6C1CAF8",
        "id": "790F3E22-1D67-ECA0-9DF3-913E46B44DAE",
        "label": "4321",
        "nodeType": "user",
        "userName": "602"
    },
    {
        "kind": ".PSM",
        "pid": "97C4457F-8173-EC75-8FC1-3ED62EEB557F",
        "id": "7EC01CB4-022D-5C84-22F3-F007368B9B18",
        "label": "额500",
        "nodeType": "user",
        "userName": "cxv"
    },
    {
        "kind": ".PSM",
        "pid": "9058A6CA-AA88-A8D6-C59A-05194FBA5556",
        "id": "88DE2F8C-9E1B-B887-65E2-63F707A687F9",
        "label": "额501",
        "nodeType": "user",
        "userName": "e50"
    },
    {
        "kind": ".PSM",
        "pid": "C1EC3C6A-F7B9-312E-349F-241563BD1F68",
        "id": "90A7A074-CE13-EC47-D7E2-7A4AA4B3D3D6",
        "label": "e345",
        "nodeType": "user",
        "userName": "e2"
    },
    {
        "kind": ".PSM",
        "pid": "dd5919b4-99e7-4990-8ea9-0d0d4aed4b9f",
        "id": "9247167a-7c60-4b0a-b188-01e29f58e018",
        "label": "-_1a45A6-_",
        "nodeType": "user",
        "userName": "-_1a45A6-_"
    },
    {
        "kind": ".PSM",
        "pid": "F6145412-C4C0-C1F9-27C4-61798C3FCA7D",
        "id": "94CA04A2-B4B7-9B95-FB83-E73B76D711A0",
        "label": "D编制002",
        "nodeType": "user",
        "userName": "D001"
    },
    {
        "kind": ".PSM",
        "pid": "EDD18CB1-CD46-2383-BBDF-6D7C754E1C83",
        "id": "94EF7DC0-D8A1-B06B-CD2A-DE0A94C0B8A7",
        "label": "555",
        "nodeType": "user",
        "userName": "asdv"
    },
    {
        "kind": ".PSM",
        "pid": "FAB253B2-B8C4-AC06-7405-0D64EFCBA771",
        "id": "96BE4FBD-35D5-E450-0BF4-B348BACE82FC",
        "label": "asdb",
        "nodeType": "user",
        "userName": "12rxcvc"
    },
    {
        "kind": ".PSM",
        "pid": "A6927117-296F-4397-8F89-2709B8A2BFF7",
        "id": "9B496CFA-CF95-5FB5-8188-68D69A3ED397",
        "label": "测试",
        "nodeType": "user",
        "userName": "20355"
    },
    {
        "kind": ".PSM",
        "pid": "EC6E7C08-2D65-534F-0401-C3891D05AF6C",
        "id": "9CB01EE9-7EF8-35EF-DEE2-DBA4FE5C4050",
        "label": "asdg",
        "nodeType": "user",
        "userName": "1254"
    },
    {
        "kind": ".PSM",
        "pid": "7D917F71-4211-7B3A-FC28-4A74E1480D48",
        "id": "A0AE2E20-84C0-DC87-D790-1BB4646C12B3",
        "label": "B名称",
        "nodeType": "user",
        "userName": "B"
    },
    {
        "kind": ".PSM",
        "pid": "2AE73846-ADE7-085A-8757-D09DEFA2CEEE",
        "id": "AB63E7F6-66DD-BF8B-D1D5-72E61F2C9530",
        "label": "W编制003",
        "nodeType": "user",
        "userName": "W002"
    },
    {
        "kind": ".PSM",
        "pid": "35605C78-2E97-E771-0792-1CD61600E800",
        "id": "AD72B3CB-575D-E030-07B2-0C5D7F3EA388",
        "label": "额外额外",
        "nodeType": "user",
        "userName": "123123"
    },
    {
        "kind": ".PSM",
        "pid": "A0C37BD2-9D49-FC79-89D2-0DE0CE332FCC",
        "id": "AD7E19BE-4FF4-C541-6DD0-D952B1A1EB92",
        "label": "爱新觉罗",
        "nodeType": "user",
        "userName": "AXJL2"
    },
    {
        "kind": ".PSM",
        "pid": "5B8FF15E-FFD4-131E-3690-2A058D95DD0A",
        "id": "C3105CF5-645F-18D4-D837-E8DB77607189",
        "label": "额700",
        "nodeType": "user",
        "userName": "e7"
    },
    {
        "kind": ".PSM",
        "pid": "a2e58b24-e2cd-424c-9e47-543f2fcbf15c",
        "id": "c388c5db-94d6-4b7c-b47e-9c335592744a",
        "label": "test2",
        "nodeType": "user",
        "userName": "test2"
    },
    {
        "kind": ".PSM",
        "pid": "75A78E3E-A5F2-12F3-CD93-0F15846617C9",
        "id": "C7113CF0-BF8E-58F0-46A1-DB3D3A9C37FE",
        "label": "ahcvzb",
        "nodeType": "user",
        "userName": "asdf"
    },
    {
        "kind": ".PSM",
        "pid": "D610A02D-B52B-18F5-6C09-7883813AC38F",
        "id": "C8C98F14-DD1E-1424-0179-045EECB3232F",
        "label": "叶赫那拉",
        "nodeType": "user",
        "userName": "YHNL"
    },
    {
        "kind": ".PSM",
        "pid": "2AE73846-ADE7-085A-8757-D09DEFA2CEEE",
        "id": "CA0CB896-5539-A6CB-04C7-7EDAB7F5110D",
        "label": "W编制004",
        "nodeType": "user",
        "userName": "W002"
    },
    {
        "kind": ".PSM",
        "pid": "345C8CA9-77FE-91BE-B16F-D9304560A531",
        "id": "CA536020-3C6E-C731-04C1-3CFF9B9BC7E1",
        "label": "e123",
        "nodeType": "user",
        "userName": "e1"
    },
    {
        "kind": ".PSM",
        "pid": "9AB34B03-48C0-5AD9-5489-DCB7B67D2F83",
        "id": "CC153546-4ABA-6E66-EAF3-657A592DE89F",
        "label": "李小狼老板",
        "nodeType": "user",
        "userName": "LXL"
    },
    {
        "kind": ".PSM",
        "pid": "5CF0247C-2927-4794-E190-D751778D14A8",
        "id": "CC827415-007C-C71B-0BDC-F8C3C5FE48EB",
        "label": "2",
        "nodeType": "user",
        "userName": "223"
    },
    {
        "kind": ".PSM",
        "pid": "A8327DA2-97D2-226F-CCA1-3B6BA925545D",
        "id": "CF659E2F-2D68-863C-C71B-CCDB78A548F0",
        "label": "987",
        "nodeType": "user",
        "userName": "702"
    },
    {
        "kind": ".PSM",
        "pid": "FA2724C0-8397-693A-80BE-C852FBC6F8AA",
        "id": "D06C13A8-EEF2-5545-D396-CD799507DD04",
        "label": "666",
        "nodeType": "user",
        "userName": "666"
    },
    {
        "kind": ".PSM",
        "pid": "A5065270-EA83-4A0D-490F-8FE72633A508",
        "id": "D1BDAB3E-2CC8-51DD-D994-9B91BF694CF6",
        "label": "额8002",
        "nodeType": "user",
        "userName": "e80"
    },
    {
        "kind": ".PSM",
        "pid": "35605C78-2E97-E771-0792-1CD61600E800",
        "id": "D2AE65FA-9186-D36F-03AC-D2B5EF3EB761",
        "label": "zxcv123123",
        "nodeType": "user",
        "userName": "123123"
    },
    {
        "kind": ".PSM",
        "pid": "DA9F678E-92C7-D572-26C8-C76AEF155D41",
        "id": "DCF0F056-EDB8-89D5-3945-E3C0BCE0AF15",
        "label": "W编制001",
        "nodeType": "user",
        "userName": "00001"
    },
    {
        "kind": ".PSM",
        "pid": "3BB724D4-95FB-BFE2-8904-960E268E067B",
        "id": "DED465AC-BF8A-D8C0-44ED-1B28D6E84EE1",
        "label": "123",
        "nodeType": "user",
        "userName": "502"
    },
    {
        "kind": ".PSM",
        "pid": "e64d64b9-d181-11e7-94f7-005056ba50c2",
        "id": "e64d7703-d181-11e7-94f7-005056ba50c2",
        "label": "管理员",
        "nodeType": "user",
        "userName": "admin"
    },
    {
        "kind": ".PSM",
        "pid": "6FD38B07-949B-0D6B-C061-BC1644C81802",
        "id": "EA6BD706-C55D-247F-90A2-53E43AB9E651",
        "label": "222222",
        "nodeType": "user",
        "userName": "2w"
    },
    {
        "kind": ".PSM",
        "pid": "FC3C584C-939D-C38C-C037-B6EF11580300",
        "id": "EB335A22-BEBA-F0ED-090F-202B980EB759",
        "label": "zxcb",
        "nodeType": "user",
        "userName": "df"
    },
    {
        "kind": ".PSM",
        "pid": "BC16D4F6-ABD1-10B0-EDCC-7432A208EA9A",
        "id": "ED9F4604-FFD1-9A1B-86B4-6F81F659C589",
        "label": "5566",
        "nodeType": "user",
        "userName": "56"
    },
    {
        "kind": ".PSM",
        "pid": "35605C78-2E97-E771-0792-1CD61600E800",
        "id": "F30E7BD1-4916-C0AD-E868-E190FF88EECC",
        "label": "sadbzxcb",
        "nodeType": "user",
        "userName": "123123"
    },
    {
        "kind": ".PSM",
        "pid": "9B10CBD0-5E1B-654E-A453-219E16307D0F",
        "id": "F6D37760-11D2-D6E1-C50B-D0E976D3CC0F",
        "label": "叶赫那拉",
        "nodeType": "user",
        "userName": "YHNL2"
    },
    {
        "kind": ".PSM",
        "pid": "8474F531-3C45-1F8D-35C0-F5B8E8A96CCD",
        "id": "F740B7A8-2902-3833-F8D8-026774D62A38",
        "label": "爱新觉罗",
        "nodeType": "user",
        "userName": "AXJL"
    },
    {
        "kind": ".PSM",
        "pid": "393267C8-D380-B6F1-5A45-EEEA3694D7B4",
        "id": "F7D9D171-0422-5666-16DE-D22633229CEA",
        "label": "333",
        "nodeType": "user",
        "userName": "333"
    },
    {
        "kind": ".PSM",
        "pid": "6701c6c1-2788-419f-a9d3-fc8ca4247130",
        "id": "fdbf8a42-7d69-4144-b3a6-9e1c85e6af22",
        "label": "test3",
        "nodeType": "user",
        "userName": "test3"
    }
];

//export const allData = orgData.concat(ptmData).concat(ryData);