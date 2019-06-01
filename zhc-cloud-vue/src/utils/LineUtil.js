/**
 * 线图工具类
 * @author cls
 * @date 2019-05-16
 */

/**
 * 转换成线图数据
 * @param {*} datas 预转换数据包[{},{}]
 * @param {*} groupByField string 分组字段名
 * @param {*} calcFields [{},{}] 计算字段名
 * 
 * @return [[series.data1],[series.data2]]
 */
export function convertLineData(datas, groupByField, calcFields) {
  let lineDatas = [];
  calcFields.forEach(item => {
    let seriesData = [];
    datas.forEach(recd => {
      let lineItem = {
        name: recd[groupByField],
        value: recd[item.name],
      }
      seriesData.push({
        ...recd,
        ...lineItem
      })
    });
    lineDatas.push(seriesData);
  })
  return lineDatas
}

/**
 * 是否生成多坐标，最多两个坐标轴（左，右）
 * @param {*} calcFields [{name:"fieldId",title:"字段名",summaryType:"统计类型",yAxsi:[true,false]}]
 */
export function yAxis(calcFields) {
  let yAxis = {
    type: "value"
  }
  for (var i = 0, l = calcFields.length; i < l; i++) {
    let field = calcFields[i];
    if (field.yAxis) {
      if (i === 0) {
        yAxis = [{
          name: field.title,
          type: "value"
        }]
      } else {
        yAxis.push({
          name: field.title,
          type: "value"
        })
      }
      if (yAxis.length > 1) break;
    }
  }
  return yAxis
}
