import request from '@/utils/query/request'

export function queryUser(param, pageIndex, pageSize) {
  let modelFile = "query-user"
  return request(param, modelFile, pageIndex, pageSize);  
}

export function userInfo(param, pageIndex, pageSize) {
  let modelFile = "user-count"
  return request(param, modelFile, pageIndex, pageSize);
  // return request({
  //   url: '/user-info/query',
  //   method: 'post'
  // })
}

export function newUser(param, pageIndex, pageSize) {
  let modelFile = "new-user"
  return request(param, modelFile, pageIndex, pageSize);
}

export function userTypeCount(param, pageIndex, pageSize) {
  let modelFile = "user-type-count"
  return request(param, modelFile, pageIndex, pageSize);  
}
