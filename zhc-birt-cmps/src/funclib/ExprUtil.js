/**
 * 表达式工具类
 * @author cls
 * @date 2019-05-16
 */

/**
 * 转换数据集字段访问表达式
 * @param {*} datasets 数据集实例对象枚举{ds1:{},ds2:{}}
 * @param {*} expr string 配置表达式 
 * 
 * @return string
 */
export function convertDatasetExpr(datasets, expr) {
  if (datasets && expr.indexOf("}}") > 0) {
    for (var key in datasets) {
      let re = new RegExp(key + "\\.", "g");
      expr = expr.replace(re, "datasets." + key + ".")
    }
    return eval("\"" + expr.replace("{{", "\"+").replace("}}", "+\"") + "\"")
  }
  return expr;
}

/**
 * 解析表达式{{变量}}值
 * @param {*} expr vue模板表达式
 * @param {*} scope 
 */
export function execVueExpr(expr, scope) {
  debugger
  var r = new RegExp(/\{\{((?:.|\n)+?)\}\}/g);
  var p = r.exec(expr);
  while (p) {
    var pr1 = new RegExp(p[0], "g");
    var va1 = eval(p[1]);
    expr = expr.replace(pr1, va1);
    p = r.exec(expr);
    // 存在匹配优先级问题，可能后面表达式先匹配
    if ((p == null) && (expr.indexOf("{{") >= 0)) {
      p = r.exec(expr);
    }
  }
  return expr;
}