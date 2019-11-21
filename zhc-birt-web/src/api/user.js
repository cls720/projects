import request from '@/utils/request'
import SYSCONST from "@/utils/sysconst"

export function login(data) {
  let reqData = {
    __userName: data.username,
    __password: data.password
  }
  return request({
    url: '/auth/'+SYSCONST.PROJECT_NAME+'/login/login-check',
    method: 'post',
    data: reqData
  })
}

export function login1(data) {
  return request({
    url: '/user/login1',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return new Promise((resolve, reject) => {
    let result = {
      data: {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin',
        userid:'admin'
      }
    }
    resolve(result)
  })


  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(token) {
  return request({
    url: '/auth/'+SYSCONST.PROJECT_NAME+'/logout',
    method: 'get',
    params:{
      __token:token
    }
  })
}
