import request from '@/utils/request'

export function loginLog(data) {
  return request({
    url: '/user/loginlog',
    method: 'get'

  })
}

