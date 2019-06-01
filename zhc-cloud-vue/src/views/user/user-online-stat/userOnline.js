const fields = {
  userProvince: {
    field: "userProvince",
    title: "省份",
    width: 200,
  },
  userCity: {
    field: "userCity",
    title: "城市",
    width: 200
  },
  userType: {
    field: "userType",
    title: "用户类型",
    width: 150,
  },
  userXm: {
    field: "userXm",
    title: "姓名",
    width: 150,
  },
  loginCount: {
    field: "loginCount",
    title: "登录次数",
    width: 120,
  },
  onLineHour: {
    field: "onLineHour",
    title: "在线小时",
    width: 120
  }
}

function onLineHourFormatter(rowData, rowIndex, pagingIndex, col) {
  const val = col.value;
  if (!col.type) {
    if (val <= 2) {
      return (
        '<span style="color:red;font-weight: bold;">' +
        val +
        "</span>"
      );
    } else if (val >= 4) {
      return (
        '<span style="color:blue;font-weight: bold;">' +
        val +
        "</span>"
      );
    }
  }
  return val;
}

const dataFields = [
  fields.loginCount,
  {
    ...fields.onLineHour,
    ...{
      formatter: onLineHourFormatter
    }
  }
]

const policies = [{
  groupBy: "userProvince,userCity",
  groupByDesc: "省份,城市",
  rowGroupFields: [
    fields.userProvince,
    fields.userCity
  ],
  colGroupFields: [],
  dataFields: dataFields
}, {
  groupBy: "userProvince,userCity,userType",
  groupByDesc: "省份,城市,用户类型",
  rowGroupFields: [
    fields.userProvince,
    fields.userCity,
    fields.userType
  ],
  colGroupFields: [],
  dataFields: dataFields
}, {
  groupBy: "userProvince,userCity,userXm",
  groupByDesc: "省份,城市,姓名",
  rowGroupFields: [
    fields.userProvince,
    fields.userCity,
    fields.userXm
  ],
  colGroupFields: [],
  dataFields: dataFields
}, {
  groupBy: "userXm",
  groupByDesc: "姓名",
  rowGroupFields: [
    fields.userXm
  ],
  colGroupFields: [],
  dataFields: dataFields
}, {
  groupBy: "userType,userXm",
  groupByDesc: "用户类型,姓名",
  rowGroupFields: [
    fields.userType,
    fields.userXm
  ],
  colGroupFields: [],
  dataFields: dataFields
}]

export function getPolicies() {
  return policies
}

export function getPolicyByIndex(index) {
  debugger
  let policyItem = policies[index];
  if (policyItem) {
    for (var i = 0, l = policyItem.rowGroupFields.length; i < l; i++) {
      let rgi = policyItem.rowGroupFields[i];
      rgi.isFrozen = true;
      rgi.isFold = true && (i < l - 1);
      rgi.isFilter = true;
      rgi.filterMultiple = true;
    }
  }
  return policyItem
}
