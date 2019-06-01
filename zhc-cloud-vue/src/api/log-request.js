import request from '@/utils/request'

export function logRequest(data) {
  return request({
    url: '/app/log-request',
    method: 'post'
  })
}

export function queryLogRequest(data) {  
  let path = "/app/log-request"
  if (data.groupBy === "requestHour") {
    path += "/hg"
  } else if (data.groupBy === "requestWeek") {
    path += "/wg"
  } else if (data.groupBy === "requestDay") {
    path += "/mg"
  }

  return request({
    url: path,
    method: 'post'
  })
}
