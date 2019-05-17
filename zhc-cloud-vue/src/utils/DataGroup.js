/**
 * Js数据分组工具类，仿真sql group by功能
 * @author cls
 * @date 2019-04-26
 */

/**
 * showdoc
 * @catalog JS工具类/DataGroup
 * @title 获取分组记录集
 * @description 根据传入对象数组，group配置进行数据分组
 * @method jsfunc
 * @url import { dataGroupBy } from '@/utils/DataGroup.js'
 * @param datas 必选 [{},{}] 记录集对象
 * @param group 必选 {groupBy:[],calcFields:[]} 分组配置
 * @param group.groupBy 必选 groupBy:['f1','f2'] 分组字段名列表
 * @param group.calcFields 必选 calcFields:[{name:'value',summaryType:'count'}]} 计算字段配置
 * @param calcFields[0].name 必选 {name:'value'} 输出计算字段名
 * @param calcFields[0].summaryType 必选 {summaryType:'count'} 计算字段汇总类型[count(计数), sum(求和), max(最大值), min(最小值), avg(平均值)]
 * @return [{'f1':'v1','f2':'v2'}]
 * @return_param f1 string 记录字段名
 * @return_param v1 object 记录字段名对应值
 * @remark 测试用例
 *  dataGroupBy(
 *    [{'userCity':'福州','userName':'张三'},{'userCity':'福州','userName':'李四'},{'userCity':'北京','userName':'王四'}],
 *    {groupBy:["userCity"], calcFields:[{name:'value',summaryType:'count'}]}
 *  )
 *  返回==>
 *  [{"userCity":"福州","value":2},{"userCity":"北京","value":1}]
 */
export function dataGroupBy(datas, group) {
  var groupJson = {}
  datas.forEach(data => {
    const groupKey = dataGroupKey(data, group.groupBy)
    if (!groupJson[groupKey]) {
      groupJson[groupKey] = {}
    }
    dataCalcRecd(groupJson[groupKey], group.calcFields,data)
  })

  var groupRecds = []
  for (var gKey in groupJson) {
    var groupRecd = dataGroupRecd(gKey, group.groupBy)
    var recd = {
      ...groupRecd,
      ...groupJson[gKey]
    }
    groupRecds.push(recd)
  }
  return groupRecds
}

/**
 * 获取记录对象分组key值, 默认以双 $$ 分隔
 * @param {*} data {f1:'v1',f2:'v2'} 记录对象 字段名：值
 * @param {*} groupBy 分组字段名列表 ['f1','f2']
 * @param {*} splitChar 分隔符 默认 $$
 */
export function dataGroupKey(data, groupBy, splitChar) {
  splitChar = splitChar || '$$'
  let key = ''
  groupBy.forEach((fn, i) => {
    key += (i === 0 ? '' : splitChar) + (data[fn] || 'NULL')
  })
  return key
}

/**
 * 根据groupKey转成分组记录[{},{}]
 * @param {*} groupKey 分组值默认 $$分隔
 * @param {*} groupBy 分组字段名列表 ['f1','f2']
 * @param {*} splitChar 分隔符 默认 $$
 */
export function dataGroupRecd(groupKey, groupBy, splitChar) {
  splitChar = splitChar || '$$'
  var groupRecd = {}
  const groupVals = groupKey.split(splitChar)
  groupBy.forEach((fn, i) => {
    if (!(groupVals[i] === 'NULL')) {
      groupRecd[fn] = groupVals[i]
    }
  })
  return groupRecd
}

/**
 * 获取记录计算字段值
 * @param {*} data {f1:'v1',f2:'v2'} 记录对象 字段名：值
 * @param {*} calcFields [{name:'value',summaryType:'count'}] 计算字段数组
 */
export function dataCalcRecd(data, calcFields,row) {
  calcFields.forEach(calcField => {
    const fn = calcField.name
    if (calcField.summaryType === 'count') {
      data[fn] = (data[fn] || 0) + 1
    }
    if (calcField.summaryType === 'sum') {
      data[fn] = (data[fn] || 0)
      if( typeof data[fn] == "number"){
        data[fn] = row[fn] + data[fn];
      }
    }
  })
}
