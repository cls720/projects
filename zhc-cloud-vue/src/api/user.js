import request from '@/utils/request'

export function login(data) {
  let reqData ={
    __userName:data.username,
    __password:data.password
  }
  return request({
    url: '/login/login-check',
    method: 'post',
    data:reqData
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
