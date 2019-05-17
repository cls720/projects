/**
 * 饼图工具类
 * @author cls
 * @date 2019-05-16
 */
import minBy from "lodash/fp/minBy";
import maxBy from "lodash/fp/maxBy";
/**
 * 转换成饼图数据
 * @param {*} datas 预转换数据包[{},{}]
 * @param {*} groupByField string 分组字段名
 * @param {*} calcField string 计算字段名
 */
export function convertPieData(datas, groupByField, calcField) {
  let pieDatas = [];
  datas.forEach(recd => {
    let pieItem = {
      name: recd[groupByField],
      value: recd[calcField],
    }
    pieDatas.push({
      ...recd,
      ...pieItem
    })
  });
  return pieDatas
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
    let minRecd = minBy(datas, cal);
    let maxRecd = maxBy(datas, calcField);
    if (minRecd) {
      retu.min = minRecd[calcField]
    }
    if (maxVal) {
      retu.max = maxRecd[calcField]
    }
  }
  return {
    ...retu,
    ...option
  }
}
