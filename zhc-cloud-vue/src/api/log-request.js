import request from '@/utils/request'

export function logRequest(data) {
  return request({
    url: '/app/log-request', 
    method: 'post'
  })
}