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

export const ryData2 = [
    { label: "张三 1001", id: "1001", pid: "ry_id", kind: ".PSM" },
    { label: "李四 1003", id: "1003", pid: "ry_id", kind: ".PSM" },
    { label: "王五 1012", id: "1012", pid: "ry_id", kind: ".PSM" },
    { label: "赵六 1027", id: "1027", pid: "ry_id", kind: "DIR" },
    { label: "朱七 1033", id: "1033", pid: "ry_id", kind: "DIR" },
]

export const allData = orgData.concat(ptmData).concat(ryData);