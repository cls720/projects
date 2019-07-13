// import request from '@/utils/request'
import request from '@/utils/query/request'

// export function logLogin(data) {
//   return request({
//     url: '/log-login/query',
//     method: 'post'
//   })
// }

export function logLogin(param, pageIndex, pageSize) {
  let modelFile = "log-login"
  return request(param, modelFile, pageIndex, pageSize);
}

export function loginQuery(param, pageIndex, pageSize) {
  let modelFile = "login-query"
  return request(param, modelFile, pageIndex, pageSize)
}

// export function inLine(lastSeconds) {  
//   return request({
//     url: '/log-login/in-line',
//     method: 'get',
//     params: {
//       lastSeconds
//     }
//   })
// }

export function onLine(param, pageIndex, pageSize) {
  let modelFile = "on-line"
  return request(param, modelFile, pageIndex, pageSize);
}

export function inLine(param, pageIndex, pageSize) {
  let modelFile = "in-line"
  return request(param, modelFile, pageIndex, pageSize);
}

// export function outLine(lastSeconds) {
//   return request({
//     url: '/log-login/out-line',
//     method: 'get',
//     params: {
//       lastSeconds
//     }
//   })
// }

export function outLine(param, pageIndex, pageSize) {
  let modelFile = "out-line"
  return request(param, modelFile, pageIndex, pageSize);
}

// import request from '@/utils/query/request'

// export function logRequest(param, pageIndex, pageSize) {
//   let modelFile = "log-login"
//   return request(param, modelFile, pageIndex, pageSize);  
// }

export function queryLogLogin(param, pageIndex, pageSize) {
  let path = "log-login1"
  if (param.groupBy === "loginHour") {
    path = "log-login-hour"
  } else if (param.groupBy === "loginDay") {
    path = "log-login-day"
  } else if (param.groupBy === "loginWeek") {
    path = "log-login-week"
  } else if (param.groupBy === "loginDate") {
    path = "log-login-date"
  }
  return request(param.where, path, pageIndex, pageSize);
}
