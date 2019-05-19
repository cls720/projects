/**
 * 日期时间工具类
 * @author cls
 * @date 2019-05-15
 */

export const elDateShortCurts = [{
  text: "最近一周",
  onClick(picker) {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    picker.$emit("pick", [start, end]);
  }
},
{
  text: "最近一个月",
  onClick(picker) {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    picker.$emit("pick", [start, end]);
  }
},
{
  text: "最近三个月",
  onClick(picker) {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
    picker.$emit("pick", [start, end]);
  }
}
]

/**
 * showdoc
 * 
 * @catalog JS工具类/DateUtil
 * @title 获取本周日期对象
 * @description 根据当前日期计算本周日期区间，周日(0),周一(1)...,周六(6)
 * @method static
 * @url import { getCurrentWeek } from '@/utils/DateUtil.js' 
 * @return {start: weekStartDate, end: weekEndDate}
 * @return_param start Date 本周开始时间,周日
 * @return_param end Date 本周结束时间，周六
 */
export function getCurrentWeek() {
  var now = new Date();
  var weekStartDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay()
  );
  var weekEndDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + (6 - now.getDay())
  );
  weekEndDate.setHours(23);
  weekEndDate.setMinutes(59);
  weekEndDate.setSeconds(59);
  return {
    start: weekStartDate,
    end: weekEndDate
  };
}

/**
 * showdoc
 * 
 * @catalog JS工具类/DateUtil
 * @title 获取本月日期对象
 * @description 根据当前日期计算本月日期区间，1号...[28,29,30,31]号
 * @method static
 * @url import { getCurentMonth } from '@/utils/DateUtil.js' 
 * @return {start: monthStartDate, end: monthEndDate}
 * @return_param start Date 本月开始时间,1号
 * @return_param end Date 本月结束时间，[28,29,30,31]号
 */
export function getCurentMonth() {
  var now = new Date();
  var monthStartDate = new Date(now.getFullYear(), now.getMonth(), 1);

  let year = now.getFullYear();
  let month = now.getMonth();
  var monthEndDate = new Date(
    new Date(year, month + 1, 1).getTime() - 1000 * 60 * 60 * 24
  );
  monthEndDate.setHours(23);
  monthEndDate.setMinutes(59);
  monthEndDate.setSeconds(59);
  return {
    start: monthStartDate,
    end: monthEndDate
  };
}