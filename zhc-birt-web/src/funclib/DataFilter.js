/**
 * 数据过滤工具类
 * @author cls
 * @date 2019-11-01
 */



/**
 * showdoc
 * @catalog JS工具类/DataFilter
 * @title 根据表达式过滤数据结果
 * @description 根据传入js过滤表达式，过滤数据结果, this为当前记录对象
 * @method static
 * @url import { dataFilterByExpr } from '@/funclib/DataFilter.js'
 * @param datas 必选 [{},{}] 记录集对象,树分组字段值冗余
 * @param expr js过滤表达式 
 * @return [{'f1':'v1','f2':'v2'}] 过滤结果集
 * @remark 测试用例
 *  dataFilterByExpr(
 *    [{f1:1},{f1:2},{f1:3},{f1:4}],
 *    "this.f1>2"
 *  )
 *  返回==>
 *  [{f1:3},{f1:4}]
 */
export function dataFilterByExpr(datas, expr) {  
  if (expr) {
    let filterDatas = [];
    var execFilterExper = function (expr) {
      return eval(expr)
    };
    for (var i = 0, l = datas.length; i < l; i++) {
      let recd = datas[i];
      if (execFilterExper.call(recd, expr)) {
        filterDatas.push(recd);
      }
    }
    return filterDatas;
  } else {
    return datas;
  }
}
