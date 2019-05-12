import request from '@/utils/request'

export function logLogin(data) {
  return request({
    url: '/user/log-login', 
    method: 'post'
  })
}