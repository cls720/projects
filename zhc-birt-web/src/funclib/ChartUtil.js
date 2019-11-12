/**
 * Echart图表工具类
 * @author cls
 * @date 2019-05-16
 */
// import _ from "lodash";
import minBy from "lodash/fp/minBy";
import maxBy from "lodash/fp/maxBy";
const _={minBy,maxBy}
/**
 * 转换成系列数据
 * @param {*} datas 预转换数据包[{},{}]
 * @param {*} groupByField string 分组字段名
 * @param {*} calcField string 计算字段名
 */
export function convertSeriesData(datas, groupByField, calcField) {  
  let seriesDatas = [];
  datas.forEach(recd => {
    let pieItem = {
      name: recd[groupByField],
      value: recd[calcField],
    }
    seriesDatas.push({
      ...recd,
      ...pieItem
    })
  });
  return seriesDatas
}

const visualMaps = {
  _blue: {
    show: false,
    min: 0,
    max: 100,
    calculable: true,
    inRange: {
      color: ["#C6E2FF", "#409EFF"]
    },
    textStyle: {
      color: "#fff"
    }
  },
  _yellow: {
    show: false,
    min: 0,
    max: 100,
    calculable: true,
    inRange: {
      color: ["#C6E2FF", "#E6A23C"]
    },
    textStyle: {
      color: "#fff"
    }
  }
}

/**
 * 返回单色，根据值显示颜色深浅
 * @param {*} datas 
 * @param {*} calcField 
 * @param {*} schemeId 
 * @param {*} option 
 */
export function visualMap(datas, calcField, schemeId, option) {  
  let retu = visualMaps._blue;
  if (schemeId && visualMaps[schemeId]) {
    retu = visualMaps[schemeId]
  }
  if (datas && datas.length > 0 && calcField) {
    let minRecd = _.minBy(datas, calcField);
    let maxRecd = _.maxBy(datas, calcField);
    if (minRecd) {
      retu.min = minRecd[calcField]
    }
    if (maxRecd) {
      retu.max = maxRecd[calcField]
    }
  }
  return {
    ...retu,
    ...option
  }
}
