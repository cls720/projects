/**
 * 项目合同列表数据（包含，初始合同，增补合同）
 * htNo = 合同编号
 * htType = 合同类型
 * htMoney = 合同金额
 * htHy = 所属行业
 * projectId = 项目ID
 * projectName = 项目名称
 * projectType = 项目类型
 * projectState = 项目状态 
 * cpJl = 产品经理
 * cpJlXm = 产品经理姓名
 * kfJl = 开发经理
 * kfJlXm = 开发经理姓名
 * xmTeamId = 项目团队ID
 * createDate = 项目成立时间
 * startDate = 项目启动时间
 * endDate = 项目验收时间
 * endMoneyDate = 项目全额到款时间
 */
module.exports = [{
    htNo: "XMHT-20180108-001",
    htType: "初始合同",
    htMoney: 500000,
    htHy:"矿业",
    projectId: "aqsc",
    projectName: "安全生产",
    projectType: "产品",
    projectState: "结束",
    cpJl: "1111",
    cpJlXm: "张小安",
    kfJl: "1112",
    kfJlXm: "王小开",
    xmTeamId: "xm-team-001",
    createDate: "2018-01-08",
    startDate: "2018-01-15",
    endDate: "2018-4-20",
    endMoneyDate: "2018-6-15"
},{
    htNo: "XMHT-20180408-001",
    htType: "增补合同",
    htMoney: 100000,
    htHy:"矿业",
    projectId: "aqsc",
    projectName: "安全生产",
    projectType: "产品",
    projectState: "开发",
    cpJl: "1111",
    cpJlXm: "张小安",
    kfJl: "1112",
    kfJlXm: "王小开",
    xmTeamId: "xm-team-001",
    createDate: "2018-04-15",
    startDate: "2018-04-15",
    endDate: "2018-6-20",
    endMoneyDate: "2018-7-15"
},{
    htNo: "XMHT-20180508-001",
    htType: "增补合同",
    htMoney: 20000,
    htHy:"矿业",
    projectId: "aqsc",
    projectName: "安全生产",
    projectType: "产品",
    projectState: "开发",
    cpJl: "1111",
    cpJlXm: "张小安",
    kfJl: "1112",
    kfJlXm: "王小开",
    xmTeamId: "xm-team-001",
    createDate: "2018-05-15",
    startDate: "2018-05-15",
    endDate: "2018-7-20",
    endMoneyDate: "2018-8-15"
},{
    htNo: "XMHT-20180115-001",
    htType: "初始合同",
    htMoney: 1000000,
    htHy:"云计算",
    projectId: "dcim",
    projectName: "长乐云计算机房",
    projectType: "项目",
    projectState: "结束",
    cpJl: "2222",
    cpJlXm: "王小乐",
    kfJl: "1113",
    kfJlXm: "赵小云",
    xmTeamId: "xm-team-002",
    createDate: "2018-01-15",
    startDate: "2018-01-20",
    endDate: "2018-6-20",
    endMoneyDate: "2018-7-15"
},{
    htNo: "XMHT-20180808-001",
    htType: "增补合同",
    htMoney: 100000,
    htHy:"云计算",
    projectId: "",
    projectId: "dcim",
    projectName: "长乐云计算机房",
    projectType: "试运行",
    cpJl: "2222",
    cpJlXm: "王小乐",
    kfJl: "1113",
    kfJlXm: "赵小云",
    xmTeamId: "xm-team-002",
    createDate: "2018-08-10",
    startDate: "2018-08-12",
    endDate: "2018-8-30",
    endMoneyDate: "2018-9-15"
}]