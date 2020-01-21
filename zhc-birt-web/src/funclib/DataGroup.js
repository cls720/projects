/**
 * Js数据分组工具类，仿真sql group by功能
 * @author cls
 * @date 2019-04-26
 */
import {
  numberPlus
} from '@/utils/MathUtil.js'

/**
 * showdoc
 * @catalog JS工具类/DataGroup
 * @title 获取分组记录集
 * @description 根据传入对象数组，group配置进行数据分组
 * @method static
 * @url import { dataGroupBy } from '@/funclib/DataGroup.js'
 * @param datas 必选 [{},{}] 记录集对象
 * @param group 必选 {groupBy:[],calcFields:[]} 分组配置
 * @param group.groupBy 必选 groupBy:['f1','f2'] 分组字段名列表
 * @param group.calcFields 必选 calcFields:[{name:'value',summaryType:'count'}]} 计算字段配置
 * @param calcFields[0].name 必选 {name:'value'} 输出计算字段名
 * @param calcFields[0].summaryType 必选 {summaryType:'count'} 计算字段汇总类型[count(计数), sum(求和), max(最大值), min(最小值), avg(平均值),concat(连接)]
 * @return [{'f1':'v1','f2':'v2'}]
 * @return_param f1 string 记录字段名
 * @return_param v1 object 记录字段名对应值
 * @remark 测试用例
 *  dataGroupBy(
 *    [{'userCity':'福州','userId':'张三'},{'userCity':'福州','userId':'李四'},{'userCity':'北京','userId':'王四'}],
 *    {groupBy:["userCity"], calcFields:[{name:'value',title:'中文名称',summaryType:'count'}]}
 *  )
 *  返回==>
 *  [{"userCity":"福州","value":2},{"userCity":"北京","value":1}]
 */
export function dataGroupBy(datas, group) {  
  var groupJson = {};
  var groupKeys = [];
  datas.forEach(data => {
    const groupKey = dataGroupKey(data, group.groupBy)
    if (!groupJson[groupKey]) {
      groupJson[groupKey] = {}
      groupKeys.push(groupKey);
    }
    dataCalcRecd(groupJson[groupKey], group.calcFields, data)
  })

  var groupRecds = []
  for (var i = 0, l = groupKeys.length; i < l; i++) {
    var gKey = groupKeys[i];
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
export function dataCalcRecd(data, calcFields, row) {
  calcFields.forEach(calcField => {
    const fn = calcField.name
    if (calcField.summaryType === 'count') {
      data[fn] = (data[fn] || 0) + 1
    }
    if (calcField.summaryType === 'sum') {
      data[fn] = (data[fn] || 0)
      if (typeof data[fn] == "number") {
        // data[fn] = row[fn] + data[fn];
        data[fn] = numberPlus(row[fn], data[fn])
      }
    }
    // 合并字符串，需扩展属性{fields:['f1','f2'],split:'.'}
    if (calcField.summaryType === 'concat') {
      if (calcField.fields && calcField.fields.length > 0) {
        if (!data[fn]) {
          calcField.fields.forEach((f, i) => {
            if (i > 0) {
              data[fn] += calcField.split || ",";
            }
            data[fn] = (data[fn] || "") + row[f];
          })
        }
      } else {
        console.error("计算字段：" + JSON.stringify(calcField) + ",未配置扩展属性 fields")
      }
    }
  })
}
