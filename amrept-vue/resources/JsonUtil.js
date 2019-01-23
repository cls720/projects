/**
 * JsonUtil计算操作工具类
 * 
 * 命名空间 $.JsonUtil 简写 $.ju
 * 
 * @author cls
 * @date 2016/07/18
 * @modify 2018/11/27
 */

jQuery.JsonUtil = jQuery.ju = {
  /**
   * 从JSON数组找到相应Key与值相等的项
   * 
   * @param jsonAry
   * @param key
   * @param val
   * @return
   */
  findByKeyValue: function (jsonAry, key, val) {
    for (var i = 0, l = jsonAry.length; i < l; i++) {
      if (jsonAry[i][key] == val) {
        return jsonAry[i];
      }
    }
  },
  /**
   * 从二维Json数组中找到相应key值的数据项
   * 
   * @param jsonAry
   * @param key
   * @param val
   * @return
   */
  findJaryByKeyValue: function (jsonAry, key, val) {
    for (var i = 0, l = jsonAry.length; i < l; i++) {
      if (this.findByKeyValue(jsonAry[i], "value", val) != null) {
        return jsonAry[i];
      }
    }
  },
  /**
   * 从二维Json数组中找到相应key值的数据项
   * 
   * @param jsonAry
   * @param key
   * @param val
   * @return 
   */
  find2JaryByKeyValue: function (jsonAry, key, val) {
    var retuAry = [];
    for (var i = 0, l = jsonAry.length; i < l; i++) {
      if (this.findByKeyValue(jsonAry[i], key, val) != null) {
        retuAry.push(jsonAry[i]);
      }
    }
    return retuAry;
  },

  /**
   * 根据字段名获取数据唯一值列表
   * 
   * @param recdsJa
   *            JSONArray
   * @param fieldName
   *            String
   * @return
   */
  getDistinctValues: function (recdsJa, fieldName) {
    var retuList = [];
    $.each(recdsJa, function () {
      var value = this[fieldName];
      if ((typeof value == "string" && value.trim()) &&
        retuList.indexOf(value) == -1) {
        retuList.push(value);
      }
    })
    return retuList;
  },
  /**
   * 根据字段名获取JSONArray数据集合 返回 String[], ["v1","v2",..]
   * 
   * @param {}
   *            recdsJa JSONArray 记录集数组
   * @param {}
   *            fieldName String 字段名
   */
  getJaFieldValues: function (recdsJa, fieldName) {
    var retuList = [];
    $.each(recdsJa, function () {
      retuList.push(this[fieldName]);
    })
    return retuList;
  },
  /**
   * 根据JSON对象某key值升序或降序插入
   * 
   * @param {}
   *            arrayJa 预插入的数组
   * @param {}
   *            instObj 插入对象
   * @param {}
   *            keyFieldName 排序字段名
   * @param {}
   *            type 排序方向 asc 升序，desc 降序
   */
  instObjToArrayByKeyOrder: function (arrayJa, instObj, keyFieldName, type) {
    arrayJa = arrayJa || [];
    type = type || "asc";
    var isAdd = false;
    var v1 = instObj[keyFieldName];
    if (arrayJa.length > 0) {
      $.each(arrayJa, function (i) {
        var v2 = this[keyFieldName] || 0;
        if (type == "asc") {
          if (v1 < v2) {
            arrayJa.splice(i, 0, instObj);
            isAdd = true;
            return false;
          }
        } else if (type == "desc") {
          if (v1 > v2) {
            arrayJa.splice(i, 0, instObj);
            isAdd = true;
            return false;
          }
        }
      })
    }
    if (!isAdd) {
      arrayJa.push(instObj);
    }
    return arrayJa;
  }
};

function jsonUtil_findByKeyValue(jsonAry, key, val) {
  for (var i = 0, l = jsonAry.length; i < l; i++) {
    if (jsonAry[i][key] == val) {
      return jsonAry[i];
    }
  }
}

function jsonUtil_findJaryByKeyValue(jsonAry, key, val) {
  for (var i = 0, l = jsonAry.length; i < l; i++) {
    if (jsonUtil_findByKeyValue(jsonAry[i], "value", val) != null) {
      return jsonAry[i];
    }
  }
}
