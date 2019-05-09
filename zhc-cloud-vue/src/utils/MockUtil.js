/**
 * 模拟数据工具类
 * @author cls
 * @date 2019-04-28
 */

import {
  geoCoordMap
} from '@/utils/MapUtil.js'

/**
 * showdoc
 * @catalog JS工具类/MockUtil
 * @title 获取城市名称
 * @description 随机获取城市名称
 * @method jsfunc
 * @url import { randomCity } from '@/utils/MockUtil.js'
 * @return '福州'
 * @return_param 福州 string 城市名称
 * @remark 测试用例
 *  randomCity()
 */
export function randomCity() {
  const citys = Object.keys(geoCoordMap)
  const index = Math.floor(Math.random() * citys.length)
  return citys[index]
}
