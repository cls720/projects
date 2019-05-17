import request from '@/utils/request'

export function logLogin(data) {
  return request({
    url: '/log-login/query',
    method: 'post'
  })
}

export function inLine(lastSeconds) {  
  return request({
    url: '/log-login/in-line',
    method: 'get',
    params: {
      lastSeconds
    }
  })
}

export function outLine(lastSeconds) {
  return request({
    url: '/log-login/out-line',
    method: 'get',
    params: {
      lastSeconds
    }
  })
}
