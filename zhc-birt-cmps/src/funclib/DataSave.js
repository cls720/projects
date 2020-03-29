/**
 * 数据保存工具类
 * @author cls
 * @date 2020-03-29
 */

/**
 * showdoc
 * @catalog JS工具类/DataSave
 * @title 合并返回数据状态
 * @description 合并返回数据状态，查询定义返回数据等
 * @method static
 * @url import { mergeRetuDataState } from '@/funclib/DataSave.js'
 * @param retuData 是 [{},{}] 返回记录集
 * @param oldKeys 否 [key1,key2] 已选主键列表
 * @param keyField 否 string 主键字段名
 * @param group.calcFields 必选 calcFields:[{name:'value',summaryType:'count'}]} 计算字段配置
 * @param calcFields[0].name 必选 {name:'value'} 输出计算字段名
 * @param calcFields[0].summaryType 必选 {summaryType:'count'} 计算字段汇总类型[count(计数), sum(求和), max(最大值), min(最小值), avg(平均值),concat(连接)]
 * @return [{'f1':'v1','f2':'v2',_state:'rsDelete|rsInsert'}]
 */
export function mergeRetuDataState(retuData, oldKeys, keyField) {
  retuData.forEach(recd => {
    let keyVal = recd[keyField];
    if (oldKeys && oldKeys.length > 0) {
      let oldKeyIndex = oldKeys.indexOf(keyVal);
      
    } else {
      recd._state = "rsInsert";
    }
  })
}
