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
