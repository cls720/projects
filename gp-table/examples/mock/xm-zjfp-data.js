// 项目资金分配表数据
/**
 * fid = 分配方案ID
 * fpid = 分配方案父ID
 * fpath = 分配方案ID路径
 * fpName = 分配方案名称
 * fpPercent = 分配比例
 */
module.exports = [{
    fid: "001",
    fpid: "-1",
    fpath: "001",
    fpName: "资金分配方案1",
    fpPercent: "1"
}, {
    fid: "002",
    fpid: "001",
    fpath: "001002",
    fpName: "公司运营比例",
    fpPercent: "0.3"
}, {
    fid: "002a",
    fpid: "002",
    fpath: "001002002a",
    fpName: "招待风险比例",
    fpPercent: "0.3"
}, {
    fid: "002b",
    fpid: "002",
    fpath: "001002002b",
    fpName: "差旅风险比例",
    fpPercent: "0.3"
}, {
    fid: "003",
    fpid: "001",
    fpath: "001003",
    fpName: "项目比例",
    fpPercent: "0.6"
}, {
    fid: "004",
    fpid: "001",
    fpath: "001004",
    fpName: "奖金预留比例",
    fpPercent: "0.1"
}]