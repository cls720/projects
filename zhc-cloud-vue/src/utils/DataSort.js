/**
 * Js数据排序工具类
 * @author cls
 * @date 2019-05-21
 */
// import _ from "lodash"
/**
 * showdoc
 * @catalog JS工具类/DataSort
 * @title JSON数组排序
 * @description 根据传入对象数组，关键key，进行升序或降序排序
 * @method static
 * @url import { jsonArraySort } from '@/utils/DataSort.js'
 * @param datas 必选 [{},{}] 记录集对象
 * @param key 必选 String json对象其中一个key值
 * @param sortType 可选 排序类型[ASC,DESC],默认ASC升序
 * @return [{},{}] 有序对象数组
 * @remark 测试用例
 *  jsonArraySort(
 *    [{'userAge':30,'userName':'张三'},{'userAge':26,'userName':'李四'},{'userAge':28,'userName':'王五'}],'userAge'
 *  )
 *  返回==>
 *  [{'userAge':26,'userName':'李四'},{'userAge':28,'userName':'王五'},{'userAge':30,'userName':'张三'}]
 */
export function jsonArraySort(datas, key, sortType) {
  let sortDatas = _.sortBy(datas, function (o) {
    return o[key];
  })
  if (sortType && sortType.toUpperCase() === "DESC") {
    sortDatas.reverse()
  }
  return sortDatas
}

/**
 * showdoc
 * @catalog JS工具类/DataSort
 * @title JSON数组多排序
 * @description 根据传入对象数组，orderBy多排序配置，进行升序或降序排序
 * @method static
 * @url import { jsonArrayMultiSort } from '@/utils/DataSort.js'
 * @param datas 必选 [{},{}] 记录集对象
 * @param orderBy 必选 [{name:'字段名1',type:'ASC'},{name:'字段名2',type:'ASC'}] json对象其中一个key值
 * @return [{},{}] 有序对象数组
 * @remark 测试用例
 *  jsonArraySort(
 *    [{'userAge':30,'userName':'张三'},{'userAge':26,'userName':'赵六'},{'userAge':26,'userName':'李四'},{'userAge':28,'userName':'王五'}],
 *    [{name:'userAge',type:'ASC'},{}]
 *  )
 *  返回==>
 *  [{'userAge':26,'userName':'李四'},{'userAge':26,'userName':'赵六'},{'userAge':28,'userName':'王五'},{'userAge':30,'userName':'张三'}]
 */
export function jsonArrayMultiSort(datas, orderBy) {
  if (orderBy && orderBy.length === 1) {
    return jsonArraySort(datas, orderBy[0].name, orderBy[0].type)
  } else if (orderBy && orderBy.length > 1) {
    // 多排序算法暂不实现, 同时有不同方向排序未实现
    let joinDatas = []
    datas.forEach((recd, i) => {
      let joinVal = "";
      orderBy.forEach(orderItem => {
        joinVal += recd[orderItem.name]
      })
      joinDatas.push({
        joinVal: joinVal,
        arrayIndex: i
      })
    })
    joinDatas = jsonArraySort(joinDatas, "joinVal", orderBy[0].type)

    let sortDatas = []
    joinDatas.forEach(jItem => {
      sortDatas.push(datas[jItem.arrayIndex])
    })
    return sortDatas
  } else {
    return datas;
  }
}
