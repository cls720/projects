/**
 * 数据计算工具类
 * @author cls
 * @date 2019-05-17
 */
import BigNumber from "bignumber.js"
/**
 * showdoc
 * @catalog JS工具类/MathUtil
 * @title 浮点数相加
 * @description 解决系统浮点数相加出现多位小数问题
 * @method static
 * @url import { numberPlus } from '@/utils/MathUtil.js'
 * @param nb1 必选 Number 浮点值1
 * @param nb1 必选 Number 浮点值2
 * @return Number 相加值 
 */
export function numberPlus(nb1, nb2) {
  let v1 = new BigNumber(nb1);
  let v2 = new BigNumber(nb2);
  return v1.plus(v2).toNumber();
}
