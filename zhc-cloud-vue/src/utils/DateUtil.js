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
 * @title 获取当天期对象
 * @description 根据当前日期计算当天时间范围 今日yyyy-mm-dd ~ 次日yyyy-mm-dd
 * @method static
 * @url import { getCurrentDay } from '@/utils/DateUtil.js' 
 * @return [dayStartDateTime, dayEndDateTime]
 * @return_param ary0 Date 今日开始时间
 * @return_param ary1 Date 次日结束时间
 */
export function getCurrentDay() {
  var now = new Date();
  var dayStartDateTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  var dayEndDateTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(), 23, 59, 59
  );

  return [
    dayStartDateTime,
    dayEndDateTime
  ]
}

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

export const date = {
  format(date, format) {
    format = format.replace(/HH/, "hh");
    var o = {
      "M+": date.getMonth() + 1, // month
      "d+": date.getDate(), // day
      "D+": date.getDate(), // day
      "h+": date.getHours(), // hour
      "H+": date.getHours(), // hour
      "m+": date.getMinutes(), // minute
      "s+": date.getSeconds(), // second
      "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
      "S": date.getMilliseconds()
      // millisecond
    }
    if (/(y+)/.test(format))
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 -
        RegExp.$1.length));
    if (/(Y+)/.test(format))
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 -
        RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
          o[k] :
          ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  },
  isDateTime: (dateString) => {
    if (dateString.trim() == "")
      return false;
    // 年月日时分秒正则表达式
    var r = dateString
      .match(/^(\d{1,4})\-(\d{1,2})\-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
    var r1 = dateString
      .match(/^(\d{1,4})\-(\d{1,2})\-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}).(\d{1,6})$/);
    var r2 = dateString
      .match(/^(\d{1,4})\-(\d{1,2})\-(\d{1,2}) (\d{1,2}):(\d{1,2})$/);
    if (r == null && r1 == null && r2 == null) {
      return false;
    }
    r = r || r1 || r2;
    if (r.length == 6) { // 时间格式为：2018-04-11 17:31
      var d1 = new Date(r[1], r[2] - 1, r[3], r[4], r[5]);
      var num = (d1.getFullYear() == r[1] && (d1.getMonth() + 1) == r[2] &&
        d1.getDate() == r[3] && d1.getHours() == r[4] && d1
        .getMinutes() == r[5]);
      if (num == 0) {
        return false;
      } else
        return true;
    }

    var d = new Date(r[1], r[2] - 1, r[3], r[4], r[5], r[6]);
    var num = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[2] &&
      d.getDate() == r[3] && d.getHours() == r[4] &&
      d.getMinutes() == r[5] && d.getSeconds() == r[6]);
    if (num == 0) {
      return false;
    }
    return (num != 0);
  },
  isDate: (dateString) => {
    if (dateString == "")
      return true;
    // 年月日正则表达式
    var r = dateString.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) {
      return false;
    }
    var d = new Date(r[1], r[3] - 1, r[4]);
    var num = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d
      .getDate() == r[4]);
    if (num == 0) {
      return false;
    }
    return (num != 0);
  },
  dateof: (dt, type) => {
    if (!dt)
      return "";
    if (typeof dt == "string")
      dt = this.strToDate(dt);
    switch (type) {
      case "y":
        var result = dt.getFullYear();
        return result;
        break;
      case "m":
        return dt.getMonth() + 1;
        break;
      case "min":
        return dt.getMinutes();
        break;
      case "time":
        return this.format("yyyy-MM-dd hh:mm:ss");
        break;
      case "date":
        return this.format('yyyy-MM-dd');;
        break;
      case "weekCn":
        return dt.week();
        break;
      case "week":
        return dt.getDay();
        break;
      case "weekInYear":
        var first = new Date(dt.getFullYear(), 0, 1);
        var n = parseInt("1065432".charAt(first.getDay()));
        n = dt.getTime() - first.getTime() - n * 24 * 60 * 60 * 1000;
        n = Math.ceil(n / (7 * 24 * 60 * 60 * 1000));
        return first.getDay() != 1 ? (n + 1) : n;
        break;
    }
  },
  strFormatDate: (strDate, strFormat) => {
    if (strDate == "" || strDate == null)
      return "";
    var d = this.strToDate(strDate);
    if (!strFormat)
      return d;
    return d.format(strFormat);
  },
  strToDate: (dataStr) => {
      if (!dataStr)
        return "";
      if (dataStr && dataStr.constructor === Date) { // 2010.08.02
        // 已经是时间类型，就不过滤。
        return dataStr;
      }
      if (typeof dataStr == "string") {
        if (dataStr.indexOf('.') > -1) // 2010.07.13 08335 cai
          dataStr = dataStr.split('.')[0];
      }
      // 只有时间字符串 01521
      if (dataStr.indexOf("-") == -1 && dataStr.indexOf(".") == -1 &&
        dataStr.indexOf(":") != -1)
        dataStr = this.dateOf(new Date()) + " " + dataStr;

      arr = dataStr.split(/[- :]/)
      if (dataStr != "" && arr.length == 1) { // 当：dataStr：1,返回：2010-01-01
        // 00:00:00
        console.log(dataStr + " Invalid Date")
        return "";
      }
      return new Date(Date.parse(d));
    }
    /**
     * @method getQuarterStartDay
     * @description 获得季度的第一天
     * @return {date}
     * @example:
     */
    ,
  getQuarterStartDay: () => {
    var now = new Date();
    var QuarterStartDate = '';
    if (now.getMonth() < 3) {
      QuarterStartDate = new Date(now.getFullYear(), 0, 1);
      return QuarterStartDate.format("yyyy-MM-dd");
    } else if (now.getMonth() > 2 && now.getMonth() < 6) {
      QuarterStartDate = new Date(now.getFullYear(), 3, 1);
      return QuarterStartDate.format("yyyy-MM-dd");
    } else if (now.getMonth() > 5 && now.getMonth() < 9) {
      QuarterStartDate = new Date(now.getFullYear(), 6, 1);
      return QuarterStartDate.format("yyyy-MM-dd");
    } else if (now.getMonth() > 8) {
      QuarterStartDate = new Date(now.getFullYear(), 9, 1);
      return QuarterStartDate.format("yyyy-MM-dd");
    }
  },
  /**
   * @description 获得本季度的结束日期
   */
  getQuarterEndDate: () => {
    var now = new Date();
    var QuarterStartDate = '';
    if (now.getMonth() < 3) {
      QuarterStartDate = new Date(now.getFullYear(), 2, 31);
      return QuarterStartDate.format("yyyy-MM-dd");
    } else if (now.getMonth() > 2 && now.getMonth() < 6) {
      QuarterStartDate = new Date(now.getFullYear(), 6, 30);
      return QuarterStartDate.format("yyyy-MM-dd");
    } else if (now.getMonth() > 5 && now.getMonth() < 9) {
      QuarterStartDate = new Date(now.getFullYear(), 8, 30);
      return QuarterStartDate.format("yyyy-MM-dd");
    } else if (now.getMonth() > 8) {
      QuarterStartDate = new Date(now.getFullYear(), 11, 31);
      return QuarterStartDate.format("yyyy-MM-dd");
    }
  },
  /**
   * @description 获得本年度的开始日期
   */
  getYearStartDate: () => {
    var now = new Date();
    var yearFirstDay = new Date(now.getFullYear(), 0, 1);
    return yearFirstDay.format("yyyy-MM-dd");
  },
  /**
   * @description 获得本年度的结束日期
   */
  getYearEndDate: () => {
    var now = new Date();
    var yearLastDay = new Date(now.getFullYear(), 11, 31);
    return yearLastDay.format("yyyy-MM-dd");
  },

  /**
   * @description 获得某月的天数
   * @param 
   *            int,myYear int}
   */
  getMonthDays: (myMonth, myYear) => {
    if (myYear == undefined) {
      var now = new Date();
      myYear = now.getFullYear();
    }
    myMonth--;
    var d = new Date(myYear, myMonth, 1);
    d.setDate(d.getDate() + 32 - d.getDate());
    return (32 - d.getDate())
  },
  /**
   * @description 获得本周的开始日期
   */
  getWeekStartDate: () => {
    var now = new Date();
    var weekStartDate = new Date(now.getFullYear(), now.getMonth(), now
      .getDate() -
      now.getDay());
    return weekStartDate.format("yyyy-MM-dd");
  },
  /**
   * @description 获得本周的结束日期
   */
  getWeekEndDate: () => {
    var now = new Date();
    var weekEndDate = new Date(now.getFullYear(), now.getMonth(), now
      .getDate() +
      (6 - now.getDay()));
    return weekEndDate.format("yyyy-MM-dd");
  },
  // 获得本月的开始日期
  getMonthStartDate: () => {
    var now = new Date();
    if (typeof dateVal == "string")
      now = this.strToDate(dateVal);
    var monthStartDate = new Date(now.getFullYear(), now.getMonth(), 1);
    return monthStartDate.format("yyyy-MM-dd");
  },
  // 获得本月的结束日期
  getMonthEndDate: (dateVal) => {
    var now = new Date();

    if (dateVal && typeof dateVal == "string")
      now = this.strToDate(dateVal);

    year = now.getFullYear();
    month = now.getMonth();
    var tempDate = new Date(new Date(year, month + 1, 1).getTime() - 1000 *
      60 * 60 * 24)
    return tempDate.format("yyyy-MM-dd");
  },
  //
  /**
   * @method now
   * @description 取当前时间
   * @param format
   *            {string}
   * @return {date}
   * @example: now("yyyy-MM-dd");输出：2013-06-03
   */
  now: (format) => {
    format = format || "yyyy-MM-dd hh:mm:ss";
    return new Date().format(format);
  },
  /**
   * @method dateAdd
   * @description 在日期中添加或者减去指定的时间间隔天数
   * @param datepart
   *            {string}
   * @param number
   *            {int}
   * @param dtDate
   *            {date}
   * @return {date}
   * @example: dateAdd("d","5",Scp.Date.now());输出：2013-06-13
   */
  dateAdd(datepart, number, dtDate) {
    if (typeof dtDate == "string")
      dtDate = this.strToDate(dtDate);
    var date = new Date(dtDate);
    datepart = (datepart || 'd').toLowerCase();
    diff = parseInt(number) // 间隔
    switch (datepart) {
      case "y": // 年
        date.setYear(date.getFullYear() + diff)
        break;
      case "q": // 季度
        date.setMonth(date.getMonth() + (diff * 3))
        break;
      case "m": // 月
        var sYear = date.getFullYear();
        var sMonth = date.getMonth() + 1;
        var sDay = date.getDate();

        var eYear = sYear;
        var eMonth = sMonth + diff;
        var eDay = sDay;
        while (eMonth > 12) {
          eYear++;
          eMonth -= 12;
        }

        var eDate = new Date(eYear, eMonth - 1, eDay);

        while (eDate.getMonth() != eMonth - 1) {
          eDay--;
          eDate = new Date(eYear, eMonth - 1, eDay);
        }
        return eDate;
        break;
      case "d": // 天
        date.setDate(date.getDate() + diff)
        break
      case "h": // 时
        date.setHours(date.getHours() + diff)
        break
      case "mi": // 分
        date.setMinutes(date.getMinutes() + diff)
        break
      case "s": // 秒
        date.setSeconds(date.getSeconds() + diff)
        break;
      default:
        date.setDate(date.getDate() + diff)
        break;
    }
    return date;
  }
}
