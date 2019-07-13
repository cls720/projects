import request from '@/utils/query/request'

export function queryLogService(param, pageIndex, pageSize) {
  let path = "log-service"
  if (param.groupBy === "requestHour") {
    path = "log-service-hour"
  } else if (param.groupBy === "requestDay") {
    path = "log-service-day"
  } else if (param.groupBy === "requestWeek") {
    path = "log-service-week"
  } else if (param.groupBy === "requestDate") {
    path = "log-service-date"
  } else if (param.groupBy === "serviceGroupName") {
    path = "log-service-group"
  }else if (param.groupBy === "resServiceCount") {
    path = "res-service-count"
  }
  

  return request(param.where, path, pageIndex, pageSize);
}


export function queryErrorService(param) {
  let modelFile="ycrz"
  return request(param,modelFile)
}