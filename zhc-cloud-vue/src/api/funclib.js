import request from '@/utils/request'
import request2 from '@/utils/query/request'
import SYSCONST from "@/utils/sysconst"

export function funclibFiles(fileType) {
  return request({
    url: '/source/funclib/' + fileType + '/files',
    method: 'get'
  })
}

export function funclibMethods(data) {
  return request({
    url: '/source/funclib/' + data.type + '/methods',
    method: 'post',
    data: data
  })
}

export function queryFunclib(param, pageIndex, pageSize) {
  let modelFile = "funclib-query"
  return request2(param, modelFile, pageIndex, pageSize);
}

export function queryFunclibClass(param, pageIndex, pageSize) {
  let modelFile = "funclib-query-class"
  return request2(param, modelFile, pageIndex, pageSize);
}
